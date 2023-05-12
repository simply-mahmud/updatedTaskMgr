import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoggedIn?: boolean;

  name = '';
  email = '';

  constructor(private cookieService: CookieService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.setUserInfo();
  }

  setUserInfo() {
    console.log('dashboard+bs: ', this.authService.isLoggedIn.value)

    if (this.authService.isLoggedIn.value) {
      this.name = this.cookieService.get('google_name');
      this.email = this.cookieService.get('google_email');

      console.log('in dashboard cookie')
    } else {
      // reload this page
      // this.location.reload();
      console.log('in dashboard cookie FALSE')
    }
  }

  verify() {
    console.log('ID TOKEN: ', this.cookieService.get('google_idToken'));
    this.authService.googleSignIn(this.cookieService.get('google_idToken')).subscribe(x => {
      console.log(x);
    })
  }

  logout() {
    this.cookieService.delete('google_idToken');
    this.cookieService.delete('google_name');
    this.cookieService.delete('google_email');
    this.router.navigate(['/login']);
    this.authService.onLogout();
  }


}
