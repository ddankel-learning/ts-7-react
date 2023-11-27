// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSEarchWithAutoFocus from "./refs/UserSearchWithAutoFocus";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
  return (
    <div>
      <h1>React/Typescript Sandbox</h1>
      <hr />
      <h2>Props</h2>
      <Parent />
      <hr />
      <h2>State Part 1</h2>
      <GuestList />
      <hr />
      <h2>State Part 2</h2>
      <UserSearch />
      <hr />
      <h2>Events</h2>
      <EventComponent />
      <hr />
      <h2>Refs</h2>
      <UserSEarchWithAutoFocus />
    </div>
  );
};

// 5) Show the component on the screen
root.render(<App />);
