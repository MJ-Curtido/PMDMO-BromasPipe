import { getLocaleId } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeInadecuadas'
})
export class PipeInadecuadasPipe implements PipeTransform {

  transform(value: String, palabrasInadecuadas: String): unknown {
    let listaPalabras = palabrasInadecuadas.split(',');

    listaPalabras.forEach(palabra => {
      let palabraCensurada: string = "";

      for (let i = 0; i < palabra.length; i++) {
        palabraCensurada += "*";
      }

      value = value.replace(palabra, palabraCensurada) //he intentado poner /palabra/gi para que sea ignore case pero no me deja
    });

    return value;
  }
}