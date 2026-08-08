function f(){let e=globalThis.InfiniteCanvasRuntime;if(!e)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return e}function s(){return f().React}var p=((...e)=>s().useState(...e)),c=((...e)=>s().useEffect(...e));var d=((...e)=>s().useRef(...e));var g=`.cnv-md {
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 16px;
    font-size: 14px;
    line-height: 1.6;
}
.cnv-md h1,
.cnv-md h2,
.cnv-md h3 {
    margin: 0.6em 0 0.3em;
    font-weight: 600;
    line-height: 1.3;
}
.cnv-md h1 {
    font-size: 1.5em;
}
.cnv-md h2 {
    font-size: 1.3em;
}
.cnv-md p {
    margin: 0.5em 0;
}
.cnv-md a {
    color: #6366f1;
    text-decoration: underline;
}
.cnv-md code {
    padding: 0.1em 0.35em;
    border-radius: 4px;
    background: rgba(120, 120, 120, 0.16);
    font-family: monospace;
    font-size: 0.9em;
}
.cnv-md pre {
    padding: 12px;
    border-radius: 8px;
    background: rgba(120, 120, 120, 0.14);
    overflow: auto;
}
.cnv-md pre code {
    padding: 0;
    background: transparent;
}
.cnv-md ul,
.cnv-md ol {
    padding-left: 1.4em;
    margin: 0.5em 0;
}
.cnv-md blockquote {
    margin: 0.5em 0;
    padding-left: 0.8em;
    border-left: 3px solid rgba(120, 120, 120, 0.4);
    opacity: 0.85;
}
.cnv-md img {
    max-width: 100%;
}


`;var v=Symbol.for("infinite-canvas.jsx.fragment");function x(e,t,n){let o=s(),l=e===v?o.Fragment:e,r=n===void 0?t:{...t??{},key:n};return o.createElement(l,r)}function u(e,t,n){return x(e,t,n)}var i,m;function C(){return i?Promise.resolve(i):(m||(m=import("https://esm.sh/marked@14").then(e=>{let t=e.marked;i=t;let n=new t.Renderer;return n.html=({text:o})=>o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),t.use({renderer:n}),t})),m)}var h="*\u9009\u4E2D\u8282\u70B9,\u70B9\u4E0A\u65B9\u5DE5\u5177\u6761\u7684 \u270E \u7F16\u8F91 Markdown*",k=new Map;function P(e){if(!i)return"";let t=e||h,n=k.get(t);return n===void 0&&(n=i.parse(t),k.set(t,n)),n}function b({ctx:e}){let[,t]=p(0),n=d(null),o=d(null);c(()=>{if(i)return;let a=!0;return C().then(()=>a&&t(R=>R+1)),()=>{a=!1}},[]);let l=e.node.metadata?.content||"",r=P(l);return c(()=>{let a=n.current;!a||o.current===r||(a.innerHTML=r,o.current=r)},[r]),u("div",{ref:n,className:"cnv-md","data-canvas-no-zoom":!0,onWheel:a=>a.stopPropagation(),style:{height:"100%",width:"100%",color:e.theme.node.text}})}function E({ctx:e}){let t=e.node.metadata?.content||"";return u("textarea",{autoFocus:!0,value:t,placeholder:"# \u8F93\u5165 Markdown",onChange:n=>e.updateMetadata({content:n.target.value}),onMouseDown:n=>n.stopPropagation(),onPointerDown:n=>n.stopPropagation(),onWheel:n=>n.stopPropagation(),style:{height:"100%",width:"100%",resize:"none",background:e.theme.node.fill,borderRadius:16,boxSizing:"border-box",padding:16,fontFamily:"monospace",fontSize:14,outline:"none",border:"none",color:e.theme.node.text}})}function M({ctx:e}){return e.node.metadata?.editing?u(E,{ctx:e}):u(b,{ctx:e})}var O={id:"markdown",name:"Markdown \u8282\u70B9",version:"1.1.0",description:"\u5728\u753B\u5E03\u4E2D\u7F16\u8F91\u4E0E\u6E32\u67D3 Markdown",css:g,nodes:[{type:"markdown:doc",title:"Markdown",icon:"\u{1F4DD}",description:"\u7F16\u8F91\u4E0E\u6E32\u67D3 Markdown",defaultSize:{width:360,height:300},defaultMetadata:{content:""},minimapColor:"#6366f1",hidePanel:!0,interactionToggle:!0,forceInteractive:e=>!!e.metadata?.editing,resource:e=>({kind:"text",text:e.metadata?.content}),Content:M,toolbar:e=>{let t=!!e.node.metadata?.editing;return[{id:"md-toggle-edit",title:t?"\u9884\u89C8\u6E32\u67D3\u7ED3\u679C":"\u7F16\u8F91 Markdown \u6E90\u7801",label:t?"\u9884\u89C8":"\u7F16\u8F91",icon:t?"\u{1F441}":"\u270E",active:t,onClick:()=>e.updateMetadata({editing:!t})}]}}]};export{O as default};
