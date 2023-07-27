import { Dropdown } from "@nextui-org/react";

export default function App() {
  return (
    <Dropdown>
      <Dropdown.Button flat>정렬</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">등번호 순</Dropdown.Item>
        <Dropdown.Item key="copy">알파벳 순</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}