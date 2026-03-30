import { useState } from "react";
import { dropDownItems, tabsItems } from "./components/Constants/Constants";

import Button from "./components/customButton/Button";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Empty from "./components/Empty/Empty";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import FormItem from "./components/Form/FormItem";
import Section from "./components/sections/Section";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu"
import CollapsiblePanel from "./components/CollapsiblePanel/CollapsiblePanel";
import Tabs from "./components/Tabs/Tabs";
import Drawer from "./components/Drawer/Drawer";
import Notification from "./components/Notification/Notification";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [message, setMessage] = useState("Saved!");

  return (
    <div className="bg-gray-900 w-full h-auto text-white flex flex-col gap-5 items-center p-5">
      <h1 className="text-4xl">Custom Components</h1>
      <div className="flex flex-col w-[90%] gap-10">

        {/* Examples of buttons */}
        <Section title="Buttons">
          <div className="flex gap-5">
            <div>
              <Button data-testing="3" abc="2">Testing</Button>
            </div>
            <div>
              <Button size="small" type="primary" variant="dashed">
                small primary border-dashed
              </Button>
            </div>
            <div>
              <Button size="middle" type="danger">
                middle danger border-filled
              </Button>
            </div>
            <div>
              <Button size="large" type="submit" variant="outlined">
                large submit border-outlined
              </Button>
            </div>
          </div>
        </Section>

        {/* Examples of Loading Spinner*/}
        <Section title="Loading Spinner">
          <LoadingSpinner title="Example with title type 1" size="small" />
          <LoadingSpinner size="middle" color="primary" />
          <LoadingSpinner size="large" color="transparent" />
          <LoadingSpinner size="small" title="type 2" variant="dots" />
          <LoadingSpinner size="middle" title="type 2" variant="dots" />
          <LoadingSpinner size="large" title="type 2" variant="dots" />
        </Section>

        {/* Examples of Empty component */}
        <Section title="Empty">
          <Empty title="No products" image="EmptyList" size="large" />
          <Empty title="No Photo" image="EmptyGallery" size="middle" />
          <Empty title="No folders" image="/Empty-Folder.avif" />
          <Empty title="Empty state" customImg="/Empty-list.jpg" />
          <Empty />
        </Section>

        {/* Examples of Modal component */}
        <Section title="Modal">
          <Button type="primary" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal isModalOpen={isModalOpen} size="middle" position="bottom" onClose={() => setIsModalOpen(false)}>
            <span>Delete this item?</span>
            <Button>Yes</Button>
          </Modal>
        </Section>

        {/* Examples of Form */}
        <Section title="Form Component">
          <Form
            title="Login form"
            onSubmit={(data) => console.log(data)}
          >
            <FormItem name="name" type="text" />
            <FormItem name="surname" type="text" />
            <FormItem name="age" type="number" />
          </Form>
        </Section>

        <Section title="Login Form">
          <Form
            title="Login form"
            onSubmit={(data) => console.log(data)}
          >
            <FormItem name="email" type="text" />
            <FormItem name="password" type="password" />
          </Form>
        </Section>

        {/* Examples of dropdown menu */}
        <Section title="Dropdown Menu">
          <div className="flex gap-6 flex-wrap">
            <DropdownMenu items={dropDownItems} position="bottomLeft">
              <Button>bottomLeft</Button>
            </DropdownMenu>
            <DropdownMenu items={dropDownItems} position="bottomRight">
              <Button>bottomRight</Button>
            </DropdownMenu>
            <DropdownMenu items={dropDownItems} position="topLeft" action="click">
              <Button>topLeft</Button>
            </DropdownMenu>
            <DropdownMenu items={dropDownItems} position="topRight" action="click">
              <Button>topRight</Button>
            </DropdownMenu>
          </div>
        </Section>

        {/* Examples of Collapsible Panel  */}
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

        {/* Examples of Tabs  */}
        <Section title="Tabs">
          <Tabs items={tabsItems} defaultActiveKey="1" />
        </Section>

        {/* Examples of Drawer Component */}
        <Section title="Drawer">
          <Drawer open={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}>
            <h2>My Drawer</h2>
            <p>Some text here</p>
          </Drawer>
          <Button onClick={() => setDrawerIsOpen(true)}>Open Drawer</Button>
        </Section>

        {/* Examples of Notification Panel  */}
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
