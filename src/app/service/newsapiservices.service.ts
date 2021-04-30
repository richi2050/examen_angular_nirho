import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http'
import { Observable  } from 'rxjs';

const AUTH_API = "http://localhost:3000/api/usuario/";
  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
   

  api_key = '550a3f6aa42543e1b54b5966d47388be'
  constructor(private _http:HttpClient) { }
  newsApiURls = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=550a3f6aa42543e1b54b5966d47388be`

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiURls); 
  }

  

  login(email: string, password: string): Observable<any> {
    return this._http.post(AUTH_API +'login', {
      email,
      password
    }, httpOptions);
  }

  registro(email: string, password: string,nombre: string): Observable<any> {
    return this._http.post(AUTH_API+'add' , {
      email,
      password,
      nombre
    }, httpOptions);
  }

}
