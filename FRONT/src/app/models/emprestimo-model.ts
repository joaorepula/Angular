import { Livro } from "./livro-model";
import { Usuario } from "./usuario.model";

export interface Emprestimo {
    EmprestimoId: number;
    Livro: Livro;
    Usuario: Usuario;
    DataEmprestimo: Date;
    DataFinal: Date;
}