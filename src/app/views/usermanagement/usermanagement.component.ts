import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit() {

    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
    
  }

}
