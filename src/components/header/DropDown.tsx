import React, { useState } from 'react';

interface DropDownProps {
  options: { label: string; flag: string }[];
  defaultOption: string;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<string>(props.defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const selectedOptionObject = props.options.find((option) => option.label === selectedOption);
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOptionObject && (
          <img src={selectedOptionObject.flag} alt={selectedOptionObject.label} className="flag-icon" />
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
