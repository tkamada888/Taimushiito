import { Component } from '@angular/core';
import { Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-funcionarios',
  templateUrl: 'funcionarios.page.html',
  styleUrls: ['funcionarios.page.scss']
})
export class FuncionariosPage {

  constructor(private router:Router) {}

  abrirCadastro(valor) {
    let navigationExtras: NavigationExtras = {
      state: {
        cadastroTipo: valor
      }
    };
    this.router.navigate(['register'], navigationExtras);
  }
}
