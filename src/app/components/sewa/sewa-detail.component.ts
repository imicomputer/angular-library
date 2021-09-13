import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sewa } from 'src/app/model/Sewa';
import { MessageService } from 'src/app/service/message/message.service';
import { SewaService } from 'src/app/service/sewa/sewa.service';

@Component({
  selector: 'app-sewa-detail',
  templateUrl: './sewa-detail.component.html',
  styleUrls: ['./sewa-detail.component.css']
})
export class SewaDetailComponent implements OnInit {
  sewa?: Sewa;
  sewaId?: string;
  
  constructor(
    private pathVar: ActivatedRoute,
    private sewaSvc: SewaService,
    private msgSvc: MessageService
  ) { }
    
  ngOnInit(): void {
    this.sewaId = this.pathVar.snapshot.paramMap.get("id")?.toString();
    this.getSewaDetail();
  }

  getSewaDetail() {
    this.msgSvc.add("Getting Sewa(" + this.sewaId + ") data...");
    this.sewaSvc.getSewaById(parseInt(this.sewaId??'0')).subscribe(res => this.sewa = res);
  }

}
