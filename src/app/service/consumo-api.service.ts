import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';

// se debe installar flask-cors previamente para el servidor flask de api python
//pip install -U flask-cors

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  //apiUrlEj = 'https://jsonplaceholder.typicode.com'; // definimos la url de la api de jsonplaceholder
  //apiUrl = 'https://0dde-152-230-70-162.ngrok-free.app'; // definimos la url de la api en python con flask
  apiUrl = 'https://s5994bcd-5000.brs.devtunnels.ms/'; // definimos la url de la api en python con flask
 

  constructor(private http:HttpClient) { }

  /** 
  getPosts():Observable<any>{ // creamos un método que nos devuelva los posts de la api de jsonplaceholder
    return this.http.get(this.apiUrlEj+'/profesores').pipe(
      retry(3)
    );
  }
  */

  getPostDatosUsuario(idUser:number):Observable<any>{ // creamos un método que nos devuelva los posts de la api de profesores y alumnos
    return this.http.get(this.apiUrl+'/usuarios/'+idUser).pipe(
      retry(3)
    );
  }

  getPostProfesores():Observable<any>{ // creamos un método que nos devuelva los posts de la api de profesores y alumnos
    return this.http.get(this.apiUrl+'/profesores').pipe(
      retry(3)
    );
  }

  public getPostCursosProfesor(idProf:number):Observable<any>{ // creamos un método que nos devuelva los posts de la api de profesores y alumnos
    
    return this.http.get(this.apiUrl+'/profesores/'+idProf+'/cursos', this.httpOptions).pipe(
      retry(3)
    );
  }

  getPostsAlumnosCurso(idProf:number,idCurso:number):Observable<any>{ // creamos un método que nos devuelva los posts de la api de profesores y alumnos
    return this.http.get(this.apiUrl+'/profesores/'+idProf+'/cursos/'+idCurso+'/alumnos').pipe(
      retry(3)
    );
  }

  getPostLogin(user: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = { user, password };
    return this.http.post(url, body, this.httpOptions).pipe(
      retry(3),

      catchError((error) => {
        console.error('Error en login:', error);
        return throwError(error);
      })
    );
  }
}