import { useMemo, useState } from 'react'

function Memo() {
  const [val1, setVal1] = useState(0)
  const [val2, setVal2] = useState(0)
  const addVal1 = () => {
    setVal1(prev => prev + 1)
  }
  const addVal2 = () => {
    setVal2(prev => prev + 1)
  }

  const computedVal = val1 * val1
  console.log('computedVal : ', computedVal)
  const computedVal2 = useMemo(() => {
    console.log('computedVal2 : ', val1 * val1)

    return val1 * val1
  }, [val1])
  return (
    <div>
      <h1>{val1}</h1>
      <h1>{val2}</h1>
      <h1>{computedVal}</h1>
      <h1>{computedVal2}</h1>
      <button onClick={addVal1}>{'Val1더하기'}</button>
      <button onClick={addVal2}>{'Val2더하기'}</button>
    </div>
  )
}

export default Memo
