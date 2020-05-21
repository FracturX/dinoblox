import { apis, endpoints } from "../models/Auth.ts";
import { UserObject } from "../models/Objects.ts";



export async function searchUser(token: string, username: string): Promise<UserObject> {

  const response = await fetch(`${apis.Api}${endpoints.users}get-by-username?username=${username}`, 
    {headers: {
      Cookie: `.ROBLOSECURITY=${token}` // where token is the |_WARNINGASDAKSLDLASK|_TOKEN
    },
  });


  const user = await response.json() as UserObject

  return user;
}



