import { Link, Typography } from '@mui/material';
interface IfNotProps{
  text: string;
  variant?: "h1" |"h2" | "h3" | "h4"| "subtitle1" | "subtitle2";
  link:string ;
}
export default function IfNot(props: IfNotProps) {
  return (
    <Typography variant={"subtitle2"}>
    {props.text} <Link href={props.link} >
        <b>Sign Up</b>
       </Link>
    </Typography>
  )
}
