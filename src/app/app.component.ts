import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cesar';

  abc : string[] = [
    'a', 'b', 'c','e',
    'f', 'g', 'h','i',
    'j', 'k', 'm','n',
    'o', 'p', 'q','r',
    's', 't', 'u','v',
    'w', 'x', 'y','z',
  ];

  // x=a y=b z=c  puedo solo llenar el arreglo despues de la z con esos

  // arrPalabra : string [] = ['c','a','s','a'];
  arrPalabra : string [] = ['h','u','e','v','o','s'];

  idxLetra:number;

  idxcifrado: number;

  letraCifrada: string;

  arrPalabraCifrada: string [] = [];

  palabraNueva:string;
  
//   cifrar(){
  
//     console.log( 'Posicion letra en abc ' + this.idxLetra );
//     // console.log( 'Letra a cifrar ' + this.arrPalabra[1] );
//     console.log( 'Posicion de letra nueva ' + this.idxcifrado );
//     console.log( 'Letra cifrada '+ this.letraCifrada);

//     this.arrPalabraCifrada.push( this.letraCifrada )

//     this.arrPalabraCifrada.forEach(element => {
//     console.log( 'Arreglo palabra cifrada: ' + element );
//   });

// }

cicloCifrar(){
  for(let i = 0 ; i < this.arrPalabra.length; i++){

    this.idxLetra = this.abc.indexOf( this.arrPalabra[i] );

    this.idxcifrado = this.idxLetra + 3;
  
    this.letraCifrada = this.abc[this.idxcifrado];
  
    console.log( 'Posicion letra en abc ' + this.idxLetra );
    console.log( 'Posicion de letra nueva ' + this.idxcifrado );
    console.log( 'Letra cifrada '+ this.letraCifrada);

    this.arrPalabraCifrada.push( this.letraCifrada )

  }

    //     this.arrPalabraCifrada.forEach(element => {
    //   console.log( 'Arreglo palabra cifrada: ' + element );
    // });

    this.palabraNueva = this.arrPalabraCifrada.toString();

}

cicloFor(){
  for(let i = 0; i<10; i++){
      console.log('hola');
  }
}

}
