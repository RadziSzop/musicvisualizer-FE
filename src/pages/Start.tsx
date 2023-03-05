import { useState } from 'react';
import { DropZone } from '../components/DropZone';

export const Start = () => {
  const [submitedFile, setSubmitedFile] = useState<File | undefined>();

  return (
    <div>
      <DropZone setSubmitedFile={setSubmitedFile} />
    </div>
  );
};
