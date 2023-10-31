import React, {useEffect,useState} from "react";
import axios from "axios";
import "./Teachers.css";
const Teachers = () => {
 
  // useEffect(() => {
  //     fetch('/api/users/') // Replace with the actual endpoint
  //       .then(response => response.json())
  //       .then(data => setTeachers(data.data))
  //       .catch(error => console.error('Error fetching teachers:', error));
  //   }, []);
  const [data, setData] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
// 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/api/users/"
        );
        if (response) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);
 
  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div>
      <div className="body">
        <h1>Teachers</h1>
        <table className="grid-container">
  <thead>
    <tr className="title">
      <th>
        <div className="grid-item-t">Teacher Name</div>
      </th>
      <th>
        <div className="grid-item-s">Number of Courses</div>
      </th>
      <th>
        <div className="grid-item-s">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    {data && data.map((teacher, index) => (
      <tr key={index}>
        <td>{teacher.name}</td>
        <td>10</td>
        <td>
          <div className="box">
            <a className="button" href="#popup1" onClick={openPopup}>
              Delete Teacher
            </a>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        <div id="popup1" className={`overlay ${isPopupVisible ? 'active' : ''}`}>
          <div className="popup">
            <h2>Delete confirmation</h2>
            <a className="close" href="#" onClick={closePopup}>
              &times;
            </a>
            <div className="content">
              <p>Thank you for popping me out of the button, please choose wisely</p>
              <button>Confirm</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>

        <div className="item1">Add teacher</div>
      </div>
    </div>
  );
};

export default Teachers;

// return (
//   <div>
//     <div className="body">
//       <h1>Teachers</h1>
//       <div className="grid-container">
//         <div className="grid-item">Teacher Name</div>
//         <div className="grid-item">Number of courses</div>
//         <div className="grid-item">Actions</div>
//       </div>

//       {data && data.map((teacher, index) => (
//         <div className="grid-container" key={index}>
//           <div className="grid-item">{teacher.name}</div>
//           <div className="grid-item">10</div>
//           <div className="grid-item">
//             <div className="box">
//               <a className="button" href="#popup1" onClick={openPopup}>
//                 Delete Teacher
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div id="popup1" className={`overlay ${isPopupVisible ? 'active' : ''}`}>
//         <div className="popup">
//           <h2>Delete confirmation</h2>
//           <a className="close" href="#" onClick={closePopup}>
//             &times;
//           </a>
//           <div className="content">
//             <p>Thank you for popping me out of the button, please choose wisely</p>
//             <button>Confirm</button>
//             <button>Cancel</button>
//           </div>
//         </div>
//       </div>

//       <div className="item1">Add teacher</div>
//     </div>
//   </div>
// );
// };

// export default Teachers;

// import React, { useState, useEffect } from "react";
// import "./Teachers.css";
// import axios from "axios";

// const Teachers = () => {
//   const [data, setData] = useState([]);
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8001/api/users/"
//         );
//         if (response) {
//           setData(response.data.data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const openPopup = () => {
//     setIsPopupVisible(true);
//   };

//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div>
//       <div className="body">
//         <h1>Teachers</h1>

//         <div className="grid-container">
//           <div className="grid-item">Teacher Name</div>
//           <div className="grid-item">Course Name</div>
//           <div className="grid-item">Delete teacher</div>

//           {data.map((teacher, index) => (
//             <div key={index} className="teacher-container">
//               <div className="grid-item">{teacher.name}</div>
//               <div className="grid-item">10</div>
//               <div className="grid-item">
//                 <div className="box">
//                   <a className="button" href="#popup1" onClick={openPopup}>
//                     Delete Teacher
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="item1">Add teacher</div>
//         </div>

//         {isPopupVisible && (
//           <div id="popup1" className="overlay">
//             <div className="popup">
//               <h2>Delete confirmation</h2>
//               <a className="close" href="#" onClick={closePopup}>
//                 &times;
//               </a>
//               <div className="content">
//                 Thank you for popping me out of that button, choose wisely!
//                 <button>Confirm</button>
//                 <button>Cancel</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Teachers;














