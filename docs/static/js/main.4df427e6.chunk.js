(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{18:function(e,t,n){e.exports=n(27)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(17),o=n.n(i),c=n(5),d=n(6),s=n(7),l=n(8),m=n(9),u=n(11),p=n.n(u),h=(n(25),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{id:"groove",onClick:this.props.toggle},a.a.createElement("div",{id:"thumb",className:this.props.state?"light":""}))}}]),n}(r.Component)),v=(n(26),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).move=function(e){if(console.log("move triggered",e.clientX),e.clientX>20&&e.clientX<r.state.pageWidth-20){var t=e.clientX+"px minmax(0, auto)";document.querySelector("#page").style.gridTemplateColumns=t}},r.resize=function(e){var t=document.querySelector("#page"),n=getComputedStyle(t).width.match(/\d+/);r.setState({pageWidth:Number(n)}),t.addEventListener("mousemove",r.move)},r.remove=function(){document.querySelector("#page").removeEventListener("mousemove",r.move)},r.state={input:"# Hello World\n\nI'm a markdown previewer powered by [marked.js](https://marked.js.org/#/README.md#README.md)\n\nand built with `react`\n\n## Styles I can preview\n\n- Code block\n\n```\nImport React from 'react';\nconst App = () => {\nreturn();\n};\n```\n\n- Table\n\nHeader 1 | Header 2 | Header 3\n---- |---- | ----\nEntry 1 | Entry 1 | Entry 1\nEntry 2 | Entry 2 | Entry 2\n\n- _Text_ | **Text** | ~Text~ decoration\n\n- Blockquote\n> I'm a Quote!\n\n- Indented and ordered list\n\t- First level\n\t\t- Second level \n\t\t\t1. Numbered\n\t\t\t2. Numbered\n\n- Image\n\n![Twitter icon](https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Twitter_NEW.png)",isLight:!0,pageWidth:0},r.switchMode=r.switchMode.bind(Object(s.a)(r)),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("preview").innerHTML=p()(this.state.input,{breaks:!0})}},{key:"componentDidUpdate",value:function(){document.getElementById("preview").innerHTML=p()(this.state.input,{breaks:!0})}},{key:"switchMode",value:function(){this.setState({isLight:!this.state.isLight})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"page",className:this.state.isLight?"light-mode":"dark-mode",onMouseUp:this.remove},a.a.createElement("div",{id:"header"},a.a.createElement("h1",null,"Markdown ",a.a.createElement("span",null,"Previewer")),a.a.createElement(h,{toggle:this.switchMode,state:this.state.isLight})),a.a.createElement("div",{id:"editor-wrapper"},a.a.createElement("textarea",{id:"editor",value:this.state.input,onChange:function(t){return e.setState({input:t.target.value})}}),a.a.createElement("div",{id:"resize-handle",onMouseDown:this.resize})),a.a.createElement("div",{id:"preview-wrapper"},a.a.createElement("div",{id:"preview"})))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4df427e6.chunk.js.map