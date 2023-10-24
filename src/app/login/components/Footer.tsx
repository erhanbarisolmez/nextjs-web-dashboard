import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [langue, setLangue] = useState("");

  const handleLanguageMenuOpen = (event: SelectChangeEvent) => {
    setLangue(event.target.value as string);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
      }}
    >
      <Box
        sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
          color:'white'
        }}
      >
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={langue}
          label="Language"
          onChange={handleLanguageMenuOpen}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          color:'white',

        }}
      >
        <Link href={"/"}> Language</Link>
        <Link href={"/"}> Terms</Link>
        <Link href={"/"}> Contact Us</Link>
      </Box>
    </Box>
  );
}
