import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost/my_project/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login.php`, { email, password });
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registro.php`, user);
  }

  getEmpleados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/empleados.php`);
  }

  saveEmpleado(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardar_empleado.php`, empleado);
  }
}

