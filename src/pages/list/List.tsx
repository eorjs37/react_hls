import React, { ChangeEvent, useMemo, useRef, useState, useCallback } from 'react'
import ListItem from '../../components/common/List/ListItem'
import CreateUser from '../../components/Create/CreateUser'
interface Item {
  id: number
  username: string
  email: string
  active: boolean
}
function countActiveUsers(users: Item[] = []) {
  console.log('활성자 수를 세는중')

  return users.filter(user => user.active).length
}

function List() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ])
  const nextId = useRef(4)
  const create = useCallback(() => {
    const user = {
      id: nextId.current,
      username: inputs.username,
      email: inputs.email,
      active: false,
    }
    setInputs({
      username: '',
      email: '',
    })
    setUsers([...users, user])
    nextId.current += 1
  }, [users, inputs.username, inputs.email])
  const change = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setInputs({
        ...inputs,
        [name]: value,
      })
    },
    [inputs],
  )

  const remove = useCallback(
    (id: number) => {
      setUsers(users.filter(user => user.id !== id))
    },
    [users],
  )

  const toggle = useCallback(
    (id: number) => {
      setUsers(users.map(user => (user.id === id ? { ...user, active: !user.active } : user)))
    },
    [users],
  )
  const count = useMemo(() => countActiveUsers(users), [users])
  return (
    <div>
      <CreateUser username={inputs.username} email={inputs.email} onCreate={create} onChange={change} />
      <ul>
        {users.map(item => {
          return <ListItem key={item.id} item={item} onRemove={remove} onToggle={toggle} />
        })}
      </ul>
      <div>
        {'활성자의 수 : '}
        {count}
      </div>
    </div>
  )
}

export default React.memo(List)
