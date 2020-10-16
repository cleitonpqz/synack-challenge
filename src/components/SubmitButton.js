import React from 'react';

const SubmitButton = () => {
  const handleClick = () => {
    console.log('search');
  };

  return (
    <div>
      <button className="button" type="submit" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SubmitButton;
