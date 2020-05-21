export class Auth {
  

  private _token!: string;
  
  public get token() {
    return this._token
  }
  public login(cookieToken: string) {
    this._token = cookieToken
  }
}