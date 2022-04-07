import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects-service';

@Component({
  selector: 'app-list-proyects',
  templateUrl: './list-proyects.component.html',
  styleUrls: ['./list-proyects.component.scss'],
})
export class ListProyectsComponent implements OnInit {
  arrProjects: Project[] = [];
  arrCategories: string[] = [];

  constructor(private projectServices: ProjectsService) {}

  ngOnInit(): void {
    this.getProjets();
  }

  getProjets() {
    this.projectServices.getAllProjects().subscribe((value) => {
      this.arrProjects = value;
      const arrStrings = this.arrProjects.map((project) => {
        return project.category;
      });
      this.arrCategories = Array.from(new Set(arrStrings));
    });
  }

  loadCategories(category = '') {
    if (category !== '') {
      this.projectServices.getProjectsByCategory(category).subscribe((value) => {
        this.arrProjects = value;
        });
    } else {
      this.projectServices.getAllProjects().subscribe((value) => {
        this.arrProjects = value;
        });
    }
  }
}
