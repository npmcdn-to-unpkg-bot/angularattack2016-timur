/**
 * Created by timur on 5/14/16.
 */

import {assert, expect} from 'chai'


describe('app', () => {

  const AppComponent = require('../app.component.js').AppComponent

  it('should have a title', () => {
    const app = new AppComponent()
    console.log(app)
  })

})
