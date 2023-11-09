'use client'
import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TelInput from "@/components/TelInput";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box } from "@mui/material";
import Link from "next/link";
import { useState } from 'react';

interface PhoneComponentProps {
  terms: string;
  plans: string;
  contactUs: string;
  headerName: string;
  headerTitle: string;
  customButtonTitle: string;
  phoneNumber?: string;
}

export const PhoneComponent = (props: PhoneComponentProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const submitLink = `phone/twoFactorVerification?phoneNumber=${encodeURIComponent(phoneNumber)}`;

  const handleOnChange = (value: any) => {
    setPhoneNumber(value);
    console.log('handleOnChange' + setPhoneNumber);
  }

  const handleOnSubmit = (): void => {
    setPhoneNumber(phoneNumber);
    console.log("handleOnSubmit", phoneNumber);
  }

  return (

    <>
      <Box sx={{}}>
        <LanguageSwitcher hrefEN={'/login/phone'} hrefTR={'/login/phone'} />
      </Box>
      <Box sx={{
        display: "grid",
        p: 3
      }}>

        {/* Header Component */}
        <Header headerName={props.headerName} headerTitle={props.headerTitle} />
        <Box sx={{}}>
          <Link href="/login">
            <KeyboardBackspaceOutlinedIcon fontSize="medium" />
          </Link>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
          <TelInput onChange={handleOnChange} />
        </Box>

        <Link href={submitLink} passHref>
          <CustomButton buttonTitle={"Submit"} onClick={handleOnSubmit} />
        </Link>

        {/* Footer component */}
        <Footer terms={props.terms} plans={props.plans} contactUs={props.contactUs} />
      </Box>
    </>
  )
}
