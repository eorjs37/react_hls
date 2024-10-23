import React from 'react'

interface CreateUserProps {
  username: string
  email: string
  onCreate: () => void
  onChange: () => void
}

function CreateUser({ username = '', email = '', onCreate = () => {}, onChange = () => {} }: CreateUserProps) {
  console.log(onCreate, onChange)

  return (
    <div>
      <input type={'text'} name={'username'} placeholder={'계정명'} value={username} />
      <input type={'text'} name={'email'} placeholder={'이메일'} value={email} />
    </div>
  )
}
export default CreateUser
