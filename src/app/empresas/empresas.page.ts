import { Component } from '@angular/core';
import { Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-empresas',
  templateUrl: 'empresas.page.html',
  styleUrls: ['empresas.page.scss']
})
export class EmpresasPage {

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
