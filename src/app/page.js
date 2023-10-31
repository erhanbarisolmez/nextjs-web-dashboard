'use client'
import { useRouter } from 'next/navigation';
import RootLayout from './layout';
export default function Page() {
  const router = useRouter();
 // Örnek: Belirli bir koşul sağlandığında LoginPage'e yönlendirme yapın
 const shouldRedirectToLoginPage = true; // Bu koşulu kendi ihtiyaçlarınıza göre ayarlayın

 if (shouldRedirectToLoginPage) {
   router.push('/login');
 }
 
  return (
    <>
    <RootLayout>
      
    </RootLayout>
    </>
  )
}
