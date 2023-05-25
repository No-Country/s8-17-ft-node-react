"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const LoadImageUser = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [error, setError] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        const img = document.createElement("img");

        img.onload = () => {
          if (img.width <= 200 && img.height <= 200) {
            setSelectedImage(reader.result as string);
            setError("");
          } else {
            setError("Image exceeded minimum dimensions 200x200px");
          }
        };

        img.src = reader.result as string;
      }
    };

    if (file) {
      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file);
      } else {
        setError("Invalid file format. Please select an image.");
      }
    }
  };

  const handleButtonClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return (
    <main className="w-full md:w-2/4 lg:w-2/4 py-4 px-12">
      <section className="flex relative items-center justify-between gap-x-8">
        <input
          ref={inputFileRef}
          type="file"
          name="archivo"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        {error && (
          <p className="absolute flex flex-column justify-center bottom-0 left-0 w-full text-red-500 font-semibold">
            {error}
          </p>
        )}
      </section>
      <div className="flex items-center justify-between gap-x-8">
        <div>
          {!selectedImage && (
            <div style={{ width: 200, height: 200 }}>
              <Image src="/icon_logo.png" alt="icon_logo" width={200} height={200} />
            </div>
          )}
          {selectedImage && (
            <div style={{ width: 200, height: 200 }}>
              <Image src={selectedImage} alt="Subida" width={200} height={200} />
            </div>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Avatar</h1>
          <p>
            Minimum dimensions 200x200px, in square format (for example, the avatar you use for
            Twitter or Facebook).
          </p>
        </div>
      </div>

      <section className="w-full flex justify-end">
        <button
          onClick={handleButtonClick}
          className="px-6 font-bold text-white bg-primary-500 rounded-lg py-2 mt-4"
        >
          SELECT NEW AVATAR
        </button>
      </section>
    </main>
  );
};

export default LoadImageUser;
