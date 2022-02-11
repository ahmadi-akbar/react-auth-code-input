(this["webpackJsonpreact-auth-code-input-example"]=this["webpackJsonpreact-auth-code-input-example"]||[]).push([[0],{1:function(e,t,n){},10:function(e,t,n){"use strict";n.r(t);n(1);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),u=n(4),i=function(e){var t=e.allowedCharacters,n=void 0===t?"^[A-Za-z0-9]*$":t,l=e.ariaLabel,c=e.characters,u=void 0===c?6:c,i=e.containerClassName,s=e.inputClassName,o=e.inputMode,m=e.inputType,p=void 0===m?"text":m,h=e.onChange,d=Object(a.useRef)([]);Object(a.useEffect)((function(){d.current[0].focus()}),[]);for(var g=function(){var e=d.current.map((function(e){return e.value})).join("");h&&h(e)},E=function(e){e.target.value.match(n)?null!==e.target.nextElementSibling&&e.target.nextElementSibling.focus():e.target.value="",g()},b=function(e){var t=e.key,n=e.target;"Backspace"===t&&(""===n.value&&null!==n.previousElementSibling?null!==n.previousElementSibling&&(n.previousElementSibling.focus(),e.preventDefault()):n.value="",g())},f=function(e){e.target.select()},C=function(e){var t=e.clipboardData.getData("Text");if(t.match(n)){for(var a=0;a<u&&a<t.length;a++)d.current[a].value=t.charAt(a),null!==d.current[a].nextElementSibling&&d.current[a].nextElementSibling.focus();g()}e.preventDefault()},v=[],x=function(e){v.push(r.a.createElement("input",{key:e,onChange:E,onKeyDown:b,onFocus:f,onPaste:C,type:p,ref:function(t){return d.current[e]=t},maxLength:1,className:s,inputMode:o,autoComplete:"one-time-password","aria-label":l?"".concat(l,". Character ").concat(e+1):"Character ".concat(e+1),pattern:n.slice(1,-1)}))},y=0;y<u;y++)x(y);return r.a.createElement("div",{className:i},v)},s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"React Auth Code Input"),r.a.createElement("div",{className:"badges"},r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/v/react-auth-code-input.svg"}),r.a.createElement("img",{alt:"code style standard",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}),r.a.createElement("img",{alt:"license MIT",src:"https://img.shields.io/badge/license-MIT-brightgreen.svg"}),r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/dt/react-auth-code-input.svg"}),r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/dw/react-auth-code-input.svg"})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/drac94/react-auth-code-input"},"View documentation on GitHub")),r.a.createElement("input",{type:"text",placeholder:"1112",maxLength:2}),r.a.createElement("h2",null,"Default"),r.a.createElement("p",null,"Try it out by writing some characters.",r.a.createElement("br",null),r.a.createElement("br",null),"Delete and move back using the backspace.",r.a.createElement("br",null),r.a.createElement("br",null),"You can also paste text as long as it matches the allowed characters defined in the Regular Expression (By default accepts alphanumeric characters)."),r.a.createElement(i,{onChange:function(e){l(e)}}),n&&r.a.createElement("p",null,"Result: ",n),r.a.createElement("code",null,"\nimport React, { useState } from 'react'\nimport AuthCode from 'react-auth-code-input'\n\nconst App = () => {\n  const [result, setResult] = useState<string>('');\n  const handleOnChange = (res: string) => {\n    setResult(res);\n  };\n  return (\n    <div>\n      <AuthCode onChange={handleOnChange} />\n      {result && <p>Result: {result}</p>}\n    </div>\n  );\n        "),r.a.createElement("h2",null,"Custom Styles"),r.a.createElement("p",null,"Customize the look by passing CSS classes to the"," ",r.a.createElement("i",null,"containerClassName")," and ",r.a.createElement("i",null,"inputClassName")," properties."),r.a.createElement(i,{onChange:function(){return null},characters:5,containerClassName:"container",inputClassName:"input"}),r.a.createElement("p",null,"index.tsx"),r.a.createElement("code",null,"\nimport React from 'react'\nimport AuthCode from 'react-auth-code-input'\n\nconst App = () => {\n  return (<AuthCode\n    characters={5}\n    containerClassName='container'\n    inputClassName='input'\n    onChange={handleOnChange}\n  />)\n}\n        "),r.a.createElement("p",null,"styles.css"),r.a.createElement("code",null,"\n.container {\n  padding: 16px;\n}\n\n.input {\n  width: 2ch;\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 40px;\n  text-align: center;\n  margin-right: 12px;\n  border: 1px solid white;\n  text-transform: uppercase;\n}\n        "),r.a.createElement("h2",null,"Input Types"),r.a.createElement("p",null,"Choose between ",r.a.createElement("b",null,"numeric"),", ",r.a.createElement("b",null,"text")," or ",r.a.createElement("b",null,"password")," input types (Defaults to text)."),r.a.createElement(i,{onChange:function(){return null},characters:5,inputType:"password",containerClassName:"container",inputClassName:"input"}),r.a.createElement("p",null,"index.tsx"),r.a.createElement("code",null,"\nimport React from 'react'\nimport AuthCode from 'react-auth-code-input'\n\nconst App = () => {\n  return (<AuthCode\n    characters={5}\n    inputType='password'\n    containerClassName='container'\n    inputClassName='input'\n    onChange={handleOnChange}\n  />)\n}\n        "),r.a.createElement("a",{className:"github-fork-ribbon",href:"https://github.com/drac94/react-auth-code-input","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub",target:"_blank",rel:"noopener noreferrer"},"Fork me on GitHub"))};c.a.render(r.a.createElement(s,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.eb765100.chunk.js.map