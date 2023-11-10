import { Typography } from '@mui/material';
import Link from 'next-intl/link';
interface CustomLinkProps{
  text: string;
  variant?: "h1" |"h2" | "h3" | "h4"| "subtitle1" | "subtitle2";
  link:string;
  linkText?: string;
  boldLinkText?: string;

}
export default function CustomLink(props: CustomLinkProps) {
  return (
    <Typography variant={"subtitle2"}>
    {props.text} <Link href={props.link}  >
        {props.linkText}
        <b>{props.boldLinkText}</b>
       </Link>
    </Typography>
  )
}
