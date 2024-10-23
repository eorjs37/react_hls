import { ChangeEvent, useRef, useState } from 'react'
import ListItem from '../../components/common/List/ListItem'
import CreateUser from '../../components/Create/CreateUser'
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
  const create = () => {
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
  }
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const remove = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const toggle = (id: number) => {
    setUsers(users.map(user => (user.id === id ? { ...user, active: !user.active } : user)))
  }

  return (
    <div>
      <CreateUser username={inputs.username} email={inputs.email} onCreate={create} onChange={change} />
      <ul>
        {users.map(item => {
          return <ListItem key={item.id} item={item} onRemove={remove} onToggle={toggle} />
        })}
      </ul>
    </div>
  )
}

export default List
