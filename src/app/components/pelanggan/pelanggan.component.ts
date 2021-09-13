import { Component, OnInit } from '@angular/core';
import { Pelanggan } from 'src/app/model/Pelanggan';
import { MessageService } from 'src/app/service/message/message.service';
import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';

@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {
  pelanggan: Pelanggan[] = [];

  constructor(
    private pelangganService: PelangganService,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
  }

  getAllPelanggan() {
    this.pelangganService.getAllPelanggan().subscribe((res) => {
      this.msgSvc.add('Getting Pelanggan Data...')
      this.pelanggan = res;
    });
  }

}
