import { Button } from "@mui/material";

interface CustomButtonProps{
  buttonTitle: string;
  onClick ?: () => void;
}
export default function CustomButton(props:CustomButtonProps) {
  const {onClick} = props;
  console.log(onClick);
  return (
    <Button variant="contained" color={'info'} size='large' onClick={onClick} sx={{
      width:'100%',
    }} >
        {props.buttonTitle}
      </Button>
  )
}
