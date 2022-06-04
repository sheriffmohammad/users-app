import React, { useEffect, useRef, useState } from 'react'
import { useQueryClient } from 'react-query';
import { user } from '../classes/user'
import { useAddUserData, useEditUserData } from '../helpers/httpHelper';
import { useTranslate } from '../translate';

type Props = {
  user: user
}

export default function Home_UpdateForm({ user }: Props) {

  const i18n = useTranslate();
  const { t } = i18n;

  // React query client

  const queryClient = useQueryClient();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const firstRender = useRef(true);


  const { mutate: editUser, data, isLoading } = useEditUserData();

  // Get the users data once the component is rendered

  useEffect(() => {
    setUserName(user.userName);
    setPassword(user.password);
  }, [user]);

  const edit = (e: any) => {

    // Prevent page reloading

    e.preventDefault();

    const newUser: user = {
      id: user.id,
      userName: userName,
      password: password
    }

    // Use the api to add the user object

    editUser(newUser, {

      // If the user is added successfully

      onSuccess: () => {

        // Store user data in local storage

        queryClient.invalidateQueries('users');
        setUserName('');
        setPassword('');
      }

    });
  }

  return (
    <div>
      <div className="">

        {/* Registration form */}
        <div className="col-1">
          <h2>{t('Application.editing')} {user.userName}</h2>

          <form id='form' className='flex flex-col'>

            {/* Username */}
            <label htmlFor='username'>{t('Application.userName')}</label>
            <input name='username' value={userName} onChange={(e) => setUserName(e.target.value)} type="text"/>

            {/* Password */}
            <label htmlFor='password'>{t('Application.password')}</label>
            <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>

            {/* Register button */}
            <button type='submit' disabled={isLoading} onClick={edit} className='btn'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
