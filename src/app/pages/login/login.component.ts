declare var google: any;
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
   if(sessionStorage.getItem('loggedinUser')!=null){
      this.router.navigate(['browse'])
    }
    google.accounts.id.initialize({
      client_id:
        '303149220039-f6qgsvvgp0cfk96upbiijpmflc0b2aql.apps.googleusercontent.com',
      callback: (resp: any) => this.hangleLogin(resp),
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'pill',
      width: 350,
    });
    google.accounts.id.prompt();
  }
  // JWT : HEADER, PAYLOAD , SIGNATURE
  decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  hangleLogin(resp: any) {
    if (resp) {
      // decode the token
      const payload = this.decodeToken(resp.credential);
      // store in session
      sessionStorage.setItem('loggedinUser', JSON.stringify(payload));
      // navigate
      this.router.navigate(['browse']);
    }
  }
}
