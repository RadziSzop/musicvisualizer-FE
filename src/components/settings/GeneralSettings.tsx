import { VisualizationContext } from '../../App';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ResolutionInput } from '../inputs/ResolutionInput/ResolutionInput';

export const GeneralSettings = () => {
  const settingsContext = useContext(VisualizationContext);
  if (settingsContext === null) {
    return <div>an error occured</div>;
  }
  const { setVisualizationSettings, visualizationSettings } = settingsContext;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        opacity: { duration: 0.5 },
      }}
    >
      <ResolutionInput setSettings={setVisualizationSettings} settings={visualizationSettings} />
    </motion.div>
  );
};
