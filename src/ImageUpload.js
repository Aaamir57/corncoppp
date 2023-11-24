import React, { useRef, useState, useEffect } from 'react';
import Linearsprogress from './Linearsprogress';

export default function ImageUpload() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setIsUploading(false); // Hide the progress bar when images are uploaded
  }, [images]);

  function selectFiles() {
    fileInputRef.current.click();
  }

  async function uploadImages() {
    setIsUploading(true);

    // Simulate image upload delay (replace this with your actual upload logic)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // After the upload is complete, you can set the images
    setIsUploading(false);
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;

    uploadImages(); // Trigger the image upload process

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            size: files[i].size,
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    // You can handle dropped files here if needed
  }

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='cards'>
      <div className='top'>{/* <p>drag and drop image</p> */}</div>
      <div
        className='drag-area'
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className='select'></span>
        ) : (
          <>
            <span className='select' role='button' onClick={selectFiles}></span>
          </>
        )}
        <div className='mainimagefromgallery'>
          <div className='clicktoopen' onClick={openFileInput}>
            <label htmlFor='file' className='customfileuploaddivv'>
              <img alt=' ' src="./media/0099.svg" />
              <h1>Click to upload</h1>
              <br />
              <h2>or drag and drop</h2>
            </label>
            <input
              name='file'
              type='file'
              id='file'
              className='inputclick'
              multiple
              ref={fileInputRef}
              onChange={onFileSelect}
              style={{ display: 'none' }}
            />
          </div>
          {isUploading && <Linearsprogress />}
          {images.map((image, index) => (
            <div className='imagefromgallery' key={index}>
              <div className='image'>
                <img src={image.url} alt={image.name} className='boximage' />
              </div>
            </div>
          ))}
        </div>
        <h1 className='uploads'>uploads</h1>

        {images.map((image, index) => (
          <div className='imagesizemaindiv' key={index}>
            <div className='image contentone'>
              <div className='imagesizedivvbox1'></div>
              <div className='namesimagesdiv'>
                <h1>{image.name}</h1>
                <h2>{image.size} bytes</h2>
              </div>
            </div>
            <div className='image'>
              <span className='delete deltetwo' onClick={() => deleteImage(index)}>
                <img alt=' ' src="./media/901.svg" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className='container'></div>
    </div>
  );
}
