import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MenuAnimationSettingsModel, ToolbarComponent, MenuItemModel, MenuEventArgs, BeforeOpenCloseMenuEventArgs, OpenCloseMenuEventArgs, Menu, MenuComponent } from '@syncfusion/ej2-angular-navigations';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopmenuComponent {
  @ViewChild('toolbar')
  public tbObj: ToolbarComponent;
  @ViewChild('menubar') public menuObj: MenuComponent;

  public dataSource: { [key: string]: Object }[] = [
    {
      category: 'LCD Buyback'
    },
    {
      category: 'Blog'
    },
    {
      category: 'Support',

    },
    { category: 'My Account' },
    {
      category: 'Login',
      options: [
        {
          id: 'login',
          login: {
            value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
          }
        }
      ]
    },
    { category: 'Logout' },
  ];

  // Menu fields definition
  public menuFields: object = {
    text: ['category', 'value'],
    children: ['options']
  };

  public menuTemplate: any = '#menuTemplate';
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {

  }
  public onBeforeClose(args: BeforeOpenCloseMenuEventArgs) {
    if ((args.event.target as Element).closest('.e-textbox')) {
      args.cancel = true;
    }
  }

  public onCreated(): void {
    this.tbObj.refreshOverflow();
    this.menuObj.hideItems(['Logout']);
  }

  login(): void {
    if (this.username == '' || this.password == '') {
      alert('Invalid username/password');
    }
    else {
      // this.authService.authenticateUser('devadmin', 'india123')
      this.authService.authenticateUser(this.username, this.password).subscribe(token => {
        alert('Logged in successfully with token: ' + token);
        this.menuObj.hideItems(['Login']);
        this.menuObj.showItems(['Logout']);
        this.username = this.password = '';
      });
    }
  }

  select(args: MenuEventArgs) {
    if (args.item['category'] == 'Logout') {
      this.authService.logout();
      alert('Logged out successfully.');
      this.menuObj.showItems(['Login']);
      this.menuObj.hideItems(['Logout']);
    }
  }
}
