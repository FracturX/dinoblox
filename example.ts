import { Auth, searchUser, validateMembership } from 'https://deno.land/x/dinoblox/mod.ts';

let auth = new Auth();

auth.login('cooke')

const you = await searchUser(auth.token, "Superboy123450")
console.log(you)