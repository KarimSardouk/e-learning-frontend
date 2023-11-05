import React, { useEffect, useState } from "react";
import "./Students.css";
import axios from "axios";

const Students = () => {
  const [data, setData] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [studentName, setStudentName] = useState(null);
  const [studentEmail, setStudentEmail] = useState(null);
  const [studentID, setStudentID] = useState(null);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentEmail, setNewStudentEmail] = useState("");
  const [newStudentPhone, setNewStudentPhone] = useState("");
  const [newStudentRole, setNewStudentRole] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state

  const deleteStudentByID = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8001/api/users/deleteStudent/${id}`
      );
      console.log(response.data);
      // Handle success (e.g., show a success message, update state, etc.)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleDeleteClick = (student) => {
    setStudentID(student.id);
    setStudentName(student.name);
    setStudentEmail(student.email);
    setIsPopupVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, studentInfoResponse] = await Promise.all([
          axios.get("http://localhost:8001/api/users/"),
          axios.get("http://localhost:8001/api/users/get//studentInfo"),
        ]);

        if (usersResponse && studentInfoResponse) {
          setData(studentInfoResponse.data.data);
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
        <h1>Students</h1>
        <div className="grid-container">
          <div className="grid-item">Student Name</div>
          <div className="grid-item">Number of courses</div>
          <div className="grid-item">Actions</div>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map((student, index) => (
            <div className="grid-container" key={index}>
              <div className="grid-item">{student.name}</div>
              <div className="grid-item">10</div>
              <div className="grid-item">
                <div className="box">
                  <a
                  className="button"
                  href="#popup1"
                  onClick={() => handleDeleteClick(student)}
                >
                    Delete Student
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
            <a className="close" href="" onClick={closePopup}>
              &times;
            </a>
            {studentName && studentID && studentEmail && (
              <div className="content1">
                <p>
                  Thank you for popping me out of the button, please choose
                  wisely
                </p>
                <b>Student Name:</b> {studentName}
                <b>Student ID:</b> {studentID}
                <b>Student Email:</b> {studentEmail}
                <button onClick={() => deleteStudentByID(studentID)}>
                  Confirm
                </button>
                <button onClick={closePopup}>Cancel</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
            };
export default Students;



