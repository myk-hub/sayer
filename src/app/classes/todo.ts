export class Todo {
  id: number;
  text: string;
  // comment: string;

  constructor(id: number, text: string /*, comment: string */) {
    this.id = id;
    this.text = text;
    // this.comment = comment;
  };
}
