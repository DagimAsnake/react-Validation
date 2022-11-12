import React, { useState } from 'react';
import UserInput from './component/Users/UserInput';
import UserList from './component/Users/UserList';


function App() {

  const [enteredUserValue, setEnteredUserValue] = useState([])

  const addUserHandler = (enteredUser) => {
    setEnteredUserValue(prevUser => {
      return [...prevUser, enteredUser]
    })
  }

  let content

  if (enteredUserValue.length > 0) {
    content = (
      <UserList users={enteredUserValue} />
    );
  }

  return (
    <div>
      <UserInput addUser={addUserHandler} />
      {content}
    </div>
  );
}

export default App;
