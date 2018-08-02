import {NgModule} from '@angular/core'

import {ThemeModule} from '../../@theme/theme.module'
import {ReactiveFormsModule} from "@angular/forms"
import {HttpModule} from "@angular/http"
import {HttpClientModule} from "@angular/common/http"
import {CampaignService} from "./campaign.service"
import {CampaignsRoutingModule, routedComponents} from "./campaigns-routing.module"
import {Ng2SmartTableModule} from "ng2-smart-table"
import {} from ''
import {DescriptionViewComponent} from "./campaign/campaign-list/description-view/description-view.component";
import {ImageViewComponent} from "./campaign/campaign-list/image-view/image-view.component";
import { StatusViewComponent } from './campaign/campaign-list/status-view/status-view.component';
import { ActionViewComponent } from './campaign/campaign-list/action-view/action-view.component'

@NgModule({
  imports: [
    ThemeModule,
    CampaignsRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [CampaignService,],
  entryComponents: [StatusViewComponent,ImageViewComponent,DescriptionViewComponent,ActionViewComponent]

})
export class CampaignsModule {
}
