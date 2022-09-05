import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const urlAPI = 'https://lab.invertebrado.co/api/';
let httpHeaders: HttpHeaders = new HttpHeaders();

const token = localStorage.getItem('token');
httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
interface getApi {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: getUser[];
}
interface getUser {
  first_name: string;
  last_name: string;
  email: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private http: HttpClient) {}

  getListUsers(): Observable<any> {
    return this.http.get<any>(urlAPI + 'subscribers/', {
      headers: httpHeaders,
    });
  }
  getUsers(id: number): Observable<any> {
    return this.http.get<any>(urlAPI + 'subscribers/' + id, {
      headers: httpHeaders,
    });
  }

  createSubcribers(body: {}): Observable<any> {
    return this.http.post<any>(urlAPI + 'subscribers/', body, {
      headers: httpHeaders,
    });
  }

  editSubcribers(body: {}, id: number): Observable<any> {
    return this.http.put<any>(urlAPI + 'subscribers/' + id, body, {
      headers: httpHeaders,
    });
  }

  getListCountries(): Observable<any> {
    return this.http.get<any>(urlAPI + 'countries/', {
      headers: httpHeaders,
    });
  }

  deleteUserForIndex(index: number): Observable<any> {
    return this.http.delete<any>(urlAPI + 'subscribers/' + index, {
      headers: httpHeaders,
    });
  }
}
