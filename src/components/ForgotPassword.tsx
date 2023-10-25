import { Typography } from "@mui/material";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Link href={"/login/password-reset"}>
    <Typography variant="subtitle2">
    Forgot Password?
    </Typography>
  </Link>
  )
}
