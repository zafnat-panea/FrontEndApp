import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  reorderDisable: boolean = true;

  personajes: string[] = ['Aquaman','Superman','Batman','Spiderman','Hulk','McGregor'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){

    console.log(event);

    const itemMover = this.personajes.splice(event.detail.from,1)[0]; //indicamos lo que vamos a coger, que el from es la posición y el 1 es el número que vamos a tomar
    this.personajes.splice(event.detail.to, 0, itemMover);

    event.detail.complete(); //Para completar el reordenamiento de los items, sin esto no es posible ya que se queda bloqueado.

    console.log(this.personajes); // El array no está siendo modificado...
  }

  onClick(){

  }
}
