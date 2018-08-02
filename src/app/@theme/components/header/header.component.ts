import {Component, Input, OnInit} from '@angular/core';

import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {AnalyticsService} from '../../../@core/utils/analytics.service';
import {UserService} from "../../../services/user-service/user.service";


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{title: 'Profile'}, {title: 'Log out', link: '/auth/login'}];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              // private userService: UserService,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    console.log(this.userService.getUserLoggedIn())
    console.log(this.userService.getUserName())
    this.user = this.userService.getUserName();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
