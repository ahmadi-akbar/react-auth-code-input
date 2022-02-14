(this["webpackJsonpreact-auth-code-input-example"]=this["webpackJsonpreact-auth-code-input-example"]||[]).push([[0],{1:function(e,t,n){},10:function(e,t,n){"use strict";n.r(t);n(1);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),u=n(4),i={alpha:{type:"text",inputMode:"text",pattern:"[a-zA-Z]{1}"},alphanumeric:{type:"text",inputMode:"text",pattern:"[a-zA-Z0-9]{1}"},numeric:{type:"number",inputMode:"numeric",pattern:"[0-9]{1}",min:"0",max:"9"}},o=function(e){var t=e.allowedCharacters,n=void 0===t?"alphanumeric":t,l=e.ariaLabel,c=e.length,u=void 0===c?6:c,o=e.containerClassName,s=e.inputClassName,m=e.isPassword,p=void 0!==m&&m,h=e.onChange,d=Object(a.useRef)([]),g=i[n];Object(a.useEffect)((function(){d.current[0].focus()}),[]);for(var E=function(){var e=d.current.map((function(e){return e.value})).join("");h&&h(e)},f=function(e){var t=e.target,n=t.value,a=t.nextElementSibling;n.length>1?(e.target.value=n.charAt(0),null!==a&&a.focus()):n.match(g.pattern)?null!==a&&a.focus():e.target.value="",E()},b=function(e){var t=e.key,n=e.target;"Backspace"===t&&(""===n.value&&null!==n.previousElementSibling?null!==n.previousElementSibling&&(n.previousElementSibling.focus(),e.preventDefault()):n.value="",E())},C=function(e){e.target.select()},v=function(e){for(var t=e.clipboardData.getData("Text"),n=0,a=0;a<t.length;a++){var r=t.charAt(a),l=d.current[n].value;r.match(g.pattern)&&(l||(d.current[n].value=r,null!==d.current[n].nextElementSibling&&(d.current[n].nextElementSibling.focus(),n++)))}E(),e.preventDefault()},x=[],N=function(e){x.push(r.a.createElement("input",Object.assign({key:e,onChange:f,onKeyDown:b,onFocus:C,onPaste:v},g,{type:p?"password":g.type,ref:function(t){return d.current[e]=t},maxLength:1,className:s,autoComplete:0===e?"one-time-code":"off","aria-label":l?"".concat(l,". Character ").concat(e+1,"."):"Character ".concat(e+1,".")})))},y=0;y<u;y++)N(y);return r.a.createElement("div",{className:o},x)},s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"React Auth Code Input"),r.a.createElement("p",null,"One-time password (OTP) React input component."),r.a.createElement("div",{className:"badges"},r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/v/react-auth-code-input.svg"}),r.a.createElement("img",{alt:"code style standard",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}),r.a.createElement("img",{alt:"license MIT",src:"https://img.shields.io/badge/license-MIT-brightgreen.svg"}),r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/dt/react-auth-code-input.svg"}),r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/dw/react-auth-code-input.svg"})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/drac94/react-auth-code-input"},"View documentation on GitHub")),r.a.createElement("h3",null,"Modes:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Alpha."),r.a.createElement("li",null,"Alphanumeric (default)."),r.a.createElement("li",null,"Numeric.")),r.a.createElement("h3",null,"Supports:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Pasting."),r.a.createElement("li",null,"Move back using the backspace key."),r.a.createElement("li",null,"SMS.")),r.a.createElement("h2",null,"Default"),r.a.createElement(o,{onChange:function(e){l(e)}}),n&&r.a.createElement("p",null,"Result: ",n),r.a.createElement("code",null,"\nimport React, { useState } from 'react'\nimport AuthCode from 'react-auth-code-input'\n\nconst App = () => {\n  const [result, setResult] = useState<string>('');\n  const handleOnChange = (res: string) => {\n    setResult(res);\n  };\n  return (\n    <div>\n      <AuthCode onChange={handleOnChange} />\n      {result && <p>Result: {result}</p>}\n    </div>\n  );\n        "),r.a.createElement("h2",null,"Custom Styles"),r.a.createElement("p",null,"Customize the look by passing CSS classes to the"," ",r.a.createElement("i",null,"containerClassName")," and ",r.a.createElement("i",null,"inputClassName")," properties."),r.a.createElement(o,{allowedCharacters:"numeric",onChange:function(){return null},length:5,containerClassName:"container",inputClassName:"input"}),r.a.createElement("p",null,"index.tsx"),r.a.createElement("code",null,"\nimport React from 'react'\nimport AuthCode from 'react-auth-code-input'\n\nconst App = () => {\n  return (<AuthCode\n    allowedCharacters='numeric'\n    length={5}\n    containerClassName='container'\n    inputClassName='input'\n    inputType='number'\n    onChange={handleOnChange}\n  />)\n}\n        "),r.a.createElement("p",null,"styles.css"),r.a.createElement("code",null,"\n.container {\n  padding: 16px;\n}\n\n.input {\n  width: 2ch;\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 40px;\n  text-align: center;\n  margin-right: 12px;\n  border: 1px solid white;\n  text-transform: uppercase;\n}\n        "),r.a.createElement("h2",null,"Passwords"),r.a.createElement("p",null,"Protect your inputs."),r.a.createElement(o,{onChange:function(){return null},length:5,isPassword:!0,containerClassName:"container",inputClassName:"input"}),r.a.createElement("p",null,"index.tsx"),r.a.createElement("code",null,"\nimport React from 'react'\nimport AuthCode from 'react-auth-code-input'\n\nconst App = () => {\n  return (<AuthCode\n    length={5}\n    isPassword\n    containerClassName='container'\n    inputClassName='input'\n    onChange={handleOnChange}\n  />)\n}\n        "),r.a.createElement("a",{className:"github-fork-ribbon",href:"https://github.com/drac94/react-auth-code-input","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub",target:"_blank",rel:"noopener noreferrer"},"Fork me on GitHub"))};c.a.render(r.a.createElement(s,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.71342416.chunk.js.map