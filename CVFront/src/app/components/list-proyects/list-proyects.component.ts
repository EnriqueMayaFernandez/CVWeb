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

  constructor(private projectServices: ProjectsService) {}

  ngOnInit(): void {
    this.getProjets();
  }

  getProjets() {
    this.projectServices.getAllProjects().subscribe((value) => {
      this.arrProjects = value;
      console.log(this.arrProjects);
    });
  }
}
