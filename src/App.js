import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Courses from "./courses";
// import Teachers from "./Teachers";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Courses/>
    </div>
  );
};

export default App;
