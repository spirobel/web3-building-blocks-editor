import React from 'react'
import { Menu } from 'antd'
import { Link, useMatch } from '@tanstack/react-location'

interface Props {
  children: any
}
export function MenuWrapper({ children }: Props) {
  const match = useMatch()
  const items = [
    { label: <Link to="/">pages</Link>, key: '/' }, // remember to pass the key prop
    { label: <Link to="/categories">categories</Link>, key: '/categories' }, // which is required
  ]
  const selectedKey = match.route.path || '/'
  return (
    <div className="grid place-items-center mt-5 space-y-4">
      <div>
        <Menu items={items} mode="horizontal" selectedKeys={[selectedKey]} />
      </div>
      <div>{children} </div>
    </div>
  )
}
