import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button } from '@mui/material';
interface SignInWithButtonProps{
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
}

export default function SignInWithButton(props: SignInWithButtonProps) {

  const {
    variant= "contained",
    color = "info",
    size = "medium",

  } = props;

  return (
    <Box sx={{
      display:'flex',
      flexDirection:{xs:'column',md:'row'},
      
    }}>
      <Button variant={variant} color={color} startIcon={<GoogleIcon />} size={size} sx={{ mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
        Sign in with google
     
      </Button>
      <Button variant={variant}  color={color} startIcon={<AppleIcon />} size={size}  sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}>
        Sign in with Apple
    
      </Button>
    </Box>
  )
}
