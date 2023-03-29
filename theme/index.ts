import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import colors from './colors';
import fonts from './fonts';

const theme = extendTheme({
    styles,
    fonts,
    global,
    colors
});

export default theme;