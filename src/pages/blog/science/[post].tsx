import { useRouter } from "next/router"

export default function PostScience(){

  const router = useRouter();

  return (
    <h1>The {router.query.post}</h1>
  )
}