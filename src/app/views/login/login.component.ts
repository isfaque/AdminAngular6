import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit() {
    this.body.classList.add('login-page');
  }

}
