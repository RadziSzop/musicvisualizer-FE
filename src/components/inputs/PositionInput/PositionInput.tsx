import {
  StyledPositionInputContainer,
  StyledPositionInputDirection,
  StyledPositionInputHeader,
} from './StyledPositionInput';
import {
  BsCaretDownSquareFill,
  BsCaretLeftSquareFill,
  BsCaretRightSquareFill,
  BsCaretUpSquareFill,
  BsFillDice1Fill,
} from 'react-icons/bs';
import { ICubesOptions, ILinesOptions, IWaveOptions } from '@foobar404/wave';
import { motion } from 'framer-motion';
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
    <motion.div layout>
      <StyledPositionInputHeader as={motion.h3} layout>
        Position Input
      </StyledPositionInputHeader>
      <StyledPositionInputContainer>
        <StyledPositionInputDirection
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isEnabled={!waveOption.top}
          position="t"
          onClick={() => {
            changePositionState('top');
          }}
        >
          <BsCaretUpSquareFill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
        <StyledPositionInputDirection
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isEnabled={!waveOption.left}
          position="l"
          onClick={() => {
            changePositionState('left');
          }}
        >
          <BsCaretLeftSquareFill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
        <StyledPositionInputDirection
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isEnabled={!waveOption.center}
          position="c"
          onClick={() => {
            changePositionState('center');
          }}
        >
          <BsFillDice1Fill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
        <StyledPositionInputDirection
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isEnabled={!waveOption.right}
          position="r"
          onClick={() => {
            changePositionState('right');
          }}
        >
          <BsCaretRightSquareFill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
        <StyledPositionInputDirection
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isEnabled={!waveOption.bottom}
          position="b"
          onClick={() => {
            changePositionState('bottom');
          }}
        >
          <BsCaretDownSquareFill size={40} fill="rgb(122, 121, 121)" />
        </StyledPositionInputDirection>
      </StyledPositionInputContainer>
    </motion.div>
  );
};
