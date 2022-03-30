import "./App.css";
import { ToastContainer } from "react-toastify";
// import CardsPanelComponent from "./components/CardsPanelComponent";
import NavbarComponent from "./components/NavbarComponent";
// import TimerWrapperComponent from "./components/TimerWrapperComponent";

// import BigTextComponent from "./components/BigTextComponent";
// import LoginComponent from "./components/LoginComponent";
// import RegisterComponent from "./components/RegisterComponent";

import UsersPanelComponent from "./components/UsersPanelComponent";

function App() {
  return (
    <div className="container">
      <NavbarComponent />
      <ToastContainer />
      {/* <BigTextComponent /> */}
      {/* <LoginComponent /> */}
      {/* <RegisterComponent /> */}
      {/* <CardsPanelComponent /> */}
      {/* <TimerWrapperComponent /> */}
      <UsersPanelComponent />
    </div>
  );
}

export default App;
