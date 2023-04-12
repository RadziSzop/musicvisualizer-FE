import {
  IArcsOptions,
  ICirclesOptions,
  ICubesOptions,
  IFlowerOptions,
  IGlobOptions,
  ILinesOptions,
  IShineOptions,
  ISquareOptions,
  ITurntableOptions,
  IWaveOptions,
} from '@foobar404/wave';

export type visualizationOptions =
  | IArcsOptions
  | ICirclesOptions
  | ICubesOptions
  | IFlowerOptions
  | IGlobOptions
  | ILinesOptions
  | IShineOptions
  | ISquareOptions
  | ITurntableOptions
  | IWaveOptions;
export type visualizationType =
  | 'Arcs'
  | 'Circles'
  | 'Cubes'
  | 'Flower'
  | 'Glob'
  | 'Lines'
  | 'Shine'
  | 'Square'
  | 'Turntable'
  | 'Wave';
