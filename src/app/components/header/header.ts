import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../theme';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navLinks = signal([
    { label: 'About', path: '#about' },
    { label: 'Projects', path: '#projects' },
    { label: 'Experience', path: '#experience' }
  ]);

  socialLinks = signal([
    { label: 'GitHub', icon: faGithub, url: 'https://github.com/Amelia-H-hub'},
    { label: 'LinkedIn', icon: faLinkedin, url: 'https://www.linkedin.com/in/amelia-huang-3b5244262/'},
    { label: 'Email', icon: faEnvelope, url: 'mailto:amelia.huang395@gmail.com'}
  ])

  constructor(public themeService: ThemeService) {}
}
