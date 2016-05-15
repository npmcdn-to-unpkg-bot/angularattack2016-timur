/**
 * Created by timur on 5/14/16.
 */

import 'reflect-metadata'
import 'zone.js'

import {bootstrap} from '@angular/platform-browser-dynamic'
import {enableProdMode} from '@angular/core'
import {AppComponent} from './app.component.js'

enableProdMode()
bootstrap(AppComponent)
