import type { FC } from 'react'

interface GreetingProps {
  name: string
}

export const Greeting: FC<GreetingProps> = ({ name }) => {
  return <h1 className="text-xl font-bold">Hello, {name}!</h1>
}
