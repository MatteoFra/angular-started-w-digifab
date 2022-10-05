import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  
  themeUser: boolean = !(
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  constructor(){
    console.log(this.themeUser);
  }

  theme$: EventEmitter<boolean> = new EventEmitter(true);

  getTheme(): boolean {
    return this.themeUser;
  }

  toggleTheme(): void {
    this.themeUser = !this.themeUser;
    this.theme$.next(this.themeUser)
  }
}
