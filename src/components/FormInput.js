import React from "react";
import { Form, Select, Button } from "antd";

const { Option } = Select;

function FormInput() {
  const onFinish = values => {
    console.log("Success:", values);
  };
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      layout="inline"
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Region"
        name="region"
        rules={[
          {
            required: true,
            message: "Select Region!"
          }
        ]}
      >
        <Select placeholder="Select a region" allowClear>
          <Option value="unitedStates">United States</Option>
          <Option value="india">India</Option>
          <Option value="unitedKingdom">United Kingdom</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormInput;
