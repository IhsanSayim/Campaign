import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core'
import {Kampanya} from "../../../kampanya.model"
import {KampanyaService} from "../../../kampanya.service"

@Component({
  selector: 'kampanya-item',
  templateUrl: './kampanya-item.component.html',
  styleUrls: ['./kampanya-item.component.scss'],
})
export class KampanyaItemComponent implements OnInit {

  @Input() kampanya:Kampanya

  constructor(private kampanyaService:KampanyaService) {

  }

  ngOnInit() {
    console.log(this.kampanya.name)
  }



}
