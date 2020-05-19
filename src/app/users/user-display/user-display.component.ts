import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  @Input() users;
  
  constructor() { }

  ngOnInit(): void {
  }

}
