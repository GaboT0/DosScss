import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  idInicio: number = 0;
  constructor(
    private route : ActivatedRoute
  ){
    this.idInicio = +(this.route.snapshot.paramMap.get('id') ?? 0);
  }

  ngOnInit(){
    console.log(this.idInicio);
  }

  
}
