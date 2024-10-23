import React from 'react'
export interface Item {
  id: number
  username: string
  email: string
  active: boolean
}

type ItemProps = {
  item: Item
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}
function ListItem({ item, onRemove, onToggle }: ItemProps) {
  return (
    <p>
      <b
        style={{
          fontSize: `30px`,
          fontWeight: 700,
          cursor: 'pointer',
          color: item.active ? 'green' : 'blue',
        }}
        onClick={() => onToggle(item.id)}
      >
        {item.id}
      </b>
      {'/'}
      {item.username}
      {'/'}
      {item.email}
      <button onClick={() => onRemove(item.id)}>{'삭제'}</button>
    </p>
  )
}

export default React.memo(ListItem)
