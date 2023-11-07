
import { Box, Typography } from "@mui/material";

interface HeaderProps{
  headerName: string;
  headerTitle: string
}
export default function Header(props: HeaderProps) {
  
  const {
    headerName,
    headerTitle
  } = props;
  return (
    <>
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      mb:6,
      justifyContent:'center',
      alignItems:'center',
    }}>

        <Typography variant="h3" >
         {headerName}           
        </Typography>
        <Typography variant="subtitle1">
        {headerTitle}
        </Typography>
    </Box>
    </>
  )
}
