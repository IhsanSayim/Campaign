import {Http, RequestOptions, Headers} from "@angular/http"
import {colorSets} from "@swimlane/ngx-charts/release/utils"
import {EventEmitter, Injectable} from "@angular/core"
import 'rxjs/add/operator/map'
import {Campaign} from "./campaign.model"
import {Subject} from "rxjs/Subject"

@Injectable()
export class CampaignService {

  savee: EventEmitter<Campaign> = new EventEmitter()

  constructor(private http: Http) {
    // this.getCampaignss()
    // this.getGiphy()
  }

  campaignsChanged = new Subject<Campaign[]>()

  uploadCampaign(campaign: Campaign, f: File) {
    let formdata: FormData = new FormData();
    formdata.append('file', f);

    let campaignn = {
      campaignName: campaign.campaignName,
      campaignDescription: campaign.campaignDescription,
      campaignImagePath: 'abc',
      campaignStartDate: campaign.campaignStartDate,
      campaignEndDate: campaign.campaignEndDate,
      campaignStatus: campaign.campaignStatus
    }
    console.log(campaignn)
    console.log(campaign)
    formdata.append('campaign', new Blob([JSON.stringify(campaignn)], {type: "application/json"}))
    return this.http.post('/api/campaign/create', formdata).map((res) => res.json())
  }

  getCampaigns() {
    return this.http.get('/api/campaign/allcampaigns').map((res) => res.json())
  }

  getGiphy() {
    return this.http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .map((res) => res.json())
      .subscribe((data) => {
        console.log(data)
      })
  }

  deleteCampaign(id: number) {
    console.log("Delete")
    return this.http.delete('/api/campaign/'+id)
  }
}
