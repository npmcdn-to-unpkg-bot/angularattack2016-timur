/**
 * Created by timur on 5/14/16.
 */
import {Component} from '@angular/core'
import {SidebarComponent} from './sidebar/sidebar.component.js'

@Component({
  selector: 'checkm8',
  templateUrl: `${__dirname}/app.html`
})

export class AppComponent {
  constructor() {
    this.foo = 'checkm8'
  }
}
