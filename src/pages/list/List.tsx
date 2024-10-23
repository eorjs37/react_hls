import ListItem from '../../components/common/List/ListItem'
import CreateUser from '../../components/Create/CreateUser'
function List() {
  const list = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ]

  const create = () => {}
  const change = () => {}

  return (
    <div>
      <CreateUser username={''} email={''} onCreate={create} onChange={change} />
      <ul>
        {list.map(item => {
          if (item.id < 3) {
            return <ListItem key={item.id} item={item} />
          }
          return null
        })}
      </ul>
    </div>
  )
}

export default List
