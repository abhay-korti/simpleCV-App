import Biography from './Biography';
import WorkEx from './WorkEx';
import Headings from './Headings';
import Buttons from './Buttons';
import './App.scss'
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
    this.exampleCounter = 0;
    this.onAdd = this.onAdd.bind(this);
    this.OnDel = this.onDel.bind(this);
    this.settingState = this.settingState.bind(this);
    this.addExampleFunc = this.addExampleFunc.bind(this);
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

  addExampleFunc() {
    this.onAdd('eduCount');
    this.onAdd('workExCount');
    const exampleObj = {
      bioCount: ["1"],
      eduCount: ["1"],
      workExCount: ["1"],
      newClass: 'new-margin',
      bioObj: [{
        id: '0',
        values: {
          fname: 'John',
          lname: 'Doe',
          crole: 'Frontend Developer',
          telly: '+1234567890',
          email: 'johndoe@example.com',
          bioBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
          location: 'City, State, Country.',
        }
      }],
      eduObj: [{
        id: '0',
        values: {
          eduCname: 'Some College',
          eduDeg: 'Master of Science ',
          eduFrom: '2015',
          eduTo: '2017',
          eduBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
        },
      },
      {
        id: '1',
        values: {
          eduCname: 'Some College',
          eduDeg: 'Bachelor of Science ',
          eduFrom: '2015',
          eduTo: '2011',
          eduBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
        }
      }],
      expObj: [{
        id: '0',
        values: {
          expCname: 'Company X',
          expCrole: 'Analyst',
          expFrom: '2018',
          expTo: 'Present',
          expBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
        },
      }, {
        id: '1',
        values: {
          expCname: 'Company Y',
          expCrole: 'Summer Intern',
          expFrom: 'March 2016',
          expTo: ' June 2016',
          expBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
        }
      }],
    }
    this.settingState(exampleObj.bioObj[0], 'bioObj', 0);
    this.settingState(exampleObj.eduObj[0], 'eduObj', 0);
    this.settingState(exampleObj.eduObj[1], 'eduObj', 1);
    this.settingState(exampleObj.expObj[0], 'expObj', 0);
    this.settingState(exampleObj.expObj[1], 'expObj', 1);
    this.exampleCounter = this.exampleCounter + 1;
  }




  settingState(obj, key, index) {
    console.log('In Setting State');
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
  }



  render() {
    return (
      <div className="main-wrapper">
        <MainHeader addExampleFunc={this.addExampleFunc} />
        <div className='total-wrapper'>
          <div className="input-wrapper">
            <Headings heading="Biography" />
            {this.state.bioCount.map((element, index) => {
              return (
                <div className={`cate ${this.state.newClass}`} key={index}>
                  <Biography indy={index} func2={this.settingState} example={this.state.bioObj[index]} exCounter={this.exampleCounter} />
                </div>
              )
            })}
            <Headings heading="Experience" />
            {this.state.workExCount.map((element, index) => {
              return (
                <div className={`cate ${this.state.newClass}`} key={index}>
                  <WorkEx indy={index} func2={this.settingState} example={this.state.expObj[index]} exCounter={this.exampleCounter} />
                </div>
              )
            })}
            <Buttons prop1={() => this.onAdd('workExCount')} prop2={() => this.onDel('workExCount', 'expObj')} />
            <Headings heading="Education" />
            {this.state.eduCount.map((element, index) => {
              return (
                <div className={`cate ${this.state.newClass}`} key={index}>
                  <Education indy={index} func2={this.settingState} example={this.state.eduObj[index]} exCounter={this.exampleCounter} />
                </div>
              )
            })}
            <Buttons prop1={() => this.onAdd('eduCount')} prop2={() => this.onDel('eduCount', 'eduObj')} />
          </div>
          <div className="display-wrapper">
            {this.state.bioObj.map((element, index) => {
              console.log(this.state);
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

