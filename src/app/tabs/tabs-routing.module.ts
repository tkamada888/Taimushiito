import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {CalendarioPage} from "../calendario/calendario.page";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('../usuarios/usuarios.module').then(m => m.UsuariosPageModule)
      },
      {
        path: 'empresas',
        loadChildren: () => import('../empresas/empresas.module').then(m => m.EmpresasPageModule)
      },
      {
        path: 'funcionarios',
        loadChildren: () => import('../funcionarios/funcionarios.module').then(m => m.FuncionariosPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('../calendario/calendario.module').then(m => m.CalendarioPageModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('../auth/register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
