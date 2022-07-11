import {Header} from "../components";

import {Outlet} from "react-router-dom";

const MainLayouts = () => {

  return (
      <div>
          <Header/>
          <h1>Main Layout</h1>
          <Outlet/>
      </div>
  );
};

export {MainLayouts}