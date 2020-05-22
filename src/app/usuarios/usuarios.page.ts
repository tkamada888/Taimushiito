import { Component } from '@angular/core';
import { Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss']
})
export class UsuariosPage {
  
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
