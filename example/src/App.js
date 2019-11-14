import React, { Component } from 'react'

import ExampleComponent from 'test'

export default class App extends Component {
  render () {
    console.log("---- ",ExampleComponent)
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
