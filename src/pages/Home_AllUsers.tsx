import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query';
import { user } from '../shared/classes/user';
import Loader from '../shared/components/Loader';
import { useDeleteUserData, useGetUsersData } from '../shared/helpers/httpHelper';
import './Home.scss'

type Props = {
    onEditUserHandler: (user: user) => void; // Used to change the menu after successful registration
};

export default function Home_AllUsers({ onEditUserHandler }: Props) {

    // Component states

    const [users, setUsers] = useState<user[]>([]);

    // React query hooks

    const { data, isLoading } = useGetUsersData();
    const { mutate: deleteUser } = useDeleteUserData();

    // React query client

    const queryClient = useQueryClient();

    // Get all users data and change the state

    const getData = () => {
        if (data != undefined) {
            setUsers(data.data);
        }
    };

    // On deleting a user

    const onDeleteButtonClick = (id: number) => {

        // Call the api to delete user by id

        deleteUser(id, {

            // After deleting successfully

            onSuccess: () => {

                // Re-fetch users data

                queryClient.invalidateQueries('users');
            }
        });
    };

    // Get the users data once the component is rendered

    useEffect(() => {
        getData();
    });

    return (
        <div className='user-cards-container'>

            {/* Loop on all of the users */}
            {users.map((item: user, index) => (

                <div onClick={() => onEditUserHandler(item)} className='user-card' key={index} >

                    {/* Username icon */}
                    <img className='icon' src="assets/icons/user-name.png" alt="" />

                    {/* Username */}
                    {item.userName}

                    {/* Password icon */}
                    <img className='icon' src="assets/icons/password.png" alt="" />

                    {/* Password */}
                    {item.password}

                    {/* Delete button */}
                    <img onClick={() => onDeleteButtonClick(item.id)} className='icon' src="assets/icons/delete.png" alt="" />
                </div>
            ))
            }

            {/* If data is still loading show loader */}
            {
                isLoading &&
                <Loader message='Loading users...'></Loader>
            }
        </div >
    )
}

