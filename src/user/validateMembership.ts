import { apis, endpoints } from "../models/Auth.ts";
import { UserObject } from "../models/Objects.ts";

export async function validateMembership(token: string, id: number): Promise<boolean | undefined> {

  const response = await fetch(`${apis.PremiumFeatures}${endpoints.users}${id}/validate-membership`,
  {headers: {
    Cookie: `.ROBLOSECURITY=${token}` // where token is the |_WARNINGASDAKSLDLASK|_TOKEN
  }
  })
  const status = response.status
  if (status == 401) {
    throw new Error("You do not have access to this data. Did you do client.login()?")
  }
  return await response.json()
}
