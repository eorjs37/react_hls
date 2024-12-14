import { useMemo, useState } from 'react'
import { UserItem } from '../../interface/User.interface'
import * as styles from './user.module.css'
type UserProps = {
  userlist: UserItem[]
}

function UserList({ userlist }: UserProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const filterUserList = useMemo(() => {
    console.log('call userList')

    return userlist
  }, [userlist])

  const changeDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div>
      <button onClick={changeDarkMode}>{'다크'}</button>
      <ul className={isDarkMode ? styles.list + ' ' + styles.dark : styles.list}>
        {filterUserList.map(userItem => (
          <li key={userItem.name}>
            <span>{userItem.name}</span>
            {'/'}
            <span>{userItem.age}</span>
            {'/'}
            <span>{userItem.country}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
