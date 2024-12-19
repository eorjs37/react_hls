import { useEffect, useRef } from 'react'

function Hls() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  // eslint-disable-next-line prettier/prettier
  const handlePlay: (event: HTMLMediaElementEventMap['play']) => void = (event) => {
    console.log('Video started playing', event.target)
  }
  // eslint-disable-next-line prettier/prettier
  const handleTimeUpdate: (event: HTMLMediaElementEventMap['timeupdate']) => void = (event) => {
    const target = event.target as HTMLVideoElement
    console.log(target.currentTime)
  }

  // eslint-disable-next-line prettier/prettier
  const handleStop: (event: HTMLMediaElementEventMap['pause']) => void = () => {
    console.log('Video Stop')
  }

  //video element
  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener('play', handlePlay)
      videoElement.addEventListener('timeupdate', handleTimeUpdate)
      videoElement.addEventListener('pause', handleStop)
    }
    return () => {
      videoElement?.removeEventListener('play', handlePlay)
      videoElement?.removeEventListener('timeupdate', handleTimeUpdate)
      videoElement?.removeEventListener('pause', handleStop)
    }
  }, [])

  return (
    <div>
      <h1>{'HLS'}</h1>
      <video
        ref={videoRef}
        id={'streaming'}
        controls
        src={'https://daegeon-everybody.s3.ap-northeast-2.amazonaws.com/video/video1.mp4'}
      ></video>
    </div>
  )
}

export default Hls
