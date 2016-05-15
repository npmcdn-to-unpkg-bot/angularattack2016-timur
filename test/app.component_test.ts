/**
 * Created by timur on 5/14/16.
 */

const expect = require('chai').expect,
    assert = require('chai').assert

describe('app', function () {

    const App = require('../app/app.component').AppComponent

    it('should exist', function () {
        expect(true).to.be.true
        assert(App)
    })
})
