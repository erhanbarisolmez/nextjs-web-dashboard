'use client'
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
 // Örnek: Belirli bir koşul sağlandığında LoginPage'e yönlendirme yapın
 const shouldRedirectToLoginPage = true; // Bu koşulu kendi ihtiyaçlarınıza göre ayarlayın

 if (shouldRedirectToLoginPage) {
   router.push('/login');
 }
 
  return (
    <>

 
    </>
  )
}
