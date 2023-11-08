import { Box, Typography } from '@mui/material';
import Link from 'next-intl/link';

interface LanguageSwitcherProps {
  hrefEN: string;
  hrefTR: string;
}
const LanguageSwitcher = (props: LanguageSwitcherProps) => {

  return (
    <Box
      sx={{
        position: "fixed",
        display: 'flex',
        flexDirection: 'row',
        top: "10px", // Adjust as needed
        right: "10px", // Adjust as needed
        zIndex: 9999, // Adjust as needed
      }}
    >
      <Link href={props.hrefEN} locale="en">

        <Typography variant='subtitle1'>
          EN
        </Typography>

      </Link>
      <Typography variant='subtitle1'>
        |
      </Typography>

      <Link href={props.hrefTR} locale="tr">

        <Typography variant='subtitle1'>
          TR
        </Typography>
      </Link>
    </Box>
  );
};

export default LanguageSwitcher;
