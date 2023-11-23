import React, { useRef, useState } from 'react';

export default function ImageUpload() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;

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

          {images.map((image, index) => (
            <div className='imagefromgallery'>
              <div className='image' key={index}>
                {/* <span className='delete' onClick={() => deleteImage(index)}>
                  &times;
                </span> */}
                <img src={image.url} alt={image.name} className='boximage' />
                {/* <p>{image.name}</p>
                <p>{image.size} bytes</p> */}
              </div>
            </div>
          ))}
        </div>
        <h1 className='uploads'>uploads</h1>
        

          {images.map((image, index) => (
            <div className='imagesizemaindiv'>


              <div className='image contentone' key={index}>
                <div className='imagesizedivvbox1'>

                </div>
                <div className='namesimagesdiv'>
                  <h1>{image.name}</h1>
                  <h2>{image.size} bytes</h2>
                </div>
              </div>
              <div className='image' key={index} >
                <span className='delete deltetwo' onClick={() => deleteImage(index)} >
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
