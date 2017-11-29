import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { IQuote } from '../interfaces/IQuote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{
  @Input() frase: IQuote = {
    texto: "Teneis que aprender a volar solos",
    nivel_de_gracia: 10
  };
  @Output() onDelete = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
    console.log("FRASE CREATED");
  }

  ngOnDestroy() {
    console.log("FRASE DESTROYED");
  }

  deleteFrase(){
    console.log(`delete quote!`);
    this.onDelete.emit();
  }

}
