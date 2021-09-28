import { Form, Select, InputNumber, Switch, Slider, Button, DatePicker } from 'antd'

// Custom DatePicker that uses Day.js instead of Moment.js
// import DatePicker from '../components/DatePicker'

import { SmileFilled } from '@ant-design/icons'

import Link from 'next/link'
import type { NextPage } from 'next'
import { useState } from 'react'
import handler from './api/hello'
import axios from 'axios'

const FormItem = Form.Item
const Option = Select.Option

const content = {
  marginTop: '100px',
}

interface Props {
  name: string
}

const Home: NextPage<Props> = (props) => {
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#">
          <a className="logo mr-0">
            <SmileFilled size={48}/>
          </a>
        </Link>

        <p className="mb-0 mt-3 text-disabled">Welcome to the world ! {props.name} </p>
      </div>
      <div>
        <Form layout="horizontal">
          <FormItem
            label="Input Number"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <InputNumber
              size="large"
              min={1}
              max={10}
              style={{ width: 100 }}
              defaultValue={3}
              name="inputNumber"
            />
          </FormItem>

          <FormItem
            label="Switch"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Switch defaultChecked />
          </FormItem>

          <FormItem
            label="Slider"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Slider defaultValue={70} />
          </FormItem>

          <FormItem
            label="Select"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Select
              size="large"
              defaultValue="lucy"
              style={{ width: 192 }}
            >
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>
                disabled
              </Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select>
          </FormItem>

          <FormItem
            label="DatePicker"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <DatePicker name="startDate" />
          </FormItem>
          <FormItem
            style={{ marginTop: 48 }}
            wrapperCol={{ span: 8, offset: 8 }}
          >
            <Button size="large" type="primary" htmlType="submit">
              OK
            </Button>
            <Button size="large" style={{ marginLeft: 8 }}>
              Cancel
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios("http://localhost:3000/api/hello");
  return {
    props: {
      name: data.name
    }
  };
};

export default Home