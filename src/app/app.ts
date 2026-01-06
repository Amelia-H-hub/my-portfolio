import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { ProjectList } from './components/project-list/project-list';
import { ExperienceList } from './components/experience-list/experience-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    Hero,
    ProjectList,
    ExperienceList,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
