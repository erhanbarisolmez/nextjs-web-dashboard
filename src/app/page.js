'use client'
import { Box } from "@mui/material";
import { useRouter } from 'next/navigation';
import LoginPage from "./login/page";

export default function Page() {
  const router = useRouter();

  const handleGoToSettings = () => {
    router.push('/');
  }
  return (
    <>

       <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>

    <LoginPage />
    </Box>
    </>
  )
}
