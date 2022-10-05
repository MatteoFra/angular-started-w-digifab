import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  title = 'digisaas';
  theme!: boolean;

  ngOnInit() {
    this.theme = this.themeService.getTheme()
    this.themeService.theme$.subscribe( value => this.theme = value);
  }
  
  constructor(private themeService: ThemeService) {}
}
