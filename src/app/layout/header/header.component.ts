import { Component, OnInit } from '@angular/core';

import { AuthUser } from '../../models';
import { UserService } from '../../pages/user/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public authUser: AuthUser;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.authUser$.subscribe((authUser) => (this.authUser = authUser));
  }

  public logOut() {
    this.userService.logout().subscribe();
  }
}
