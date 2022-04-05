import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServiceService {
  arrProyectos: Project[];
  constructor() {
    this.arrProyectos = [{
      nombre: 'ejemplo',
      descripcion: 'me gusta ir al gimnasio',
      imagenes: [],
      url: 'http://www.google.es',
      ano: 2022,
      cliente: 'yo mismo',
      urlClient: 'http://www.google.es',
      categoria: 'web',
      tecnologias: 'de todo un poco',
    }];
  }
  getProjects() {
    return this.arrProyectos;
  }
}
