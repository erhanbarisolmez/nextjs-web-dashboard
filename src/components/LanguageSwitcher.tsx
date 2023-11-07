// components/LanguageSwitcher.'
import { Box } from '@mui/material';
import Link from 'next-intl/link';

const LanguageSwitcher = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "10px", // Adjust as needed
        right: "10px", // Adjust as needed
        zIndex: 9999, // Adjust as needed
      }}
    >
      <Link href="/login" locale="en">
        English |
      </Link>
      <Link href="/login" locale="tr">
       Turkish
      </Link>
    </Box>
  );
};

export default LanguageSwitcher;
