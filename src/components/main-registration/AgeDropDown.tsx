import React from 'react';

interface AgeDropDownProps {
  age: number | null;
  setAge: React.Dispatch<React.SetStateAction<number | null>>;
}

const AgeDropDown: React.FC<AgeDropDownProps> = ({ age, setAge }) => {
  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAge = parseInt(event.target.value, 10);
    setAge(selectedAge);
  };

  return (
    <div>
      <select className='ageSelect' id="ageSelect" onChange={handleAgeChange} value={age || ''}>
        <option value="">Select age</option>
        {Array.from({ length: 83 }, (_, index) => (
          <option className='number' key={index} value={18 + index}>
            {18 + index} 
          </option>
        ))}
      </select>
    </div>
  );
};

export default AgeDropDown;
