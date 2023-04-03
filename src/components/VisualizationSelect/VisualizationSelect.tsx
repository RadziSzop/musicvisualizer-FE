import { useEffect, useState } from 'react';
import { visualizationOptions, visualizationType } from '../../types/settings';
import { StyledSelectContainer } from './StyledVisualizationSelect';

interface Props {
  selectedType: visualizationType | undefined;
  type: visualizationType;
  setSelectedType: React.Dispatch<React.SetStateAction<visualizationType | undefined>>;
}
export const VisualizationSelect = ({ type, setSelectedType, selectedType }: Props) => {
  return (
    <StyledSelectContainer
      isSelected={type === selectedType}
      onClick={() => {
        setSelectedType(type);
      }}
    >
      {type}
    </StyledSelectContainer>
  );
};
