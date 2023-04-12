import { useEffect, useRef, useState } from 'react';
import { DropZone } from '../components/DropZone/DropZone';
import Player from 'react-modern-audio-player';
import { Wave } from '@foobar404/wave';
import { Visualizer } from '../components/Visualizer/Visualizer';
import { AnimatePresence, motion } from 'framer-motion';
import { waveOptions } from '../App';
import { loadAnimations } from '../utils/utils';
import { PlayList } from '../types/playlist';
import { Recorder } from '../components/Recorder/Recorder';
interface Props {
  settings: waveOptions[];
  submitedFile: File | undefined;
  setSubmitedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}
console.log(Player);

export const Start = ({ settings, setSubmitedFile, submitedFile }: Props) => {
  const [playList, setPlayList] = useState<PlayList[]>([
    {
      name: 'example music',
      img: 'https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg',
      src: 'https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3',
      id: 1,
    },
  ]);
  const audioRef = useRef<HTMLAudioElement>(null) as React.MutableRefObject<HTMLAudioElement>;
  const canvasRef = useRef<HTMLCanvasElement>(null) as React.MutableRefObject<HTMLCanvasElement>;
  useEffect(() => {
    if (!submitedFile) {
      return;
    } else {
      const newPlaylist = [
        {
          name: submitedFile.name,
          img: 'https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg',
          src: URL.createObjectURL(submitedFile),
          id: 1,
        },
      ];

      setPlayList(newPlaylist);
    }
    audioRef.current.crossOrigin = 'anonymous';
    const wave = new Wave(audioRef.current, canvasRef.current);
    loadAnimations(wave, settings);
    return () => {
      wave.clearAnimations();
    };
  }, [submitedFile]);

  return (
    <>
      <AnimatePresence>{!submitedFile && <DropZone setSubmitedFile={setSubmitedFile} />}</AnimatePresence>
      {submitedFile && <Visualizer canvasRef={canvasRef} />}
      {submitedFile && (
        <motion.div
          style={{ position: 'fixed', left: '0px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
        >
          <Player
            playList={playList}
            audioRef={audioRef}
            activeUI={{
              all: true,
              playList: false,
              prevNnext: false,
            }}
            placement={{
              player: 'bottom',
            }}
            audioInitialState={{ curPlayId: 1 }}
          />
        </motion.div>
      )}
      <Recorder canvas={canvasRef} audio={audioRef} submitedFile={submitedFile} />
    </>
  );
};
