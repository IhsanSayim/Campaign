import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {CampaignsComponent} from "./campaigns.component"
import {CampaignListComponent} from "./campaign/campaign-list/campaign-list.component"
import {CampaignComponent} from "./campaign/campaign.component"
import {CampaignAddComponent} from "./campaign/campaign-add/campaign-add.component"
import {CampaignDetailComponent} from "./campaign/campaign-detail/campaign-detail.component"
import {CampaignItemComponent} from "./campaign/campaign-list/campaign-item/campaign-item.component"
import {DescriptionViewComponent} from "./campaign/campaign-list/description-view/description-view.component"
import {ImageViewComponent} from "./campaign/campaign-list/image-view/image-view.component"
import {StatusViewComponent} from "./campaign/campaign-list/status-view/status-view.component"
import {ActionViewComponent} from "./campaign/campaign-list/action-view/action-view.component"

const routes: Routes = [{
  path: '',
  component: CampaignComponent,
  children: [{
    path: 'list',
    component: CampaignListComponent,
  },
    {
      path: 'add',
      component: CampaignAddComponent,
    }],
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignsRoutingModule {
}

export const routedComponents = [
  CampaignsComponent,
  CampaignListComponent,
  CampaignComponent,
  CampaignDetailComponent,
  CampaignItemComponent,
  CampaignAddComponent,
  StatusViewComponent,
  ImageViewComponent,
  DescriptionViewComponent,
  ActionViewComponent
]
