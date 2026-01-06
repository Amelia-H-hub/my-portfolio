import { isPlatformBrowser } from '@angular/common';
import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  darkMode = signal<boolean>(false);

  constructor() {
    // only access localStorage in the browser
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this.darkMode.set(savedTheme === 'dark');
    }

    effect(() => {
      const isDark = this.darkMode();
      console.log(`Theme changed: ${isDark ? 'dark' : 'light'}`);
      if (isPlatformBrowser(this.platformId)) {
        if (isDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
    });
  }

  toggleTheme() {
    this.darkMode.update(v => !v);
  }
}
