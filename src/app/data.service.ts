import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) {}

  getPosts(): Observable<unknown[]> {
    return this.http.get<unknown[]>(this.postsUrl);
  }
}
