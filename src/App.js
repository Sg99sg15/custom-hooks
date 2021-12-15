import React from 'react';
import DocTitle1 from './useDocTitile/DocTitle1';
import DocTitle2 from './useDocTitile/DocTitle2';
import './css.css';
import UseCounter1 from './useCounter/UseCounter1';
import UseCounter2 from './useCounter/UseCounter2';
import UserForm from './useInput/UserForm';
import ObjectUseState from './immutable state/ObjectUseState';
import ArrayUseState from './immutable state/ArrayUseState';

function App() {
  return (
    <>
      <div className='container'>
        <h1>Click the button for changing the title of document</h1>
        <DocTitle1 />
        <DocTitle2 />
        <h1>Click the button for Increment, Decrement and Reset</h1>
        <UseCounter1 />
        <UseCounter2 />
        <h1>Fill the Form</h1>
        <UserForm />
        <h1>State Immutablity</h1>
        <ObjectUseState />
        <ArrayUseState />
      </div>
    </>
  );
}

export default App;
