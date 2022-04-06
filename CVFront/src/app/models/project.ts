export class Project {
  private nombre: string;
  private descripcion: string;
  private imagenes: [];
  private url: string;
  private ano: number;
  private cliente: string;
  private urlClient: string;
  private categoria: string;
  private tecnologias: string;

  constructor(
    nombre: string,
    descripcion: string,
    imagenes: [],
    url: string,
    ano: number,
    cliente: string,
    urlCliente: string,
    categoria: string,
    tecnologias: string
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagenes = imagenes;
    this.url = url;
    this.ano = ano;
    this.cliente = cliente;
    this.urlClient = urlCliente;
    this.categoria = categoria;
    this.tecnologias = tecnologias;
  }
}
