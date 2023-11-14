import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario.model";

@Component({
  selector: "app-usuario-login",
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
        CPF: this.cpf,
        Endereco: this.endereco,
        Senha: this.endereco,
        Telefone: this.telefone,
        usuarioId: 0,
        Ativo: 0
    };

    this.client.post<Usuario>("https://localhost:7150/api/usuario/cadastrar", usuario).subscribe({
      next: (produto) => {
        this.router.navigate(["pages/produto/listar"]);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
