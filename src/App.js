import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
// import Courses from "./courses";
// import Teachers from "./Teachers";
// import Students from "./Students";
import Profile from "./Profile";
const App = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Profile/>
    </div>
  );
};

export default App;
