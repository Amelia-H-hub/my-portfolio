import { Component, ElementRef, signal, viewChild, effect, afterNextRender } from '@angular/core';
import { Experience } from './experience.model';

@Component({
  selector: 'app-experience-list',
  imports: [],
  templateUrl: './experience-list.html',
  styleUrl: './experience-list.scss',
})
export class ExperienceList {
  experiences = signal<Experience[]>([
    {
      id: 1,
      company: 'SYSTEX Corporation',
      role: 'Frontend Developer',
      period: '2024/03 - 2025/06',
      location: 'Taipei, Taiwan',
      description: [
        'Developed the frontend of a Brokerage Settlement Payment System',
        'Developed responsive frontend interfaces using Angular and PrimeNg, improving usability and cross-device consistency.',
        'Collaborated with backend developers on scalable API integration, reducing system latency and enhancing data loading efficiency.',
        'Engaged with clients to clarify business requirements and participated in UI/UX improvements, resulting in smoother workflows and more accurate feature delivery.',
        'Debugged and maintained features, enhancing overall system stability and performance.'
      ]
    },
    {
      id: 2,
      company: 'eCloudvalley Digital Technology Co., Ltd.',
      role: 'Application Engineer',
      period: '2022/05 - 2024/02',
      location: 'New Taipei City, Taiwan',
      description: [
        'Developed and maintained internal e-form systems using Power Apps and Power Automate, streamlining approval workflows.',
        'Maintained and supported SAP S/4 HANA across all modules, ensuring system reliability and minimizing downtime for business operations.',
        'Conducted system analysis through stakeholder interviews and documentation, identifying process bottlenecks.',
        'Created interactive data reports and dashboards with Power BI to improve data visibility for management and support data-driven decision-making.'
      ]
    }
  ])

  isVisible = signal(false);

  private container = viewChild<ElementRef>('experienceContainer');

  constructor() {
    afterNextRender(() => {
      const element = this.container()?.nativeElement;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            observer.unobserve(element); // only trigger once, then stop observing
          }
        },
        { threshold: 0.2} // trigger when 20% of the block enters the viewport
      );

      observer.observe(element);
    });
  }
}
