import React from 'react'
import { Card, Input } from 'antd'
import { MenuWrapper } from './MenuWrapper'

const { TextArea } = Input

export function CategoryCreator() {
  return (
    <MenuWrapper>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title={<Input placeholder="category name" />}
          // extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <TextArea
            autoSize={{ minRows: 4, maxRows: 4 }}
            showCount
            maxLength={116}
            //  style={{ height: 100 }}
            placeholder="description"
          />
        </Card>
      </div>
    </MenuWrapper>
  )
}
