import React from 'react';
import { useToggle } from './hooks';

const Logger = () => {
  const { isToggled, toggle } = useToggle(false);

  return (
    <div className="Hello">
      <button type="button" className={`toogled-${isToggled}`} onClick={toggle}>
        <span role="img" aria-label="start-finish-button"></span>
        {isToggled ? 'Start' : 'Finsh'}
      </button>
    </div>
  );
};

export default Logger;
