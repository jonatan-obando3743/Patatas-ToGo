import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

const urlAPI = 'https://lab.invertebrado.co/api/'
let httpHeaders:  HttpHeaders = new HttpHeaders();

const token = localStorage.getItem('token');
httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token)
interface getApi{
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: getUser[]
}
interface getUser{
  first_name: string,
  last_name: string,
  email: string,
  id: number
}
/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class SubscribersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    console.log(httpHeaders)
    return  this.http.get<any>(urlAPI + "subscribers/", {headers: httpHeaders});
  }

  createUser(body:{}): Observable<any> {
    console.log(httpHeaders)
    return this.http.post<any>(urlAPI, {headers: httpHeaders, observable:'response'}, body);
 
  }

  deleteUserForIndex(index: number): Observable<any> {
    return this.http.delete<any>(urlAPI + '/'  + index)

  }
}
