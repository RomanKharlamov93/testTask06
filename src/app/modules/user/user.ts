export class UserPayload {
  email: string | null;
  password: string | null;
  returnSecureToken: boolean | null;

  constructor() {
    this.email = null;
    this.password = null;
    this.returnSecureToken = false;
  }
}
