import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private dataService: DataService) { }
  users;

  ngOnInit(): void {
    this.dataService.GetUsers()
      .subscribe(data => this.users = data.users);
  }
  sortedNASC = false;
  sortedEASC = false;

  sortName(){
    if(this.sortedNASC)
    {
      this.users.sort(this.sortByNameDESC);
      this.sortedNASC = false;
    }
    else
    {
      this.users.sort(this.sortByNameASC);
      this.sortedNASC = true;
    }

  }

  sortEmail(){
    if(this.sortedEASC)
    {
      this.users.sort(this.sortByEmailDESC);
      this.sortedEASC = false;
    }
    else
    {
      this.users.sort(this.sortByEmailASC);
      this.sortedEASC = true;
    }
  }

  sortByNameASC(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  sortByNameDESC(a,b) {
    if (a.name > b.name)
      return -1;
    if (a.name < b.name)
      return 1;
    return 0;
  }

  sortByEmailASC(a,b) {
    if (a.email < b.email)
      return -1;
    if (a.nemailame > b.email)
      return 1;
    return 0;
  }
  sortByEmailDESC(a,b) {
    if (a.email > b.email)
      return -1;
    if (a.nemailame < b.email)
      return 1;
    return 0;
  }
}
