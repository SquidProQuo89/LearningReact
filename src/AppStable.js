import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'business website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile development'
        },
        {
          title: 'ecommerce shopping cart',
          category: 'Web development'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        sup
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
