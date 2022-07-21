import React from 'react'
import { Menu, Layout } from 'antd'

const { Header, Content } = Layout
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
    <Layout>
      <Header>
        <Menu items={items} />
      </Header>
      <Content>{children} </Content>
    </Layout>
  )
}
