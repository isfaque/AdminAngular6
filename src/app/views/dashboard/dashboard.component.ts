import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }

}
