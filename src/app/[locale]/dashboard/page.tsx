
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface DashboardProps{
user? : any;
}
export default function Dashboard(props : DashboardProps) {

  return (
    <div>
    <Box>
    <Box sx={{}}>
          <LanguageSwitcher hrefEN={'/dashboard'} hrefTR={'/dashboard'} />
        </Box>
      <Typography variant="h4" sx={{ color:'purple'}}>
          Dashboard Page
      </Typography> 
      </Box>
      <Box>
      <Typography variant="caption" sx={{ color: 'purple' }}>
        Welcome, {props.user?.name || 'Guest'}! {/* props.user ile kullanıcı adını görüntüleme */}
      </Typography>
      <Link href={"/login"}>.</Link>
      </Box>
      </div>
  )
}
