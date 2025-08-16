import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { LogoutComponent } from './components/logout/logout.component';
import { DinheiroDirective } from './directives/dinheiro.directive';
import { MaiusculoDirective } from './directives/maiusculo.directive';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [
    MenuComponent,
    LoadingComponent,
    LogoutComponent,
    DinheiroDirective,
    MaiusculoDirective,
    MatGridListModule,
    
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MatGridListModule,
    
  
  ],exports:[
    MenuComponent,
    LoadingComponent,
    LogoutComponent,
    DinheiroDirective,
    MaiusculoDirective,
    MatGridListModule,
    

  ]
})
export class SharedModule { }
