import { useEffect, useRef, useState } from 'react';
import { DropZone } from '../components/DropZone/DropZone';
import Player from 'react-modern-audio-player';
import { Wave } from '@foobar404/wave';
import { Visualizer } from '../components/Visualizer/Visualizer';

export const Start = () => {
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
      writer: 'react-modern-audio-player',
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
        writer: 'react-modern-audio-player',
        img: 'https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg',
        src: URL.createObjectURL(file),
        id: index + 1,
      };
    });
    newPlaylist.push({
      name: 'music - 1',
      writer: 'react-modern-audio-player',
      img: 'https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg',
      src: 'https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3',
      id: newPlaylist[newPlaylist.length - 1].id + 1,
    });
    setPlayList(newPlaylist);
    audioRef.current.crossOrigin = 'anonymous';
    const wave = new Wave(audioRef.current, canvasRef.current);

    wave.addAnimation(
      new wave.animations.Wave({
        frequencyBand: 'base',
        rounded: true,
        count: 15,

        fillColor: { gradient: ['rgb(119, 119, 119)', 'rgb(124, 124, 124)'], rotate: 44 },
        lineColor: 'white',
        lineWidth: 15,
      }),
    );
    wave.addAnimation(
      new wave.animations.Wave({
        frequencyBand: 'lows',
        rounded: true,
        count: 20,
        fillColor: { gradient: ['rgb(196, 197, 197)', 'rgb(68, 68, 68)', 'rgb(165, 165, 165)'], rotate: 300 },
        lineColor: 'white',
        lineWidth: 15,
      }),
    );

    wave.addAnimation(
      new wave.animations.Wave({
        frequencyBand: 'mids',
        rounded: true,
        count: 35,
        fillColor: { gradient: [' rgb(51, 51, 51)', 'rgb(172, 172, 172)'], rotate: 263 },
        lineColor: 'white',
        lineWidth: 15,
      }),
    );
    wave.addAnimation(
      new wave.animations.Wave({
        frequencyBand: 'highs',
        rounded: true,
        count: 35,
        fillColor: { gradient: [' rgb(80, 80, 80)', 'rgb(197, 197, 199)'], rotate: 352 },
        lineColor: 'white',
        lineWidth: 15,
      }),
    );

    wave.addAnimation(
      new wave.animations.Shine({
        lineColor: 'white',
        frequencyBand: 'lows',
        rotate: 100,
        offset: false,
        lineWidth: 15,
        rounded: true,
      }),
    );
  }, [submitedFile]);

  return (
    <>
      {!submitedFile && <DropZone setSubmitedFile={setSubmitedFile} />}
      {submitedFile && <Visualizer canvasRef={canvasRef} canvasSize={canvasSize} setCanvasSize={setCanvasSize} />}
      {submitedFile && (
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
      )}
    </>
  );
};
