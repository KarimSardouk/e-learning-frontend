// import "./App.css";

// function Courses(){
//     return(
//         <>
//         <div className="courses-section">
//         <div className="course-input">
//             <input placeholder="Please put your course here" type="text"></input>
//         </div>
//         <div className="flexing">
//         <div className="startEnd">
//         <div className="end">
//         <h1>Start</h1>
//         <input placeholder="insert start date here" type="date" className="endput" />
//         </div>
//         <div className="end">
//         <h1>End</h1>
//         <input placeholder="insert end date here" type="date" className="endput" />
//         <div className="course-image"><img src="images.png" alt="" className="logo"/></div>
//         <div className="choose-file"><button>CHOOSE FILE</button></div>
//         </div>
//         </div>
//         </div>
//         <div className="description">
//             <textarea></textarea>
//         </div>
//         <div className="addClear">
//         <div className="add">
//             <button>Add course</button>
//         </div>
//         <div className="clear"><button>Clear course</button></div>
//         </div>
//         </div>
//         </>
//         )
// }
// export default Courses;

// import "./App.css";
// import React, { useEffect } from "react";
// import axios from "axios";

// function Courses() {
//   const addCourse = () => {
//     const newCourse = {
//       name: "Math Course", // Course name
//       img: "math_course.jpg", // Image URL (if applicable)
//       Description: "Mathematics", // Course description
//       Date_start: "2023-09-01", // Start date of the course
//       Date_fin: "2023-12-31", // End date of the course
//     };

//     axios
//       .post("http://localhost:8001/api/courses/addCourse", newCourse)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     const dropbtn = document.querySelector(".dropbtn");
//     const dropdownContent = document.querySelector(".dropdown-content");

//     const handleClick = (event) => {
//       if (event.target.matches(".dropbtn")) {
//         dropdownContent.classList.toggle("show");
//       } else {
//         if (dropdownContent.classList.contains("show")) {
//           dropdownContent.classList.remove("show");
//         }
//       }
//     };

//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []);
//   return (
//     <>
//       <div className="root">
//         <div className="course-section">
//           <div className="course-information">
//             <div className="column">
//               <div className="course-name">
//                 Course name: <input type="text" placeholder="choose course" />
//               </div>
//               <div className="startEnd">
//                 <div className="start-date">
//                   Start: <input type="date" />
//                 </div>
//                 <div className="end-date">
//                   End <input type="date" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h1 className="desc">Description</h1>
//           <div className="description">
//             <textarea></textarea>
//           </div>
//           <button className="add" onClick={addCourse}>
//             Add course
//           </button>
//         </div>
//   <div className="image-file-drop">
//     <div className="choice">
//       <img src="images.png" alt="" />
//       <button>choose file</button>
//     </div>
//     <div>
//       <div class="dropdown">
//         <button class="dropbtn">Select a teacher</button>
//         <div class="dropdown-content">
//           <a href="#">Teacher 1</a>
//           <a href="#">Teacher 2</a>
//           <a href="#">Teacher 3</a>
//           <a href="#">Teacher 4</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </>
//   );
// }

// export default Courses;


//   return (
//     <div className="root">
//       <div className="course-section">
//         <div className="course-information">
//           <div className="column">
//             <div className="flex">
//             <div className="course-name">
//               Course name:{" "}
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="choose course"
//               />
//             </div>
//             <div className="dropdown">
//               <button className="dropbtn">Select a teacher</button>
//               <div className="dropdown-content">
//                 <a href="#">Teacher 1</a>
//                 <a href="#">Teacher 2</a>
//                 <a href="#">Teacher 3</a>
//                 <a href="#">Teacher 4</a>
//               </div>
//             </div>
//             </div>
//             <div className="startEnd">
//               <div className="start-date">
//                 Start:{" "}
//                 <input
//                   className="start"
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                 />
//               </div>
//               <div className="end-date">
//                 End:{" "}
//                 <input
//                   className="end"
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <h1 className="desc">Description</h1>
//         <div className="description">
//           <textarea
//             className="textareak"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="image-file-drop">
//           <div className="choice">
//             {imageUrl && <img src={imageUrl} alt="Selected" />}
//             <button
//               onClick={() => document.getElementById("fileInput").click()}
//             >
//               Choose file
//             </button>
//             <input
//               id="fileInput"
//               type="file"
//               accept=".png, .jpg, .jpeg"
//               style={{ display: "none" }}
//               onChange={handleFileChange}
//             />
//             <button onClick={handleImageUpload}>Upload Image</button>
//             <div></div>
//           </div>
//         </div>
//         <button className="add" onClick={addCourse}>
//           Add course
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Courses;
import React, { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // Added state for image URL
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedFile(file);
  // };
  // const handleImageUpload = () => {
  //   if (selectedFile) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImageUrl(reader.result);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   } else {
  //     // If no file is selected, set the default image URL
  //     setImageUrl("icons8-blue-96.png");
  //   }
  // };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleImageUpload = async () => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const response = await axios.post(
          "https://api.imgbb.com/1/upload?key={apiKey}", // Replace with your ImgBB API key
          formData
        );
        const imageUrl = response.data.data.url;
        setImageUrl(imageUrl);
        console.log("Image uploaded successfully:", imageUrl);
      } else {
        console.error("No file selected");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // const addImage = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('image', selectedFile);

  //     const imageResponse = await axios.post('http://localhost:8001/api/images/add', imageData, { headers: { 'Content-Type': 'application/json' }, })
  //     if (!imageResponse)
  //       throw new Error('An error occurred while adding the skill');
  //     console.log(skillResponse);
  //     setShowNewSkillInput(false);
  //     setDoFetch(!fetchData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const addCourse = () => {
        // Get the uploaded image URL or default image URL
        const img = imageUrl || "icons8-blue-96.png";
    const courseData = {
      name: name,
      img: img, // Add code to handle image input
      Description: description,
      Date_start: startDate,
      Date_fin: endDate,
    };
    axios
      .post("http://localhost:8001/api/courses/addCourse", courseData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    const handleClick = (event) => {
      if (event.target.matches(".dropbtn")) {
        dropdownContent.classList.toggle("show");
      } else {
        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
return (
  <div className="root">
    <div className="course-section">
      <div className="course-information">
          <div className="flex">
            <div className="course-name">
              <h1 className="C-Name">Course name{" "}</h1>
              <input
              className="course-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="choose course"
              />
                          <div className="startEnd">
            <div className="start-date">
              <h1>Start{" "}</h1>
              <input
                className="start"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="end-date">
              <h1>End{" "}</h1>
              <input
                className="end"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
            </div>

<div className="column">
  <h1 className="teacher-name">Teacher Name</h1>
  <div className="dropdown">
              <button className="dropbtn">Select a teacher</button>
              <div className="dropdown-content">
                <a href="#">Teacher 1</a>
                <a href="#">Teacher 2</a>
                <a href="#">Teacher 3</a>
                <a href="#">Teacher 4</a>
              </div>
            </div>
          {imageUrl ? (
    <img src={imageUrl} alt="" />
  ) : (
    <img src="icons8-rounded-square-96.png" alt="icon" className="rounded-square" />
  )}<button className="choose-file"
  onClick={() => document.getElementById("fileInput").click()}
>
            Choose file
          </button>

          </div>
          </div>
        {/* <div className="column">
          <img src={imageUrl} alt=""/>
          <button className="choose-file"
            onClick={() => document.getElementById("fileInput").click()}
          > */}




        
      </div>
      <h1 className="desc">Description</h1>
      <div className="description">
        <textarea
          className="textareak"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="image-file-drop">


      <button className="add" onClick={() => {addCourse(); handleImageUpload();}}>
  Add course
</button>

      <input
            id="fileInput"
            type="file"
            accept=".png, .jpg, .jpeg"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
    </div>
    </div>
  </div>
);
};

export default Courses;