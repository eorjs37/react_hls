export interface Item {
  id: number
  username: string
  email: string
  active: boolean
}

export interface ACTION {
  type: string
  name?: string
  value?: string
  user?: Item
  id?: number
}

export interface INPUTS {
  username: string
  email: string
}

export interface STATE {
  inputs: INPUTS
  users: Item[]
}
