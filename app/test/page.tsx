"use client";
import React, { useState } from "react";
import ImageCropper from "./utils";

const App = () => {
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleCropComplete = (croppedAreaPixels) => {
        console.log("Cropped Area:", croppedAreaPixels);
        // Use a library like canvas or a server-side API to generate the cropped image
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
            {image && (
                <ImageCropper
                    imageSrc={image}
                    onCropComplete={handleCropComplete}
                />
            )}
            {croppedImage && <img src={croppedImage} alt="Cropped" />}
        </div>
    );
};

export default App;
