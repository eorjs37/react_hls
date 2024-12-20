/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent } from 'react'

interface CreateUserProps {
  username: string
  email: string
  onCreate: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function CreateUser({ username = '', email = '', onCreate = () => {}, onChange = () => {} }: CreateUserProps) {
  return (
    <div>
      <input type={'text'} name={'username'} placeholder={'계정명'} value={username} onChange={onChange} />
      <input type={'text'} name={'email'} placeholder={'이메일'} value={email} onChange={onChange} />
      <button onClick={onCreate}>{'등록'}</button>
    </div>
  )
}
export default React.memo(CreateUser)
