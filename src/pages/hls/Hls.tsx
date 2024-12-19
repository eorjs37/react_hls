function Hls() {
  return (
    <div>
      <h1>{'HLS'}</h1>
      <video
        id={'streaming'}
        controls
        src={'https://daegeon-everybody.s3.ap-northeast-2.amazonaws.com/video/video1.mp4'}
      ></video>
    </div>
  )
}

export default Hls
