import React, { useState } from "react";

import Linearsprogress from './/Linearsprogress';  // Import the Linearsprogress component

const Imageuploadtwo = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);  // Add isUploading state
  const fileInputRef = React.createRef();

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return {
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
      };
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // Simulate image upload delay (replace this with your actual upload logic)
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
     
    }, 2000);
  };

  const handleOpenFileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section>
      <div className='cards'>
        <div className='mainimagefromgallery'>
          <div className='clicktoopen' onClick={handleOpenFileClick}>
            <label htmlFor='file' className='customfileuploaddivv'>
              <img alt=' ' src="./media/0099.svg" />
              <p>Click to upload</p>
              <span>or drag and drop</span>
            </label>
            <input
              name="images"
              type="file"
              ref={fileInputRef}
              onChange={onSelectFile}
              accept="image/png, image/jpeg, image/webp"
              multiple
              style={{ display: 'none' }}
            />
          </div>

         
            {selectedImages &&
              selectedImages.map((image, index) => (
                <div key={index} className="image">
                  <div className='imagefromgallery'>
                    <div className='image'>
                      <img src={image.url} alt="" className='boximage' />
                    </div>
                  </div>
                </div>
              ))}
         
        </div>
       <div className="uploadmaindiv">

     
        <h1 className='uploads'>uploads</h1>

        {isUploading && <Linearsprogress />}  {/* Display progress bar during upload */}

        {selectedImages &&
          selectedImages.map((image, index) => (
            <div key={index} className="image">
              <div className='imagesizemaindiv' key={index}>
                <div className='image contentone'>
                  <div className='imagesizedivvbox1'></div>
                  <div className='namesimagesdiv'>
                    <h1>{image.name}</h1>
                    <h2>{image.size} bytes</h2>
                  </div>
                </div>
                <div className='image'>
                  <div
                    key={index}
                    onClick={() =>
                      setSelectedImages(selectedImages.filter((e) => e !== image))
                    }
                  >
                    <img alt=' ' src="./media/901.svg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  );
};

export default Imageuploadtwo;
