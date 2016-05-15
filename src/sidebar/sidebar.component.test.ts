/**
 * Created by timur on 5/15/16.
 */


import {assert, expect} from 'chai'
import {SidebarComponent} from './sidebar.component'

describe('sidebar', () => {
  it('should exist', () => {
    assert(SidebarComponent)
  })
  it('should have a title of foo', () => {
    expect(SidebarComponent).to.equal('foo')
  })

})