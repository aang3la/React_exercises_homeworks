import { UserContext } from "../App";

//! This is the old way of using React Context 
export function User() {
    return (
      <div>
        <UserContext.Consumer>
          {(value) => <h1>Hello User {value} from React context!</h1>}
        </UserContext.Consumer>
      </div>
    );
  }