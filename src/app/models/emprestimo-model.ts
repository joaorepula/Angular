import { Livro } from "./livro-model";
import { Usuario } from "./usuario.model";

export interface Emprestimo {
    emprestimoId: number;
    livroId: number;
    usuarioId: number;
}