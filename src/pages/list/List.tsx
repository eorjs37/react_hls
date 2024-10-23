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
  return (
    <ul>
      {list.map((item) => {
        if (item.id < 3) {
          return (
            <h1 key={item.id}>
              {item.id}
              {'/'}
              {item.username}
              {'/'}
              {item.email}
            </h1>
          )
        }
        return null
      })}
    </ul>
  )
}

export default List
