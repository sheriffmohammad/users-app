import React, { useState } from 'react'
import Home_AllUsers from './Home_AllUsers'
import Home_UpdateForm from './Home_UpdateForm'
import { user } from '../classes/user';
import { useTranslate } from '../translate';

export default function Home() {

  const i18n = useTranslate();
  const { t } = i18n;

  const [user, setUser] = useState<user>();

  const editUser = (user: user) => {
    setUser(user);
  };

  return (
    <div style={{ width: '100%', marginTop: '1rem' }}>
      <Home_AllUsers onEditUserHandler={(user => editUser(user))}></Home_AllUsers>
      {user &&
        <Home_UpdateForm user={user}></Home_UpdateForm>
      }
      {!user &&
        <div style={{ textAlign: 'center' }}>
          {t('Application.startEditing')}
        </div>}
    </div>
  )
}
