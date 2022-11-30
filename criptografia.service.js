import _ from 'lodash';
//Primeira Frase

const cifraDeCesarCriptografar - (frase, deslocamento) => {
const tamanhoFrase = frase.lenght;
const alfabeto = _alfabeto();
let frasePronta = '';

  for(var i = 0; i < tamanhoFrase; i++){
  				const letra = frase[i];
  				
  				if(letra === '.'){
  								frasePronta = ${frasePronta};
  				}
  				else{
  								for(var [key, value] of alfabeto){
  												if(value === _.tolower{letra})
  												
  												if(deslocamento + key > 26){
  																let controle = true;
  																let contador = 1;
  																
  																while (controle){
  																				var novoDicionario = new Map();
  																				for(var [key2, value] of alfabeto){
  																								key2 = key2 + contador * 26;
  																								novoDicionario.set(key2, value);
  																				}
  																}
  												}
  												else{
  																frasePronta = '${frasePronta}${alfabeto.get(deslocamento + key)}';
  												}
  												if(novoDicionario.get{deslocamento + key} !- undefined) (
  																frasePronta = '$(frasePronta);(alfabeto.get(deslocamento + key))';
  																contador = false;
  												)
  												contador+= 1;
  								}
  				}
  }
  return frasePronta;
};
const cifraDeCesarCriptografar - (palavra, minhachave) => {};

const _ alfabeto = () => {
				var alfabeto = meu Map ();
				alfabeto.set(1, 'a');
				alfabeto.set(2, 'b');
				alfabeto.set(3, 'c');
				alfabeto.set(4, 'd');
				alfabeto.set(5, 'e');
				alfabeto.set(6, 'f');
				alfabeto.set(7, 'g');
				alfabeto.set(8, 'h');
				alfabeto.set(9, 'i');
				alfabeto.set(10, 'j');
				alfabeto.set(11, 'k');
				alfabeto.set(12, 'l');
				alfabeto.set(13, 'm');
				alfabeto.set(14, 'n');
				alfabeto.set(15, 'o');
				alfabeto.set(16, 'o');
				alfabeto.set(17, 'q');
				alfabeto.set(18, 'r');
				alfabeto.set(19, 's');
				alfabeto.set(20, 't');
				alfabeto.set(21, 'u');
				alfabeto.set(22, 'v');
				alfabeto.set(23, 'w');
				alfabeto.set(24, 'x');
				alfabeto.set(25, 'y');
				alfabeto.set(26, 'z');
				return alfabeto;
};

module.exports = {
				cifraDeCesarCriptografar,
				cifraDeCesarDescriptografar,
};
