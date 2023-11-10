import AdvertSpace from "@/components/AdvertSpace";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

interface LeftContentProps{
  children: React.ReactNode
}
export default function LeftContent(props: LeftContentProps) {
  const t = useTranslations('LOGIN.LeftContent');
  return (
    
      <Box sx={{
        display: "grid",
        flexDirection: 'column',
        p: 3
      }}>
        {/* Content */}
        <AdvertSpace headerName={t("header-name")} />
      </Box>

  )
}
