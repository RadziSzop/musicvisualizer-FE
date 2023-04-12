import { useEffect, useState } from 'react';
import { StyledRecordButton } from './StyledRecorder';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import axios from 'axios';
import { motion } from 'framer-motion';
interface Props {
  canvas: React.MutableRefObject<HTMLCanvasElement>;
  audio: React.MutableRefObject<HTMLAudioElement>;
  submitedFile: File | undefined;
}
export const Recorder = ({ canvas, audio, submitedFile }: Props) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  useEffect(() => {
    if (canvas.current === null || submitedFile === undefined) {
      return;
    }
    const videoSteam = canvas.current.captureStream(60);
    const mediaRecorder = new MediaRecorder(videoSteam, {
      mimeType: 'video/webm; codecs=vp9',
    });
    setMediaRecorder(mediaRecorder);
    let chunks: Blob[] = [];
    mediaRecorder.ondataavailable = (blob) => {
      chunks.push(blob.data);
    };
    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunks, {
        type: 'video/mp4',
      });
      chunks = [];
      const videoFile: File = new File([blob], 'filename.mp4', { type: 'video/mp4' });
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('audio', submitedFile);
      formData.append('name', 'test');
      const response = await axios.post('merge', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob([response.data]));
      downloadLink.setAttribute('download', 'visualization.mp4');
      document.body.appendChild(downloadLink);
      downloadLink.click();
    };
    mediaRecorder.ondataavailable = function (e) {
      chunks.push(e.data);
    };
  }, [canvas.current]);
  return (
    <>
      {submitedFile && (
        <StyledRecordButton
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          as={motion.div}
          transition={{ x: { duration: 0.5 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
        >
          <BsFillRecordCircleFill
            cursor={'pointer'}
            size={30}
            fill={isRecording ? 'red' : '#e3e3e3'}
            onClick={() => {
              if (!isRecording && audio.current !== null) {
                setIsRecording(true);
                mediaRecorder?.start();
                audio.current.currentTime = 0;
                audio.current.play();
              } else {
                audio.current.pause();
                mediaRecorder?.stop();
                setIsRecording(false);
              }
            }}
          />
        </StyledRecordButton>
      )}
    </>
  );
};
