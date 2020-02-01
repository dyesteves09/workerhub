import React from 'react';
import './App.css';
import Card from './components/Card';
import Nav from './components/Nav/Nav';

class App extends React.Component {

  render() {
    return (
      <>
        <div>
          <Nav />
          <h2>Hello World Hehehe</h2>
          <p>Hehehe</p>

          {
            [1,2,3].map((data, index)=>{
              return <Card key={index}/>
            })
          }
        </div>
      </>
    );
  }
}

export default App;
