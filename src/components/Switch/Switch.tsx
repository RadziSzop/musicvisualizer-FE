import { motion } from 'framer-motion';
import { StyledHandle, StyledSwitch } from './styledSwitch';
interface Props {
  isOn: boolean;
  changeState: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export const Switch = ({ isOn, changeState }: Props) => {
  return (
    <StyledSwitch
      isOn={isOn}
      onClick={(e) => {
        changeState(e);
      }}
    >
      <StyledHandle
        as={motion.div}
        className="handle"
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      />
    </StyledSwitch>
  );
};
