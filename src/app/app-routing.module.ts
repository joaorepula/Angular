import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastrarComponent } from './pages/login/usuario-login.component';
import { ProdutoListarComponent } from "./pages/listagem-livros/listagem-livros.component";

const routes: Routes = [
  {
    path : "",
    component : UsuarioCadastrarComponent
  },
  {
    path : "listagem/livros",
    component : ProdutoListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
