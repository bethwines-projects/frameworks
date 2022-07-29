import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const TabBar:React.FC = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <p>Hello</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Hello2</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>Hello3</p>
      </Tab>
    </Tabs>
  );
}

export default TabBar;