import React, { useState } from "react";
import axios from "axios";

function Images() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

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
          "https://api.imgbb.com/1/upload?key=f41be212466b56dabb0962a8d305b262", // Replace with your ImgBB API key
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

  return (
    <div>
      <div className="image-upload">
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
        />
        <button onClick={handleImageUpload}>Upload Image</button>
      </div>

      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default Images;
