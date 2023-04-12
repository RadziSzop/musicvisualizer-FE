import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { StyledDropZoneContainer } from './StyledDropZone';
import { motion, useAnimationControls } from 'framer-motion';
import toast from 'react-hot-toast';

interface Props {
  setSubmitedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}
export const DropZone = ({ setSubmitedFile }: Props) => {
  const animationControler = useAnimationControls();
  const onDrop = useCallback((acceptedFile: File[]) => {
    setSubmitedFile(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    onDropRejected: () => {
      toast.error('You can upload one mp3 file');
    },
    accept: {
      'audio/mpeg': ['mp3'],
    },
    maxFiles: 1,
  });
  useEffect(() => {
    if (isDragReject) {
      animationControler.start('reject');
    }
  }, [isDragActive]);
  const containerVariatns = {
    reject: {
      x: [0, -5, 5, -5, 0],
      transition: {
        x: { duration: 0.75 },
      },
    },
  };
  return (
    <StyledDropZoneContainer
      as={motion.div}
      {...getRootProps({ isDragAccept, isDragReject })}
      variants={containerVariatns}
      animate={animationControler}
      exit={{
        opacity: 0,
        y: ['0%', '2.5%', '2.5%'],
        x: ['0%', '0%'],
      }}
    >
      <input {...getInputProps()} />
      {isDragActive && isDragAccept && <p>Drop file here...</p>}
      {isDragActive && isDragReject && <p>Only mp3, try again...</p>}
      {!isDragActive && <p>Drag drop mp3 file here, or click to select it</p>}
    </StyledDropZoneContainer>
  );
};
