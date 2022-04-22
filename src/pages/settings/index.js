import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

function Settings() {
  useEffect(() => {
    themeChange(false);
  }, []);

  const themes = [
    { key: 'light', label: 'Light' },
    { key: 'autumn', label: 'Autumn' },
    { key: 'winter', label: 'Winter' },
    { key: 'lofi', label: 'LoFi' },
    { key: 'dark', label: 'Dark' },
    { key: 'night', label: 'Night' },
    { key: 'black', label: 'Black' },
    { key: 'dracula', label: 'Dracula' },
    { key: 'aqua', label: 'Aqua' },
    { key: 'synthwave', label: 'Synthwave' },
    { key: 'pastel', label: 'Pastel' },
    { key: 'cupcake', label: 'Cupcake' },
    { key: 'cyberpunk', label: 'Cyberpunk' },
    { key: 'forest', label: 'Forest' },
  ];

  return (
    <div className="flex flex-col space-y-5 w-32">
      <span>Settings</span>
      {
        themes.map((theme) => (
          <button
            type="button"
            data-set-theme={theme.key}
            data-act-class="ACTIVECLASS"
            className="btn"
            key={theme.key}
          >
            {theme.label}
          </button>
        ))
      }
    </div>
  );
}

export default Settings;
