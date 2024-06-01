export interface ILancamento{
    id?:number; //Id do lançamento
    data:string; //Data do lançamento no formato AAAA-MM-DD
    descricao:string; //Descrição do Lancamento
    ehFixo:boolean;  //Indica se é custo fixo
    ehReceita:boolean;  //Indica se é uma receita
    tipo:string; //Tipo do Lançamento
    valor:number;  //Valor do lançamento no formato 9999.99 
    mensagem?:string; //Mensagem sobre o lançamento
}