import {Injectable} from '@angular/core'
import {Http} from "@angular/http"
import {environment} from "../../../environments/environment"
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable"

@Injectable()
export class UserService {

  private isUserLoggedIn
  private username

  constructor(private http: Http) {
    //console.log("RESULT"+this.login('ihsan','3737'));
    //console.log("RESULT BABA" + this.loginPost('ihsan', '37374'))
    this.isUserLoggedIn = false
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn
  }

  setUserName(name) {
    this.username = name
  }

  getUserName() {
    return this.username
  }

  login(name: string, password: string): Observable<Response> {
    return this.http.get('/login/' + name + '/' + password).map((res) => res.json())
  }

  loginPost(name: string, password: string) {
  /*  let data = {
      "userName": name,
      "password": password
    }*/
    if (name == "ihsan" && password == "12345") {
    return true;
    }
    // return this.http.post('/login', data).map((res) => res.json())

  }
}
