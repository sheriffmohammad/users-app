import React, { useState } from 'react'
import Home_AllUsers from './Home_AllUsers'
import Home_UpdateForm from './Home_UpdateForm'
import { user } from '../shared/classes/user';
import { useTranslate } from '../translation';

export default function Home() {

  // Translation

  const i18n = useTranslate();
  const { t } = i18n;

  // Component states

  const [user, setUser] = useState<user>();

  // Current user data (if any)

  const currentUser = localStorage.getItem('user');


  const editUser = (user: user) => {
    setUser(user);
  };

  return (
    <div style={{ width: '100%', marginTop: '1rem' }}>

      {/* All users component */}
      {currentUser &&
        <Home_AllUsers onEditUserHandler={(user => editUser(user))}></Home_AllUsers>
      }

      {/* Edit user component */}
      {user && currentUser &&
        <Home_UpdateForm user={user}></Home_UpdateForm>
      }

      {/* Click on a user to start editing */}
      {!user && currentUser &&
        <div style={{ textAlign: 'center' }}>
          {t('Application.startEditing')}
        </div>}

      {/* User not logged in */}
      {!currentUser &&
        <div style={{ textAlign: 'center' }}>
          {t('Application.notLoggedIn')}
        </div>}
    </div>
  )
}
