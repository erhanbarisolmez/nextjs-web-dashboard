import { Box, Link, Typography } from "@mui/material";

interface FooterProps{
  terms?: string;
  plans?: string;
  contactUs?: string;
  sx?: {}
}
export default function Footer(props : FooterProps) {
  const {
    terms = "TERMS",
    plans = "PLANS",
    contactUs = "CONTACT US"
  } = props;
  return (
    <Box sx={{
      display:'flex',
      pt:5,
      justifyContent:'center',

     }}>
    <Typography variant='caption' >
    <b><Link href={"/"} sx={{color:'white'}}> {terms}  |</Link>
    <Link href={"/"} sx={{color:'white'}}> {plans}  |</Link>
    <Link href={"/"} sx={{color:'white'}}>  {contactUs} </Link></b>
    </Typography>
    
     </Box>
  );

}
