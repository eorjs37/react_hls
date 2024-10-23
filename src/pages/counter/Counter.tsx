import { ChangeEvent, useState } from 'react'

function Counter() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')
  const [person, setPerson] = useState({
    name: '',
    age: 0,
  })
  const { name, age } = person

  const onIncrease = () => {
    setNumber(number + 1)
  }

  const onDecrease = () => {
    setNumber(number - 1)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setText(e.target.value)
    }
  }

  const onReset = () => {
    setText('')
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
      <input type={'text'} value={text} onChange={onChange} />
      <p>{text}</p>

      <div></div>
      <input type={'text'} value={name} onChange={onChangePersonName} />
      <input type={'number'} value={age} onChange={onChangePersonAge} />
    </div>
  )
}
export default Counter
