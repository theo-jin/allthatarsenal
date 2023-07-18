import { getServerSession } from 'next-auth';
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import CreateNewPlayer from "./CreateNewPlayer"
import FailPage from "./FailPage"

export default async function Register() {
  let session = await getServerSession(authOptions)

  return (
      <>
    {session ? <CreateNewPlayer/>:<FailPage/> }
    </>
    )
  }