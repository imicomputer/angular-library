import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Buku } from 'src/app/model/Buku';
import { bukuSample } from 'src/app/buku-sample';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class BukuService {
  constructor(private httpClient: HttpClient, private msgSvc: MessageService) {}

  buku: Buku[] = bukuSample;
  svcUrl = 'http://localhost:8081/buku/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  test(): String {
    return 'Test BukuService';
  }

  testDataBuku(): Buku[] {
    return this.buku;
  }

  getAllBuku(): Observable<Buku[]> {
    const dataBuku = this.httpClient.get<Buku[]>(this.svcUrl).pipe(
      tap((result) =>
        this.msgSvc.add(
          'BukuService.getAllBuku(): Buku berhasil diload dari WebService!'
        )
      ),
      catchError(this.msgSvc.handleError<Buku[]>('getAllBuku failed', []))
    );

    return dataBuku;
  }

  updateBuku(buku: Buku): Observable<any> {
    const svcUrl = this.svcUrl + buku.id;

    return this.httpClient.put(svcUrl, buku, this.httpOptions).pipe(
      tap((result) =>
        this.msgSvc.add(
          'BukuService.updateBuku(): Buku berhasil diUpdate dari WebService!'
        )
      ),
      catchError(this.msgSvc.handleError<Buku[]>('updateBuku failed', []))
    );
  }

  addBuku(buku: Buku): Observable<any> {
    // console.log("buku", buku);
    return this.httpClient.post(this.svcUrl, buku, this.httpOptions).pipe(
      tap((result) =>
        this.msgSvc.add(
          'BukuService.updateBuku(): Buku baru berhasil ditambahkan ke WebService!'
        )
      ),
      catchError(this.msgSvc.handleError<Buku[]>('addBuku failed', []))
    );
  }

  deleteBuku(bukuId: any): Observable<any> {
    return this.httpClient.delete(this.svcUrl + bukuId).pipe(
      tap((result) =>
        this.msgSvc.add(
          'BukuService.updateBuku(): Buku baru berhasil dihapus!'
        )
      ),
      catchError(this.msgSvc.handleError<Buku[]>('deleteBuku failed', []))
    );
  }

  getBukuByJudul(judulBuku: string): Observable<Buku[]> {
    return this.httpClient.get<Buku[]>(this.svcUrl + 'judul/' + judulBuku).pipe(
      tap((result) => this.msgSvc.add('BukuService.getBukuByJudul(): Buku Judul ' + judulBuku + 'berhasil diload dari WebService!')),
      catchError(this.msgSvc.handleError<Buku[]>('getBukuByJudul failed', []))
    );
  }

  getBukuById(bukuId: string): Observable<Buku>  {
    return this.httpClient.get<Buku>(this.svcUrl + bukuId).pipe(
      tap((result) => this.msgSvc.add('BukuService.getBukuById(): Buku Id=' + bukuId + 'berhasil diload dari WebService!')),
      catchError(this.msgSvc.handleError<Buku>('getBukuById failed'))
    );
  }
}
