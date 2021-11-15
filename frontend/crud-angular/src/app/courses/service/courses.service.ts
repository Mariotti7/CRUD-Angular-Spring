import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list(){ // tap usado para depuração da resposta do que está sendo passado no método
    return this.httpClient.get<Course[]>(this.API).pipe(
      tap(courses => console.log(courses))
    );
  }
}


