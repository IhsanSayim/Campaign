import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {FormBuilder, FormControl, FormGroup} from "@angular/forms"
import {KampanyaService} from "../../kampanya.service"

@Component({
  selector: 'kampanya-ekle',
  templateUrl: './kampanya-ekle.component.html',
  styleUrls: ['./kampanya-ekle.component.scss']
})
export class KampanyaEkleComponent implements OnInit {
  kampanyaForm: FormGroup
  kampanyaImageFile: File
  url

  @ViewChild('kampanyaImage') fileInput: ElementRef

  constructor(private fb: FormBuilder, private kampanyaService: KampanyaService) {
    this.kampanyaForm = this.fb.group({
      'name': [''],
      'description': [''],
      'imagePath': [''],
      'active': [''],
      /*   'act': ['']*/
      'kampanyaImagee': ['']
    })
  }

  ngOnInit() {
  }

  onSubmit(data) {
    console.log(data)
    console.log(data.name)
    console.log(data.description)
    console.log(data.imagePath)
    console.log(data.active)
    /*    console.log("Active" + data.act)*/
    this.kampanyaService.uploadKampanya(data).subscribe((data) => {
      console.log("DATA" + data)
    })
  }

  onFileSelected(event) {
    var files = event.target.files
    var file: File = event.target.files[0]
    console.log(file)
    var reader = new FileReader()
    console.log(this.kampanyaForm.get('kampanyaImagee'))
    reader.readAsDataURL(event.target.files[0]) // read file as data url

    reader.onload = (event: any) => { // called once readAsDataURL is completed

      this.url = event.target.result
      console.log("url" + this.url)
    }
    /*if (files && file) {
     var reader = new FileReader()
     reader.onload = this._handleReaderLoaded.bind(this)
     reader.readAsBinaryString(file)
     }
     console.log("File" + event)*/
    /*   let reader = new FileReader()
     if (event.target.files && event.target.files.length > 0) {
     let file = event.target.files[0]
     console.log("FILE" + file)
     reader.readAsDataURL(file)
     reader.onload = () => {
     this.kampanyaForm.get('kampanyaImagee').setValue({
     filename: file.name,
     filetype: file.type,
     value: reader.result.split(',')[1]
     })
     }
     }*/
  }

  let
  base64textString

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result
    this.base64textString = btoa(binaryString)
    console.log(btoa(binaryString))
  }

}
