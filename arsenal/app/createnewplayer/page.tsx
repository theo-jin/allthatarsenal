import { getServerSession } from 'next-auth';
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import CreateNewPlayer from "./CreateNewPlayer"
import FailPage from "./FailPage"

interface Session {
  user: {
    name: string;
   
  };
 
}

export default async function Register() {
  let session: Session | null = await getServerSession(authOptions);


  return (
      <>
    {session ? <CreateNewPlayer/>:<FailPage/> }
    </>
    )
  }