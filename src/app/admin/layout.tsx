import Header from '@/components/Header'
import { Box } from '@mui/material'


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Box>
        <Box sx={{
          display: "-ms-flexbox",
        }}> 
     
       </Box>
      <Header headerTitle='Admin Header' />
        <main>
        {children}
        </main>
     </Box>
   
   
    
    </>

  )
}
