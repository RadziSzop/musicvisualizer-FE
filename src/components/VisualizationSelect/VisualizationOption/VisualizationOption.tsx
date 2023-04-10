import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { visualizationType } from '../../../types/settings';
import { StyledVisualizationOptionContainer, StyledVisualizationOptionHeader } from './StyledVisualizationOption';
interface Props {
  children: ReactNode;
  header: string;
  type: visualizationType;
  selectedType: visualizationType;
  setSelectedType: React.Dispatch<React.SetStateAction<visualizationType>>;
}
export const VisualizationOption = ({ children, header, type, selectedType, setSelectedType }: Props) => {
  return (
    <StyledVisualizationOptionContainer
      as={motion.div}
      animate={selectedType === type ? { backgroundColor: 'rgb(147, 148, 133)', scale: 1.05 } : {}}
      whileHover={{ scale: 1.1, backgroundColor: 'rgb(191, 193, 173)' }}
      onClick={() => {
        setSelectedType(type);
      }}
    >
      {children}
      <StyledVisualizationOptionHeader>{header}</StyledVisualizationOptionHeader>
    </StyledVisualizationOptionContainer>
  );
};
