'use client'
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  'https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png',
  'https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_1280.png',
  'https://cdn.pixabay.com/photo/2018/01/14/23/05/ecommerce-3082813_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png',
];

interface AdvertSpaceProps{
  headerName?: string;
}

export default function AdvertSpace(props: AdvertSpaceProps) {
  const t = useTranslations('LOGIN.LeftContent');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 saniye (10000 milisaniye)

    return () => {
      clearInterval(interval);
    };
  }, []);
  const imageStyle = {
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Örnek: Gölge
  }
  return (
    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <Box sx={{
        width: '30%', height: 'auto', 
      }}>
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        width={500}
        height={300}
        style={imageStyle}
        layout='responsive'
      />
      </Box>
   
      <Box sx={{mt:'10px', textAlign:'center', alignContent:'center', alignItems:'center'}}>
        <Typography variant='h5'>
         <b>{props.headerName}</b>
        </Typography>

        <Typography variant='body2' paragraph={true}   sx={{maxWidth:500, mt:1}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum felis lacinia tincidunt rhoncus. Curabitur felis magna, bibendum nec nisl id, commodo ultricies risus. Phasellus vitae tincidunt risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        </Typography>
      </Box>
    </Box>
  );
}
