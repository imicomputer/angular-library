import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SewaDetailService {

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  svcUrl: string = 'http://localhost:8081/sewa/detail';

  getAllSewaDetail() {

  }

  getSewaDetailById(sewaId: number) {
    
  }
}
