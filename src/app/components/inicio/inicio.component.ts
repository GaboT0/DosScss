import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  // VARIABLE PARA OBTENER EL ID DE LA URL
  idInicio: number = 0;
  constructor(
    private route : ActivatedRoute
  ){
    // OBTENER EL ID DE LA URL
    this.idInicio = +(this.route.snapshot.paramMap.get('id') ?? 0);
  }

  ngOnInit(){
    console.log(this.idInicio);
  }

  
}
