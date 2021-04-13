import React from 'react';
import Tabs, { Tab } from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs activeTab="Tab 2">
        <Tab label="Tab 1">
          <h1>Tab 1 Content</h1>
          <div><input value="Some text" /></div>
        </Tab>
        <Tab label="Tab 2">
          <h1>Tab 2 Content</h1>
          <h2>Sub Header</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Tab>
        <Tab label="Tab 3">
          <h1>Tab 3 Content</h1>
          <p><em>Nothing important here on this tab!</em></p>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
