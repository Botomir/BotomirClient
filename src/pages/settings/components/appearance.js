import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

function Appearance() {
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
    <div>
      <span className="text-xl">Set theme</span>
      <select data-choose-theme="" className="select w-full max-w-xs primary">
        {
        themes.map((theme) => (
          <option value={theme.key} key={theme.key}>
            {theme.label}
          </option>
        ))
      }
      </select>
    </div>
  );
}

export default Appearance;
