import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mt-16 md:mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
