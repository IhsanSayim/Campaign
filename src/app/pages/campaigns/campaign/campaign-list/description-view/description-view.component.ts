import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ViewCell} from "ng2-smart-table"
import {Campaign} from "../../../campaign.model"
import {CampaignService} from "../../../campaign.service"

@Component({
  selector: 'description-view',
  templateUrl: './description-view.component.html',
  styleUrls: ['./description-view.component.scss']
})
export class DescriptionViewComponent implements ViewCell, OnInit {
  renderValue: string

  @Input() value: string | number
  @Input() rowData: any

  @Output() save: EventEmitter<any> = new EventEmitter()

  constructor(private campaignService: CampaignService) {
  }

  ngOnInit() {
    /* console.log("A"+this.value)
     console.log("B"+this.rowData)*/
    this.renderValue = this.value.toString()
  }

  onClick() {
    this.save.emit(this.rowData)
  }
}
