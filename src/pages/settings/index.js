import React, { useState } from 'react';
import Appearance from './components/appearance';

function Settings() {
  const tabs = ['Appearance', 'Account'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col space-y-5 w-32">
      <span className="text-5xl">Settings</span>
      <div className="tabs tabs-boxed">
        <div className="flex flex-row">
          {tabs.map((tab) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <a className={`tab tab-lifted ${tab === activeTab && 'tab-active'}`} key={tab} onClick={() => setActiveTab(tab)}>{tab}</a>
          ))}
        </div>
      </div>
      { activeTab === tabs[0] && <Appearance />}
    </div>
  );
}

export default Settings;
