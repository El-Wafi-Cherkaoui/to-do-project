<<<<<<< HEAD
(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(354),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,"*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\nbody{\n    background-color: bisque;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#container{\n    border: 1px solid;\n    height: 95vh;\n    width: 95vw;\n    border-radius: 2vw;\n    overflow: hidden;\n    /* padding: 2vw; */\n    background-color: azure;\n\n    display: flex;\n}\n#container > * {\n    padding: 2vw;\n}\n.nav_side{\n    background-color: red;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.details{\n    background-color: aquamarine;\n    flex: 4;\n    overflow: scroll;\n}\nfieldset{\n    padding: .8vh 1vw;\n    border-radius: 1vw;\n}\nlegend{\n    font-weight: bold;\n    font-family: 'Courier New', Courier, monospace;\n    padding: .2vw;\n}\n#container ul{\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n}\n#container li {\n}\n.nav_side button{\n    padding: .5vh 1vw;\n    font-weight: bold;\n    border-radius: 1vw;\n    border: none;\n    box-shadow: .3vw .2vw .1vw;\n    width: 100%;\n}\n.notification{\n    background-color: aliceblue;\n    width: fit-content;\n    border-radius: 2vw;\n    overflow: hidden;\n    text-align: center;\n    position: absolute;\n    z-index: 50;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.notification h1{\n    background-color: red;\n    padding: 1vh 2vw;\n}\n.notification p{\n    padding: 1vh 2vw;\n}\n#project_form, #todo_form{\n    display: flex;\n    flex-direction: column;\n    gap: 1vh;\n}\n.project{\n    background-color: aliceblue;\n    margin: .5vh 1vw;\n    padding: 1vw;\n    border-radius: 1vw;\n}\n.project h1{\n    color:blueviolet;\n    font-family: 'Courier New', Courier, monospace;\n    text-decoration: underline;\n}\n.project .prj_desc{\n    font-size: .8rem;\n    opacity: .8;\n    display: none;\n}\n.project .todos{\n    margin: .2vh 1vw;\n    max-width: 80%;\n}\n.project .todos li{\n    padding: .2vw .6vw;\n    border: 1px solid;\n    border-radius: 1vw;\n    margin: .2vw 0vw;\n    display: flex;\n    align-items: center;\n}\n.todos input{\n    margin-right: .2vw;\n    transform: translateY(15%);\n}\n.todos i{\n    margin-left: auto;\n}\n.todos ul{\n    margin-left: auto;\n}\n.todo{\n    background-color: aliceblue;\n    border-radius: 1vw;\n    padding: 1vw;\n    /* display: flex; */\n    border-left: .5vw solid red;\n    margin: 1vw;\n    min-height: fit-content;\n    position: relative;\n}\n.todo h1{\n    text-decoration: underline;\n    padding: 1vw;\n}\n.todo h1, .todo i{\n    width: 50%;\n    display: inline;\n}\n.todo p{\n    /* margin-top: 2vh; */\n    padding: .5vh 2vw;\n}\n.todo input,\n.todo textarea,\n.todo select {\n    padding: .2vh .5vw;\n}\n\n.subTasks{\n    padding: 1vh 5vw;\n}\n.modify_btn{\n    padding: .1vh .5vw;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translate(-20%, 50%);\n    opacity: .8;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;;IAEvB,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;AACA;IACI,4BAA4B;IAC5B,OAAO;IACP,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,8CAA8C;IAC9C,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;AACA;AACA;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,0BAA0B;IAC1B,WAAW;AACf;AACA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;AACA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,8CAA8C;IAC9C,0BAA0B;AAC9B;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,0BAA0B;AAC9B;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,WAAW;IACX,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,0BAA0B;IAC1B,YAAY;AAChB;AACA;IACI,UAAU;IACV,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;;;IAGI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,+BAA+B;IAC/B,WAAW;AACf",sourcesContent:["*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\nbody{\n    background-color: bisque;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#container{\n    border: 1px solid;\n    height: 95vh;\n    width: 95vw;\n    border-radius: 2vw;\n    overflow: hidden;\n    /* padding: 2vw; */\n    background-color: azure;\n\n    display: flex;\n}\n#container > * {\n    padding: 2vw;\n}\n.nav_side{\n    background-color: red;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.details{\n    background-color: aquamarine;\n    flex: 4;\n    overflow: scroll;\n}\nfieldset{\n    padding: .8vh 1vw;\n    border-radius: 1vw;\n}\nlegend{\n    font-weight: bold;\n    font-family: 'Courier New', Courier, monospace;\n    padding: .2vw;\n}\n#container ul{\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n}\n#container li {\n}\n.nav_side button{\n    padding: .5vh 1vw;\n    font-weight: bold;\n    border-radius: 1vw;\n    border: none;\n    box-shadow: .3vw .2vw .1vw;\n    width: 100%;\n}\n.notification{\n    background-color: aliceblue;\n    width: fit-content;\n    border-radius: 2vw;\n    overflow: hidden;\n    text-align: center;\n    position: absolute;\n    z-index: 50;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.notification h1{\n    background-color: red;\n    padding: 1vh 2vw;\n}\n.notification p{\n    padding: 1vh 2vw;\n}\n#project_form, #todo_form{\n    display: flex;\n    flex-direction: column;\n    gap: 1vh;\n}\n.project{\n    background-color: aliceblue;\n    margin: .5vh 1vw;\n    padding: 1vw;\n    border-radius: 1vw;\n}\n.project h1{\n    color:blueviolet;\n    font-family: 'Courier New', Courier, monospace;\n    text-decoration: underline;\n}\n.project .prj_desc{\n    font-size: .8rem;\n    opacity: .8;\n    display: none;\n}\n.project .todos{\n    margin: .2vh 1vw;\n    max-width: 80%;\n}\n.project .todos li{\n    padding: .2vw .6vw;\n    border: 1px solid;\n    border-radius: 1vw;\n    margin: .2vw 0vw;\n    display: flex;\n    align-items: center;\n}\n.todos input{\n    margin-right: .2vw;\n    transform: translateY(15%);\n}\n.todos i{\n    margin-left: auto;\n}\n.todos ul{\n    margin-left: auto;\n}\n.todo{\n    background-color: aliceblue;\n    border-radius: 1vw;\n    padding: 1vw;\n    /* display: flex; */\n    border-left: .5vw solid red;\n    margin: 1vw;\n    min-height: fit-content;\n    position: relative;\n}\n.todo h1{\n    text-decoration: underline;\n    padding: 1vw;\n}\n.todo h1, .todo i{\n    width: 50%;\n    display: inline;\n}\n.todo p{\n    /* margin-top: 2vh; */\n    padding: .5vh 2vw;\n}\n.todo input,\n.todo textarea,\n.todo select {\n    padding: .2vh .5vw;\n}\n\n.subTasks{\n    padding: 1vh 5vw;\n}\n.modify_btn{\n    padding: .1vh .5vw;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translate(-20%, 50%);\n    opacity: .8;\n}"],sourceRoot:""}]);const d=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],l=o.base?c[0]+o.base:c[0],s=a[l]||0,A="".concat(l," ").concat(s);a[l]=s+1;var p=n(A),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var m=r(u,o);o.byIndex=d,t.splice(d,0,{identifier:A,updater:m,references:1})}i.push(A)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var c=o(e,r),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o=n(72),r=n.n(o),a=n(825),i=n.n(a),d=n(659),c=n.n(d),l=n(56),s=n.n(l),A=n(540),p=n.n(A),u=n(113),m=n.n(u),C=n(365),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),r()(C.A,f),C.A&&C.A.locals&&C.A.locals;class v{constructor(e,t,n=0,o=!1){this.id=Math.floor(1e4*Math.random()),this.title=e,this.description=t,this.priority=n,this.completed=o}todoToggleCompletion(){this.completed?this.completed=!1:this.completed=!0}increasePriority(){!(this.priority>=3)&&(this.priority+=1)}decreasePriority(){0!=this.priority&&(this.priority-=1)}}class h extends v{constructor(e,t,n,o,r="",a=!1,i=[],d="default"){super(e,t,o,a),this.dueDate=n,this.note=r,this.subtasks=i,this.project=d}addNote(e){this.note=e}changeProject(e){this.project=e}addSubtask(e){this.subtasks.push(e)}removeSubtask(e){this.subtasks=this.subtasks.filter((t=>t!=e))}static todo_in_project(e,t){let n={changed:!0,todo:h.find_todo(e)};return g.projects.forEach((o=>{o.title==t&&o.todos.forEach((t=>{t.id==e&&(n.changed=!1)}))})),n}static find_todo(e){let t=!1;return g.projects.forEach((n=>{n.todos.forEach((n=>{n.id==e&&(t=n)}))})),t}}class B extends v{constructor(e,t,n,o=!1){super(e,t,n,o)}}class g extends v{static projects=[];constructor(e,t,n=0,o=!1,r=[]){super(e,t,n,o),this.todos=r}addTodo(e){this.todos.push(e),e.project=this.title}removeTodo(e){this.todos=this.todos.filter((t=>t!=e))}checkCompleted(){let e=!0;return this.todos.forEach((t=>{0==t.completed&&(e=!1)})),e}static find_project(e){let t=!1;return g.projects.forEach((n=>{n.title==e&&(t=n)})),t}}let I=new B("finish HK","asd",2),b=new Date("2024-05-22"),w=new g("school","asd",1),y=(new g("work","working",2),new h("learn html","is markup language",b,1,"nothing",!1,[],w));y.addSubtask(I);let x=new h("learn css","is styling language",b,2,"nothing",!1,[],w);y.addSubtask(I),w.addTodo(y),w.addTodo(x);class k{static projects=[];static detailsBox=document.querySelector(".details");static notification(e,t,n){let o=document.createElement("div");o.className="notification";let r=document.createElement("h1");r.textContent=e,r.style.backgroundColor=n;let a=document.createElement("p");a.textContent=t,o.append(r),o.append(a),k.detailsBox.append(o)}static projectForm(){let e=document.createElement("form");e.id="project_form",["title","description","priority"].forEach((t=>{let n=document.createElement("label");n.textContent=t,e.append(n),"priority"!=t?e.append(k.createInput("text",t)):e.append(k.createInput("number",t))}));let t=document.createElement("input");t.type="submit",t.value="Add Project",t.id="add_project",e.append(t),k.detailsBox.append(e),e.addEventListener("submit",(e=>{e.preventDefault();let t=document.querySelector("#title").value,n=document.querySelector("#description").value,o=document.querySelector("#priority").value,r=new g(t,n,o);g.projects.push(r)}))}static todoForm(){let e=document.createElement("form");e.id="todo_form",["title","description","dueDate","priority","note","project"].forEach((t=>{let n=document.createElement("label");n.textContent=t,e.append(n),"priority"==t?e.append(k.createInput("number",t)):"dueDate"==t?e.append(k.createInput("date",t)):"project"==t?e.append(k.createSelect(g.projects,"project")):e.append(k.createInput("text",t))}));let t=document.createElement("input");t.type="submit",t.value="Add Task",t.id="add_task",e.append(t),k.detailsBox.append(e),e.addEventListener("submit",(e=>{e.preventDefault();let t=document.querySelector("#title").value,n=document.querySelector("#description").value,o=document.querySelector("#priority").value,r=document.querySelector("#dueDate").value,a=document.querySelector("#note").value,i=document.querySelector("#project").value;g.projects.forEach((e=>{i==e.title&&e.addTodo(new h(t,n,r,o,a,!1,[],i))})),console.log(g.projects)}))}static createInput(e,t){let n=document.createElement("input");return n.type=e,n.id=t,n}static createSelect(e,t){let n=document.createElement("select");return n.id=t,e.forEach((e=>{let t=document.createElement("option");t.textContent=e.title,n.append(t)})),n}static refreshDetailsCont(){document.querySelector(".details").textContent=""}static getAllTodos(){let e=[];return g.projects.forEach((t=>{t.todos.forEach((t=>{e.push(t)}))})),e}static showAllProjects(){k.refreshDetailsCont(),g.projects.forEach((e=>{let t=document.createElement("div");t.className="project";let n=document.createElement("h1");n.textContent=e.title,t.append(n);let o=document.createElement("p");o.textContent=e.description,o.className="prj_desc",t.append(o);let r=document.createElement("ul");r.className="todos",r.id=e.title,this.createList(e.todos,r),t.append(r),k.detailsBox.append(t),document.querySelectorAll(`#${e.title} > li`).forEach((e=>{let t=JSON.parse(e.dataset.subtasks),n=document.createElement("ul");t.forEach((e=>{let t=document.createElement("li");t.textContent=e.title,n.append(t)})),e.append(n)}))}))}static showAllTodos(){k.getAllTodos().forEach((e=>{let t=document.createElement("div");t.className="todo",t.dataset.todo=JSON.stringify(e),k.modify_btn(t);let n=document.createElement("h3");n.textContent=e.project;let o=document.createElement("h1");o.textContent=e.title;let r=document.createElement("p");r.textContent=e.description;let a=document.createElement("i");a.textContent=e.dueDate;let i=document.createElement("ul");i.className="subTasks";let d=document.createElement("p");d.textContent=e.note,this.createList(e.subtasks,i,!0),t.append(n),t.append(o),t.append(a),t.append(r),k.detailsBox.append(t),t.onclick=()=>{t.append(i),t.append(d)}}))}static createList(e,t,n=!1){e.forEach((e=>{let o=document.createElement("li"),r=document.createElement("input");if(r.type="checkbox",o.append(r),o.append(document.createTextNode(e.title)),!n){let t=document.createElement("i");t.textContent=e.dueDate,o.append(t),o.dataset.subtasks=JSON.stringify(e.subtasks)}t.append(o),this.completeTodo(e,r,o)}))}static completeTodo(e,t,n){t.addEventListener("change",(()=>{e.todoToggleCompletion(),t.checked?n.style.color="green":n.style.color="black"}))}static modify_btn(e){let t=document.createElement("button");t.textContent="Modify",t.className="modify_btn",e.append(t),t.onclick=()=>{let t=JSON.parse(e.dataset.todo);this.update_todo_form(t,e)}}static update_todo_form(e,t){t.textContent="",t.style.display="flex",t.style.flexDirection="column",t.style.gap="1vh";let n=k.createSelect(g.projects,"project"),o=document.createElement("input");o.value=e.title;let r=document.createElement("input");r.type="date";let a=e.dueDate.split("/");r.value=`${a[2]}-${a[1]}-${a[0]}`;let i=document.createElement("textarea");i.value=e.description;let d=document.createElement("input");d.type="number",d.value=e.priority;let c=document.createElement("textarea");c.value=e.note;let l=document.createElement("button");l.textContent="Change",t.append(n),t.append(o),t.append(r),t.append(i),t.append(c),t.append(d),t.append(l),console.log(g.projects),l.onclick=()=>{k.apply_update(e,n,o,r,i,d,c)}}static apply_update(e,t,n,o,r,a,i){let d=e.id,c=h.todo_in_project(d,t.value);if(c.changed){alert(" changed");let e=g.find_project(c.todo.project);c.todo.changeProject(t.value),g.find_project(t.value).addTodo(c.todo),e.removeTodo(c.todo)}else alert("not changed");c.todo.title=n.value,c.todo.date=o.value,c.todo.description=r.value,c.todo.priority=a.value,c.todo.note=i.value,console.log(g.projects)}}g.projects.push(new g("school","s",3)),g.projects.push(new g("work","asdads",3));let j=new g("CMC","project inside CMC",3),E=new h("meeting","meeting in MacDonals for some reason","22/02/2023",1,"no money and free wifi"),S=new B("open book","asdasd"),_=new B("write notes","xaaxaxa");E.addSubtask(S),E.addSubtask(_),j.addTodo(E),g.projects.push(j);const T=k;let q=document.querySelector("#add_task"),N=document.querySelector("#add_project"),D=document.querySelector("#all_projects"),M=document.querySelector("#all_tasks");q.addEventListener("click",(()=>{T.refreshDetailsCont(),T.todoForm()})),N.addEventListener("click",(()=>{T.refreshDetailsCont(),T.projectForm()})),D.addEventListener("click",(()=>{T.refreshDetailsCont(),T.showAllProjects()})),M.addEventListener("click",(()=>{T.refreshDetailsCont(),T.showAllTodos(),console.log(T.projects)}))})();
=======
(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(354),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([e.id,"*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\nbody{\n    background-color: bisque;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#container{\n    border: 1px solid;\n    height: 95vh;\n    width: 95vw;\n    border-radius: 2vw;\n    overflow: hidden;\n    /* padding: 2vw; */\n    background-color: azure;\n\n    display: flex;\n}\n#container > * {\n    padding: 2vw;\n}\n.nav_side{\n    background-color: red;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.details{\n    background-color: aquamarine;\n    flex: 4;\n}\nfieldset{\n    padding: .8vh 1vw;\n    border-radius: 1vw;\n}\nlegend{\n    font-weight: bold;\n    font-family: 'Courier New', Courier, monospace;\n    padding: .2vw;\n}\n#container ul{\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n}\n#container li {\n}\n#container button{\n    padding: .5vh 1vw;\n    font-weight: bold;\n    border-radius: 1vw;\n    border: none;\n    box-shadow: .3vw .2vw .1vw;\n    width: 100%;\n}\n.notification{\n    background-color: aliceblue;\n    width: fit-content;\n    border-radius: 2vw;\n    overflow: hidden;\n    text-align: center;\n    position: absolute;\n    z-index: 50;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.notification h1{\n    background-color: red;\n    padding: 1vh 2vw;\n}\n.notification p{\n    padding: 1vh 2vw;\n}\n#project_form, #todo_form{\n    display: flex;\n    flex-direction: column;\n    gap: 1vh;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;;IAEvB,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;AACA;IACI,4BAA4B;IAC5B,OAAO;AACX;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,8CAA8C;IAC9C,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;AACA;AACA;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,0BAA0B;IAC1B,WAAW;AACf;AACA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;AACA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ",sourcesContent:["*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\nbody{\n    background-color: bisque;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#container{\n    border: 1px solid;\n    height: 95vh;\n    width: 95vw;\n    border-radius: 2vw;\n    overflow: hidden;\n    /* padding: 2vw; */\n    background-color: azure;\n\n    display: flex;\n}\n#container > * {\n    padding: 2vw;\n}\n.nav_side{\n    background-color: red;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.details{\n    background-color: aquamarine;\n    flex: 4;\n}\nfieldset{\n    padding: .8vh 1vw;\n    border-radius: 1vw;\n}\nlegend{\n    font-weight: bold;\n    font-family: 'Courier New', Courier, monospace;\n    padding: .2vw;\n}\n#container ul{\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n}\n#container li {\n}\n#container button{\n    padding: .5vh 1vw;\n    font-weight: bold;\n    border-radius: 1vw;\n    border: none;\n    box-shadow: .3vw .2vw .1vw;\n    width: 100%;\n}\n.notification{\n    background-color: aliceblue;\n    width: fit-content;\n    border-radius: 2vw;\n    overflow: hidden;\n    text-align: center;\n    position: absolute;\n    z-index: 50;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.notification h1{\n    background-color: red;\n    padding: 1vh 2vw;\n}\n.notification p{\n    padding: 1vh 2vw;\n}\n#project_form, #todo_form{\n    display: flex;\n    flex-direction: column;\n    gap: 1vh;\n}"],sourceRoot:""}]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,A="".concat(s," ").concat(l);i[s]=l+1;var u=t(A),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=r(p,o);o.byIndex=c,n.splice(c,0,{identifier:A,updater:f,references:1})}a.push(A)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),d=t.n(c),s=t(56),l=t.n(s),A=t(540),u=t.n(A),p=t(113),f=t.n(p),v=t(365),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=d().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),r()(v.A,h),v.A&&v.A.locals&&v.A.locals;class m{constructor(e,n,t=0,o=!1){this.title=e,this.description=n,this.priority=t,this.completed=o}todoToggleCompletion(){this.completed?this.completed=!1:this.completed=!0}increasePriority(){!(this.priority>=3)&&(this.priority+=1)}decreasePriority(){0!=this.priority&&(this.priority-=1)}}class C extends m{constructor(e,n,t,o,r="",i=!1,a=[],c="default"){super(e,n,o,i),this.dueDate=t,this.note=r,this.subtasks=a,this.project=c}addNote(e){this.note=e}changeProject(e){this.project=e}addSubtask(e){this.subtasks.push(e)}removeSubtask(e){this.subtasks=this.subtasks.filter((n=>n!=e))}}class B extends m{constructor(e,n,t=0,o=!1,r=[]){super(e,n,t,o),this.todos=r}addTodo(e){this.todos.push(e)}removeTodo(e){this.todos=this.todos.filter((n=>n!=e))}checkCompleted(){let e=!0;return this.todos.forEach((n=>{0==n.completed&&(e=!1)})),e}}let g=new class extends m{constructor(e,n,t,o=!1){super(e,n,t,o)}}("finish HK","asd",2),b=new Date("2024-05-22"),I=new B("school","asd",1),y=(new B("work","working",2),new C("learn html","is markup language",b,1,"nothing",!1,[],I));y.addSubtask(g);let w=new C("learn css","is styling language",b,2,"nothing",!1,[],I);y.addSubtask(g),I.addTodo(y),I.addTodo(w);class x{static projects=[];static detailsBox=document.querySelector(".details");static notification(e,n,t){let o=document.createElement("div");o.className="notification";let r=document.createElement("h1");r.textContent=e,r.style.backgroundColor=t;let i=document.createElement("p");i.textContent=n,o.append(r),o.append(i),x.detailsBox.append(o)}static projectForm(){let e=document.createElement("form");e.id="project_form",["title","description","priority"].forEach((n=>{let t=document.createElement("label");t.textContent=n,e.append(t),"priority"!=n?e.append(x.createInput("text",n)):e.append(x.createInput("number",n))}));let n=document.createElement("input");n.type="submit",n.value="Add Project",n.id="add_project",e.append(n),x.detailsBox.append(e),e.addEventListener("submit",(e=>{e.preventDefault();let n=document.querySelector("#title").value,t=document.querySelector("#description").value,o=document.querySelector("#priority").value,r=new B(n,t,o);x.projects.push(r)}))}static todoForm(){let e=document.createElement("form");e.id="todo_form",["title","description","dueDate","priority","note","project"].forEach((n=>{let t=document.createElement("label");t.textContent=n,e.append(t),"priority"==n?e.append(x.createInput("number",n)):"dueDate"==n?e.append(x.createInput("date",n)):"project"==n?e.append(x.createSelect(x.projects,"project")):e.append(x.createInput("text",n))}));let n=document.createElement("input");n.type="submit",n.value="Add Task",n.id="add_task",e.append(n),x.detailsBox.append(e),e.addEventListener("submit",(e=>{e.preventDefault();let n=document.querySelector("#title").value,t=document.querySelector("#description").value,o=document.querySelector("#priority").value,r=document.querySelector("#dueDate").value,i=document.querySelector("#note").value,a=document.querySelector("#project").value;x.projects.forEach((e=>{a==e.title&&e.addTodo(new C(n,t,r,o,i,!1,[],a))})),console.log(x.projects)}))}static createInput(e,n){let t=document.createElement("input");return t.type=e,t.id=n,t}static createSelect(e,n){let t=document.createElement("select");return t.id=n,e.forEach((e=>{let n=document.createElement("option");n.textContent=e.title,t.append(n)})),t}}x.projects.push(new B("school","s",3)),x.projects.push(new B("work","asdads",3)),x.todoForm()})();
>>>>>>> origin/gh-pages
//# sourceMappingURL=main.js.map