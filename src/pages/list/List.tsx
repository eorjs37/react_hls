import React, { ChangeEvent, useMemo, useRef, useCallback, useReducer } from 'react'
import ListItem from '../../components/common/List/ListItem'
import CreateUser from '../../components/Create/CreateUser'
import type { ACTION, Item, STATE } from '../../interface/List.interface'
import useInputs from '../../hooks/useInputs'
function countActiveUsers(users: Item[] = []) {
  console.log('활성자 수를 세는중')
  return users.filter(user => user.active).length
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
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
  ],
}

function reducer(state: STATE, action: ACTION) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      if (action.name && action.value) {
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.name]: action.value,
          },
        }
      } else {
        return state
      }

    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: action.user ? state.users.concat(action.user) : state.users,
      }
    case 'TOGGLE_USER':
      if (action.id) {
        return {
          ...state,
          users: state.users.map(user => (user.id === action.id ? { ...user, active: !user.active } : user)),
        }
      } else {
        return state
      }
    case 'REMOVE_USER':
      if (action.id) {
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id),
        }
      } else {
        return state
      }
    default:
      return state
  }

  return state
}

function List() {
  const [{username, email},change,reset] = useInputs({
    username:'',
    email:''
  })
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const { users } = state
  const nextId = useRef(4)
  const create = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
        active: false,
      },
    })
    nextId.current += 1
    }, [username, email])

  const remove = useCallback((id: number) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    })
  }, [])

  const toggle = useCallback((id: number) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    })
  }, [])
  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <div>
      <CreateUser username={username} email={email} onCreate={create} onChange={change} />
      <ul>
        {state.users.map(item => {
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
