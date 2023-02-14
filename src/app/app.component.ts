import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-introducao';
  obterAutor() {
    return "Vinicius";

  }

   nome = 'Vinicius';
   sobrenome = 'Faoro Soares';
   idade = 17;

  nomeCompleto () {
    return this.nome + ' ' + this.sobrenome;
  }
}
