import { Component, OnInit } from '@angular/core';
import { BukuService } from 'src/app/service/buku/buku.service';

import { Buku } from 'src/app/model/Buku';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {
  buku: Buku[] = [];
  jmlBuku = 0;

  selectedBuku?: Buku;

  constructor(
    private bukuService: BukuService,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {  }

  getAllSampleBuku () {
    // alert(this.bukuService.test());
    this.buku = this.bukuService.testDataBuku();
    this.jmlBuku = this.buku.length;
  }

  getAllBuku() {
    this.bukuService.getAllBuku().subscribe(result => {
      this.buku = result;
      this.jmlBuku = this.buku.length;
    });
  }

  delete(bukuId: any): void{
    this.msgSvc.add("Deleting Buku with id=" + bukuId);
    this.bukuService.deleteBuku(bukuId).subscribe();
  }

  onSelectBuku(iBuku: Buku) {
    this.selectedBuku = iBuku;
  }

  getByJudul(dataBuku: any): void {
    this.msgSvc.add('Getting Buku with judul = ' + dataBuku.judul + '...');
    this.bukuService.getBukuByJudul(dataBuku.judul).subscribe(result => {
      this.buku = result;
      this.jmlBuku = this.buku.length;
    });
  }
}
