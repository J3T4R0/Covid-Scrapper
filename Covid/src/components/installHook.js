!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}({22:function(e,t,n){"use strict";n.r(t);const r=e=>{const t=`${e}`,n=t.match(/function/);if(null==n)return"fn()";const r=n[0]?t.indexOf(n[0])+n[0].length+1:null;if(null==r)return"fn()";const o=t.indexOf("("),i=t.slice(r,o);return i.length?`${i} ()`:"fn()"};let o;const i=(e,t)=>{const n={name:"",children:[],state:null,props:null,id:null,isDOM:null};e._debugID&&(n.id=e._debugID),e.type&&(e.type.name?(n.name=e.type.name,n.isDOM=!1):(n.name=e.type,n.isDOM=!0)),e.memoizedState&&(n.state=e.memoizedState),e.memoizedProps&&(n.props=(e=>{try{const t={};return Object.keys(e.memoizedProps).forEach(n=>{const o=e.memoizedProps[n];"function"==typeof o?t[n]=r(o):"object"==typeof e.memoizedProps[n]?t[n]="object*":t[n]=e.memoizedProps[n]}),t}catch(e){return{}}})(e)),e.type&&e.type.propTypes&&e.type.propTypes.hasOwnProperty("store")&&(o=e.stateNode.store.getState()),n.children=[],t.push(n),null!=e.child&&i(e.child,n.children),null!=e.sibling&&i(e.sibling,t)},l=e=>{if(void 0===e)return;const t=[];i(e.current.stateNode.current,t);const n={data:t,store:o};n.data=n.data[0].children[0].children;const r={data:t,store:o},l=JSON.parse(JSON.stringify(r));window.postMessage(l,"*")};let s;const c=(e,t=0)=>{if(!e)return null;if(e.hasOwnProperty(window)||e.hasOwnProperty("prevObject")||e.hasOwnProperty(Window))return null;if("object"!=typeof e)return e;if(!Object.prototype.hasOwnProperty.call(e,"props")){const n={};for(const o in e)if(e[o]){if("routes"===o)return;if("function"==typeof e[o])n[o]=r(e[o]);else if(Array.isArray(e[o])&&"children"===o)n[o]=p(e[o]);else if("object"==typeof e[o]){if(e[o]&&Object.keys(e[o]).length)if(t<3){const r=t+1;n[o]=c(e[o],r)}else n[o]="obj*"}else n[o]=e[o]}else n[o]=null;return n}return e.hasOwnProperty("type")?e.type.hasOwnProperty("name")&&e.type.name.length?e.type.name:e.type.hasOwnProperty("displayName")&&e.type.displayName.length?e.type.displayName:e.hasOwnProperty("type")?`${e.type}`:void 0:void 0},u=(e,t)=>{if(!e._currentElement)return;const n={children:[],id:null,idDOM:!1,name:"default",state:null,props:null,ref:null,key:null};s=f(e),n.state=y(e),n.key=m(e),n.ref=_(e),n.name=O(e),n.props=d(e);const r=h(e);n.id=r.id,n.isDOM=r.isDOM,t.push(n);const{_renderedChildren:o,_renderedComponent:i}=e;if(i)u(i,n.children);else if(o){Object.keys(o).forEach(e=>u(o[e],n.children))}},a=e=>{const t=[],n=e.Mount._instancesByReactRootID[1]._renderedComponent;u(n,t);const r={data:t,store:s},o=JSON.parse(JSON.stringify(r));window.postMessage(JSON.parse(JSON.stringify(o)),"*")},p=e=>e.map(e=>c(e)),d=e=>e._currentElement&&e._currentElement.props?c(e._currentElement.props):null,y=e=>e._instance&&e._instance.state?e._instance.state:null,f=e=>e._currentElement.type&&e._currentElement.type.propTypes&&e._currentElement.type.propTypes.hasOwnProperty("store")?e._instance.store.getState():null,m=e=>e._currentElement&&e._currentElement.key?e._currentElement.key:null,_=e=>e._currentElement&&e._currentElement.ref?e._currentElement.ref:null,O=e=>e&&e._currentElement&&e._currentElement.type?e._currentElement.type.displayName?e._currentElement.type.displayName:e._currentElement.type.name?e._currentElement.type.name:e._currentElement.type:"default",h=e=>e._debugID?{id:e._debugID,isDOM:!0}:e._domID?{id:e._domID,isDOM:!0}:{id:100*e._mountOrder,isDOM:!1};var b,g;if(!b){window.__REACT_DEVTOOLS_GLOBAL_HOOK__||console.warn("[React-Sight]: React Sight requires React Dev Tools to be installed.");const e=(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers||null).get(1),t=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;let n,r,o=!1;window.__REACT_DEVTOOLS_GLOBAL_HOOK__?e&&e.version?(r=e.version,t.onCommitFiberRoot=(g=t.onCommitFiberRoot,function(...e){return n=e[1],l(n),g(...e)})):e&&e.Reconciler?e.Reconciler.receiveComponent=function(t){return function(...n){return o||(o=!0,setTimeout(()=>{a(e),o=!1},10)),t(...n)}}(e.Reconciler.receiveComponent):console.log("[React Sight] React not found"):console.log("Error: React DevTools not present. React Sight uses React DevTools to patch React's reconciler"),e&&window.addEventListener("reactsight",()=>{parseInt(r,10)>=16?l(n):a(e)}),b=!0}}});
//# sourceMappingURL=installHook.js.map