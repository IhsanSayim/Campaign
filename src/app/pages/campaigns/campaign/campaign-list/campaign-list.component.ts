import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Campaign} from "../../campaign.model"
import {CampaignService} from "../../campaign.service"
import {LocalDataSource, ViewCell} from "ng2-smart-table"
import {SmartTableService} from "../../../../@core/data/smart-table.service"
import {ActivatedRoute, Router} from "@angular/router"
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"
import {CampaignAddComponent} from "../campaign-add/campaign-add.component"
import {DomSanitizer} from "@angular/platform-browser"
import {DatePipe} from "@angular/common"
import {DescriptionViewComponent} from "./description-view/description-view.component"
import {ImageViewComponent} from "./image-view/image-view.component"
import {StatusViewComponent} from "./status-view/status-view.component"
import {ActionViewComponent} from "./action-view/action-view.component"

@Component({
  selector: 'campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
  providers: [DatePipe]
})
export class CampaignListComponent implements OnInit {

  campaigns: Campaign[]
  campaignImages: Array<any> = []
  headerText
  let
  date

  source: LocalDataSource = new LocalDataSource()

  constructor(private campaignService: CampaignService,
              private service: SmartTableService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private sanitizer: DomSanitizer,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.campaignService.savee.subscribe((campaign: Campaign) => {
      console.log("eventemitter")
      console.log("CAMPAIGNNNNN" + campaign.campaignImagePath)
      this.source.add(campaign)
      this.source.refresh()
      /*   this.getCampaigns()
       setTimeout(() => {
       console.log("CAMPAIGNS" + this.campaigns)
       this.source.load(this.campaigns)
       }, 2000)*/


    })
    if (this.getCampaigns()) {
      const data = this.campaigns
      this.source.load(data)
    }
    else {
      var interval = setInterval(() => {
        this.getCampaigns()
        const data = this.campaigns
        if (data) {
          this.source.load(data)
          clearInterval(interval)
        }
        console.log("İnterval")
      }, 500)
    }
  }

  settings = {
    mode: 'external',
    actions: {
      add: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      /*actions: {
       title: 'Düzenle',
       type: 'custom',
       filter: false,
       renderComponent: ActionViewComponent,
       onComponentInitFunction(instance) {
       instance.save.subscribe(row => {
       alert(`${row.campaignName} saved!`)
       })
       }
       },*/
      campaignImagePath: {
        title: 'Image',
        type: 'custom',
        filter: false,
        renderComponent: ImageViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.campaignName} saved!`)
          })
        }
      },
      campaignName: {
        title: 'Başlık',
        filter: false,
        type: 'number',
        width: '15%'
      },
      campaignDescription: {
        title: 'Açıklama',
        type: 'custom',
        filter: false,
        renderComponent: DescriptionViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.campaignName} saved!`)
          })
        }
      },
      campaignStartDate: {
        title: 'Başlangıç Tarihi',
        valuePrepareFunction: (data) => {
          var raw = new Date(data)
          var formatted = this.datePipe.transform(raw, 'dd MMM yyyy')
          return formatted
        }
      },
      campaignEndDate: {
        title: 'Bitiş Tarihi',
        valuePrepareFunction: (data) => {
          var raw = new Date(data)
          var formatted = this.datePipe.transform(raw, 'dd MMM yyyy')
          return formatted
        }
      },
      campaignStatus: {
        title: 'Status',
        type: 'custom',
        filter: false,
        renderComponent: StatusViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.campaignName} saved!`)
          })
        }
      },
    },
  }

  getCampaigns() {
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaigns = data
      this.campaigns.forEach((campaign) => {
        this.campaignImages.push(campaign.campaignImagePath)
      })
      // console.log("Campaigns" + data)
    })
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve()
    } else {
      event.confirm.reject()
    }
  }

  addCampaign() {
    const activeModal = this.modalService.open(CampaignAddComponent, {size: 'lg', container: 'nb-layout'})
    activeModal.componentInstance.modalHeader = 'Large Modal'
  }

  onUserRowSelect(event): void {
    console.log(event)
  }

  deneme(event) {
    alert(event)
  }

  editFunction(event) {
    console.log(event)
    const activeModal = this.modalService.open(CampaignAddComponent, {size: 'lg', container: 'nb-layout'})
    activeModal.componentInstance.modalContent = event.data
  }

  deleteFunction(event) {
    this.source.remove(event.data)
    let id = event.data.campaignId
    this.campaignService.deleteCampaign(id).subscribe((data)=>{
      console.log(data)
    })
    console.log(event)
  }

  addCampaignn() {

    let campaign: Campaign = {
      campaignId: 1,
      campaignName: "IIIIIIIIII",
      campaignDescription: "I Kampanya açiklamas?111",
      // tslint:disable-next-line:max-line-length
      campaignImagePath: "https://img-morhipo.mncdn.com/mnresize/378/160/Content/Banners/devameden26a36238a9b14fcaa931d214d3099f83.jpg",
      campaignStatus: true,
      campaignStartDate: new Date(),
      campaignEndDate: new Date(),
    }
    this.source.add(campaign)
    this.source.refresh()
  }

}
