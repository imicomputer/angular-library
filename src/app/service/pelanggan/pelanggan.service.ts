import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pelanggan } from 'src/app/model/Pelanggan';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  svcUrl = 'http://localhost:8081/pelanggan/';

  getAllPelanggan(): Observable<Pelanggan[]> {
    const dataPelanggan = this.httpClient.get<Pelanggan[]>(this.svcUrl).pipe(
      //when success
      tap((result) => this.msgSvc.add('PelangganService.getAllPelanggan(): Pelanggan berhasil diload dari WebService!')),
      //when failed
      catchError(this.msgSvc.handleError<Pelanggan[]>('getAllPelanggan failed', []))
    )

    return dataPelanggan;
  }
}
