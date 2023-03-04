import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { StyledDropZoneContainer } from './StyledDropZone';

export const DropZone = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        'audio/mpeg': ['mp3'],
      },
      maxFiles: 1,
    });

  return (
    <StyledDropZoneContainer {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drag drop some files here, or click to select files</p>}
      {acceptedFiles.map((file) => file.name)}
    </StyledDropZoneContainer>
  );
};
