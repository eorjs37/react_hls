import React, { useContext } from 'react'
import { UserDispatch } from '../../../pages/list/List'
export interface Item {
  id: number
  username: string
  email: string
  active: boolean
}

type ItemProps = {
  item: Item
}
function ListItem({ item }: ItemProps) {
  const dispatch = useContext(UserDispatch)

  return (
    <p>
      <b
        style={{
          fontSize: `30px`,
          fontWeight: 700,
          cursor: 'pointer',
          color: item.active ? 'green' : 'blue',
        }}
        onClick={() => {
          if (dispatch) {
            dispatch({
              type: 'TOGGLE_USER',
              id: item.id,
            })
          }
        }}
      >
        {item.id}
      </b>
      {'/'}
      {item.username}
      {'/'}
      {item.email}
      <button
        onClick={() => {
          if (dispatch) {
            dispatch({
              type: 'REMOVE_USER',
              id: item.id,
            })
          }
        }}
      >
        {'삭제'}
      </button>
    </p>
  )
}

export default React.memo(ListItem)
