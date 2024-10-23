export interface Item {
  id: number
  username: string
  email: string
}

type ItemProps = {
  item: Item
}
function ListItem({ item }: ItemProps) {
  return (
    <p>
      {item.id}
      {'/'}
      {item.username}
      {'/'}
      {item.email}
    </p>
  )
}

export default ListItem
