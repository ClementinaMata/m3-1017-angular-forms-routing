import { Component, OnInit } from '@angular/core';
import { IQuote } from '../interfaces/IQuote';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frases-list',
  templateUrl: './frases-list.component.html',
  styleUrls: ['./frases-list.component.css']
})
export class FrasesListComponent implements OnInit {

  frases:Array<IQuote> = [
    {
      texto: "Teneis que aprender a volar solos",
      nivel_de_gracia: 10
    },
    {
      texto: "Me han despedido tantas veces que ya no tiene gracia",
      nivel_de_gracia: 0
    },
    {
      texto: "Me han contratado tantas veces que ya no tiene gracia",
      nivel_de_gracia: 0
    }
  ];
  nombre:string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params
      .subscribe((params) => this.nombre = params['nombre']);
  }

  ngOnInit() {

  }

  deleteFrase(indice:number){
    this.frases.splice(indice,1);
    //this.router.navigate(['/home']);
  }

}
