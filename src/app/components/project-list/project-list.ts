import { Component, signal } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList {
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Travel Planner',
      type: 'Personal',
      description: 'A web app built with Reach and Python FastAPI that helps users plan their trips efficiently.',
      image: 'images/travel_planner.png',
      tags: ['Reach', 'Python', 'FastAPI', 'AWS lambda'],
      githubUrl: 'https://github.com/Amelia-H-hub/travel-planner',
      liveUrl: 'https://travel-planner-liart-theta.vercel.app/'
    },
    {
      id: 2,
      title: 'Securities Settlement System',
      type: 'Work',
      description: 'Engineered a robust front-end architecture for a securities settlement system, enabling real-time fund reconciliation and automated transaction processing. Leveraged Angular’s reactive patterns to handle high-frequency financial data with zero tolerance for inconsistency.',
      image: 'images/bank.jpg',
      tags: ['Angular 17', 'FinTech', 'RxJS']
    },
  ])
}
