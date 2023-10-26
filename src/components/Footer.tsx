import { Box, Link, Typography } from "@mui/material";

export default function Footer() {

  return (
    <Box sx={{
      display:'flex',
      pt:5,
      justifyContent:'center',

     }}>
    <Typography variant='caption' sx={{}} >
    <b><Link href={"/"} sx={{color:'white'}}> TERMS  |</Link>
    <Link href={"/"} sx={{color:'white'}}> PLANS  |</Link>
    <Link href={"/"} sx={{color:'white'}}> CONTACT US</Link></b>
    </Typography>
    
     </Box>
  );

}
