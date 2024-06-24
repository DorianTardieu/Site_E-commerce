import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyQuizService {
  private apiUrl = 'http://localhost:3000/questionList';

  constructor(private http: HttpClient) {}

  getQuizQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
