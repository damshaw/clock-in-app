import React, { useState } from 'react';
import firebase from 'firebase/app';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/img/your-smile-logo.png';
import Person from './Person';
import Logger from './Logger';
import { useToggle } from './hooks';
import StaffData from './data/staff.json';

// TODO:  hook use google sheets
const Hello = () => {
  console.log(process.env.REACT_APP_ID);
  const [personName, setPersonName] = useState('');
  const [isToggleWork, setToggleWork, toggleWork] = useToggle(false);
  const [personStatus, setPersonStatus] = useState('');
  const [isToggleBreak, setToggleBreak, toggleBreak] = useToggle(false);

  // !isToggleWork === false && setToggleBreak(false);
  const staffNames = StaffData.map((person) => (
    <Person setPersonName={setPersonName} person={person} />
  ));

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Clock System</h1>
      {personName === '' && (
        <>
          <h2>Select your name</h2>
          <div className="names">{staffNames}</div>
        </>
      )}

      {personName !== '' && (
        <div className="logger">
          <h2>{`Welcome ${personName}`}</h2>
          <div className="names">
            <button
              type="button"
              className={`xworking-${isToggleWork}`}
              onClick={toggleWork}
            >
              <span role="img" aria-label="start-finish-button"></span>
              {!isToggleWork
                ? !isToggleBreak
                  ? 'On Duty'
                  : 'On Break'
                : 'Start Shift'}
            </button>
            {!isToggleWork && (
              <>
                <button
                  type="button"
                  className={`xworking-${!isToggleBreak}`}
                  onClick={toggleBreak}
                >
                  <span role="img" aria-label="start-finish-button"></span>
                  {isToggleBreak ? 'Finish Break' : 'Start Break'}
                </button>

                <button
                  type="button"
                  className={`xworking-${isToggleWork}`}
                  onClick={toggleWork}
                >
                  <span role="img" aria-label="start-finish-button"></span>
                  {'End Shift'}
                </button>
              </>
            )}
          </div>

          <button
            type="button"
            className={''}
            onClick={() => setPersonName('')}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
