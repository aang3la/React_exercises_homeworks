import { useState, useEffect } from "react";

export const Users = (props) => {

  //usersToShow: This state variable initially holds the list of users passed as a prop
  const [usersToShow, setUsersToShow] = useState(props.users);
  //value: This state variable initially holds an empty string
  const [value, setValue] = useState("");

  // This function is responsible for handling changes in the input field. 
  // When the input value changes, it updates the value state with the new value and logs the current value to the console.
  let changeValue = (event) => {
    let newValue = event.target.value;
    setValue(newValue);
    console.log(value);
  };

  useEffect(() => {
    if (value) {
      const filteredUsers = usersToShow.filter((user) => {
        return user.name.includes(value) || user.username.includes(value);
      });
      console.log(filteredUsers);
      setUsersToShow(filteredUsers);
    } else {
      setUsersToShow(props.users); // call to api
    }
  }, [value]);

  return (
    //* The component renders a user interface with an input field for filtering users and a list of users based on the filtered or original usersToShow state
    <div>
      <div>
        <h1>Filter here</h1>
        <input placeholder="Filter here" value={value} onChange={changeValue} />
      </div>
      <div>
        {usersToShow.map((user, i) => {
          return (
            <>
              <div key={i}>
                <p> Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};