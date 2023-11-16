import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario.model";

@Component({
  selector: "usuario-login",
  templateUrl: "./usuario-login.component.html",
  styleUrls: ["./usuario-login.component.css"],
})
export class UsuarioCadastrarComponent {
  nome: string = "";
  cpf: string = "";
  endereco: string = "";
  senha: string = "";
  telefone: string = "";

  constructor(private client: HttpClient, private router: Router) {}

  cadastrar(): void {
    let usuario: Usuario = {
        nome: this.nome,
        cpf: this.cpf,
        endereco: this.endereco,
        senha: this.senha,
        telefone: this.telefone,
        usuarioId: 0,
        ativo: 0
    };

    this.client.post<Usuario>("https://localhost:7150/api/usuario/cadastrar", usuario).subscribe({
      next: (usuario) => {
        this.router.navigate(["listagem/livros"]);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
