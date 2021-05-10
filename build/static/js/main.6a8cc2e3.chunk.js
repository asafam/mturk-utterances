(this.webpackJsonpmturk=this.webpackJsonpmturk||[]).push([[0],{26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(13),i=n.n(c),r=(n(25),n(26),n(15)),l=n(9),o=n(10),d=n(6),h=n(12),u=n(11),b=n(19),j=n(14),m=n(34),x=n(0),O=function(e){return Object(x.jsxs)(j.a,Object(b.a)(Object(b.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0,children:[Object(x.jsx)(j.a.Header,{closeButton:!0,children:Object(x.jsx)(j.a.Title,{id:"contained-modal-title-vcenter",children:"Help"})}),Object(x.jsx)(j.a.Body,{children:Object(x.jsx)("div",{children:e.children})}),Object(x.jsx)(j.a.Footer,{children:Object(x.jsx)(m.a,{onClick:e.onHide,children:"Close"})})]}))},p=function(){var e=a.a.useState(!1),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{variant:"info",onClick:function(){return s(!0)},children:"Help"}),Object(x.jsx)(O,{show:n,onHide:function(){return s(!1)},children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("h5",{children:"Good example"}),Object(x.jsxs)("div",{className:"card border-success rounded mb-3 p-3",style:{height:"321px"},children:[Object(x.jsx)("strong",{children:"Context"}),Object(x.jsx)("p",{children:"A workout"}),Object(x.jsx)("strong",{children:"Your administrative assistance can do the following:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Get weather information"}),Object(x.jsx)("li",{children:"Send a text message to anyone on your contact list"})]}),Object(x.jsx)("strong",{children:"Response"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{style:{"background-color":"#7FFF00"},children:"Tell Thomas to bring shorts "}),Object(x.jsx)("span",{style:{"background-color":"yellow"},children:"if it's going to be hot tomorrow"})]})]}),Object(x.jsxs)("div",{className:"card border-success rounded mb-3 p-3",style:{height:"321px"},children:[Object(x.jsx)("strong",{children:"Context"}),Object(x.jsx)("p",{children:"A concert"}),Object(x.jsx)("strong",{children:"Your administrative assistance can do the following:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Get events information"}),Object(x.jsx)("li",{children:"Create a reminder"})]}),Object(x.jsx)("strong",{children:"Response"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{style:{"background-color":"yellow"},children:"Create a reminder for "}),Object(x.jsx)("span",{style:{"background-color":"#7FFF00"},children:"every Drake's concert this summer in the city"})]})]})]}),Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("h5",{children:"Bad example"}),Object(x.jsxs)("div",{className:"card border-danger rounded mb-3 p-3",style:{height:"321px"},children:[Object(x.jsx)("strong",{children:"Context"}),Object(x.jsx)("p",{children:"A workout"}),Object(x.jsx)("strong",{children:"Your administrative assistance can do the following:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Get weather information"}),Object(x.jsx)("li",{children:"Send a text message to anyone on your contact list"})]}),Object(x.jsxs)("strong",{children:["Response (",Object(x.jsx)("span",{style:{color:"red"},children:"wrong - using just one intent"}),")"]}),Object(x.jsx)("p",{style:{color:"red"},children:"Is it going to be hot tomorrow?"})]})]})]})})})]})},v=function(e){var t=e.instructions,n=e.progress,s=e.hideHelp,a=e.hideHeader;return Object(x.jsx)("div",{className:"instructions",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"mx-auto",children:[!a&&Object(x.jsx)("h4",{children:"Instructions"}),Object(x.jsx)("div",{children:t[0]}),Object(x.jsx)("div",{children:t[1]}),!s&&Object(x.jsx)(p,{})]}),Object(x.jsx)("div",{className:"progress mt-5 mb-5 ml-auto mr-auto",style:{width:"90%"},children:Object(x.jsxs)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(n,"%")},"aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",children:[parseInt(n),"%"]})})]})})},g=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={utterance:e.utterance},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({utterance:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.utterance,n=this.isUtteranceValid();n?this.props.onSubmit(t):this.setState({valid:n})}},{key:"isUtteranceValid",value:function(){var e=this.props,t=e.intents,n=e.word,s=this.state.utterance;return!(!s||0===s.length)&&(s.split(" ").length<=4?(this.setState({errorMessage:Object(x.jsx)("span",{children:"Please write a valid request that includes all the tasks."})}),!1):t.some((function(e){return s.toLowerCase().indexOf(e.toLowerCase())>=0}))?(this.setState({errorMessage:Object(x.jsx)("span",{children:"Please write a valid request in plain English."})}),!1):!(n&&n.length>0&&-1===s.toLowerCase().indexOf(" ".concat(n.toLowerCase())))||(this.setState({errorMessage:Object(x.jsxs)("span",{children:["Please write a valid request that includes the mandatory word ",Object(x.jsx)("strong",{children:n}),"."]})}),!1))}},{key:"render",value:function(){var e=this.props,t=e.context,n=e.intents,s=e.icons,a=e.word,c=this.state,i=c.utterance,r=c.valid,l=c.errorMessage,o=!(i&&i.length>0);return Object(x.jsxs)("div",{className:"form",children:[Object(x.jsxs)("div",{className:"container ml-auto mr-auto card border-warning bg-light rounded p-3",style:{marginTop:"50px",marginBottom:"50px",width:"100%",borderColor:"#ffc107"},children:[Object(x.jsx)("div",{className:"row mb-3",children:Object(x.jsx)("div",{className:"col",children:Object(x.jsxs)("div",{className:"bd-callout bd-callout-yellow1",children:[Object(x.jsx)("p",{className:"text-muted",children:"Context:"}),Object(x.jsx)("h4",{children:t})]})})}),Object(x.jsx)("div",{className:"row mb-3",children:Object(x.jsx)("div",{className:"col",children:Object(x.jsxs)("div",{className:"bd-callout bd-callout-yellow2",children:[Object(x.jsx)("p",{className:"text-muted",children:"Tasks your assistance can do for you:"}),n.map((function(e,t){return Object(x.jsxs)("h4",{children:[Object(x.jsx)("span",{className:"bi bi-".concat(s[t]),style:{paddingRight:"15px"}}),e]},t)}))]})})}),a&&a.length>0&&Object(x.jsx)("div",{className:"row mb-3",children:Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("div",{className:"bd-callout bd-callout-yellow2",children:Object(x.jsxs)("h6",{children:["Please include the word ",Object(x.jsx)("span",{className:"pl-1 pr-1",style:{fontSize:"2rem"},children:a})," to conect the tasks in your request."]})})})})]}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{children:"Submit your request"}),Object(x.jsxs)("form",{className:"g-3 needs-validation",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(x.jsxs)("div",{className:"has-validation mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Write a request to your administrative assistance"}),Object(x.jsx)("textarea",{className:"form-control ".concat(!0===r?"is-valid":!1===r&&"is-invalid"),rows:"5",value:i,type:"text",id:"utterance","aria-describedby":"help",onChange:this.handleChange,placeholder:"Type your request here...",required:!0}),Object(x.jsxs)("div",{id:"help",className:"form-text text-muted",children:["Remember to use ",Object(x.jsx)("strong",{children:"all the tasks"})," in your request"]}),Object(x.jsx)("div",{className:"invalid-feedback",children:l})]}),Object(x.jsx)("div",{className:"btn-toolbar",role:"toolbar",children:Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:o,children:"Submit"})})})]})]})]})}}]),n}(a.a.Component),y=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;Object(l.a)(this,n),s=t.call(this,e);var a=e.index,c=e.selectionStart,i=e.selectionEnd;return s.state={index:a,selectionStart:c,selectionEnd:i},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleBack=s.handleBack.bind(Object(d.a)(s)),s.handleMouseUp=s.handleMouseUp.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"getSelection",value:function(){var e=document.getElementById("utterance-selection");return{selectionStart:e&&e.selectionStart,selectionEnd:e&&e.selectionEnd}}},{key:"setSelectedText",value:function(e,t){var n=document.getElementById("utterance-selection");n&&n.setSelectionRange(e,t)}},{key:"handleMouseUp",value:function(e){var t=this.getSelection(),n=t.selectionStart,s=t.selectionEnd;this.setState({selectionStart:n,selectionEnd:s,errorMessage:null})}},{key:"handleChange",value:function(e){e.preventDefault()}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.selectionStart,s=t.selectionEnd;if(n>=0&&s>n){var a=this.props.index;this.props.onSubmit(a,n,s,!0)}else this.setState({selected:!0,errorMessage:"Please select the part in your utterance that fits the task."})}},{key:"handleBack",value:function(e){e.preventDefault(),this.props.onBack()}},{key:"render",value:function(){var e=this.props,t=e.utterance,n=e.intents[e.index],s=this.state,a=s.selectionStart,c=s.selectionEnd,i=!(a>=0&&c>a),r=t.substring(a,c);return Object(x.jsx)("div",{className:"Selections",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"card text-dark border-primary mb-3",children:[Object(x.jsxs)("div",{className:"card-header text-white bg-primary",children:["Select the text that references ",Object(x.jsxs)("strong",{children:['"',n,'"']}),":"]}),Object(x.jsx)("div",{className:"card-body p-0",children:Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)("textarea",{className:"form-control p-3",rows:"5",value:t,type:"text",id:"utterance-selection","aria-describedby":"help",style:{cursor:"text",border:"none"},onChange:this.handleChange,onMouseUp:this.handleMouseUp})})})]}),Object(x.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(x.jsx)("div",{className:"card-header",children:"You selected:"}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsx)("p",{className:"card-text",children:r})})]}),Object(x.jsxs)("div",{className:"btn-toolbar",role:"toolbar",children:[Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit,disabled:i,children:"Submit"})}),Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsx)("button",{type:"Back",className:"btn btn-secondary",onClick:this.handleBack,children:"Back"})})]})]})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.index,s=e.selectionStart,a=e.selectionEnd;return{index:n,selectionStart:n===t.index?t.selectionStart:s,selectionEnd:n===t.index?t.selectionEnd:a}}}]),n}(a.a.Component),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleBack=s.handleBack.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit()}},{key:"handleBack",value:function(e){e.preventDefault(),this.props.onBack()}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"thank-yop",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{className:"text-muted text-center mb-3",children:"Thank You."}),Object(x.jsxs)("div",{className:"col-md-12 text-center",role:"toolbar",children:[Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsx)("button",{type:"Submit",className:"btn btn-primary",onClick:this.handleSubmit,children:"Done"})}),Object(x.jsx)("div",{className:"btn-group mr-2",role:"group",children:Object(x.jsx)("button",{type:"Back",className:"btn btn-secondary",onClick:this.handleBack,children:"Back"})})]})]})})}}]),n}(a.a.Component),S=0,k=1,N=2,w=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;Object(l.a)(this,n),s=t.call(this,e);var a=e.intents.map((function(e){return[0,0]}));return s.state={status:S,intentsSelections:a,pendingIntentIndex:0},s.handleSubmitUtterance=s.handleSubmitUtterance.bind(Object(d.a)(s)),s.handleSelection=s.handleSelection.bind(Object(d.a)(s)),s.handleBack=s.handleBack.bind(Object(d.a)(s)),s.handleMTurkSubmit=s.handleMTurkSubmit.bind(Object(d.a)(s)),s}return Object(o.a)(n,[{key:"getInstructions",value:function(){var e=this.props,t=e.intents,n=e.icons,s=this.state,a=s.status,c=s.pendingIntentIndex;return a===S?[Object(x.jsx)("p",{className:"lead fs-5 d",children:"Your administrative assistance is very smart. Write a request in plain English that will use the given tasks your assistance can do in the provided context."}),Object(x.jsx)("p",{children:"Try to be as creative as you can, don't be overly formal, simply write in plain English what you would say if you were in the given situation. Click 'Help' to see few examples."})]:a===k?[Object(x.jsx)("p",{className:"lead fs-5 d",children:"Highlight with your mouse the part in your request that references the following task:"}),Object(x.jsxs)("h5",{className:"mt-3 mb-4",children:[Object(x.jsx)("span",{className:"bi bi-".concat(n[c]),style:{paddingRight:"15px"}}),t[c]]})]:["",""]}},{key:"handleMTurkSubmit",value:function(){var e=this.state,t=e.utterance,n=e.intentsSelections.map((function(e){return e.join(", ")})).join(" | ");document.querySelector("crowd-form").onsubmit=function(){document.getElementById("utterance")&&(document.getElementById("utterance").value=t,document.getElementById("annotations").value=n)},document.querySelector("crowd-form").submit()}},{key:"handleSubmitUtterance",value:function(e){this.setState({utterance:e,status:k})}},{key:"handleBack",value:function(){var e=this.state,t=e.intentsSelections,n=e.pendingIntentIndex,s=k;0===n&&(s=S),this.setState({status:s,pendingIntentIndex:Math.max(n-1,0),intentsSelections:t})}},{key:"handleSelection",value:function(e,t,n,s){var a=this.state,c=a.intentsSelections,i=a.status;c[e]=[t,n];var r=this.props.intents,l=r.every((function(e,t){return c[t][0]>=0&&c[t][1]>c[t][0]}));s&&l&&e===r.length-1&&(i=N),this.setState({intentsSelections:c,status:i,pendingIntentIndex:Math.min(e+1,r.length)})}},{key:"getProgress",value:function(){var e=this.props.intents,t=this.state,n=t.status,s=t.pendingIntentIndex;switch(n){case S:return 0;case k:return(1+s)/(e.length+1)*100;case N:return 100;default:return 0}}},{key:"render",value:function(){var e=this.props,t=e.context,n=e.intents,s=e.icons,a=e.word,c=this.state,i=c.status,l=c.utterance,o=c.intentsSelections,d=c.pendingIntentIndex,h=d>=0&&d<n.length?o[d]:[0,0],u=Object(r.a)(h,2),b=u[0],j=u[1],m=this.getProgress(),O=this.getInstructions();return Object(x.jsx)("div",{className:"utterances",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center",style:{height:"550px"},children:[Object(x.jsx)("div",{className:"col",children:Object(x.jsx)(v,{instructions:O,progress:m,hideHeader:i===N,hideHelp:i===N})}),Object(x.jsxs)("div",{className:"col",children:[i===S&&Object(x.jsx)(g,{utterance:l,context:t,intents:n,icons:s,word:a,onSubmit:this.handleSubmitUtterance}),i===k&&Object(x.jsx)(y,{utterance:l,selectionStart:b,selectionEnd:j,intents:n,icons:s,index:d,onSubmit:this.handleSelection,onBack:this.handleBack}),i===N&&Object(x.jsx)(f,{onSubmit:this.handleMTurkSubmit,onBack:this.handleBack})]})]})})})}}]),n}(a.a.Component),B=function(e){var t=e.id,n=e.context,s=e.intents,a=e.icons,c=e.instructions,i=e.word;return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(w,{id:t,context:n,intents:s,icons:a,instructions:c,word:i})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))},I=document.getElementById("root").getAttribute("data-id"),E=document.getElementById("root").getAttribute("data-context"),M=document.getElementById("root").getAttribute("data-intents").split("|").map((function(e){return e.trim()})),T=document.getElementById("root").getAttribute("data-icons").split("|").map((function(e){return e.trim()})),q=document.getElementById("root").getAttribute("data-instructions"),A=document.getElementById("root").getAttribute("data-word");console.log("context",document.getElementById("root").getAttribute("data-context")),console.log("intents",document.getElementById("root").getAttribute("data-intents")),console.log("icons",document.getElementById("root").getAttribute("data-icons")),i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(B,{id:I,context:E,intents:M,icons:T,instructions:q,word:A})}),document.getElementById("root")),C()}},[[31,1,2]]]);
//# sourceMappingURL=main.6a8cc2e3.chunk.js.map