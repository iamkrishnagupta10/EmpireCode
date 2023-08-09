import { Menu } from 'antd';

export default function Header() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Products</Menu.Item>
      <Menu.Item key="4">Contact</Menu.Item>
    </Menu>
  );
}
