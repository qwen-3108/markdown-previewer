import React, {Component} from 'react';
import marked from 'marked';
import Toggle from './Toggle';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input:"# Hello World\n\nI'm a markdown previewer powered by [marked.js](https://marked.js.org/#/README.md#README.md)\n\nand built with `react`\n\n## Styles I can preview\n\n- Code block\n\n```\nImport React from 'react';\nconst App = () => {\nreturn();\n};\n```\n\n- Table\n\nHeader 1 | Header 2 | Header 3\n---- |---- | ----\nEntry 1 | Entry 1 | Entry 1\nEntry 2 | Entry 2 | Entry 2\n\n- _Text_ | **Text** | ~Text~ decoration\n\n- Blockquote\n> I'm a Quote!\n\n- Indented and ordered list\n\t- First level\n\t\t- Second level \n\t\t\t1. Numbered\n\t\t\t2. Numbered\n\n- Image\n\n![Twitter icon](https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Twitter_NEW.png)",
      isLight:true
    };
    this.switchMode = this.switchMode.bind(this);
  }

  componentDidMount(){
    document.getElementById('preview').innerHTML = marked(this.state.input, {breaks:true});
  }

  componentDidUpdate(){
    document.getElementById('preview').innerHTML = marked(this.state.input, {breaks:true});
  }

  switchMode(){
    this.setState({isLight:!this.state.isLight});
  }

  render(){

      return (
        <div id="page" className={this.state.isLight?'light-mode':'dark-mode'}>
          <div id="header" >
            <h1>Markdown <span>Previewer</span></h1>
            <Toggle toggle={this.switchMode} state={this.state.isLight}/>
            </div>
            <div id="editor-wrapper">
              <textarea id="editor" value={this.state.input} onChange={(e) =>
                this.setState({input:e.target.value})}></textarea>
            </div>
            <div id="preview-wrapper">
              <div id="preview"></div>
            </div>
        </div>
      );
  }
}

export default App;
