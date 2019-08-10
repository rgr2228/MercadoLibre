import { Component } from '@angular/core';
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
  seller=null;

  constructor(private http:HttpClient) { }

  getProducts(prod){
    this.http.get(`https://api.mercadolibre.com/sites/MCO/search?q=${prod.value}`)
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
