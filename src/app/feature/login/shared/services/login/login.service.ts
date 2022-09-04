import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlAPI = 'https://lab.invertebrado.co/api/'

interface getApi{
  UserName: string,
  Password: number,
}

interface responseI{
  Token: string,
  Status: number
}
@Injectable({
  providedIn: 'root',
})


export class LoginService {
  constructor(private http: HttpClient) { }

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(forms: { UserName: null | undefined; Password: string | null | undefined; }):Observable<responseI> {
    let api = urlAPI + 'account/login';
    return this.http.post<any>(api, forms);

  }
}
