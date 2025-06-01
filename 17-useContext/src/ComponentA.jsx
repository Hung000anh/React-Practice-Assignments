import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

// Create a context to share the user state
export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("BroCode");


  return (
    <div className="box">
      <h1>Component A</h1>
      <p>{`Hello ${user}`}</p>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
