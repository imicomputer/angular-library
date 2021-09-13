import { Component, OnInit } from '@angular/core';
import { Sewa } from 'src/app/model/Sewa';
import { SewaService } from 'src/app/service/sewa/sewa.service';

@Component({
  selector: 'app-sewa',
  templateUrl: './sewa.component.html',
  styleUrls: ['./sewa.component.css']
})
export class SewaComponent implements OnInit {
  sewa: Sewa[] = [];

  selectedSewa?: Sewa;

  constructor(
    private sewaService: SewaService
  ) { }

  ngOnInit(): void {
  }

  getAllSewa() {
    this.sewaService.getAllSewa().subscribe((res) => this.sewa=res);
  }

  onSelectSewa(sewa: Sewa) {

  }

  delete(sewaId: number) {

  }
}
