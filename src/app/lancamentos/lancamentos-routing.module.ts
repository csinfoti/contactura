import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasComponent } from './receitas/receitas.component';
import { DespesasComponent } from './despesas/despesas.component';

const routes: Routes = [
  {path: 'receitas', component: ReceitasComponent},
  {path: 'despesas', component: DespesasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
