import "./App.css";
import { useState } from "react";

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
      setUser(olivia);
    } else {
      setUser(shane);
    }
  };

  return <div>Hello World</div>;
}

export default App;
