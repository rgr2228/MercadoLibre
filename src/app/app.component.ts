import { Component } from '@angular/core';
import { Producto } from 'src/app/producto';
import { PRODUCTOS } from 'src/app/lista-producto';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  resultado = null;
  productos = [];

  constructor(private http:HttpClient) { }

  getProducts(prod){
    this.http.get(`https://api.mercadolibre.com/sites/MCO/search?q=${prod.value}&access_token=APP_USR-1571889202014738-081005-85785a8c04c0ed8b5b1c30d7d109a736-381239892`)
    .subscribe(
      result=>{
        this.resultado=result;
        console.log(this.resultado);
      },
      error=>{
        console.log("Error");
      }
    )
  }

}
