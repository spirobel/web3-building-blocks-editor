import React from 'react'
import { Menu } from 'antd'

interface Props {
  children: any
}
export function MenuWrapper({ children }: Props) {
  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
      children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
  ]

  return (
    <div className="grid place-items-center mt-5 space-y-4">
      <div>
        <Menu items={items} mode="horizontal" />
      </div>
      <div>{children} </div>
    </div>
  )
}
