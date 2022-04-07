import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { __await } from 'tslib';
import { ProjectsService } from '../../services/projects-service';

@Component({
  selector: 'app-view-proyect',
  templateUrl: './view-proyect.component.html',
  styleUrls: ['./view-proyect.component.scss'],
})
export class ViewProyectComponent implements OnInit {

  project: Project={_id:"",titulo:"",description:"",url:"",client:"",urlClient:"",category:""};

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getProjectById(params['id']);
    });
  }


  getProjectById(pId:string){
    this.projectService.getProjectById(pId).subscribe((value) =>{
      console.log(value);
      this.project._id=value['_id'];
      this.project.titulo=value.titulo;
      this.project.description=value.description;
      this.project.category=value.category;
      this.project.client=value.client;
      this.project.url=value.url;
      this.project.urlClient=value.urlClient;
    });
    console.log(this.project);
  }
}
