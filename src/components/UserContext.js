import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
  name: null,
  course: null,
});

const olivia = {
  name: "olivia",
  course: "AlgoExpert",
};
const shane = {
  name: "shane",
  course: "frontendExpert",
};

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(olivia);

  const toggleUser = () => {
    if (user === olivia) {
      setUser(shane);
    } else {
      setUser(olivia);
    }
  };
  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
}
