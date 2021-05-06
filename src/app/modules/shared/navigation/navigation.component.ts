import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/controls/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public userLogout() {
    this.userService.logout();
  }

}
