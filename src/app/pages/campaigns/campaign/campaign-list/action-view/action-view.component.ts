import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ViewCell} from "ng2-smart-table"
import {CampaignService} from "../../../campaign.service"
import {CampaignAddComponent} from "../../campaign-add/campaign-add.component"
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: 'action-view',
  template: `
             <div style="text-align: center">
             <i class="nb-edit" (click)="onClick()" style="font-size: 2rem !important;color:#a4abb3"></i>
             </div>
  `,
  styleUrls: ['./action-view.component.scss']
})
export class ActionViewComponent implements ViewCell, OnInit {
  renderValue: string

  @Input() value: string | number
  @Input() rowData: any

  @Output() save: EventEmitter<any> = new EventEmitter()

  constructor(private campaignService: CampaignService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase()
  }

  onClick() {
    // this.campaignService.savee.emit(this.rowData)
    this.save.emit(this.rowData)
    const activeModal = this.modalService.open(CampaignAddComponent, {size: 'lg', container: 'nb-layout'})
    activeModal.componentInstance.modalContent = this.rowData
  }
}
