import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { ProfessionalExpComponent } from './sections/professional-exp/professional-exp.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        AboutComponent,
        ContactsComponent,
        HeroComponent,
        ProfessionalExpComponent,
        ProjectsComponent,
        SkillsComponent,
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
})
export class LandingComponent {}
