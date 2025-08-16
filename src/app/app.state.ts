import { IDespesa } from "./shared/models/despesa.interface";
import { IReceita } from "./shared/models/receita.interface";

export class AppState{
    token: string = '';
    operacao: string = '';
    despesaSelecionada!:IDespesa;
    receitaSelecionada!:IReceita;
    

}