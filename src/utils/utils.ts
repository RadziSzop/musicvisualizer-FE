import { Wave } from '@foobar404/wave';
import { waveOptions } from '../App';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const loadAnimations = (wave: Wave, animations: waveOptions[]) => {
  if (animations.length > 0) {
    animations.map((waveOptions) => {
      wave.addAnimation(
        new wave.animations[waveOptions.type]({
          ...waveOptions.options,
        }),
      );
    });
  } else {
    wave.addAnimation(
      new wave.animations.Wave({
        lineColor: 'white',
        lineWidth: 10,
        fillColor: { gradient: ['#FF9A8B', '#FF6A88', '#FF99AC'] },
        mirroredX: true,
        count: 5,
        rounded: true,
        frequencyBand: 'base',
      }),
    );
    wave.addAnimation(
      new wave.animations.Wave({
        lineColor: 'white',
        lineWidth: 10,
        fillColor: { gradient: ['#FA8BFF', '#2BD2FF', '#2BFF88'] },
        mirroredX: true,
        count: 60,
        rounded: true,
      }),
    );
    wave.addAnimation(
      new wave.animations.Wave({
        lineColor: 'white',
        lineWidth: 10,
        fillColor: { gradient: ['#FBDA61', '#FF5ACD'] },
        mirroredX: true,
        count: 25,
        rounded: true,
        frequencyBand: 'highs',
      }),
    );
  }
};
export const configureAxios = () => {
  if (import.meta.env.VITE_BACKENDURL) {
    axios.defaults.baseURL = import.meta.env.VITE_BACKENDURL;
  } else {
    toast.error('Invalid env configuration');
  }
};
