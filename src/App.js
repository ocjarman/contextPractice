import { useContext } from "react";
import "./App.css";
import Profile from "./components/Profile";
import { UserContext, UserContextProvider } from "./components/UserContext";
//context allows us to use state that is accessible by all components
//useful when you have a 'logged in' user and their info is needed throughout app

export default function App() {
  return (
    <div>
      {/* a provider is a component that  creates the state and sends it down to children*/}
      {/* instead of giving profile the user={user} prop, we just give user to the provider and every component now has access */}
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </div>
  );
}

// cannot call usecontext inside of app because the UserContextProvider is a child of App
// so we use a helper component to hold the children!
function AppInternal() {
  const { toggleUser } = useContext(UserContext);
  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
}
