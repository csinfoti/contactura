import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDespesa } from '../../shared/models/despesa.interface';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrl: './despesas.component.scss'
})
export class DespesasComponent {

  formulario!: FormGroup;
  dataSource: IDespesa[] = [];
  displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  get valorTotal(): number {
    return 0;
  }

  onPequisar(): void {

  }

}
