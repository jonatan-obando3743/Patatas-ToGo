import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';

const urlAPI = 'https://reqres.in/api/users'
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
    return  this.http.get<any>(urlAPI + "?page");
  }

  createUser(body:{}): Observable<any> {
    return this.http.post<any>(urlAPI, body);
 
  }

  deleteUserForIndex(index: number): Observable<any> {
    return this.http.delete<any>(urlAPI + '/'  + index)

  }
}
