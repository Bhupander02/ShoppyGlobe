import "./App.css";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
}
export default App;