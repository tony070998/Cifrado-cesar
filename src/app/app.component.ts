import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cesar';

  abc : string[] = [
    'a', 'b', 'c','d',
    'e','f', 'g', 'h','i',
    'j', 'k', 'm','n',
    'o', 'p', 'q','r',
    's', 't', 'u','v',
    'w', 'x', 'y','z','a','b','c'
  ];


  // arrPalabra : string [] = ['c','a','s','a'];
  arrPalabra : string [] = ['t','o','n','y'];

  palabraOriginal: string = this.arrPalabra.toString();

  idxLetra:number;

  idxcifrado: number;

  letraCifrada: string;

  arrPalabraCifrada: string [] = [];

  palabraNueva:string;
  

cicloCifrar(){
  for(let i = 0 ; i < this.arrPalabra.length; i++){

    this.idxLetra = this.abc.indexOf( this.arrPalabra[i] );

    this.idxcifrado = this.idxLetra + 3;
  
    this.letraCifrada = this.abc[this.idxcifrado];
  
    // console.log( 'Posicion letra en abc ' + this.idxLetra );
    // console.log( 'Posicion de letra nueva ' + this.idxcifrado );
    // console.log( 'Letra cifrada '+ this.letraCifrada);

    this.arrPalabraCifrada.push( this.letraCifrada )

  }

    this.palabraNueva = this.arrPalabraCifrada.toString();

}

}
