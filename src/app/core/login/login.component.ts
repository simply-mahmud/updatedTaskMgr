import {Component} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: any;
  loggedIn: any;

  constructor(private socialAuthService: SocialAuthService, private cookieService: CookieService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.googleSignIn();
  }


  // loginCheck() {
  //   this.authService.googleSignIn(this.cookieService.get('google_idToken'));
  // }

  googleSignIn() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);

      if (this.user) {
        this.authService.onLogin();
        this.cookieService.set('google_idToken', this.user.idToken);
        this.cookieService.set('google_name', this.user.name);
        this.cookieService.set('google_email', this.user.email);
        this.router.navigate(['/dashboard']);
        console.log('going to dashboard');
      }
    });
  }

}
