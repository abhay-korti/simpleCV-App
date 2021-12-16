import Biography from './Biography';
import WorkEx from './WorkEx';
import Headings from './Headings';
import Buttons from './Buttons';
import "./App.css"
import { Component } from 'react';
import Education from './Education';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bioCount: ['1'],
      eduCount: ["1"],
      workExCount: ["1"],
      newClass: 'new-margin'
    }
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(name) {
    let copyArr = this.state
    copyArr[name].push('1');
    this.setState(copyArr)
  }

  onDel(name) {
    let copyArr = this.state
    copyArr.newClass = 'margin'
    copyArr[name].pop('1');
    this.setState(copyArr)
  }

  render() {
    return (
      <div>
        <Headings heading="Biography" />
        {this.state.bioCount.map((element, index) => {
          return (
            <div className={`cate ${this.state.newClass}`} key={index}>
              <Biography class={`cate`} indy={index}>
              </Biography>
            </div>
          )
        })}
        <Headings heading="Experience" />
        {this.state.workExCount.map((element, index) => {
          return (
            <div className={`cate ${this.state.newClass}`} key={index}>
              <WorkEx class={`cate`} indy={index} />
            </div>
          )
        })}
        <Buttons prop1={() => this.onAdd('workExCount')} prop2={() => this.onDel('workExCount')} />
        <Headings heading="Education" />
        {this.state.eduCount.map((element, index) => {
          return (
            <div className={`cate ${this.state.newClass}`} key={index}>
              <Education class={`cate`} indy={index} />
            </div>
          )
        })}
        <Buttons prop1={() => this.onAdd('eduCount')} prop2={() => this.onDel('eduCount')} />
      </div>
    )
  }
}

export default App;

