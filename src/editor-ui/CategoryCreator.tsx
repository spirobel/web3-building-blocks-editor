import React, { useState } from 'react'
import { Card, Form, Input, Button, Row, Tag, Modal } from 'antd'
import { MenuWrapper } from './MenuWrapper'

const { TextArea } = Input

export function CategoryCreator() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Modal
        title="Switch category permissions"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <MenuWrapper>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Form>
            <Card
              title={<Input placeholder="category name" />}
              style={{ width: 300 }}
            >
              <TextArea
                autoSize={{ minRows: 4, maxRows: 4 }}
                showCount
                maxLength={116}
                placeholder="description"
              />

              <div className="mt-8">
                <Tag
                  style={{ float: 'left', cursor: 'pointer' }}
                  onClick={showModal}
                  color="green"
                >
                  public category
                </Tag>
                <Form.Item style={{ marginBottom: 'unset' }}>
                  <Row justify="end">
                    <Button type="primary" htmlType="submit">
                      create!
                    </Button>
                  </Row>
                </Form.Item>
              </div>
            </Card>
          </Form>
        </div>
      </MenuWrapper>
    </>
  )
}
