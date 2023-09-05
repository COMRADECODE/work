import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  public apiUrl = 'https://crudcrud.com/api/389bf50bdce14e9d9f81f4941abc17d6/unicorns';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  createData(data: any): Observable<any> {
    console.log(data);
    return this.http.post<any>(this.apiUrl, data);
  }

  updateData(id: any, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, data);
  }

  deleteData(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
