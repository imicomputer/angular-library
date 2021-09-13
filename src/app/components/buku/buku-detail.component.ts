import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Buku } from 'src/app/model/Buku';

import { BukuService } from 'src/app/service/buku/buku.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-buku-detail',
  templateUrl: './buku-detail.component.html',
  styleUrls: ['./buku-detail.component.css']
})
export class BukuDetailComponent implements OnInit {
  // @Input() buku?: Buku;
  buku?: Buku;
  bukuId?: string;

  constructor(
    private bukuService: BukuService,
    private pathVar: ActivatedRoute,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
    this.bukuId = this.pathVar.snapshot.paramMap.get("id")?.toString();
    this.getBukuById();
  }

  goBack(): void {
    this.buku = undefined;
  }

  update(): void {
    if (this.buku) {
      this.bukuService.updateBuku(this.buku).subscribe();
    }
  }

  getBukuById() {
    this.bukuService.getBukuById(this.bukuId??'').subscribe(res => {
      this.msgSvc.add("Buku Id = " + this.bukuId + " is loading...");
      this.buku = res;
    });
  }
}
