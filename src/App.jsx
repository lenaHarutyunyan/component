import { useState } from "react"

import Button from "./components/customButton/Button"
import Empty from "./components/Empty/Empty"
import Form from "./components/Form/Form"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"
import Modal from "./components/Modal/Modal"
import Section from "./components/sections/Section"
import FormItems from "./components/Form/FormItems"
import DropdownMenu from "./components/DropdownMenu/DropdownMenu"
import CollapsiblePanel from "./components/CollapsiblePanel/CollapsiblePanel"
import Notification from "./components/Notification/Notification"
import Tabs from "./components/Tabs/Tabs"
import Drawer from "./components/Drawer/Drawer"

const items = [
  {
    key: 1,
    label: "example 1",
  },
  {
    key: 2,
    label: "example 2",
  },
  {
    key: 3,
    label: "example 3",
  }
];

const tabsItems = [
  { key: "1", label: "Tab 1", children: "Content 1" },
  { key: "2", label: "Tab 2", children: "Content 2" },
  { key: "3", label: "Tab 3", children: "Content 3" },
];

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [message, setMessage] = useState("Saved!");


  return (
    <div className="bg-gray-900 w-full h-auto text-white flex flex-col gap-5 items-center p-5">
      <h1 className="text-4xl">Custom Components</h1>

      <div className="flex flex-col w-[90%] gap-10">
        {/* кнопка примеры */}
        <Section title="Buttons">
          <div className="flex gap-5">
            <Button size="small" type="primary" variant="dashed">
              small primary border-dashed
            </Button>
            <Button size="middle" type="danger">
              middle danger border-filled
            </Button>
            <Button size="large" type="submit" variant="outlined">
              large submit border-outlined
            </Button>
          </div>
        </Section>

        {/* Пример Loading Spinner*/}
        <Section title="Loading Spinner">
          <LoadingSpinner title="Example with title type 1" size="small" />
          <LoadingSpinner size="middle" color="primary" />
          <LoadingSpinner size="large" color="transparent" />
          <LoadingSpinner size="small" title="type 2" variant="dots" />
          <LoadingSpinner size="middle" title="type 2" variant="dots" />
          <LoadingSpinner size="large" title="type 2" variant="dots" />
        </Section>

        {/* Пример Empty */}
        <Section title="Empty">
          <Empty title="No products" img="EmptyList" size="large" />
          <Empty title="No Photo" img="EmptyGallery" size="middle" />
          <Empty title="No folders" img="EmptyFolder" />
          <Empty title="Empty state" customImg="/Empty-list.jpg" />
        </Section>

        {/* Примеры модалки */}
        <Section title="Modal" >
          <Button type="primary" onClick={() => setModalIsOpen(true)}>Open Modal</Button>
          <Modal modalIsOpen={modalIsOpen} position="bottom" onClose={() => setModalIsOpen(false)}>Delete this item?</Modal>
        </Section>

        {/* Примеры Формы */}
        <Section title="Form Component">
          <Form
            title="Login form"
            onSubmit={(data) => console.log(data)}
          >
            <FormItems name="name" type="text" />
            <FormItems name="surname" type="text" />
            <FormItems name="age" type="number" />
          </Form>
        </Section>

        {/* Пример dropdown menu */}
        <Section title="Dropdown Menu">
          <div className="flex gap-6 flex-wrap">
            <DropdownMenu items={items} position="bottomLeft">
              <Button>bottomLeft</Button>
            </DropdownMenu>
            <DropdownMenu items={items} position="bottomRight">
              <Button>bottomRight</Button>
            </DropdownMenu>
            <DropdownMenu items={items} position="topLeft">
              <Button>topLeft</Button>
            </DropdownMenu>
            <DropdownMenu items={items} position="topRight">
              <Button>topRight</Button>
            </DropdownMenu>
          </div>
        </Section>

        {/* Пример Collapsible Panel  */}
        <Section title="Collapsible Panel">
          <div className="flex flex-col w-[60%]">
            <CollapsiblePanel title="First">
              <p>Lorem ipsum dolor sit amet</p>
            </CollapsiblePanel>

            <CollapsiblePanel title="first paragraph" defaultOpen={true}>
              <p>Lorem ipsum dolor sit amet</p>
            </CollapsiblePanel>

            <CollapsiblePanel title="First paragraph">
              <p>Lorem ipsum dolor sit amet</p>
              <CollapsiblePanel title="Second paragraph">
                <p>Lorem ipsum dolor sit amet</p>
              </CollapsiblePanel>
            </CollapsiblePanel>
          </div>
        </Section>

        {/* Пример Tabs  */}
        <Section title="Tabs">
          <Tabs items={tabsItems} defaultActiveKey="1" />
        </Section>

        {/* Drawer Component */}
        <Section title="Drawer">
          <Drawer open={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}>
            <h2>My Drawer</h2>
            <p>Some text here</p>
          </Drawer>
          <Button onClick={() => setDrawerIsOpen(true)}>Open Drawer</Button>
        </Section>

        {/* Пример Notification Panel  */}
        <Section title="Notification">
          <Button onClick={() => setMessage("Hello!")}>
            Show Notification
          </Button>

          <Notification
            message={message}
            position="topRight"
            duration={2000}
            onClose={() => setMessage(null)}
          />
        </Section>
      </div>
    </div>
  )
}

export default App;
