(this.webpackJsonptemplates=this.webpackJsonptemplates||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__1tyOu"}},28:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__QXdsc",list:"video_item_list__35KLD",grid:"video_item_grid__RHu5m",video:"video_item_video__2-zml",thumbnail:"video_item_thumbnail__31rlB",metadata:"video_item_metadata__2_B6x",title:"video_item_title__dLati",channel:"video_item_channel__3x5nB"}},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a.n(i),s=a(20),r=a.n(s),o=(a(28),a(4)),l=a.n(o),u=a(6),d=a(10),p=a(7),m=a.n(p),_=a(3),h=a.n(_),b=Object(i.memo)((function(e){var t=e.video,a=e.video.snippet,i=e.onVideoClick,c="list"===e.display?h.a.list:h.a.grid;return Object(n.jsx)("li",{className:"".concat(h.a.container," ").concat(c),onClick:function(){return i(t)},children:Object(n.jsxs)("div",{className:h.a.video,children:[Object(n.jsx)("img",{className:h.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(n.jsxs)("div",{className:h.a.metadata,children:[Object(n.jsx)("p",{className:h.a.title,children:a.title}),Object(n.jsx)("p",{className:h.a.channel,children:a.channelTitle})]})]})})})),j=a(21),v=a.n(j),O=Object(i.memo)((function(e){var t=e.videos,a=e.onVideoClick,i=e.display;return Object(n.jsx)("ul",{className:v.a.videos,children:t.map((function(e){return Object(n.jsx)(b,{video:e,onVideoClick:a,display:i},e.id)}))})})),x=a(5),f=a.n(x),g=Object(i.memo)((function(e){var t=e.onSearch,a=Object(i.useRef)(),c=function(){var e=a.current.value;t(e)};return Object(n.jsxs)("header",{className:f.a.header,children:[Object(n.jsxs)("div",{className:f.a.logo,children:[Object(n.jsx)("img",{className:f.a.img,src:"/redtube/images/logo.png",alt:"logo"}),Object(n.jsx)("h1",{className:f.a.title,children:"Youtube"})]}),Object(n.jsx)("input",{ref:a,className:f.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&c()}}),Object(n.jsx)("button",{className:f.a.button,type:"submit",onClick:function(){c()},children:Object(n.jsx)("img",{className:f.a.buttonImg,src:"/redtube/images/search.png",alt:"search"})})]})})),y=a(8),N=a.n(y),k=function(e){var t=e.video,a=e.video.snippet;return Object(n.jsxs)("section",{className:N.a.detail,children:[Object(n.jsx)("iframe",{className:N.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id,"?autoplay=1"),frameBorder:"0",allowFullScreen:!0}),Object(n.jsx)("h2",{children:a.title}),Object(n.jsx)("h3",{children:a.channelTitle}),Object(n.jsx)("pre",{className:N.a.description,children:a.description})]})};var w=function(e){var t=e.youtube,a=Object(i.useState)([]),c=Object(d.a)(a,2),s=c[0],r=c[1],o=Object(i.useState)(null),p=Object(d.a)(o,2),_=p[0],h=p[1],b=Object(i.useCallback)((function(e){h(e)}),[]),j=Object(i.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.search(a);case 2:n=e.sent,r(n),h(null);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return r(e)}))}),[t]),Object(n.jsxs)("div",{className:m.a.app,children:[Object(n.jsx)(g,{onSearch:j}),Object(n.jsxs)("section",{className:m.a.content,children:[_&&Object(n.jsx)("div",{className:m.a.detail,children:Object(n.jsx)(k,{video:_})}),Object(n.jsx)("div",{className:m.a.list,children:Object(n.jsx)(O,{videos:s,onVideoClick:b,display:_?"list":"grid"})})]})]})},C=a(11),S=function(e){var t=e;return{mostPopular:function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),search:function(){var e=Object(u.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:a}});case 2:return n=e.sent,e.abrupt("return",n.data.items.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},R=a(22),I=new S(a.n(R).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyDbRDDdAgBi5G8WKIlojRj_dOCMqXE8Mpg"}}));r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(w,{youtube:I})}),document.getElementById("root"))},5:function(e,t,a){e.exports={header:"search_header_header__39NZc",logo:"search_header_logo__3slhJ",img:"search_header_img__3OmSe",input:"search_header_input__3oDqy",button:"search_header_button__2L29b",buttonImg:"search_header_buttonImg__3-aeV"}},7:function(e,t,a){e.exports={app:"app_app__3659l",content:"app_content__3hMhM",detail:"app_detail__1_4sc",list:"app_list__36qe9"}},8:function(e,t,a){e.exports={detail:"video_detail_detail__9Ka0R",description:"video_detail_description__GF-tH"}}},[[48,1,2]]]);
//# sourceMappingURL=main.9d695090.chunk.js.map