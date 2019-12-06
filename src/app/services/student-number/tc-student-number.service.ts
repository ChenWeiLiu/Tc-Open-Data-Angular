import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {StudentNumber} from './student-number';

@Injectable({
  providedIn: 'root'
})
export class TcStudentNumberService {

  constructor(
    private http: HttpClient,
  ) {
  }

  private studentURL = '/tc-api/api/student-number/type/json';
  /** Log a HeroService message with the MessageService */
  private static log(message: string) {
    console.log(`HeroService: ${message}`);
  }

  getStudentNumbers(): Observable<StudentNumber[]> {
    return this.http.get<StudentNumber[]>(this.studentURL)
      .pipe(
        tap(() => TcStudentNumberService.log('fetched heroes')),
        catchError(this.handleError<StudentNumber[]>('getStudentNumbers', []))
      );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      TcStudentNumberService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
