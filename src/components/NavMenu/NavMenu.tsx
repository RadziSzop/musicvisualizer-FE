import { ReactNode } from 'react';
import { StyledNavMenuContainer, StyledNavMenuLink } from './StyledNavMenu';
import { IoMdSettings } from 'react-icons/io';
import { GiSoundWaves } from 'react-icons/gi';
import { FaFileAudio } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
interface Props {
  children?: ReactNode;
  setSubmitedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  submitedFile: File | undefined;
}
export const NavMenu = ({ children, setSubmitedFile, submitedFile }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledNavMenuContainer>
      <LayoutGroup>
        <AnimatePresence>
          {location.pathname === '/' && (
            <StyledNavMenuLink to={'/settings'} aria-label="Settings">
              <motion.div
                layout
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 1.05,
                }}
                exit={{ x: 50 }}
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ x: { duration: 0.4 } }}
              >
                <IoMdSettings size={40} />
              </motion.div>
            </StyledNavMenuLink>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {location.pathname === '/settings' && (
            <StyledNavMenuLink to={'/'} aria-label="Visualizer">
              <motion.div
                layout
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 1.1,
                }}
                exit={{ x: 50 }}
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <GiSoundWaves size={40} />
              </motion.div>
            </StyledNavMenuLink>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {submitedFile && (
            <>
              <motion.a
                layout
                style={{ cursor: 'pointer' }}
                aria-label="Choose a new file"
                onClick={() => {
                  setSubmitedFile(undefined);
                  navigate('/');
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 1.1,
                }}
                exit={{ x: 50 }}
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaFileAudio size={36} />
              </motion.a>
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>

      {children}
    </StyledNavMenuContainer>
  );
};
