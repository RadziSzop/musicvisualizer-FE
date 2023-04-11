import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { visualizationOptions, visualizationType } from '../../types/settings';
import { StyledSelectContainer } from './StyledVisualizationSelect';
import { VisualizationOption } from './VisualizationOption/VisualizationOption';
import { TbChartArcs, TbPlaystationCircle, TbFlower, TbSquare, TbCircleDashed } from 'react-icons/tb';
import { HiOutlineCube } from 'react-icons/hi';
import { RiCloudyLine, RiMenu4Line } from 'react-icons/ri';
import { TfiShine } from 'react-icons/tfi';
import { TiWaves } from 'react-icons/ti';
interface Props {
  selectedType: visualizationType;
  setSelectedType: React.Dispatch<React.SetStateAction<visualizationType>>;
}
export const VisualizationSelect = ({ setSelectedType, selectedType }: Props) => {
  return (
    <StyledSelectContainer>
      <VisualizationOption header="Arcs" selectedType={selectedType} setSelectedType={setSelectedType} type={'Arcs'}>
        <TbChartArcs size={40} />
      </VisualizationOption>
      <VisualizationOption
        header="Circles"
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        type={'Circles'}
      >
        <TbPlaystationCircle size={40} />
      </VisualizationOption>
      <VisualizationOption header="Cubes" selectedType={selectedType} setSelectedType={setSelectedType} type={'Cubes'}>
        <HiOutlineCube size={40} />
      </VisualizationOption>
      <VisualizationOption
        header="Flower"
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        type={'Flower'}
      >
        <TbFlower size={40} />
      </VisualizationOption>
      <VisualizationOption header="Glob" selectedType={selectedType} setSelectedType={setSelectedType} type={'Glob'}>
        <RiCloudyLine size={40} />
      </VisualizationOption>
      <VisualizationOption header="Lines" selectedType={selectedType} setSelectedType={setSelectedType} type={'Lines'}>
        <RiMenu4Line size={40} />
      </VisualizationOption>
      <VisualizationOption header="Shine" selectedType={selectedType} setSelectedType={setSelectedType} type={'Shine'}>
        <TfiShine size={40} />
      </VisualizationOption>
      <VisualizationOption
        header="Square"
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        type={'Square'}
      >
        <TbSquare size={40} />
      </VisualizationOption>
      <VisualizationOption
        header="Turntable"
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        type={'Turntable'}
      >
        <TbCircleDashed size={40} />
      </VisualizationOption>
      <VisualizationOption header="Wave" selectedType={selectedType} setSelectedType={setSelectedType} type={'Wave'}>
        <TiWaves size={40} />
      </VisualizationOption>
      {/* //   layout
    //   transition={{
    //     layout: { duration: 0.3 },
    //   }}
    //   as={motion.div}
    //   isSelected={type === selectedType}
    //   onClick={() => {
    //     setSelectedType(type);
    //   }}
    // >
    //   {type} */}
    </StyledSelectContainer>
  );
};
