import React from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate } from '@tanstack/react-location'
import { LoginRequest, useLoginMutation } from '../entry-point/api'

export default function Login() {
  const [sendLoginRequest] = useLoginMutation()
  const navigate = useNavigate()
  const onFinish = (values: LoginRequest) => {
    sendLoginRequest(values)
      .unwrap()
      .then(() => {
        navigate({ to: '../' })
      })
      .catch((errorInfo) => {
        console.log('Failed:', errorInfo)
      })
  }

  return (
    <div className="grid place-items-center h-screen ">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="login"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
