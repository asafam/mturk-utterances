(this.webpackJsonpmturk=this.webpackJsonpmturk||[]).push([[0],{27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(13),i=n.n(c),r=(n(26),n(27),n(16)),l=n(8),o=n(9),d=n(4),h=n(12),u=n(11),b=n(20),j=n(14),m=n(35),x=n(0),p=function(e){return Object(x.jsxs)(j.a,Object(b.a)(Object(b.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0,children:[Object(x.jsx)(j.a.Header,{closeButton:!0,children:Object(x.jsx)(j.a.Title,{id:"contained-modal-title-vcenter",children:"Help"})}),Object(x.jsx)(j.a.Body,{children:Object(x.jsx)("div",{children:e.children})}),Object(x.jsx)(j.a.Footer,{children:Object(x.jsx)(m.a,{onClick:e.onHide,children:"Close"})})]}))},O=function(){var e=a.a.useState(!1),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{variant:"info",onClick:function(){return s(!0)},children:"Help"}),Object(x.jsx)(p,{show:n,onHide:function(){return s(!1)},children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("h5",{children:"Good example"}),Object(x.jsxs)("div",{className:"card border-success rounded mb-3 p-3",style:{height:"321px"},children:[Object(x.jsx)("strong",{children:"Context"}),Object(x.jsx)("p",{children:"A workout"}),Object(x.jsx)("strong",{children:"Your administrative assistance can do the following:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Get weather information"}),Object(x.jsx)("li",{children:"Send a text message to anyone on your contact list"})]}),Object(x.jsx)("strong",{children:"Response"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{style:{"background-color":"#7FFF00"},children:"Tell Thomas to bring shorts "}),Object(x.jsx)("span",{style:{"background-color":"yellow"},children:"if it's going to be hot tomorrow"})]})]}),Object(x.jsxs)("div",{className:"card border-success rounded mb-3 p-3",style:{height:"321px"},children:[Object(x.jsx)("strong",{children:"Context"}),Object(x.jsx)("p",{children:"A concert"}),Object(x.jsx)("strong",{children:"Your administrative assistance can do the following:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Get events information"}),Object(x.jsx)("li",{children:"Create a reminder"})]}),Object(x.jsx)("strong",{children:"Response"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{style:{"background-color":"yellow"},children:"Create a reminder for "}),Object(x.jsx)("span",{style:{"background-color":"#7FFF00"},children:"every Drake's concert this summer in the city"})]})]})]}),Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("h5",{children:"Bad example"}),Object(x.jsxs)("div",{className:"card border-danger rounded mb-3 p-3",style:{height:"321px"},children:[Object(x.jsx)("strong",{children:"Context"}),Object(x.jsx)("p",{children:"A workout"}),Object(x.jsx)("strong",{children:"Your administrative assistance can do the following:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Get weather information"}),Object(x.jsx)("li",{children:"Send a text message to anyone on your contact list"})]}),Object(x.jsxs)("strong",{children:["Response (",Object(x.jsx)("span",{style:{color:"red"},children:"wrong - using just one intent"}),")"]}),Object(x.jsx)("p",{style:{color:"red"},children:"Is it going to be hot tomorrow?"})]})]})]})})})]})},g=function(e){var t=e.header,n=e.instructions,s=e.utterance,a=e.progress,c=e.hideHelp,i=e.hideHeader,r=e.hideUtterance;return Object(x.jsx)("div",{className:"instructions",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"mx-auto",children:[!i&&Object(x.jsx)("h4",{children:t||"Instructions"}),Object(x.jsx)("div",{children:n}),!r&&Object(x.jsx)("p",{className:"text-center text-muted rounded border-primary p-3 mb-5",children:s}),!c&&Object(x.jsx)(O,{})]}),Object(x.jsx)("div",{className:"progress mt-5 mb-5 ml-auto mr-auto",style:{width:"90%"},children:Object(x.jsxs)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100",children:[parseInt(a),"%"]})})]})})},v=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;Object(l.a)(this,n),s=t.call(this,e);var a=e.utterance;return s.state={utterance:a},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleBack=s.handleBack.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=this.props.utteranceLimit,n=e.target.value;this.setState({utterance:n.length<=t?n:this.state.utterance})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.utterance,n=this.isUtteranceValid();n?this.props.onSubmit(t):this.setState({valid:n})}},{key:"handleBack",value:function(e){e.preventDefault(),this.setState({errorMessage:null}),this.props.onBack()}},{key:"isUtteranceValid",value:function(){var e=this.props,t=e.intents,n=e.linkWord,s=this.state.utterance;return!(!s||0===s.length)&&(s.split(" ").length<=2?(this.setState({errorMessage:Object(x.jsx)("span",{children:"Please be more creative."})}),!1):t.some((function(e){return s.toLowerCase().indexOf(e.toLowerCase())>=0}))?(this.setState({errorMessage:Object(x.jsx)("span",{children:"Please write a valid request in plain English."})}),!1):n&&n.length>0&&-1===s.toLowerCase().indexOf("".concat(n.toLowerCase()))?(this.setState({errorMessage:Object(x.jsxs)("span",{children:["Please write a valid request that includes the mandatory word ",Object(x.jsx)("strong",{children:n}),"."]})}),!1):!(s.indexOf("?")>=0&&s.indexOf("?")<.5*s.length||s.trim().split("?").filter((function(e){return e.length>0})).length>1)||(this.setState({errorMessage:Object(x.jsxs)("span",{children:["Please phrase the utterance as a ",Object(x.jsx)("strong",{children:"single"})," request (and not in multiple phrases)."]})}),!1))}},{key:"render",value:function(){var e=this.props,t=e.context,n=e.intents,s=e.icons,a=e.linkWord,c=e.index,i=e.utteranceLimit,r=this.state,l=r.utterance,o=r.valid,d=r.errorMessage,h=!(l&&l.length>0),u=0===c?"Write your request":"Update your request",b=0===c?"Write a request to your administrative assistance":"Rephrase your equest to your administrative assistance";return Object(x.jsxs)("div",{className:"form",children:[Object(x.jsxs)("div",{className:"container ml-auto mr-auto card border-warning bg-light rounded p-3",style:{marginTop:"50px",marginBottom:"50px",width:"100%",borderColor:"#ffc107"},children:[Object(x.jsx)("div",{className:"row mb-3",children:Object(x.jsx)("div",{className:"col",children:Object(x.jsxs)("div",{className:"bd-callout bd-callout-yellow2",children:[Object(x.jsx)("p",{className:"text-muted",children:"Tasks your assistance can do for you:"}),n.map((function(e,t){return Object(x.jsxs)("h5",{style:{color:"".concat(c===t?"#007BFF":"#E0E0E0")},children:[Object(x.jsx)("span",{className:"bi bi-".concat(s[t]),style:{paddingRight:"15px"}}),e]},t)}))]})})}),Object(x.jsx)("div",{className:"row mb-3",children:Object(x.jsx)("div",{className:"col",children:Object(x.jsxs)("div",{className:"bd-callout bd-callout-yellow1",children:[Object(x.jsx)("p",{className:"text-muted",children:"Context:"}),Object(x.jsx)("h5",{children:t})]})})}),a&&a.length>0&&Object(x.jsx)("div",{className:"row mb-3",children:Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("div",{className:"bd-callout bd-callout-yellow2",children:Object(x.jsxs)("h6",{children:["Please include the word ",Object(x.jsx)("span",{className:"pl-1 pr-1",style:{fontSize:"2rem"},children:a})," in your request to link the tasks."]})})})})]}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{children:u}),Object(x.jsxs)("form",{className:"g-3 needs-validation",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(x.jsxs)("div",{className:"has-validation mb-3",children:[Object(x.jsx)("label",{className:"form-label",style:{display:"none"},children:b}),Object(x.jsx)("textarea",{className:"form-control ".concat(!0===o?"is-valid":!1===o&&"is-invalid"),rows:"5",value:l,type:"text",id:"utterance","aria-describedby":"help",onChange:this.handleChange,placeholder:"Type your request here...",required:!0}),Object(x.jsxs)("div",{className:"p-1 m-1 ".concat((l||"").length>=i?"text-red":""),children:[(l||"").length," / ",i]}),Object(x.jsxs)("div",{id:"help",className:"form-text text-muted",children:["Remember to use ",Object(x.jsx)("strong",{children:"all tasks"})," in your request"]}),Object(x.jsx)("div",{className:"invalid-feedback",children:d})]}),Object(x.jsxs)("div",{className:"btn-toolbar",role:"toolbar",children:[c>0&&Object(x.jsx)("div",{className:"btn-group pl-2 pr-2",role:"group",children:Object(x.jsxs)("button",{type:"Back",className:"btn btn-secondary",onClick:this.handleBack,children:[Object(x.jsx)("i",{className:"bi bi-arrow-left pr-1"}),"Back"]})}),Object(x.jsx)("div",{className:"btn-group  ".concat(0!==c?"mr-2":""),role:"group",children:Object(x.jsx)("button",{type:"Submit",className:"btn btn-primary pl-4 pr-4",disabled:h,children:"Next"})})]})]})]})]})}}]),n}(a.a.Component),f=n(15),y=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={},s.handleChangeValue=s.handleChangeValue.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleBack=s.handleBack.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"handleChangeValue",value:function(e){var t=e.target,n=t.name,s=t.id.endsWith("pos");this.setState(Object(f.a)({},n,s))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit()}},{key:"handleBack",value:function(e){e.preventDefault(),this.props.onBack()}},{key:"render",value:function(){var e=this.props,t=e.intents,n=e.icons,s=e.linkWord,a=this.state,c=a.tasksVerification,i=a.linkWordVerification,r=!c||!i;return Object(x.jsx)("div",{className:"phrase-verification",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"mb-3",children:"Did you use all the listed tasks in your request?"}),Object(x.jsx)("div",{className:"bd-callout bd-callout-yellow2",children:t.map((function(e,t){return Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{className:"bi bi-".concat(n[t]),style:{paddingRight:"15px"}}),e]},t)}))}),Object(x.jsxs)("div",{className:"text-center",onChange:this.handleChangeValue,children:[Object(x.jsxs)("div",{className:"form-check form-check-inline",children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"tasksVerification",id:"tvpos",value:c}),Object(x.jsx)("label",{className:"form-check-label",children:"Yes"})]}),Object(x.jsxs)("div",{className:"form-check form-check-inline",children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"tasksVerification",id:"tvneg",value:!c}),Object(x.jsx)("label",{className:"form-check-label",children:"No"})]})]})]}),s&&s.length>0&&Object(x.jsxs)("div",{className:"mt-5",children:[Object(x.jsxs)("h5",{className:"mb-3",children:["Did you link the tasks in your request using the word ",Object(x.jsx)("span",{className:"pl-1 pr-1",style:{fontSize:"2.2rem"},children:s}),"?"]}),Object(x.jsxs)("div",{className:"text-center",onChange:this.handleChangeValue,children:[Object(x.jsxs)("div",{className:"form-check form-check-inline",children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"linkWordVerification",id:"lwvpos",value:i}),Object(x.jsx)("label",{className:"form-check-label",children:"Yes"})]}),Object(x.jsxs)("div",{className:"form-check form-check-inline",children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"linkWordVerification",id:"lwvneg",value:!i}),Object(x.jsx)("label",{className:"form-check-label",children:"No"})]})]})]}),Object(x.jsxs)("div",{className:"btn-toolbar mt-5",role:"toolbar",children:[Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsxs)("button",{type:"Back",className:"btn btn-secondary",onClick:this.handleBack,children:[Object(x.jsx)("i",{className:"bi bi-arrow-left pr-1"}),"Back"]})}),Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-primary pl-4 pr-4",onClick:this.handleSubmit,disabled:r,children:"Submit"})})]})]})})}}]),n}(a.a.Component),k=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;Object(l.a)(this,n),s=t.call(this,e);var a=e.index,c=e.selectionStart,i=e.selectionEnd;return s.state={index:a,selectionStart:c,selectionEnd:i},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleBack=s.handleBack.bind(Object(d.a)(s)),s.handleMouseUp=s.handleMouseUp.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"getSelection",value:function(){var e=document.getElementById("utterance-selection");return{selectionStart:e&&e.selectionStart,selectionEnd:e&&e.selectionEnd}}},{key:"setSelectedText",value:function(e,t){var n=document.getElementById("utterance-selection");n&&n.setSelectionRange(e,t)}},{key:"handleMouseUp",value:function(e){var t=this.getSelection(),n=t.selectionStart,s=t.selectionEnd;this.setState({selectionStart:n,selectionEnd:s,errorMessage:null})}},{key:"handleChange",value:function(e){e.preventDefault()}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.selectionStart,s=t.selectionEnd;if(n>=0&&s>n){var a=this.props.index;this.props.onSubmit(a,n,s,!0)}else this.setState({selected:!0,errorMessage:"Please select the part in your utterance that fits the task."})}},{key:"handleBack",value:function(e){e.preventDefault(),this.props.onBack()}},{key:"render",value:function(){var e=this.props,t=e.utterance,n=e.intents[e.index],s=this.state,a=s.selectionStart,c=s.selectionEnd,i=!(a>=0&&c>a),r=t.substring(a,c);return Object(x.jsx)("div",{className:"Selections",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"card text-dark border-primary mb-3",children:[Object(x.jsxs)("div",{className:"card-header text-white bg-primary",children:["Select the text that references ",Object(x.jsxs)("strong",{children:['"',n,'"']}),":"]}),Object(x.jsx)("div",{className:"card-body p-0",children:Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)("textarea",{className:"form-control p-3",rows:"5",value:t,type:"text",id:"utterance-selection","aria-describedby":"help",style:{cursor:"text",border:"none"},onChange:this.handleChange,onMouseUp:this.handleMouseUp})})})]}),Object(x.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(x.jsx)("div",{className:"card-header",children:"You selected:"}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsx)("p",{className:"card-text",children:r})})]}),Object(x.jsxs)("div",{className:"btn-toolbar",role:"toolbar",children:[Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsxs)("button",{type:"Back",className:"btn btn-secondary",onClick:this.handleBack,children:[Object(x.jsx)("i",{className:"bi bi-arrow-left pr-1"}),"Back"]})}),Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-primary pl-4 pr-4",onClick:this.handleSubmit,disabled:i,children:"Submit"})})]})]})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.index,s=e.selectionStart,a=e.selectionEnd;return{index:n,selectionStart:n===t.index?t.selectionStart:s,selectionEnd:n===t.index?t.selectionEnd:a}}}]),n}(a.a.Component),N=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleBack=s.handleBack.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit()}},{key:"handleBack",value:function(e){e.preventDefault(),this.props.onBack()}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"thank-you",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{className:"text-muted text-center mb-3",children:"Thank You."}),Object(x.jsxs)("div",{className:"col-md-12 text-center",role:"toolbar",children:[Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsxs)("button",{type:"Back",className:"btn btn-secondary",onClick:this.handleBack,children:[Object(x.jsx)("i",{className:"bi bi-arrow-left pr-1"}),"Back"]})}),Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsx)("button",{type:"Submit",className:"btn btn-primary pl-4 pr-4",onClick:this.handleSubmit,children:"Done"})})]})]})})}}]),n}(a.a.Component),S={utterancePhrasing:0,utteranceVerification:1,intentsSelection:2,end:3},w=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;Object(l.a)(this,n),s=t.call(this,e);var a=e.intents,c=a.map((function(e){return[0,0]}));return s.state={status:S.utterancePhrasing,utterances:new Array(a.length),intentsSelections:c,intentIndex:0,intentSelectionIndex:0},s.handleSubmitUtterance=s.handleSubmitUtterance.bind(Object(d.a)(s)),s.handleUtteranceVerification=s.handleUtteranceVerification.bind(Object(d.a)(s)),s.handleSelection=s.handleSelection.bind(Object(d.a)(s)),s.handleBack=s.handleBack.bind(Object(d.a)(s)),s.handleMTurkSubmit=s.handleMTurkSubmit.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"getInstructions",value:function(){var e=this.props,t=e.intents,n=e.icons,s=this.state,a=s.status,c=s.intentIndex,i=s.intentSelectionIndex;return a===S.utterancePhrasing&&0===c?Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"lead fs-5 d",children:"Write a request to your virtual assistance in plain English that will use the given tasks your assistance can do in the provided context."}),Object(x.jsx)("p",{children:"Try to be as creative as you can, don't be overly formal, simply write in plain English what you would say if you were in the given situation. Click 'Help' to see few examples."}),Object(x.jsx)("p",{className:"bg-warning text-dark text-center p-2 mb-4",children:Object(x.jsxs)("em",{children:["The best utterances phrase the tasks in relation to one-another in a ",Object(x.jsx)("u",{children:"single"})," request."]})})]}):a===S.utterancePhrasing&&c>0?Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"lead fs-5 d",children:"Rephrase your previous request with another task in a single sentence."}),Object(x.jsx)("p",{children:"Again, try to be as creative as you can, don't be overly formal. Click 'Help' to see few examples."}),Object(x.jsx)("p",{className:"bg-warning text-dark text-center p-2 mb-4",children:Object(x.jsxs)("em",{children:["The best utterances phrase the tasks in relation to one-another in a ",Object(x.jsx)("u",{children:"single"})," request."]})})]}):a===S.utteranceVerification?Object(x.jsx)("div",{children:Object(x.jsx)("p",{className:"lead fs-5 d",children:"Review your request and verify it was written correctly. "})}):a===S.intentsSelection?Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"lead fs-5 d",children:"Highlight with your mouse the part in your request that references the following task:"}),Object(x.jsxs)("h5",{className:"mt-3 mb-4",children:[Object(x.jsx)("span",{className:"bi bi-".concat(n[i]),style:{paddingRight:"15px"}}),t[i]]})]}):["",""]}},{key:"getHeader",value:function(){return this.state.status===S.utteranceVerification?"Review your request":null}},{key:"handleMTurkSubmit",value:function(){var e=this.state,t=e.utterance,n=e.utterances,s=e.intentsSelections.map((function(e){return e.join(", ")})).join(" | "),a=n.join(" | ");document.querySelector("crowd-form").onsubmit=function(){document.getElementById("utterance")&&(document.getElementById("utterance").value=t,document.getElementById("annotations").value=s,document.getElementById("utterances").value=a)},document.querySelector("crowd-form").submit()}},{key:"handleUtteranceVerification",value:function(){var e=S.intentsSelection;this.setState({status:e})}},{key:"handleSubmitUtterance",value:function(e){var t=this.props.intents,n=this.state,s=n.intentIndex,a=n.status,c=n.utterances;s=Math.min(s+1,t.length),a===S.utterancePhrasing&&s===t.length&&(a=S.utteranceVerification,c[s]=e),this.setState({utterance:e,utterances:c,status:a,intentIndex:s})}},{key:"handleBack",value:function(){var e=this.state,t=e.status,n=e.intentIndex,s=e.intentSelectionIndex,a=t;t===S.end||t===S.intentsSelection&&s>0?(a=S.intentsSelection,s=Math.max(s-1,0)):t===S.intentsSelection?a=S.utteranceVerification:t!==S.utteranceVerification&&t!==S.utterancePhrasing||(a=S.utterancePhrasing,n=Math.max(n-1,0)),this.setState({status:a,intentIndex:n,intentSelectionIndex:s})}},{key:"handleSelection",value:function(e,t,n,s){var a=this.state,c=a.intentsSelections,i=a.status;c[e]=[t,n];var r=this.props.intents,l=r.every((function(e,t){return c[t][0]>=0&&c[t][1]>c[t][0]}));s&&l&&e===r.length-1&&(i=S.end),this.setState({intentsSelections:c,status:i,intentSelectionIndex:Math.min(e+1,r.length)})}},{key:"getProgress",value:function(){var e=this.props,t=e.intents,n=e.linkWord,s=this.state,a=s.status,c=s.intentIndex,i=s.intentSelectionIndex,r=2*t.length+(n?1:0);switch(a){case S.utterancePhrasing:return c/r*100;case S.utteranceVerification:return t.length/r*100;case S.intentsSelection:return(t.length+1+i)/r*100;case S.end:return 100;default:return 0}}},{key:"render",value:function(){var e=this.props,t=e.context,n=e.intents,s=e.icons,a=e.linkWord,c=e.maxLength,i=e.maxLengthPerIntent,l=this.state,o=l.status,d=l.utterance,h=l.intentIndex,u=l.intentsSelections,b=l.intentSelectionIndex,j=b>=0&&b<n.length?u[b]:[0,0],m=Object(r.a)(j,2),p=m[0],O=m[1],f=this.getProgress(),w=this.getInstructions(),B=this.getHeader(),C=c||i*n.length||250;return Object(x.jsx)("div",{className:"utterances",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center",style:{height:"550px"},children:[Object(x.jsx)("div",{className:"col",children:Object(x.jsx)(g,{header:B,instructions:w,utterance:d,progress:f,hideHeader:o===S.end,hideHelp:o===S.end,hideUtterance:o===S.utteranceVerificatio})}),Object(x.jsxs)("div",{className:"col",children:[o===S.utterancePhrasing&&Object(x.jsx)(v,{utterance:d,context:t,intents:n,icons:s,index:h,linkWord:1===h?a:null,utteranceLimit:C,onSubmit:this.handleSubmitUtterance,onBack:this.handleBack}),o===S.utteranceVerification&&Object(x.jsx)(y,{linkWord:a,intents:n,icons:s,onSubmit:this.handleUtteranceVerification,onBack:this.handleBack}),o===S.intentsSelection&&Object(x.jsx)(k,{utterance:d,selectionStart:p,selectionEnd:O,intents:n,icons:s,index:b,onSubmit:this.handleSelection,onBack:this.handleBack}),o===S.end&&Object(x.jsx)(N,{onSubmit:this.handleMTurkSubmit,onBack:this.handleBack})]})]})})})}}]),n}(a.a.Component),B=function(e){var t=e.id,n=e.context,s=e.intents,a=e.icons,c=e.linkWord,i=e.maxLength,r=e.maxLengthPerIntent;return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(w,{id:t,context:n,intents:s,icons:a,linkWord:c,maxLength:i,maxLengthPerIntent:r})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))},I=document.getElementById("root").getAttribute("data-id"),E=document.getElementById("root").getAttribute("data-context"),V=document.getElementById("root").getAttribute("data-intents").split("|").map((function(e){return e.trim()})),P=document.getElementById("root").getAttribute("data-icons").split("|").map((function(e){return e.trim()})),q=document.getElementById("root").getAttribute("data-link-word"),M=parseInt(document.getElementById("root").getAttribute("data-max-length")),U=parseInt(document.getElementById("root").getAttribute("data-max-length-per-intent"));console.log("context",document.getElementById("root").getAttribute("data-context")),console.log("intents",document.getElementById("root").getAttribute("data-intents")),console.log("icons",document.getElementById("root").getAttribute("data-icons")),i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(B,{id:I,context:E,intents:V,icons:P,linkWord:q,maxLength:M,maxLengthPerIntent:U})}),document.getElementById("root")),C()}},[[32,1,2]]]);
//# sourceMappingURL=main.20e8fc67.chunk.js.map