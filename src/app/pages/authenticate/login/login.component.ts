import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user-service/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router, private userService: UserService) {

  };

  ngOnInit() {
    var s = document.createElement("script")
    s.type = "text/javascript"
    s.src = "./assets/indexx.js"
    this.elementRef.nativeElement.appendChild(s)

    var ss = document.createElement("script")
    ss.type = "text/javascript"
    ss.src = "./assets/index.js"
    this.elementRef.nativeElement.appendChild(ss)
  }


  login(form: NgForm) {
    console.log("s" + form.value)
  }

  data = {}

  formSubmit() {
    console.log(this.data)
  }

  onSubmit(value) {
   /* this.userService.loginPost(value.nick, value.password).subscribe((data) => {
      if (data) {
        console.log("Data" + data)
        this.userService.setUserLoggedIn()
        this.userService.setUserName('ihsan');
        this.router.navigate(['pages/dashboard'])
      }
    })*/

    let backup = this.userService.loginPost(value.nick, value.password);
    if (backup) {
      this.userService.setUserLoggedIn()
      this.userService.setUserName('ihsan');
      this.router.navigate(['pages/campaigns/list'])
    }
    /* if (value.nick == "ihsan" && value.password == "12345") {
      console.log("Login başarılı")
      this.userService.setUserLoggedIn()
      console.log(this.userService.getUserLoggedIn())
      this.userService.setUserName('ihsan');
      this.router.navigate(['pages/dashboard'])
    }*/
    console.log(value)
  }
}
