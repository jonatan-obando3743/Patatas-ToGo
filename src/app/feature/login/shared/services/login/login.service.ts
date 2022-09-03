import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlAPI = 'https://reqres.in/api/'

interface getApi{
  name: string,
  password: number,
}

interface responseI{
  token: string
}
@Injectable({
  providedIn: 'root',
})


export class LoginService {
  constructor(private http: HttpClient) { }

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(forms: { email: null | undefined; password: string | null | undefined; }):Observable<responseI> {
    let api = urlAPI + 'login';
    return this.http.post<any>(api, forms);

  }
}
