import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  arrProyectos: Project[]=[];
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/proyectos';
    this.getToken();
  }

  getToken(): void {
    let objetToken: any;
    this.httpClient.get('http://localhost:3000/api/token').subscribe(value=>{
      objetToken = value;
      localStorage.setItem('token',objetToken.token);
    });
  }

  getAllProjects(): Observable<Project[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token' : localStorage.getItem('token') || '{}',
      })
    };
    return this.httpClient.get<Project[]>(this.baseUrl,httpOptions);
  }

  getProjectsByCategory(category:string) : Observable<Project[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token' : localStorage.getItem('token') || '{}',
      })
    };
    return this.httpClient.get<Project[]>(this.baseUrl+'/'+category,httpOptions);
  }
}
