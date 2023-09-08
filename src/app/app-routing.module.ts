import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu-pri',
    loadChildren: () => import('./pages/menu-pri/menu-pri.module').then( m => m.MenuPriPageModule)
  },
  {
    path: 'op-disponible',
    loadChildren: () => import('./pages/op-disponible/op-disponible.module').then( m => m.OpDisponiblePageModule)
  },
  {
    path: 'op-solicitar',
    loadChildren: () => import('./pages/op-solicitar/op-solicitar.module').then( m => m.OpSolicitarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: ':num2/recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: ':num/registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'metodo-pago',
    loadChildren: () => import('./pages/metodo-pago/metodo-pago.module').then( m => m.MetodoPagoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
