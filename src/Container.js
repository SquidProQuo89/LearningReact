import React from 'react';
import Header from './Header'
import Content from './Content'
import './App.css';

class Container extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header />
          <Content />
        </div>
      </div>
    )
  }
}

export default Container

