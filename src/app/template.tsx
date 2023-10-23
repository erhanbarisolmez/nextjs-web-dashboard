
interface TemplateProps{
  children: React.ReactNode 
}
export default function Template(props: TemplateProps) {
  const {
    children
  } = props;
  return (
    <div>{children}</div>
  )
}
