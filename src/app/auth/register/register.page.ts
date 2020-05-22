import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data: any;
  private usuario: boolean = false;
  private empresas: boolean = false;
  private funcionarios: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.cadastroTipo;
      }
    });
  }

  ngOnInit() {
    if (this.data == 'usuario') {
      this.usuario = true;
      this.empresas = false;
      this.funcionarios = false;
    } else if (this.data == 'empresas'){
      this.usuario = false;
      this.empresas = true;
      this.funcionarios = false;
    } else if (this.data == 'funcionarios'){
      this.usuario = false;
      this.empresas = false;
      this.funcionarios = true;
    }
  }
}
