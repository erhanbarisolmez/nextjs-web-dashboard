import { Box, Grid } from "@mui/material";
import LeftContent from './components/LeftContent';
import RightContent from "./components/RightContent";

export default function LoginPage() {
  return (
    <>
    <Grid container>
      <Box
       sx={{
        display: "flex",
        gridTemplateColumns:'repeat(1,1fr)',
        width:"1",
        height:'100vh',
        backgroundColor:'gray',
        justifyContent:'center'
       }}
      >
        {/* Left Content */}
       <LeftContent />
        

           {/* Right Content */}
          <RightContent />
        </Box>
     
      </Grid>
    </>

  )
}
