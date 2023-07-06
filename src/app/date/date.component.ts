import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  message!: string;
  items = ['Angular', 'React', 'Vue', 'Bootstrap', 'Node.js'];
  loggedIn = true;
  isCollapsed: boolean = true;
  text: string = 'Hello World';
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor() {
    setInterval(() => {
      this.message = new Date().toLocaleTimeString()
    },1000)
  }

  ngOnInit(): void {
  }

}
