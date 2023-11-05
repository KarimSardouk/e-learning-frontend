import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
// import Courses from "./courses";
import Teachers from "./Teachers";
// import Students from "./Students";
const App = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Teachers/>
    </div>
  );
};

export default App;
