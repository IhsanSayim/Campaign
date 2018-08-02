import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {KampanyasComponent} from "./kampanyas.component"
import {KampanyaComponent} from "./kampanya/kampanya.component"
import {KampanyaListComponent} from "./kampanya/kampanya-list/kampanya-list.component"
import {KampanyaDetayComponent} from "./kampanya/kampanya-detay/kampanya-detay.component"
import {KampanyaItemComponent} from "./kampanya/kampanya-list/kampanya-item/kampanya-item.component"
import {KampanyaEkleComponent} from "./kampanya/kampanya-ekle/kampanya-ekle.component"

const routes: Routes = [{
  path: '',
  component: KampanyasComponent,
  children: [{
    path: 'kampanya',
    component: KampanyaComponent,
  },
    {
      path: 'ekle',
      component: KampanyaEkleComponent,
    }],
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KampanyasRoutingModule {
}

export const routedComponents = [
  KampanyasComponent,
  KampanyaComponent,
  KampanyaListComponent,
  KampanyaDetayComponent,
  KampanyaItemComponent,
  KampanyaEkleComponent
]
