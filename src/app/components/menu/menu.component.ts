import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  // TIPO DE DATOS QUE MANEJARA LA TABLA
  datasourceTable : MatTableDataSource<MenuDatos> =  new MatTableDataSource<MenuDatos>();
  // COLUMNAS QUE HABRAN EN LA TABLA
  displayColumns = ['ID','Nombre','Precio', 'Descripcion','Acciones'];
  // PAGINADOR DE LA TABLA
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
    
  constructor(
    // SERVICIO PARA OBTENER LAS RUTAS
    private route: ActivatedRoute
  ){
       

  }

  ngOnInit(){
    this.cargarTabla();
  }

  ngAfterViewInit() {
    this.datasourceTable.paginator = this.paginator ?? null;
  }

  cargarTabla(){
    this.datasourceTable.data = [
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
      },
      {
        idItem:3,
        nombre:'Vaso',
        precio:'10',
        descripcion:'Vidrio'
      },
      {
        idItem:4,
        nombre:'Vaso',
        precio:'10',
        descripcion:'Vidrio'
      },
      {
        idItem:5,
        nombre:'Vaso',
        precio:'10',
        descripcion:'Vidrio'
      },
      {
        idItem:6,
        nombre:'Vaso',
        precio:'10',
        descripcion:'Vidrio'
      }
    ];
  }
}

// TIPO DE DATOS QUE MANEJARA LA TABLA
type MenuDatos = {
  idItem?:number,
  nombre?:string,
  precio?:string,
  descripcion?:string
}