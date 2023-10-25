import { Button } from "@mui/material";

interface CustomButtonProps{
  buttonTitle: string;
}
export default function CustomButton(props:CustomButtonProps) {
  return (
    <Button variant="contained" color={'info'} size='large' sx={{
      width:'100%',
    }} >
        {props.buttonTitle}
      </Button>
  )
}
