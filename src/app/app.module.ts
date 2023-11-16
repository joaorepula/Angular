import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioCadastrarComponent } from "./pages/login/usuario-login.component";
import { ProdutoListarComponent } from "./pages/listagem-livros/listagem-livros.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, UsuarioCadastrarComponent,ProdutoListarComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
