import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cd } from '../../models/cd';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http : HttpClient) { }

  getAllCDS(): Observable<Cd[]> {
    return this.http.get<Cd[]>('http://localhost:3001/CD');
  }

  getCdById(id: number): Observable<Cd>{
    const cd = this.http.get<Cd>('http://localhost:3001/CD/'+id);
    if(cd){
      return cd;
    }
    throw new Error ("Cd introuvable");
  }

  addCD(cd: Cd): Observable<Cd>{
    return this.getAllCDS().pipe(
      map(cds => [...cds].sort((a,b) => a.id - b.id)),
      map(cds_tries => cds_tries[cds_tries.length - 1]),
      map(cd_max => (cd.id=cd_max.id+1)),
      switchMap(cd => this.http.post<Cd>('http://localhost:3001/CD', cd))
    );
  }

}
