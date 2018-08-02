import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ViewCell} from "ng2-smart-table"

@Component({
  selector: 'status-view',
  template: `
    <label class="switch">
      <input type="checkbox" [checked]="value">
      <span class="slider round"></span>
    </label>
  `,
  styleUrls: ['./status-view.component.scss']
})
export class StatusViewComponent implements ViewCell, OnInit {
  renderValue: string

  @Input() value: string | number
  @Input() rowData: any

  @Output() save: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    /*    console.log("zzzz"+this.rowData)
        console.log("xxxx"+this.value)*/
    this.renderValue = this.value.toString().toUpperCase()
  }

  onClick() {
    this.save.emit(this.rowData)
  }
}
