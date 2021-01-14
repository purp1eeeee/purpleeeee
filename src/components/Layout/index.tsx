import { useColorMode, Box } from '@chakra-ui/react';
import { Header } from './Header';

export const Layout: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  return (
    <Box height="100vh" bg={bgColor[colorMode]} color={color[colorMode]}>
      <Header />
      {children}
    </Box>
  );
};
