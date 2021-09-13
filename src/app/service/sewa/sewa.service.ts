import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Sewa } from 'src/app/model/Sewa';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SewaService {

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  svcUrl = 'http://localhost:8081/sewa/';

  getAllSewa(): Observable<Sewa[]> {
    const dataSewa = this.httpClient.get<Sewa[]>(this.svcUrl).pipe(
      tap((result) =>
        this.msgSvc.add(
          'SewaService.getAllSewa(): Sewa berhasil diload dari WebService!'
        )
      ),
      catchError(this.msgSvc.handleError<Sewa[]>('getAllSewa failed', []))
    );

    return dataSewa;
  }

  getSewaById(sewaId: number): Observable<Sewa> {
    const dataSewa = this.httpClient.get<Sewa>(this.svcUrl + sewaId).pipe(
      tap((result) =>
        this.msgSvc.add(
          'SewaService.getSewaById(): Sewa (' + sewaId + ') berhasil diload dari WebService!'
        )
      ),
      catchError(this.msgSvc.handleError<Sewa>('getSewaById failed'))
    );

    return dataSewa;
  }
}
