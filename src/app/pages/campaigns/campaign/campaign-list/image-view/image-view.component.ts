import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ViewCell} from "ng2-smart-table"

@Component({
  selector: 'image-view',
  template: `
    <img id="image" class="effectfront" [src]="value" alt="Smiley face" style="max-height: 50px;max-width: 120px;">
  `,
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements ViewCell, OnInit {
  renderValue: string

  @Input() value: string | number
  @Input() rowData: any

  @Output() save: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    if (this.value) {
      this.renderValue = this.value.toString().toUpperCase()
    }

  }

  onClick() {
    this.save.emit(this.rowData)
  }
}
