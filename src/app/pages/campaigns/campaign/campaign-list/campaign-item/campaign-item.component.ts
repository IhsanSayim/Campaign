import {Component, Input, OnInit} from '@angular/core'
import {Campaign} from "../../../campaign.model"
import {CampaignService} from "../../../campaign.service"

@Component({
  selector: 'campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.scss']
})
export class CampaignItemComponent implements OnInit {

  @Input() campaign: Campaign

  constructor(private campaignService: CampaignService) {

  }

  ngOnInit() {
    console.log(this.campaign.campaignName)
  }

}
