import { useEffect, useState } from 'react'

function Dummy() {
  const [isOnline, setIsOnline] = useState(true)
  const [clickCount, setClickCount] = useState(0)
  const onClickOnline = () => {
    setIsOnline(!isOnline)
  }
  const onClickCount = () => {
    setClickCount(clickCount + 1)
  }

  useEffect(() => {
    console.log(clickCount)
  }, [clickCount])

  return (
    <div>
      <h1>{isOnline ? '✅ 온라인' : '❌ 연결 안 됨'}</h1>
      <h1>{clickCount}</h1>
      <button onClick={onClickOnline}>{'연결버튼'}</button>
      <button onClick={onClickCount}>{'카운트 버튼'}</button>
    </div>
  )
}
export default Dummy
