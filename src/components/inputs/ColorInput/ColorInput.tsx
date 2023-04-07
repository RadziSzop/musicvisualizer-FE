import { useState } from 'react';
import { ColorInputButtonGroupContainer, ColorPicker } from './StyledColorInput';
import { motion } from 'framer-motion';

type FillOption =
  | string
  | {
      gradient: string[];
      rotate?: number;
    }
  | {
      image: string;
    };
export const ColorInput = () => {
  const [selectedType, setSelectedType] = useState(0);
  console.log(selectedType);
  return (
    <motion.div>
      <ColorInputButtonGroupContainer>
        <motion.input
          // whileHover={{
          //   scale: 1.1,
          // }}
          type="button"
          animate={selectedType === 0 ? { scale: 1.2, backgroundColor: '#3f3f3f' } : { scale: 1 }}
          onClick={() => {
            setSelectedType(0);
          }}
          value={'Color'}
        />

        <motion.input
          // whileHover={{
          //   scale: 1.1,
          // }}
          type="button"
          animate={selectedType === 1 ? { scale: 1.2, backgroundColor: '#3f3f3f' } : { scale: 1 }}
          onClick={() => {
            setSelectedType(1);
          }}
          value={'Gradient'}
        />

        <motion.input
          // whileHover={{
          //   scale: 1.1,
          // }}
          type="button"
          animate={selectedType === 2 ? { scale: 1.2, backgroundColor: '#3f3f3f' } : { scale: 1 }}
          onClick={() => {
            setSelectedType(2);
          }}
          value={3}
        />
      </ColorInputButtonGroupContainer>
      {selectedType === 0 && (
        <ColorPicker as={motion.input} type="color" layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} />
      )}
    </motion.div>
  );
};
