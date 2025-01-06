import React, { useState } from "react";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider";

const ImageCropper = ({ imageSrc }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropChange = (crop) => setCrop(crop);

    const onCropComplete = (_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const onZoomChange = (zoom) => setZoom(zoom);

    const getCroppedImage = async () => {
        const canvas = document.createElement("canvas");
        const img = new Image();

        img.src = imageSrc;

        return new Promise((resolve) => {
            img.onload = () => {
                const { width, height, x, y } = croppedAreaPixels;
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    img,
                    x,
                    y,
                    width,
                    height,
                    0,
                    0,
                    width,
                    height
                );

                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    resolve(url);
                }, "image/jpeg");
            };
        });
    };

    const handleDownload = async () => {
        const croppedImageUrl = await getCroppedImage();
        const link = document.createElement("a");
        link.href = croppedImageUrl;
        link.download = "cropped-image.jpg";
        link.click();
    };

    return (
        <div>
            <div
                style={{
                    position: "relative",
                    height: "400px",
                    width: "100%",
                }}
            >
                <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={onCropChange}
                    onCropComplete={onCropComplete}
                    onZoomChange={onZoomChange}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: 10,
                        width: "100%",
                    }}
                >
                    <Slider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e, zoom) => onZoomChange(zoom)}
                    />
                </div>
            </div>
            <button
                onClick={handleDownload}
                style={{ marginTop: "20px" }}
            >
                Download Cropped Image
            </button>
        </div>
    );
};

const App = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
            {image && <ImageCropper imageSrc={image} />}
        </div>
    );
};

export default App;
