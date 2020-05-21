# dino-blox
## A Deno wrapper for interacting with the Roblox Web API.

Currently under development for the Deno Runtime Environment.

### Example

```ts
import { Auth, searchUser, validateMembership } from 'https://deno.land/x/dinoblox/mod.ts';

let auth = new Auth();

auth.login('cooke')

const you = await searchUser(auth.token, "Superboy123450")
console.log(you)
```

## Contributing Guidelines

## Something Goes Here

