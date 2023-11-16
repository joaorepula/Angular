import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Emprestimo } from 'src/app/models/emprestimo-model';
import { Livro } from 'src/app/models/livro-model';
import { Router } from "@angular/router";
import { Usuario } from 'src/app/models/usuario.model'; // Importe o tipo de usuário

@Component({
  selector: 'app-livro-listar',
  templateUrl: './listagem-livros.component.html',
  styleUrls: ['./listagem-livros.component.css']
})
export class ProdutoListarComponent {

  livroId: number = 0;
  usuarioId: number = 0;
  livros: Livro[] = [];
  usuario: Usuario | undefined; 

  constructor(private client: HttpClient, private router: Router){ 
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['usuario']) {
      this.usuario = state['usuario'] as Usuario;
    }
  }

  ngOnInit() : void{
    this.client.get<Livro[]>("https://localhost:7150/api/livro/listar")
      .subscribe({
        next: (livros) => {
          this.livros = livros;
        }, 
        error: (erro) => {
          console.log(erro);
        }
      })
  }

  emprestar(livroId: number): void {
    if (this.usuario) {
      let emprestimoDeLivros: Emprestimo = {
        usuarioId: this.usuario.usuarioId,
        livroId: livroId,
        emprestimoId: 0
      };
      console.log(emprestimoDeLivros);

      this.client.post<Emprestimo>("https://localhost:7150/api/emprestimo/cadastrar", emprestimoDeLivros).subscribe({
        next: (emprestimo) => {
          console.log(emprestimo);
        },
        error: (erro) => {
          console.log(erro);
        },
      });
    } else {
      console.error('Usuário não encontrado');
    }
  }
}
