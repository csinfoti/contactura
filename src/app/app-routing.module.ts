import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReceitasComponent } from './Relatorios/receitas/receitas.component';
import { DespesasComponent } from './Relatorios/despesas/despesas.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' }, //redireciona rota
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'notfound', component: PageNotFoundComponent},
  {path: 'relatorios/despesas', component: DespesasComponent },
  {path: 'relatorios/receitas', component: ReceitasComponent },
  {path: 'lancamentos', loadChildren: () => import('./lancamentos/lancamentos.module').then(m =>
    m.LancamentosModule)}, 
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
