import { StyledPositionInputContainer, StyledPositionInputDirection } from './StyledPositionInput';
import {
  BsCaretDownSquareFill,
  BsCaretLeftSquareFill,
  BsCaretRightSquareFill,
  BsCaretUpSquareFill,
  BsFillDice1Fill,
} from 'react-icons/bs';
import { ICubesOptions, ILinesOptions, IWaveOptions } from '@foobar404/wave';
type PositionOptions = ICubesOptions | ILinesOptions | IWaveOptions;
interface Props {
  waveOption: PositionOptions;
  setWaveOption: React.Dispatch<React.SetStateAction<ICubesOptions | ILinesOptions | IWaveOptions>>;
}

export const PositionInput = ({ setWaveOption, waveOption }: Props) => {
  const changePositionState = (position: 'top' | 'bottom' | 'left' | 'right' | 'center') => {
    setWaveOption((prevState) => {
      const newState: ICubesOptions | ILinesOptions | IWaveOptions = {
        ...prevState,
      };
      if (newState[position] === undefined) {
        newState[position] = true;
      } else {
        delete newState[position];
      }
      return newState;
    });
  };
  return (
    <>
      <h3>Position Input</h3>
      <StyledPositionInputContainer>
        <StyledPositionInputDirection
          isEnabled={Boolean(waveOption.top)}
          position="t"
          onClick={() => {
            changePositionState('top');
          }}
        >
          <BsCaretUpSquareFill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
        <StyledPositionInputDirection
          isEnabled={Boolean(waveOption.left)}
          position="l"
          onClick={() => {
            changePositionState('left');
          }}
        >
          <BsCaretLeftSquareFill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
        <StyledPositionInputDirection
          isEnabled={Boolean(waveOption.center)}
          position="c"
          onClick={() => {
            changePositionState('center');
          }}
        >
          <BsFillDice1Fill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
        <StyledPositionInputDirection
          isEnabled={Boolean(waveOption.right)}
          position="r"
          onClick={() => {
            changePositionState('right');
          }}
        >
          <BsCaretRightSquareFill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
        <StyledPositionInputDirection
          isEnabled={Boolean(waveOption.bottom)}
          position="b"
          onClick={() => {
            changePositionState('bottom');
          }}
        >
          <BsCaretDownSquareFill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
      </StyledPositionInputContainer>
    </>
  );
};
