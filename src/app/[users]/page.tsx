import { notFound } from "next/navigation";

export default function UserPage({searchParams}: any) {
  console.log(searchParams);
  if (searchParams.error === "true") {
    notFound();
  }
  return (
    <div>UserPage {searchParams.user}</div>
  )
}
