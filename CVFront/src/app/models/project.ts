export class Project {
  public _id: string;
  public titulo: string;
  public descripcion: string;
  public url: string;
  public cliente: string;
  public urlClient: string;
  public categoria: string;

  constructor(
    _id: string,
    titulo: string,
    descripcion: string,
    url: string,
    cliente: string,
    urlCliente: string,
    categoria: string
  ) {
    this._id = _id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.url = url;
    this.cliente = cliente;
    this.urlClient = urlCliente;
    this.categoria = categoria;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getId(): string {
    return this._id;
  }
}
