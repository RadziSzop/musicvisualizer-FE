import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { visualizationOptions } from '../../../../types/settings';
import { ColorInputGradient, ColorPicker } from '../StyledColorInput';
import { IoMdTrash } from 'react-icons/io';
interface Props<T extends visualizationOptions> {
  setWaveOption: Dispatch<SetStateAction<T>>;
  waveOption: T;
  field: keyof T;
}
interface Picker {
  id: number;
}
type FillOption =
  | string
  | {
      gradient: string[];
      rotate?: number;
    }
  | {
      image: string;
    };
export const GradientInput = <T extends visualizationOptions>({ waveOption, setWaveOption, field }: Props<T>) => {
  const [pickers, setPickers] = useState<Picker[]>([{ id: 0 }, { id: 1 }]);
  return (
    <>
      <ColorInputGradient
        backgroundColor={
          typeof (waveOption[field] as FillOption) !== 'string' &&
          Object.hasOwn(
            waveOption[field] as
              | {
                  gradient: string[];
                  rotate?: number;
                }
              | {
                  image: string;
                },
            'gradient',
          )
            ? (waveOption[field] as { gradient: string[] }).gradient
                .map((color) => {
                  return color + ',';
                })
                .join('')
                .slice(0, -1)
            : '#000000, #000000'
        }
        rotate={(waveOption[field] as { rotate?: number }).rotate || 0}
      />
      <BsPlusCircleFill
        size={40}
        fill="#4a4a4a"
        cursor="pointer"
        onClick={() => {
          setWaveOption((prevState) => {
            return {
              ...prevState,
              [field]: {
                gradient: [...(prevState[field] as { gradient: string[] }).gradient, '#000000'],
                rotate: (waveOption[field] as { rotate?: number }).rotate,
              },
            };
          });
          setPickers((prevState) => {
            return [...prevState, { id: prevState.length }];
          });
        }}
      />
      <br />
      {pickers.map((picker) => {
        return (
          <Fragment key={picker.id}>
            <ColorPicker
              height="40px"
              width="85%"
              type="color"
              margin="none"
              value={(waveOption[field] as { gradient: string[] })?.gradient?.[picker.id] || '#000000'}
              onChange={(e) => {
                setWaveOption((prevState) => {
                  const newState = { ...prevState };
                  (newState[field] as { gradient: string[] }).gradient[picker.id] = e.target.value;
                  return newState;
                });
              }}
            />
            <IoMdTrash
              size="30"
              fill="#4a4a4a"
              cursor="pointer"
              onClick={() => {
                setWaveOption((prevState) => {
                  const newGradient = {
                    gradient: [...(prevState[field] as { gradient: string[] }).gradient],
                    rotate: (prevState[field] as { rotate: number }).rotate,
                  };
                  newGradient.gradient.splice(picker.id, 1);
                  return { ...prevState, [field]: newGradient };
                });
                setPickers((prevState) => {
                  const newState = [...prevState];
                  newState.splice(picker.id, 1);
                  return newState;
                });
              }}
            />
          </Fragment>
        );
      })}
    </>
  );
};
