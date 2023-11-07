
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';
interface TelInputProps{
  onChange?: (value: string) => void;
}
export default function TelInput(props:TelInputProps) {
  const {onChange} = props;
  const [value, setValue] = React.useState('')

  const handleChange = (newValue: any) => {
   
    setValue(newValue);
    console.log(value);
    // onChange(value);

  }
  return (
    
    <MuiTelInput  value={value} onChange={handleChange} fullWidth sx={{backgroundColor:'white', borderRadius:1,  mb:2}} />

  )
}
