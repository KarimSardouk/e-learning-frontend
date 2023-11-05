// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Teachers.css";
// const Teachers = () => {
//   const [data, setData] = useState([]);
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [teacherName, setTeacherName] = useState(null);
//   const [teacherEmail, setTeacherEmail] = useState(null);
//   const [teacherID, setTeacherID] = useState(null);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);

//   const deleteTeacherByID = async (id) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:8001/api/users/deleteTeacher/${id}`
//       );
//       console.log(response.data);
//       // Handle success (e.g., show a success message, update state, etc.)
//     } catch (error) {
//       console.error(error);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   const handleDeleteClick = (teacher) => {
//     setSelectedTeacher(teacher);
//     // Optionally, you can display a confirmation dialog here
//     deleteTeacherByID(teacher.id);
//   };
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:8001/api/users/");
//         if (response) {
//           setData(response.data.data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     const fetchTeacherInfo = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8001/api/users/get//info"
//         );
//         if (response) {
//           setData(response.data.data);
//           console.log(response);
//         }
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       }
//     };

//     fetchTeacherInfo();
//   }, []);
//   // const deleteTeacherByID = async (id) => {
//   //   try {
//   //     const response = await axios.delete(
//   //       `http://localhost:8001/api/users/deleteTeacher/${id}`
//   //     );
//   //     console.log(response.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
//   // const openPopup = () => {
//   //   setIsPopupVisible(true);
//   // };
//   const openPopup = (teacher) => {
//     setIsPopupVisible(true);
//     setTeacherID(teacher.id);
//     setTeacherName(teacher.name);
//     setTeacherEmail(teacher.email);
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
//           <div className="grid-item">Number of courses</div>
//           <div className="grid-item">Actions</div>
//         </div>
//         {data &&
//           data.map((teacher, index) => (
//             <div className="grid-container" key={index}>
//               <div className="grid-item">{teacher.name}</div>
//               <div className="grid-item">10</div>
//               <div className="grid-item">
//                 <div className="box">
//                   <a
//                     className="button"
//                     href="#popup1"
//                     onClick={() => openPopup(teacher)}
//                   >
//                     Delete Teacher
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         <div
//           id="popup1"
//           className={`overlay ${isPopupVisible ? "active" : ""}`}
//         >
//           <div className="popup">
//             <h2>Delete confirmation</h2>
//             <a className="close" href="#" onClick={closePopup}>
//               &times;
//             </a>
//             {teacherName && teacherID && teacherEmail && (
//                 <div className="content">
//                   <p>
//                     Thank you for popping me out of the button, please choose
//                     wisely
//                   </p>
//                   <b>Teacher Name:</b> {teacherName}
//                   <b>Teacher ID:</b> {teacherID}
//                   <b>Teacher Email:</b> {teacherEmail}
//                   <button onClick={() => handleDeleteClick(teacher)}>Confirm</button>
//                   <button onClick={closePopup}>Cancel</button>
//                 </div>
//               )}
//           </div>
//         </div>
//         <div className="item1">Add teacher</div>
//       </div>
//     </div>
//   );
// };
// export default Teachers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Teachers.css";

const Teachers = () => {
  const [data, setData] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [teacherName, setTeacherName] = useState(null);
  const [teacherEmail, setTeacherEmail] = useState(null);
  const [teacherID, setTeacherID] = useState(null);
  const [newTeacherName, setNewTeacherName] = useState("");
  const [newTeacherEmail, setNewTeacherEmail] = useState("");
  const [newTeacherPhone, setNewTeacherPhone] = useState("");
  const [newTeacherRole, setNewTeacherRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleAddTeacherClick = () => {
    const newTeacher = {
      Name: newTeacherName,
      Email: newTeacherEmail,
      Password: "", // Handle password as needed
      Photo: "", // Handle photo as needed
      Phone: newTeacherPhone,
      Role: newTeacherRole,
    };

    axios
      .post("http://localhost:8001/api/users/addTeacher", newTeacher)
      .then((res) => {
        console.log(res);
        setData([...data, res.data]);
        setIsPopupVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteTeacherByID = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8001/api/users/deleteTeacher/${id}`
      );
      console.log(response.data);
      // Handle success (e.g., show a success message, update state, etc.)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleDeleteClick = (teacher) => {
    setTeacherID(teacher.id);
    setTeacherName(teacher.name);
    setTeacherEmail(teacher.email);
    setIsPopupVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, teacherInfoResponse] = await Promise.all([
          axios.get("http://localhost:8001/api/users/"),
          axios.get("http://localhost:8001/api/users/get//info"),
        ]);

        if (usersResponse && teacherInfoResponse) {
          setData(teacherInfoResponse.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <div className="body">
        <h1>Teachers</h1>
        <div className="grid-container">
          <div className="grid-item">Teacher Name</div>
          <div className="grid-item">Number of courses</div>
          <div className="grid-item">Actions</div>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map((teacher, index) => (
            <div className="grid-container" key={index}>
              <div className="grid-item">{teacher.name}</div>
              <div className="grid-item">10</div>
              <div className="grid-item">
                <div className="box">
                  <a
                    className="button"
                    href="#popup1"
                    onClick={() => handleDeleteClick(teacher)}
                  >
                    Delete Teacher
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
        <div
          id="popup1"
          className={`overlay ${isPopupVisible ? "active" : ""}`}
        >
          <div className="popup">
            <h2>Delete confirmation</h2>
            <a className="close" href="#" onClick={closePopup}>
              &times;
            </a>
            {teacherName && teacherID && teacherEmail && (
              <div className="content1">
                <p>
                  Thank you for popping me out of the button, please choose
                  wisely
                </p>
                <b>Teacher Name:</b> {teacherName}
                <b>Teacher ID:</b> {teacherID}
                <b>Teacher Email:</b> {teacherEmail}
                <button onClick={() => deleteTeacherByID(teacherID)}>
                  Confirm
                </button>
                <button onClick={closePopup}>Cancel</button>
              </div>
            )}
          </div>
        </div>
        <div className="grid-item-add-teacher">
          <a className="item1" href="#popup2">
            Add teacher
          </a>
        </div>
        <div
          id="popup2"
          className={`overlay ${isPopupVisible ? "active" : ""}`}
        >
          <div className="popup2">
            <h2>Add Teacher</h2>
            <a className="close" href="#" onClick={closePopup}>
              &times;
            </a>
            <div className="content2">
              <input
                className="input1"
                type="text"
                placeholder="Name"
                value={newTeacherName}
                onChange={(e) => setNewTeacherName(e.target.value)}
              />
              <input
                className="input2"
                type="text"
                placeholder="Email"
                value={newTeacherEmail}
                onChange={(e) => setNewTeacherEmail(e.target.value)}
              />
              <input
                className="input3"
                type="text"
                placeholder="Phone"
                value={newTeacherPhone}
                onChange={(e) => setNewTeacherPhone(e.target.value)}
              />
              <input
                className="input4"
                type="text"
                placeholder="Role"
                value={newTeacherRole}
                onChange={(e) => setNewTeacherRole(e.target.value)}
              />
              <button className="Add-Teacher" onClick={handleAddTeacherClick}>Add Teacher</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
