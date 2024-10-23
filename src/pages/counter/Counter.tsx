import { ChangeEvent, useReducer, useRef, useState } from 'react'
interface ACTION {
  type: string
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function reducer(state: any, action: ACTION) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      break
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0)
  const [text, setText] = useState('')
  const [person, setPerson] = useState({
    name: '',
    age: 0,
  })
  const nameInput = useRef<HTMLInputElement>(null)
  const { name, age } = person

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setText(e.target.value)
    }
  }

  const onReset = () => {
    setText('')
    nameInput.current?.focus()
  }

  const onChangePersonName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setPerson({
        ...person,
        name: e.target.value,
      })
    }
  }

  const onChangePersonAge = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setPerson({
        ...person,
        age: parseInt(e.target.value),
      })
    }
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>{'+'}</button>
      <button onClick={onDecrease}>{'-'}</button>
      <div></div>
      <button onClick={onReset}>{'초기화'}</button>
      <div></div>
      <input type={'text'} value={text} onChange={onChange} ref={nameInput} />
      <p>{text}</p>

      <div></div>
      <input type={'text'} value={name} onChange={onChangePersonName} />
      <input type={'number'} value={age} onChange={onChangePersonAge} />
    </div>
  )
}
export default Counter
