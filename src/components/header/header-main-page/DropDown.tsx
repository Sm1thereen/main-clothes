import React, { useState } from 'react';

import EnglishFlag from '../../../assets/main-page/flag/English.svg';
import PolishFlag from '../../../assets/main-page/flag/Polish.svg';

interface DropDownProps {
  options: { label: string; flag: string }[];
  defaultOption: string;
  onSelect: (selectedOption: string) => void;
  isOpen: boolean;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    props.onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {props.defaultOption && (
          <img src={props.defaultOption === 'English' ? EnglishFlag : PolishFlag} alt="" className="flag-icon" />
        )}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {props.options.map((option) => (
            <li key={option.label} onClick={() => handleOptionClick(option.label)}>
              <img src={option.flag} alt={option.label} className="flag-icon" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
