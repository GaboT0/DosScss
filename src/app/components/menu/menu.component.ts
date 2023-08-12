import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  datasourceTable? : MenuDatos[];
  displayColumns = ['ID','Nombre','Precio', 'Descripcion'];
  constructor(){

  }

  ngOnInit(){
    this.cargarTabla();
  
  }
  cargarTabla(){
    this.datasourceTable = [
      {
        idItem:1,
        nombre:'Vaso',
        precio:'10',
        descripcion:'Vidrio'
      },
      {
        idItem:2,
        nombre:'Vaso',
        precio:'10',
        descripcion:'Vidrio'
      }
    ];
  }
}

type MenuDatos = {
  idItem?:number,
  nombre?:string,
  precio?:string,
  descripcion?:string
}