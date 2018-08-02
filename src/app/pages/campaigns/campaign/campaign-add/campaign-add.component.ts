import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {CampaignService} from "../../campaign.service"
import {Campaign} from "../../campaign.model"
import {ActivatedRoute, Router} from "@angular/router"
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap"
import {CampaignListComponent} from "../campaign-list/campaign-list.component"


@Component({
  selector: 'campaign-add',
  templateUrl: './campaign-add.component.html',
  styleUrls: ['./campaign-add.component.scss']
})
export class CampaignAddComponent implements OnInit {
  @ViewChild('campaignImagePath') fileInput: ElementRef
  modalContent: any
  mode = 'edit'
  campaignForm: FormGroup
  campaign: Campaign = new Campaign(null, '', '', '', true, null, null)
  url: string
  base64textString: string
  file: File

  /*status = [{status: true, text: 'Aktif'}, {status: false, text: 'Pasif'}]*/
  constructor(private campaignService: CampaignService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    if (this.modalContent) {
      this.mode = 'edit'
    } else {
      this.mode = 'add'
    }


    this.campaignForm = new FormGroup({
      'campaignName': new FormControl(null, Validators.required),
      'campaignDescription': new FormControl(null, Validators.required),
      'campaignImagePath': new FormControl(null, ),
      /*  'campaignStatus': new FormControl(true),*/
      'startDate': new FormControl('', Validators.required),
      'endDate': new FormControl('', Validators.required),
    })

    if (this.modalContent) {
      this.campaignForm.patchValue({
        campaignName: this.modalContent.campaignName,
        campaignDescription: this.modalContent.campaignDescription,
        /*      campaignImagePath:this.modalContent.campaignImagePath,*/
        startDate: this.dateTo(this.modalContent.campaignStartDate),
        endDate: this.dateTo(this.modalContent.campaignEndDate),
      })
      this.url = this.modalContent.campaignImagePath
    }
    this.campaignForm.valueChanges.subscribe((value) => {
      let s = this.dateToString(value.startDate)
      let e = this.dateToString(value.endDate)
      this.campaign.campaignName = this.campaignForm.value.campaignName
      this.campaign.campaignDescription = this.campaignForm.value.campaignDescription
      this.campaign.campaignImagePath = this.url
      console.log("oooooooooooooooooooooo" + this.campaign.campaignImagePath)
      if (value.startDate) {
        this.campaign.campaignStartDate = s
      }
      if (value.endDate) {
        this.campaign.campaignEndDate = e
      }
    })
  }

  onSubmit(data) {
    this.campaignService.uploadCampaign(this.campaign, this.file).subscribe((data) => {
      // console.log("DATA" + data)
    })
    if (this.mode=="add") {
      this.campaignService.savee.emit(this.campaign)
    }
    this.activeModal.close()
  }

  onFileSelected(event) {
    this.file= event.target.files[0]
    var readerUrl = new FileReader()

    let fData: FormData = new FormData();

    readerUrl.readAsDataURL(this.file)
    readerUrl.onload = () => {
      // this.base64textString = readerUrl.result.split(",")[1]
      this.campaign.campaignImagePath = readerUrl.result
      this.url = readerUrl.result
      console.log("URLLLLLLLLLLLLLL" + this.url)

    }

    /*  var reader = new FileReader()
     reader.readAsBinaryString(file) // read file as data url
     reader.onloadend = () => { // called once readAsDataURL is completed
     var b = btoa(reader.result)
     this.base64textString = b
     }*/
  }

  dateTo(data: Date) {
    const d = new Date(data)
    let Model = {
      "year": d.getFullYear(),
      "month": d.getMonth() + 1,
      "day": d.getDate(),
    }
    return Model
  }

  dateToString(data: { year: string, month: string, day: string }) {
    let stringDate: string = data.year + '/' + data.month + '/' + data.day
    let date = new Date(stringDate)
    return date
  }


  onDateSelected(event) {
    console.log("New Data" + event)
  }

  onListCampaign() {
    this.router.navigate(['../list'], {relativeTo: this.route})
  }

  calis() {
    console.log("CALISIYOR")
    alert("deneme")
  }


}
