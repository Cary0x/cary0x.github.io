"use strict";(self.webpackChunkponddocs=self.webpackChunkponddocs||[]).push([[9048],{609:(e,t,n)=>{n.d(t,{V:()=>l,t:()=>c});var o=n(6540),a=n(9532),i=n(4848);const s=Symbol("EmptyContext"),r=o.createContext(s);function l(e){let{children:t,name:n,items:a}=e;const s=(0,o.useMemo)((()=>n&&a?{name:n,items:a}:null),[n,a]);return(0,i.jsx)(r.Provider,{value:s,children:t})}function c(){const e=(0,o.useContext)(r);if(e===s)throw new a.dV("DocsSidebarProvider");return e}},6972:(e,t,n)=>{n.d(t,{B5:()=>v,Nr:()=>d,OF:()=>x,Y:()=>b,w8:()=>h});var o=n(6540),a=n(6347),i=n(2831),s=n(4070),r=n(9169),l=n(3025),c=n(609);function d(e){return"link"!==e.type||e.unlisted?"category"===e.type?function(e){if(e.href&&!e.linkUnlisted)return e.href;for(const t of e.items){const e=d(t);if(e)return e}}(e):void 0:e.href}const u=(e,t)=>void 0!==e&&(0,r.ys)(e,t),m=(e,t)=>e.some((e=>h(e,t)));function h(e,t){return"link"===e.type?u(e.href,t):"category"===e.type&&(u(e.href,t)||m(e.items,t))}function p(e,t){switch(e.type){case"category":return h(e,t)||e.items.some((e=>p(e,t)));case"link":return!e.unlisted||h(e,t);default:return!0}}function b(e,t){return(0,o.useMemo)((()=>e.filter((e=>p(e,t)))),[e,t])}function f(e){let{sidebarItems:t,pathname:n,onlyCategories:o=!1}=e;const a=[];return function e(t){for(const i of t)if("category"===i.type&&((0,r.ys)(i.href,n)||e(i.items))||"link"===i.type&&(0,r.ys)(i.href,n)){return o&&"category"!==i.type||a.unshift(i),!0}return!1}(t),a}function x(){const e=(0,c.t)(),{pathname:t}=(0,a.zy)(),n=(0,s.vT)()?.pluginData.breadcrumbs;return!1!==n&&e?f({sidebarItems:e.items,pathname:t}):null}function v(e){let{route:t}=e;const n=(0,a.zy)(),o=(0,l.r)(),s=t.routes,r=s.find((e=>(0,a.B6)(n.pathname,e)));if(!r)return null;const c=r.sidebar,d=c?o.docsSidebars[c]:void 0;return{docElement:(0,i.v)(s),sidebarName:c,sidebarItems:d}}},3025:(e,t,n)=>{n.d(t,{n:()=>r,r:()=>l});var o=n(6540),a=n(9532),i=n(4848);const s=o.createContext(null);function r(e){let{children:t,version:n}=e;return(0,i.jsx)(s.Provider,{value:n,children:t})}function l(){const e=(0,o.useContext)(s);if(null===e)throw new a.dV("DocsVersionProvider");return e}},1377:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var o=n(6540),a=n(4164),i=n(1003),s=n(7559),r=n(6972),l=n(609),c=n(1312),d=n(3104),u=n(5062);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var h=n(4848);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,a]=(0,o.useState)(!1),i=(0,o.useRef)(!1),{startScroll:s,cancelScroll:r}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:o}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:o>=s?(r(),a(!1)):o<t?a(!1):o+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,a(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.A)("clean-btn",s.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var b=n(3109),f=n(6347),x=n(4581),v=n(6342),g=n(3465);function j(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const y="collapseSidebarButton_PEFL",C="collapseSidebarButtonIcon_kv0_";function A(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.A)("button button--secondary button--outline",y),onClick:t,children:(0,h.jsx)(j,{className:C})})}var k=n(5041),S=n(9532);const _=Symbol("EmptyContext"),N=o.createContext(_);function T(e){let{children:t}=e;const[n,a]=(0,o.useState)(null),i=(0,o.useMemo)((()=>({expandedItem:n,setExpandedItem:a})),[n]);return(0,h.jsx)(N.Provider,{value:i,children:t})}var w=n(1422),I=n(9169),B=n(8774),M=n(2303);function E(e){let{collapsed:t,categoryLabel:n,onClick:o}=e;return(0,h.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:o})}function L(e){let{item:t,onItemClick:n,activePath:i,level:l,index:c,...d}=e;const{items:u,label:m,collapsible:p,className:b,href:f}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,v.p)(),g=function(e){const t=(0,M.A)();return(0,o.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.Nr)(e):void 0),[e,t])}(t),j=(0,r.w8)(t,i),y=(0,I.ys)(f,i),{collapsed:C,setCollapsed:A}=(0,w.u)({initialState:()=>!!p&&(!j&&t.collapsed)}),{expandedItem:k,setExpandedItem:T}=function(){const e=(0,o.useContext)(N);if(e===_)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),L=function(e){void 0===e&&(e=!C),T(e?null:c),A(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e;const i=(0,S.ZC)(t);(0,o.useEffect)((()=>{t&&!i&&n&&a(!1)}),[t,i,n,a])}({isActive:j,collapsed:C,updateCollapsed:L}),(0,o.useEffect)((()=>{p&&null!=k&&k!==c&&x&&A(!0)}),[p,k,c,A,x]),(0,h.jsxs)("li",{className:(0,a.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},b),children:[(0,h.jsxs)("div",{className:(0,a.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":y}),children:[(0,h.jsx)(B.A,{className:(0,a.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":j}),onClick:p?e=>{n?.(t),f?L(!1):(e.preventDefault(),L())}:()=>{n?.(t)},"aria-current":y?"page":void 0,role:p&&!f?"button":void 0,"aria-expanded":p&&!f?!C:void 0,href:p?g??"#":g,...d,children:m}),f&&p&&(0,h.jsx)(E,{collapsed:C,categoryLabel:m,onClick:e=>{e.preventDefault(),L()}})]}),(0,h.jsx)(w.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:C,children:(0,h.jsx)(V,{items:u,tabIndex:C?-1:0,onItemClick:n,activePath:i,level:l+1})})]})}var H=n(6654),R=n(3186);const P="menuExternalLink_NmtK";function D(e){let{item:t,onItemClick:n,activePath:o,level:i,index:l,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:p}=t,b=(0,r.w8)(t,o),f=(0,H.A)(d);return(0,h.jsx)("li",{className:(0,a.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,h.jsxs)(B.A,{className:(0,a.A)("menu__link",!f&&P,{"menu__link--active":b}),autoAddBaseUrl:p,"aria-current":b?"page":void 0,to:d,...f&&{onClick:n?()=>n(t):void 0},...c,children:[u,!f&&(0,h.jsx)(R.A,{})]})},u)}const G="menuHtmlItem_M9Kj";function W(e){let{item:t,level:n,index:o}=e;const{value:i,defaultStyle:r,className:l}=t;return(0,h.jsx)("li",{className:(0,a.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),r&&[G,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:i}},o)}function F(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(L,{item:t,...n});case"html":return(0,h.jsx)(W,{item:t,...n});default:return(0,h.jsx)(D,{item:t,...n})}}function U(e){let{items:t,...n}=e;const o=(0,r.Y)(t,n.activePath);return(0,h.jsx)(T,{children:o.map(((e,t)=>(0,h.jsx)(F,{item:e,index:t,...n},t)))})}const V=(0,o.memo)(U),z="menu_SIkG",O="menuWithAnnouncementBar_GW3s";function Y(e){let{path:t,sidebar:n,className:i}=e;const r=function(){const{isActive:e}=(0,k.M)(),[t,n]=(0,o.useState)(e);return(0,d.Mq)((t=>{let{scrollY:o}=t;e&&n(0===o)}),[e]),e&&t}();return(0,h.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,a.A)("menu thin-scrollbar",z,r&&O,i),children:(0,h.jsx)("ul",{className:(0,a.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(V,{items:n,activePath:t,level:1})})})}const q="sidebar_njMd",K="sidebarWithHideableNavbar_wUlq",$="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:n,onCollapse:o,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:r}}}=(0,v.p)();return(0,h.jsxs)("div",{className:(0,a.A)(q,s&&K,i&&$),children:[s&&(0,h.jsx)(g.A,{tabIndex:-1,className:J}),(0,h.jsx)(Y,{path:t,sidebar:n}),r&&(0,h.jsx)(A,{onClick:o})]})}const X=o.memo(Q);var Z=n(5600),ee=n(9876);const te=e=>{let{sidebar:t,path:n}=e;const o=(0,ee.M)();return(0,h.jsx)("ul",{className:(0,a.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1})})};function ne(e){return(0,h.jsx)(Z.GX,{component:te,props:e})}const oe=o.memo(ne);function ae(e){const t=(0,x.l)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(X,{...e}),o&&(0,h.jsx)(oe,{...e})]})}const ie={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function se(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:ie.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(j,{className:ie.expandButtonIcon})})}const re={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function le(e){let{children:t}=e;const n=(0,l.t)();return(0,h.jsx)(o.Fragment,{children:t},n?.name??"noSidebar")}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:r}=(0,f.zy)(),[l,c]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{l&&c(!1),!l&&(0,b.O)()&&c(!0),i((e=>!e))}),[i,l]);return(0,h.jsx)("aside",{className:(0,a.A)(s.G.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&c(!0)},children:(0,h.jsx)(le,{children:(0,h.jsxs)("div",{className:(0,a.A)(re.sidebarViewport,l&&re.sidebarViewportHidden),children:[(0,h.jsx)(ae,{sidebar:t,path:r,onCollapse:d,isHidden:l}),l&&(0,h.jsx)(se,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,l.t)();return(0,h.jsx)("main",{className:(0,a.A)(de.docMainContainer,(t||!o)&&de.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,a.A)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:n})})}const me={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function he(e){let{children:t}=e;const n=(0,l.t)(),[a,i]=(0,o.useState)(!1);return(0,h.jsxs)("div",{className:me.docsWrapper,children:[(0,h.jsx)(p,{}),(0,h.jsxs)("div",{className:me.docRoot,children:[n&&(0,h.jsx)(ce,{sidebar:n.items,hiddenSidebarContainer:a,setHiddenSidebarContainer:i}),(0,h.jsx)(ue,{hiddenSidebarContainer:a,children:t})]})]})}var pe=n(3363);function be(e){const t=(0,r.B5)(e);if(!t)return(0,h.jsx)(pe.A,{});const{docElement:n,sidebarName:o,sidebarItems:c}=t;return(0,h.jsx)(i.e3,{className:(0,a.A)(s.G.page.docsDocPage),children:(0,h.jsx)(l.V,{name:o,items:c,children:(0,h.jsx)(he,{children:n})})})}},3363:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var o=n(4164),a=n(1312),i=n(1107),s=n(4848);function r(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,o.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(a.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(a.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(a.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},1422:(e,t,n)=>{n.d(t,{N:()=>x,u:()=>c});var o=n(6540),a=n(8193),i=n(205),s=n(3109),r=n(4848);const l="ease-in-out";function c(e){let{initialState:t}=e;const[n,a]=(0,o.useState)(t??!1),i=(0,o.useCallback)((()=>{a((e=>!e))}),[]);return{collapsed:n,setCollapsed:a,toggleCollapsed:i}}const d={display:"none",overflow:"hidden",height:"0px"},u={display:"block",overflow:"visible",height:"auto"};function m(e,t){const n=t?d:u;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function h(e){let{collapsibleRef:t,collapsed:n,animation:a}=e;const i=(0,o.useRef)(!1);(0,o.useEffect)((()=>{const e=t.current;function o(){const t=e.scrollHeight,n=a?.duration??function(e){if((0,s.O)())return 1;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(t);return{transition:`height ${n}ms ${a?.easing??l}`,height:`${t}px`}}function r(){const t=o();e.style.transition=t.transition,e.style.height=t.height}if(!i.current)return m(e,n),void(i.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(r(),requestAnimationFrame((()=>{e.style.height=d.height,e.style.overflow=d.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{r()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,a])}function p(e){if(!a.A.canUseDOM)return e?d:u}function b(e){let{as:t="div",collapsed:n,children:a,animation:i,onCollapseTransitionEnd:s,className:l,disableSSRStyle:c}=e;const d=(0,o.useRef)(null);return h({collapsibleRef:d,collapsed:n,animation:i}),(0,r.jsx)(t,{ref:d,style:c?void 0:p(n),onTransitionEnd:e=>{"height"===e.propertyName&&(m(d.current,n),s?.(n))},className:l,children:a})}function f(e){let{collapsed:t,...n}=e;const[a,s]=(0,o.useState)(!t),[l,c]=(0,o.useState)(t);return(0,i.A)((()=>{t||s(!0)}),[t]),(0,i.A)((()=>{a&&c(t)}),[a,t]),a?(0,r.jsx)(b,{...n,collapsed:l}):null}function x(e){let{lazy:t,...n}=e;const o=t?f:b;return(0,r.jsx)(o,{...n})}},3109:(e,t,n)=>{function o(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}n.d(t,{O:()=>o})},9169:(e,t,n)=>{n.d(t,{Dt:()=>r,ys:()=>s});var o=n(6540),a=n(8328),i=n(4586);function s(e,t){const n=e=>(!e||e.endsWith("/")?e:`${e}/`)?.toLowerCase();return n(e)===n(t)}function r(){const{baseUrl:e}=(0,i.A)().siteConfig;return(0,o.useMemo)((()=>function(e){let{baseUrl:t,routes:n}=e;function o(e){return e.path===t&&!0===e.exact}function a(e){return e.path===t&&!e.exact}return function e(t){if(0===t.length)return;return t.find(o)||e(t.filter(a).flatMap((e=>e.routes??[])))}(n)}({routes:a.A,baseUrl:e})),[e])}}}]);