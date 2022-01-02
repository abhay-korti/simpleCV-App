import Biography from './Biography';
import WorkEx from './WorkEx';
import Headings from './Headings';
import Buttons from './Buttons';
import "./App.css"
import { Component } from 'react';
import Education from './Education';
import BioDisp from './Display_Bio';
import EducDisp from './Display_Educ';
import WorkDisp from './Display_WorkEx';
import MainHeader from './MainHeader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bioCount: ["1"],
      eduCount: ["1"],
      workExCount: ["1"],
      newClass: 'new-margin',
      bioObj: [],
      eduObj: [],
      expObj: [],
    }
    this.onAdd = this.onAdd.bind(this);
    this.OnDel = this.onDel.bind(this);
    this.settingState = this.settingState.bind(this);
  }

  onAdd(name) {
    let copyArr = this.state
    copyArr[name].push('1');
    this.setState(copyArr)
  }

  onDel(name1, name2) {
    let copyArr = this.state
    copyArr.newClass = 'margin'
    copyArr[name1].pop('1');
    copyArr[name2].pop();
    this.setState(copyArr)
  }

  settingState(obj, key, index) {
    let copyArr = this.state[key];
    console.log(copyArr);
    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i].id == index) {
        copyArr[i] = obj;
        this.setState({
          ...this.state,
          [key]: copyArr
        })
        console.log(this.state);
        return
      }
    }
    copyArr.push(obj);
    this.setState({
      ...this.state,
      [key]: copyArr
    })

    // this.setState({
    //   ...this.state,
    //   [key]: obj
    // })
    // console.log(this.state);
  }

  render() {
    return (
      <div className="main-wrapper">
        <MainHeader />
        <div className='total-wrapper'>
          <div className="input-wrapper">
            <Headings heading="Biography" />
            {this.state.bioCount.map((element, index) => {
              return (
                <div className={`cate ${this.state.newClass}`} key={index}>
                  <Biography class={`cate`} indy={index} func2={this.settingState} />
                </div>
              )
            })}
            <Headings heading="Experience" />
            {this.state.workExCount.map((element, index) => {
              return (
                <div className={`cate ${this.state.newClass}`} key={index}>
                  <WorkEx class={`cate`} indy={index} func2={this.settingState} />
                </div>
              )
            })}
            <Buttons prop1={() => this.onAdd('workExCount')} prop2={() => this.onDel('workExCount', 'expObj')} />
            <Headings heading="Education" />
            {this.state.eduCount.map((element, index) => {
              return (
                <div className={`cate ${this.state.newClass}`} key={index}>
                  <Education class={`cate`} indy={index} func2={this.settingState} />
                </div>
              )
            })}
            <Buttons prop1={() => this.onAdd('eduCount')} prop2={() => this.onDel('eduCount', 'eduObj')} />
          </div>
          <div className="display-wrapper">
            {this.state.bioObj.map((element, index) => {
              return <BioDisp bio={element} indy={index} key={index} />
            })
            }
            {this.state.expObj.map((element, index) => {
              return <WorkDisp bio={element} indy={index} key={index} />
            })
            }
            {this.state.eduObj.map((element, index) => {
              return <EducDisp bio={element} indy={index} key={index} />
            })
            }

          </div>
        </div>
      </div>
    )
  }
}

export default App;

