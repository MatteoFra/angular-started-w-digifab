import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  
  @Input() title!: string;
  theme! : boolean

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.theme = this.themeService.getTheme()
    this.themeService.theme$.subscribe( value => this.theme = value);
  }

  changeTheme() {
    this.themeService.toggleTheme()
  }
}
