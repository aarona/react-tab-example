import React from 'react';
import Tabs, { Tab } from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs activeTab="Tab 2">
        <Tab label="Tab 1">
          Tab 1 Content:
          <div><input value="Some text" /></div>
        </Tab>
        <Tab label="Tab 2">
          Tab 2 Content:
          <h1>Big Header!</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Tab>
        <Tab label="Tab 3">
          Tab 3 Content:
          <p><em>Nothing important here</em></p>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
