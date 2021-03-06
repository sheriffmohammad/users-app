import React, { useEffect, useRef, useState } from 'react'
import { useQueryClient } from 'react-query';
import { user } from '../shared/classes/user'
import { useAddUserData, useEditUserData } from '../shared/helpers/httpHelper';
import { useTranslate } from '../translation';

type Props = {
  user: user
}

export default function Home_UpdateForm({ user }: Props) {

  // Translation

  const i18n = useTranslate();
  const { t } = i18n;

  // React query client

  const queryClient = useQueryClient();

  // Component states

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({ errors: '' });

  // Use react-query on editing a user

  const { mutate: editUser, isLoading } = useEditUserData();

  // Check if input is valid

  const isValidInput = () => {

    // If the username or password are empty

    if (!userName.trim() || !password.trim()) {
      return false;
    }
    else
      return true;
  }

  // Get the user data once the component is rendered

  useEffect(() => {
    setUserName(user.userName);
    setPassword(user.password);
  }, [user]);

  const edit = (e: any) => {

    // Prevent page reloading

    e.preventDefault();

    // If the input is valid

    if (isValidInput()) {

      // Remove the validation error

      setFormErrors({ errors: '' })

      // Create a user object

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

    // Else if the input is invalid

    else {

      // Show all fields are required error

      setFormErrors({ errors: t('Application.required') })
    }

  }

  return (
    <div>
      <div>

        {/* Registration form */}
        <div className="col-1">

          {/* Form title */}
          <h2>{t('Application.editing')} {user.userName}</h2>

          <form id='form' className='flex flex-col'>

            {/* Username */}
            <label htmlFor='username'>{t('Application.userName')}</label>
            <input name='username' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />

            {/* Password */}
            <label htmlFor='password'>{t('Application.password')}</label>
            <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

            {/* Errors label */}
            <label className='error-label'>{formErrors.errors}</label>

            {/* Register button */}
            <button type='submit' disabled={isLoading} onClick={edit} className='btn'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
