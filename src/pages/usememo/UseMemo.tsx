import { useState } from 'react'
import UserList from '../../components/usememo/UserList'
function UseMemo() {
  const [counter, setCounter] = useState(0)
  const [userList, setUserList] = useState([
    {
      name: 'CH',
      country: 'Ko',
      age: 32,
    },
    {
      name: 'DD',
      country: 'Ko',
      age: 29,
    },
  ])
  const onClickCounter = () => {
    setCounter(counter + 1)
  }
  const addUser = () => {
    const addlist = [...userList, { name: `D${userList.length + 1}`, country: 'Ko', age: 32 }]
    setUserList(addlist)
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onClickCounter}>{'더하기'}</button>
      <button onClick={addUser}>{'유저 추가'}</button>
      <UserList userlist={userList} />
    </div>
  )
}

export default UseMemo
