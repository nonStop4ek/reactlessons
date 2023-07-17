// import './App.css';
// import {useEffect, useState} from "react";
// import Users from "./components/users/Users";
//
// function App() {
//
//   const [users, setUsers] = useState([]);
//
//      useEffect(() => {
//          fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => setUsers(users));
//      }, [])
//
//      return (
//          <div>
//              <Users users={users}/>
//          </div>
//     );
// }
//
// export default App;
import React, {useState} from 'react';
import {UserContainer} from "./components/UserConatainer/UserContainer";
import {Posts} from "./components/posts/posts";

const App = () => {
    const [userId,SetUserId] = useState(null);
    return (
        <div>
            <UserContainer SetUserId={SetUserId}/>
            <hr/>
            {userId&&<Posts userId={userId}/>}
        </div>
    );
};

export default App;