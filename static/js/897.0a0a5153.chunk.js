"use strict";(self.webpackChunkredux_reselect=self.webpackChunkredux_reselect||[]).push([[897],{7897:function(e,r,s){s.r(r),s.d(r,{default:function(){return v}});var t=s(2791),n=s(9900),a=s(1087),c=s(5861),o=s(9439),i=s(7757),l=s.n(i),u=s(1526),p=s(2564),d={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},h=function(){var e=(0,t.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("posts")))&&void 0!==e?e:[]})),r=(0,o.Z)(e,2),s=r[0],n=r[1],a=(0,t.useState)(!1),i=(0,o.Z)(a,2),h=i[0],f=i[1],v=(0,t.useState)(null),g=(0,o.Z)(v,2),m=g[0],x=g[1];return(0,t.useEffect)((function(){var e=function(){var e=(0,c.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,(0,u.T6)();case 4:r=e.sent,n(r),p.Am.success("Your posts were successfully fetched!",d),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0.message),p.Am.error(e.t0.message,d);case 13:return e.prev=13,f(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{posts:s,isLoading:h,error:m}},f=s(184),v=function(){var e=h(),r=e.posts,s=e.isLoading,t=e.error;return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:"title-app",children:"React"}),null!==t&&(0,f.jsx)("p",{className:"c-error",children:" Oops, error."}),s&&(0,f.jsx)(n.Z1,{visible:!0,height:"100",width:"100",color:"#04e4f9",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""}),r.length>0&&r.map((function(e){return(0,f.jsxs)(a.rU,{className:"post",to:"/post/".concat(e.id),children:[(0,f.jsxs)("strong",{className:"post-id",children:["Id: ",e.id]}),(0,f.jsxs)("h4",{className:"post-title",children:[" ",e.title," "]}),(0,f.jsx)("p",{className:"post-body",children:e.body})]},e.id)}))]})}}}]);
//# sourceMappingURL=897.0a0a5153.chunk.js.map