import { Component } from 'react';
import './App.css';
import { UserForm } from '././weavy/UserForm.tsx';


export default class App extends Component {
  // async getJwt() {
  //   return '[Provide your JWT here]';
  // }

  render() {
    return (
      <>
      
      
      {/* <Weavy jwt={this.getJwt}>
        <div className="App">
          <WeavyApp
            spaceKey="react-space"
            spaceName="React Space"
            appKey="react-files"
            appName="React Files"
            appType="files"
            />

            
        </div>
      </Weavy> */}
        <UserForm/>
      </>
    );
  }
}