import { useState } from 'react'

function Dummy() {
  const [isOnline, setIsOnline] = useState(true)

  const onClickOnline = () => {
    setIsOnline(!isOnline)
  }
  return (
    <div>
      <h1>{isOnline ? '✅ 온라인' : '❌ 연결 안 됨'}</h1>
      <button onClick={onClickOnline}>{'연결버튼'}</button>
    </div>
  )
}
export default Dummy
