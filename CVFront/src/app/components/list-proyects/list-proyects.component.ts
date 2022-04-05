import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-list-proyects',
  templateUrl: './list-proyects.component.html',
  styleUrls: ['./list-proyects.component.scss']
})
export class ListProyectsComponent implements OnInit {

  arrProjects: Project[]=[];


  constructor(private ProjectServices: ProjectsServiceService) { 
    this.arrProjects=this.ProjectServices.getProjects();
  }

  ngOnInit(): void {
    console.log(this.arrProjects);
  }

}
