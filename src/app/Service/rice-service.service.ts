import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RiceServiceService {
  constructor(private http: HttpClient) {}
  getTodayAmount(riceType: String): Observable<{ ricePrice: number }> {
    return this.http.get<{ ricePrice: number }>(
      `http://localhost:3000/Products/afterProcessing/${riceType}`
    );
  }
}
