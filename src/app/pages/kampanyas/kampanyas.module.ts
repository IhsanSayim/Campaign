import {NgModule} from '@angular/core'

import {ThemeModule} from '../../@theme/theme.module'
import {KampanyasRoutingModule, routedComponents} from "./kampyanyas-routing.module"
import {KampanyaService} from "./kampanya.service";
import { KampanyaEkleComponent } from './kampanya/kampanya-ekle/kampanya-ekle.component'
import {ReactiveFormsModule} from "@angular/forms"
import {HttpModule} from "@angular/http"
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  imports: [
    ThemeModule,
    KampanyasRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [KampanyaService,]

})
export class KampanyasModule {
}
