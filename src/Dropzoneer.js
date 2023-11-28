import React, { useState } from 'react';

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const videoRef = React.createRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const media = URL.createObjectURL(file);

    setVideos((prevVideos) => [
      ...prevVideos,
      { name: file.name, src: media },
    ]);

    // Note: Autoplay may not work on some browsers without user interaction.
    // Therefore, we wait for user interaction to start playing the video.
  };

  const handleDelete = (index) => {
    setVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
  };

  const handleUploadClick = () => {
    // Trigger the file input click event
    document.getElementById('input').click();
  };

  return (
    <div className='custom-file-upload'>
      {videos.length === 0 && <div className='customfileuploaddivv' onClick={handleUploadClick}>
        <img alt=' ' src="./media/0099.svg" />
        <p>Click to upload</p>
        <span>or drag and drop </span>
        <input
          type="file"
          id="input"
          name="input_video"
          accept="video/mp4, video/mov"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>}
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-item videosec">
            <div className='videomain'>
              <div className='videowboxdiv'></div>
              <div className='videobox'> </div>
            </div>

            <p>{video.name}</p>
            <div onClick={() => handleDelete(index)}>
              <img alt=' ' src="./media/901.svg" />

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
