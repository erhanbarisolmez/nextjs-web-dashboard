
interface HeaderProps{
  headerTitle: string
}
export default function Header(props: HeaderProps) {
  const {
    headerTitle,
  } = props;
  return (
    <h1>{headerTitle}</h1>
  )
}
