import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {googleAPIkey} from "../credintials";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {
  }

  onLogin() {
    this.isLoggedIn?.next(true);
  }

  onLogout() {
    this.isLoggedIn?.next(false);
  }


  // TO verify it via API call
  googleSignIn(idToken: string) {
    return this._http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${googleAPIkey}`,
      {
        postBody: `id_token=${idToken}&providerId=google.com`,
        requestUri: 'http://localhost:4200',
        returnIdpCredential: true,
        returnSecureToken: true
      })
  }

}
