import React from 'react'
import { user } from '../classes/user'

type Props = {
  user: user
}

export default function Home_UpdateForm({ user }: Props) {
  return (
    <div>
      <div>
        {user.userName}
      </div>
    </div>
  )
}
