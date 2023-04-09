import { useEffect, useRef, useState } from 'react';
import { DropZone } from '../components/DropZone/DropZone';
import Player from 'react-modern-audio-player';
import { Wave } from '@foobar404/wave';
import { Visualizer } from '../components/Visualizer/Visualizer';
import { AnimatePresence, motion } from 'framer-motion';
import { visualizationOptions } from '../types/settings';
import { waveOptions } from '../App';
interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}
export const Start = ({ setSettings, settings }: Props) => {
  const [canvasSize, setCanvasSize] = useState({
    height: window.innerHeight - 100,
    width: window.innerWidth,
  });
  useEffect(() => {
    window.addEventListener('resize', () => {
      setCanvasSize({
        height: window.innerHeight - 100,
        width: window.innerWidth,
      });
    });
  }, []);
  const [submitedFile, setSubmitedFile] = useState<File[] | undefined>();
  const [playList, setPlayList] = useState([
    {
      name: 'music - 1',
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
    }
    console.log('creating new wave');
    const newPlaylist = submitedFile.map((file, index) => {
      return {
        name: file.name,
        img: 'https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg',
        src: URL.createObjectURL(file),
        id: index + 1,
      };
    });

    setPlayList(newPlaylist);
    audioRef.current.crossOrigin = 'anonymous';
    const wave = new Wave(audioRef.current, canvasRef.current);

    settings.map((waveOptions) => {
      console.log(waveOptions);
      wave.addAnimation(
        new wave.animations[waveOptions.type]({
          ...waveOptions.options,
        }),
      );
    });
    wave.addAnimation(
      new wave.animations.Wave({
        lineColor: { gradient: ['#000000', '#ffffff'] },
        fillColor: 'blue',
        lineWidth: 25,
      }),
    );
    // wave.addAnimation(
    //   new wave.animations.Cubes({
    //     bottom: true,
    //     left: true,
    //     top: true,
    //     right: true,
    //     center: true,

    //     cubeHeight: 20,
    //     fillColor: { gradient: ['#FF9A8B', '#0059ff'] },
    //     gap: 20,
    //     glow: {
    //       color: 'red',
    //       strength: 30,
    //     },
    //   }),
    // );

    // wave.addAnimation(
    //   new wave.animations.Wave({
    //     lineColor: 'white',
    //     lineWidth: 10,
    //     fillColor: { gradient: ['#FF9A8B', '#FF6A88', '#FF99AC'] },
    //     mirroredX: true,
    //     count: 5,
    //     rounded: true,
    //     frequencyBand: 'base',
    //   }),
    // );
    // wave.addAnimation(
    //   new wave.animations.Wave({
    //     lineColor: 'white',
    //     lineWidth: 10,
    //     fillColor: { gradient: ['#FA8BFF', '#2BD2FF', '#2BFF88'] },
    //     mirroredX: true,
    //     count: 60,
    //     rounded: true,
    //   }),
    // );
    // wave.addAnimation(
    //   new wave.animations.Wave({
    //     lineColor: 'white',
    //     lineWidth: 10,
    //     fillColor: { gradient: ['#FBDA61', '#FF5ACD'] },
    //     mirroredX: true,
    //     count: 25,
    //     rounded: true,
    //     frequencyBand: 'highs',
    //   }),
    // );
  }, [submitedFile]);

  return (
    <>
      <AnimatePresence>{!submitedFile && <DropZone setSubmitedFile={setSubmitedFile} />}</AnimatePresence>

      {submitedFile && <Visualizer canvasRef={canvasRef} canvasSize={canvasSize} setCanvasSize={setCanvasSize} />}
      {submitedFile && (
        // TODO: Add disappearing of player
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
            }}
            placement={{
              player: 'bottom',
            }}
            // placement={{
            //   player: 'bottom',
            //   playList: 'bottom',
            //   volumeSlider: 'bottom',
            // }}
            audioInitialState={{ curPlayId: 1 }}
            key={null}
          />
        </motion.div>
      )}
    </>
  );
};
