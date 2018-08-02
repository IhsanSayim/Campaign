import {NgModule} from '@angular/core'

import {ThemeModule} from '../../@theme/theme.module'
import {LoginComponent} from "./login/login.component"
import {Register} from "ts-node/dist"
import {RegisterComponent} from "./register/register.component"
import {AuthenticateRoutingModule, routedComponents} from "./authenticate-routing.module"


@NgModule({
  imports: [
    ThemeModule,
    AuthenticateRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    LoginComponent,
    RegisterComponent,
  ],
})
export class AuthenticateModule {

}
