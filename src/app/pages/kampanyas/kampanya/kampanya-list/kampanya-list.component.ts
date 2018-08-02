import {Component, OnInit} from '@angular/core'
import {Kampanya} from "../../kampanya.model"
import {KampanyaService} from "../../kampanya.service"

@Component({
  selector: 'kampanya-list',
  templateUrl: './kampanya-list.component.html',
  styleUrls: ['./kampanya-list.component.scss']
})
export class KampanyaListComponent implements OnInit {
  kampanyas: Kampanya[]

  constructor(private kampanyaService: KampanyaService) {
  }

  ngOnInit() {
    this.kampanyas = this.kampanyaService.getKampanyas()
    console.log(this.kampanyas)
  }

}
