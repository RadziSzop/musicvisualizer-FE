import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { StyledDropZoneContainer } from './StyledDropZone';
import { motion, useAnimationControls } from 'framer-motion';
interface Props {
  setSubmitedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}
export const DropZone = ({ setSubmitedFile }: Props) => {
  const animationControler = useAnimationControls();
  const onDrop = useCallback((acceptedFile: File[]) => {
    console.log(acceptedFile.length);

    setSubmitedFile(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'audio/mpeg': ['mp3'],
    },
    maxFiles: 1,
  });
  useEffect(() => {
    // if (isDragAccept) {
    //   animationControler.start('accept');
    // } else
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
    // accept: {
    //   scale: [1, 1.01, 1],
    //   transition: {
    //     scale: {
    //       type: 'spring',
    //       duration: 0.5,
    //       times: [0, 0.2, 1],
    //     },
    //   },
    // },
  };
  return (
    <StyledDropZoneContainer
      as={motion.div}
      {...getRootProps({ isDragAccept, isDragReject })}
      variants={containerVariatns}
      animate={animationControler}
      transition={{
        type: 'spring',
        stiffness: 5,
      }}
    >
      <input {...getInputProps()} />
      {isDragActive && isDragAccept && <p>Drop file here...</p>}
      {isDragActive && isDragReject && <p>Only mp3, try again...</p>}
      {!isDragActive && <p>Drag drop some files here, or click to select files</p>}
    </StyledDropZoneContainer>
  );
};
