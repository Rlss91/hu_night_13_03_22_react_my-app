import "./App.css";
import CardsPanelComponent from "./components/CardsPanelComponent";
import NavbarComponent from "./components/NavbarComponent";
import TimerWrapperComponent from "./components/TimerWrapperComponent";

// import BigTextComponent from "./components/BigTextComponent";
// import LoginComponent from "./components/LoginComponent";
// import RegisterComponent from "./components/RegisterComponent";

function App() {
  return (
    <div className="container">
      <NavbarComponent />
      {/* <BigTextComponent /> */}
      {/* <LoginComponent /> */}
      {/* <RegisterComponent /> */}
      {/* <CardsPanelComponent /> */}
      <TimerWrapperComponent />
    </div>
  );
}

export default App;
