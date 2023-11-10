'use client'
import CustomButton from "@/components/CustomButton";
import CustomLink from "@/components/CustomLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box, Link, TextField, Typography } from "@mui/material";


interface TwoFactorVerificationProps {
  headerName: string;
  headerTitle: string;
  securityCode: string;
  buttonTitle: string;
  customLinkText: string;
  customButtonBoldLink:string;
  customButtonBoldLink2:string;
  customLinkText2:string;
  terms: string;
  plans: string;
  contactUs: string;
}

export const TwoFactorVerificationComponent = (props: TwoFactorVerificationProps) => {
  const submitLink = `phone/twoFactorVerification?phoneNumber=`;

  return (

    <Box sx={{
      display: "flex",
      flexDirection: 'column',
      width: '60%',
      height: '100vh',
      justifyContent:'center',
      justifyItems:'center',
    }}>
      <Box sx={{}}>
        <LanguageSwitcher hrefEN={'/login/' + submitLink} hrefTR={'/login/' + submitLink} />
      </Box>
      <Header
        headerName={props.headerName}
        headerTitle={props.headerTitle}
      />
      <Typography variant="body1"
        sx={{
          display: "flex",
          justifyContent: "center",

        }}>
        <b> ******7899{ }</b>
      </Typography>


      <Link href="/login/phone">
        <KeyboardBackspaceOutlinedIcon fontSize="medium" sx={{ color: 'white' }} />
      </Link>


      <Typography variant="subtitle2"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          mt: 2
        }}>

        <b>{props.securityCode}</b>
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Box key={index} sx={{ mr: 1, textAlign: 'center', width: '30%', backgroundColor: 'white', borderRadius: 1, }}>
              <TextField
                variant="outlined"
                maxRows={1}
              />

            </Box>
          ))}
        </Box>

      </Box>
      <Box sx={{ mt: 3 }}>
        <CustomButton buttonTitle={props.buttonTitle} />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        mt: 3,
        justifyContent: 'center'
      }}>
        <CustomLink text={props.customLinkText} link={"Resend"} boldLinkText={props.customButtonBoldLink} />
        <Box sx={{ ml: 0.5 }}>
          <CustomLink text={props.customLinkText2} link={"CallUs"} boldLinkText={props.customButtonBoldLink2} />
        </Box>
      </Box>

      <Footer terms={props.terms} plans={props.plans} contactUs={props.contactUs}/>
    </Box>

  )
}
