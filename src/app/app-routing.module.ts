import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TituloComponent } from './page/titulo/titulo.component';
import { SobrenosComponent } from './page/sobrenos/sobrenos.component';
import { ContatoComponent } from './page/contato/contato.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'titulo', component: TituloComponent},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
