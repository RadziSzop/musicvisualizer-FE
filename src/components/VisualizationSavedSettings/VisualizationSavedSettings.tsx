import { HiOutlineCube } from 'react-icons/hi';
import { RiCloudyLine, RiMenu4Line } from 'react-icons/ri';
import { TbChartArcs, TbPlaystationCircle, TbFlower, TbSquare, TbCircleDashed } from 'react-icons/tb';
import { TfiShine } from 'react-icons/tfi';
import { TiWaves } from 'react-icons/ti';
import { waveOptions } from '../../App';
import { visualizationOptions, visualizationType } from '../../types/settings';
import {
  StyledVisualizationSavedSettingsContainer,
  StyledVisualizationSavedSettingsItem,
} from './StyledVisualizationSavedSettings';
interface Props {
  setSelectedType: React.Dispatch<React.SetStateAction<visualizationType | 'general'>>;
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  setCurrentSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const VisualizationSavedSettings = ({ setSelectedType, settings, setCurrentSettings, setSettings }: Props) => {
  return (
    <>
      <StyledVisualizationSavedSettingsContainer>
        {settings.map((settingObject, id) => {
          return (
            <StyledVisualizationSavedSettingsItem
              key={id}
              onClick={() => {
                setSelectedType(settingObject.type);
                setCurrentSettings(settingObject.options);
                setSettings((prevState) => {
                  const newState = [...prevState];
                  newState.splice(id, 1);
                  return newState;
                });
              }}
            >
              {settingObject.type === 'Arcs' && <TbChartArcs size={30} />}
              {settingObject.type === 'Circles' && <TbPlaystationCircle size={30} />}
              {settingObject.type === 'Cubes' && <HiOutlineCube size={30} />}
              {settingObject.type === 'Flower' && <TbFlower size={30} />}
              {settingObject.type === 'Glob' && <RiCloudyLine size={30} />}
              {settingObject.type === 'Lines' && <RiMenu4Line size={30} />}
              {settingObject.type === 'Shine' && <TfiShine size={30} />}
              {settingObject.type === 'Square' && <TbSquare size={30} />}
              {settingObject.type === 'Turntable' && <TbCircleDashed size={30} />}
              {settingObject.type === 'Wave' && <TiWaves size={30} />}
            </StyledVisualizationSavedSettingsItem>
          );
        })}
      </StyledVisualizationSavedSettingsContainer>
    </>
  );
};
