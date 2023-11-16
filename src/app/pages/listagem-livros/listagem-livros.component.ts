import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Livro } from 'src/app/models/livro-model';

@Component({
  selector: 'app-livro-listar',
  templateUrl: './listagem-livros.component.html',
  styleUrls: ['./listagem-livros.component.css']
})
export class ProdutoListarComponent {

  livros: Livro[] = [];

  constructor(private client: HttpClient){ 
  }

  ngOnInit() : void{
    this.client.get<Livro[]>("https://localhost:7150/api/livro/listar")
      .subscribe({
        next: (livros) => {
          this.livros = livros;
          console.table(livros);
        }, 
        error: (erro) => {
          console.log(erro);
        }
      })
  }
}
