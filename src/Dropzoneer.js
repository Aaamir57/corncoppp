import React, { useState } from 'react';

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState('');
  const videoRef = React.createRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const media = URL.createObjectURL(file);
    setVideoSrc(media);
    videoRef.current.src = media;
    videoRef.current.style.display = 'block';
    // Note: Autoplay may not work on some browsers without user interaction.
    // Therefore, we wait for user interaction to start playing the video.
  };

  const handleUploadClick = () => {
    // Trigger the file input click event
    document.getElementById('input').click();
    // Start playing the video once the user clicks to upload
    videoRef.current.play().catch(error => console.error(error));
  };

  return (
    <div className='custom-file-upload' onClick={handleUploadClick}>
      <div className='customfileuploaddivv'>
        <img alt=' ' src="./media/0099.svg" />
        <h1>Click to upload</h1><br />
        <h2>or drag and drop</h2>
      </div>
      <input
        type="file"
        id="input"
        name="input_video"
        accept="video/mp4, video/mov"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <video
        id="video"
        controls
        style={{ display: 'none', width: '100%', height: '100%' }}
        ref={videoRef}
      ></video>
    </div>
  );
};

export default VideoPlayer;
