import "./App.css";
import { useState } from "react";
import Profile from "./components/Profile";

const olivia = {
  name: "olivia",
  course: "AlgoExpert",
};
const shane = {
  name: "shane",
  course: "frontendExpert",
};

function App() {
  const [user, setUser] = useState(olivia);

  const toggleUser = () => {
    if (user === olivia) {
      setUser(shane);
    } else {
      setUser(olivia);
    }
  };

  return (
    <div>
      <Profile user={user} />
      <button onClick={toggleUser}>Toggle User</button>
    </div>
  );
}

export default App;
