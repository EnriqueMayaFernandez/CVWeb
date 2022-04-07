export class Project {
  public _id: string;
  public titulo: string;
  public description: string;
  public url: string;
  public client: string;
  public urlClient: string;
  public category: string;

  constructor(
    _id: string,
    titulo: string,
    description: string,
    url: string,
    client: string,
    urlClient: string,
    category: string
  ) {
    this._id = _id;
    this.titulo = titulo;
    this.description = description;
    this.url = url;
    this.client = client;
    this.urlClient = urlClient;
    this.category = category;
  }
}
