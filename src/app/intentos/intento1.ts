// export class AppComponent {
//     title = 'cesar';
  
//     abc : string[] = [
//       'a', 'b', 'c','e',
//       'f', 'g', 'h','i',
//       'j', 'k', 'm','n',
//       'o', 'p', 'q','r',
//       's', 't', 'u','v',
//       'w', 'x', 'y','z',
//     ];
  
//     arrPalabra : string [] = ['c','a','s','a'];
  
//     //implementar find()
  
//     idxLetra = this.abc.indexOf( this.arrPalabra[1] );
  
//     idxcifrado = this.idxLetra + 3;
  
//     letraCifrada = this.abc[this.idxcifrado];
  
//     arrPalabraCifrada: string [] = [ ];
//     //  ----> implementar push() MEJOOOR¡¡¡
    
//     cifrar(){
    
//       console.log( 'Posicion letra en abc ' + this.idxLetra );
//       // console.log( 'Letra a cifrar ' + this.arrPalabra[1] );
//       console.log( 'Posicion de letra nueva ' + this.idxcifrado );
//       console.log( 'Letra cifrada '+ this.letraCifrada);
  
//       this.arrPalabraCifrada.push( this.letraCifrada )
  
//       this.arrPalabraCifrada.forEach(element => {
//       console.log( 'Arreglo palabra cifrada: ' + element );
//     });
  
//   }