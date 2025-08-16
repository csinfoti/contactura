import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { LancamentoService } from '../../shared/services/lancamento.service';
import { OperacaoTypeEnum } from '../../shared/enums/operacao-type.enum';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrl: './despesas.component.scss'
})
export class DespesasComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private lancamentoService: LancamentoService
  ) {  }
  
  ngOnInit(): void {
    this.initForm();
    if (this.lancamentoService.modoEdicao){
      const selecionado = this.lancamentoService.despesaSelecionada;
      this.formulario.patchValue({
        tipo: selecionado.tipo,
        ehFixo: selecionado.ehFixo,
        data: selecionado.data,
        descricao: selecionado.descricao,
        valor: selecionado.valor
      });
    }
  }
  /**
   * listagem dos tipos
   */
    get tipos(): string[] {
      return ['Alimentação','Habitação','Transporte','Educação','Lazer','Viagem'];
    }

    get buttonLabel(): string {
      return this.lancamentoService.modoEdicao ? 'Editar' : 'Salvar';
    }

    onLimpar(): void {
      this.formulario.reset();
    }

    onSalvar(): void {
      const despesa = this.formulario.value;
    }

    private initForm(): void {
      this.formulario = this.formBuilder.group({
        tipo: ['', Validators.required],
        ehFixo: false,
        data: moment().format(), 
        descricao: ['', Validators.required],
        valor: ['', Validators.required]
      });
    }

    // private editarDespesa(elem: IDespesa): void {
    //   this.mostrarLoading = true;
    //   this.lancamentoService.atualizarDespesa(elem).subscribe({
    //     next: (response) => {
    //       this.mostrarLoading = false;
    //       const retorno = response.body;
    //       if (retorno) {
    //         Swal.fire(
    //           'Sucesso',
    //           retorno.mensagem,
    //           'success'
    //           );
    //       }        
    //     },
    //     error: (err) => {
    //       this.mostrarLoading = false;
    //       Swal.fire(
    //         'Erro na operação',
    //         err.error.mensagem,
    //         'warning'
    //         );
    //     }
    //   })
    // }


}
