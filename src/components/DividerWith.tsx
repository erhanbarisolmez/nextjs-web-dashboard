import { Divider, Typography } from "@mui/material";

interface DividerWithProps{
  text:string;
}
export default function DividerWith(props: DividerWithProps) {
  const {
    text,
  } = props;
  return (
    <>

     <Divider orientation="horizontal" variant="fullWidth"  flexItem >
         <Typography variant="caption">{text}</Typography>
    </Divider>
    </>

  )
}
