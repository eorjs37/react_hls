import { UserItem } from '../../interface/User.interface'
type UserProps = {
  user: UserItem
}
function UseItem({ user }: UserProps) {
  return <div>{user.age}</div>
}

export default UseItem
