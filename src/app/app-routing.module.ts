import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BukuDetailComponent } from './components/buku/buku-detail.component';
import { BukuNewFormComponent } from './components/buku/buku-new-form/buku-new-form.component';

import { BukuComponent } from './components/buku/buku.component';
import { PelangganComponent } from './components/pelanggan/pelanggan.component';
import { SalamComponent }  from './components/salam/salam.component';
import { SewaDetailComponent } from './components/sewa/sewa-detail.component';
import { SewaComponent } from './components/sewa/sewa.component';

const routes: Routes = [
  {path: "",                  component: SalamComponent},
  {path: "buku",              component: BukuComponent},
  {path: "buku-detail/:id",   component: BukuDetailComponent},
  {path: "buku-new-form",     component: BukuNewFormComponent},
  {path: "pelanggan",         component: PelangganComponent},
  // {path: "pelanggan-detail/:id"},
  {path: "sewa",              component: SewaComponent},
  {path: "sewa-detail/:id",   component: SewaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
