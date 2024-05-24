import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div className=" from-gray-700 via-gray-900  h-[2000px]">
      <NavBar />
      <div className="mx-10">
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
