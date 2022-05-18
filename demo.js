import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select, Space } from 'antd';

const keyDownTrigger = () => {
  console.log('按键盘按下触发，而不是鼠标点击触发');
};
const onFocusTrigger = () => {
  console.log('鼠标移过去然后点击，这个时候就会获取焦点');
};
// 这个是鼠标移入触发，移出同理这里就不写了。onMouseLeave
const onMouseEnterTrigger = () => {
  console.log('鼠标移入就会触发');
};
const Status = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Select
      status="error"
      style={{
        width: '100%',
      }}
    />
    <Select
      status="warning"
      style={{
        width: '100%',
      }}
      onFocus={onFocusTrigger}
      // 选中 option，或 input 的 value 变化时，调用此函数
      onChange={keyDownTrigger}
      onInputKeyDown={keyDownTrigger}
      onMouseEnter={onMouseEnterTrigger}
    >
      <Option value="lucy">lucy</Option>
    </Select>
  </Space>
);

export default () => <Status />;
