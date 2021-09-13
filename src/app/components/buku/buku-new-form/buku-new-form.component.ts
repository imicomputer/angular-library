import { Component, OnInit } from '@angular/core';
import { Buku } from 'src/app/model/Buku';

import { BukuService } from 'src/app/service/buku/buku.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-buku-new-form',
  templateUrl: './buku-new-form.component.html',
  styleUrls: ['./buku-new-form.component.css']
})
export class BukuNewFormComponent implements OnInit {

  constructor(
    private bukuService: BukuService,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
  }

  save(buku: Buku): void {
    if (buku) {
      //Save Buku ke WebService
      this.msgSvc.add('Saving buku...');
      this.bukuService.addBuku(buku).subscribe();
    }
  }

}
