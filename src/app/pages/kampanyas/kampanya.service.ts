import {Kampanya} from "./kampanya.model"
import {Http} from "@angular/http"
import {colorSets} from "@swimlane/ngx-charts/release/utils"
import {Injectable} from "@angular/core"
import 'rxjs/add/operator/map'
@Injectable()
export class KampanyaService {

  constructor(private http: Http) {
    let kampanya = new Kampanya('RAMSAY',
      '5 Ürün alana hepsi bedava',
      'https://s3-eu-central-1.amazonaws.com/emaar-web/images/promotion_image/HJNywLlUG-main.jpeg?1517475549257',
      true)
    //this.uploadKampanya(kampanya)
  }

  private kampanyas: Kampanya[] = [new Kampanya('RAMSAY',
    '5 Ürün alana hepsi bedava',
    'https://s3-eu-central-1.amazonaws.com/emaar-web/images/promotion_image/HJNywLlUG-main.jpeg?1517475549257',
    true),
    new Kampanya('RAMSAY',
      '5 Ürün alana hepsi bedava',
      'https://s3-eu-central-1.amazonaws.com/emaar-web/images/promotion_image/HJNywLlUG-main.jpeg?1517475549257',
      true)]

  getKampanyas() {
    return this.kampanyas.slice()
  }

  uploadKampanya(kampanya: Kampanya) {
    let active;

    let kampanyaa = {
      campaignName: kampanya.name,
      campaignDesciption: kampanya.description,
      campaignImagePath: kampanya.imagePath,
      campaignActive: true
    }
    return this.http.post('/api/campaign/create', kampanyaa).map((res) => res.json())
  }
}
