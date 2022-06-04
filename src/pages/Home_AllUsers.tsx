import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query';
import { user } from '../classes/user';
import Loader from '../components/Loader';
import { useDeleteUserData, useGetUsersData } from '../helpers/httpHelper';
import './Home.scss'

export default function Home_AllUsers() {

    const { data, isSuccess, isLoading } = useGetUsersData();
    const { mutate: deleteUser } = useDeleteUserData();

    const [users, setUsers] = useState<user[]>([]);

    const queryClient = useQueryClient()

    const getData = () => {
        if (data != undefined) {
            setUsers(data.data);
        }
    };

    const onDeleteButtonClick = (id: number) => {
        deleteUser(id, {
            onSuccess: () => {
                queryClient.invalidateQueries('users');
            }
        });
    };

    useEffect(() => {
        // Update the document title using the browser API
        getData();
    });

    return (
        <div className='user-cards-container'>

            {users.map((item, index) => (

                <div className='user-card' key={index}>
                    <img className='icon' src="assets/icons/user-name.png" alt="" />
                    <div>
                        {item.userName}
                    </div>
                    <img className='icon' src="assets/icons/password.png" alt="" />
                    <div>
                        {item.password}
                    </div>

                    <img onClick={() => onDeleteButtonClick(item.id)} className='icon' src="assets/icons/delete.png" alt="" />
                </div>
            ))}
            {isLoading &&
                <Loader message='Loading users...'></Loader>
            }
        </div>
    )
}

