import { Livro } from "./livro-model";
import { Usuario } from "./usuario.model";

export interface Emprestimo {
    emprestimoId: number;
    livro: Livro;
    usuario: Usuario;
    dataEmprestimo: Date;
    dataFinal: Date;
}