(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){},173:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),i=a.n(o),l=(a(88),a(4)),s=a(5),c=a(7),u=a(6),m=a(8),d=a(180),k=a(179),h=a(9),f=a(57),b=a.n(f),p=a(78),v=a(22),g=a.n(v),_={apiKey:"AIzaSyAoWv_-lJWQY0iMY6cNwFb3SBNan7wO6fE",authDomain:"bookmark-manager-b059e.firebaseapp.com",databaseURL:"https://bookmark-manager-b059e.firebaseio.com",projectId:"bookmark-manager-b059e",storageBucket:"bookmark-manager-b059e.appspot.com",messagingSenderId:"827874929710"};g.a.initializeApp(_);new g.a.auth.GoogleAuthProvider;var w=g.a.auth(),y=(g.a.storage().ref(),g.a.firestore()),E=g.a,S=a(178),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={uid:a.props.uid,fetched:!1,categories:[],url:String(window.location.href)},a.getListCategories=function(){var e=[];y.collection(String(a.state.uid)).doc("bookmarks").collection("bookmarkCategories").get().then(function(t){t.forEach(function(t){e.push(t.data().category_name)}),a.setState({fetched:!0,categories:e})}).catch(function(e){console.log(e)}).finally(function(){})},a._renderCategories=function(){return a.state.categories.map(function(e,t){return r.a.createElement("a",{key:t,className:"sidebarMenuItem",href:"/list/"+e,style:a.state.url.includes("/"+e)?j:null},e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getListCategories()}},{key:"render",value:function(){return r.a.createElement("div",{className:"sidebarMenu"},r.a.createElement(S.a,{id:"sidebarMenuHome",to:"/"},"Home"),r.a.createElement(S.a,{className:"sidebarMenuItem",to:"/new",style:this.state.url.includes("/new")?j:null},"Add New"),!this.state.fetched&&r.a.createElement("span",null,"..."),this.state.fetched&&this._renderCategories())}}]),t}(n.Component),j={color:"#333333",backgroundColor:"#ffff82"},C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).login=Object(p.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.signInAnonymously();case 2:case"end":return e.stop()}},e)})),a.toggleSidebar=function(){a.setState({showSidebar:!a.state.showSidebar})},a.handleResize=function(){return a.setState({height:window.innerHeight,width:window.innerWidth})},a.state={username:"",user:null,showSidebar:!1,height:window.innerHeight,width:window.innerWidth},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.login(),w.onAuthStateChanged(function(t){t&&e.setState({user:t})}),this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return r.a.createElement("div",{style:{flex:1}},r.a.createElement("div",{className:"topMenu"},r.a.createElement("span",{className:"topMenuButton",onClick:this.toggleSidebar},"\u2630")),r.a.createElement("div",{className:"appContainer"},this.state.user&&r.a.createElement("div",{className:"pageContainer",style:{height:this.state.height,width:this.state.width}},r.a.createElement("div",{className:"appSidebar",style:this.state.showSidebar?{position:"absolute",zIndex:99,minWidth:150,maxWidth:300,display:"flex",height:window.innerHeight}:null},r.a.createElement(O,{uid:this.state.user.uid})),r.a.createElement("div",{className:"appContent"},this.props.children))))}}]),t}(n.Component),N=(a(148),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={is_favorite:a.props.bookmark.bookmark_isfavorite},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.bookmark;return r.a.createElement("div",null,"card"===this.props.viewType&&r.a.createElement("div",{className:"bookmarkCard"},r.a.createElement("div",{className:"bookmarkImage"},r.a.createElement("img",{src:"https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg",style:{width:"100%"}})),r.a.createElement("span",{className:"bookmarkTitle"}),r.a.createElement("span",{className:"bookmarkUrl"},r.a.createElement("a",{href:t.bookmark_url,target:"_blank",rel:"noopener noreferrer",className:"cardUrl"},t.bookmark_url)),r.a.createElement("span",{className:"bookmarkNote"},t.bookmark_note),r.a.createElement("div",{className:"cardButtons"},r.a.createElement("button",{style:this.state.is_favorite?{backgroundColor:"#fffd00"}:null,onClick:function(){e.setState({is_favorite:!e.state.is_favorite})}},"Favorite"),r.a.createElement("button",{disabled:!0},"Archive"),r.a.createElement("a",{href:t.bookmark_url,target:"_blank",rel:"noopener noreferrer",className:"cardUrlBtn"},r.a.createElement("button",null,"Open")))),"list"===this.props.viewType&&r.a.createElement("div",{class:"bookmarkListContainer"},r.a.createElement("div",{className:"bookmarkList"},r.a.createElement("span",{className:"list-bookmarkDate"},new Date(t.bookmark_time).toDateString()),r.a.createElement("span",{className:"list-bookmarkUrl"},r.a.createElement("a",{href:t.bookmark_url,target:"_blank",rel:"noopener noreferrer",className:"cardUrl"},t.bookmark_url)),r.a.createElement("span",{className:"list-bookmarkNote"},t.bookmark_note))))}}]),t}(n.Component)),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={listname:a.props.match.params.listname,uid:null,data:[],filtered_data:[],fetched:!1,filter_query:"",bookmark_sort:"default",view_type:"card"},a.getUid=function(){return new Promise(function(e,t){w.onAuthStateChanged(function(t){t&&a.setState({uid:t.uid},function(){return e(!0)})})})},a.getBookmarks=function(){a.getUid().then(function(e){y.collection(String(a.state.uid)).doc("bookmarks").collection("allBookmarks").get().then(function(e){var t=[];e.forEach(function(e){var a=e.data().record;a.id=e.id,t.push(a),console.log(e.data())}),a.setState({fetched:!0,data:t,filtered_data:t})}).catch(function(e){console.log("Error getting documents: ",e)})})},a.handleFilterQuery=function(e){var t,n,r=e.target.name,o=e.target.value,i=a.state.data;n=0==o.trim().length?i:i.filter(function(e){return String(e.bookmark_url+e.bookmark_note).includes(o)}),a.setState((t={},Object(h.a)(t,r,o),Object(h.a)(t,"filtered_data",n),t))},a.handleSort=function(e){var t,n=e.target.name,r=e.target.value,o=a.state.data,i=o;switch(r){case"latest":i.sort(function(e,t){return t.bookmark_time-e.bookmark_time});break;case"oldest":i.sort(function(e,t){return e.bookmark_time-t.bookmark_time});break;default:i=o}a.setState((t={},Object(h.a)(t,n,r),Object(h.a)(t,"filtered_data",i),t))},a.handleView=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getBookmarks()}},{key:"render",value:function(){var e=this;return r.a.createElement(C,null,!this.state.fetched&&r.a.createElement("span",null,"Please wait while we get your Bookmarks..."),this.state.fetched&&this._renderFilterBar(),r.a.createElement("div",{className:"card"===this.state.view_type?"bookmarkCardContainer":"bookmarkListContainer"},this.state.fetched&&this.state.filtered_data.map(function(t,a){return r.a.createElement(N,{bookmark:t,key:a,viewType:e.state.view_type})})))}},{key:"_renderFilterBar",value:function(){return r.a.createElement("div",{className:"filterBar"},r.a.createElement("input",{type:"text",name:"filter_query",value:this.state.filter_query,onChange:this.handleFilterQuery,placeholder:"Enter your filter keyword"}),r.a.createElement("div",{style:{flexDirection:"row",marginLeft:3}},r.a.createElement("span",null,"Sort by"),r.a.createElement("select",{name:"bookmark_sort",value:this.state.bookmark_sort,onChange:this.handleSort},r.a.createElement("option",{value:"default"},"Default"),r.a.createElement("option",{value:"latest"},"Latest First"),r.a.createElement("option",{value:"oldest"},"Oldest First"))),r.a.createElement("select",{name:"view_type",value:this.state.view_type,onChange:this.handleView,style:{marginLeft:5}},r.a.createElement("option",{value:"card",selected:!0},"card view"),r.a.createElement("option",{value:"list"},"list view")))}}]),t}(n.Component),L=a(79),x=a.n(L),A=(a(149),a(150),[{value:"default",label:"default"}]),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a.handleListSelect=function(e){a.setState({bookmark_list:e})},a.save=function(){var e={bookmark_url:a.state.bookmark_url,bookmark_list:a.state.bookmark_list,bookmark_note:a.state.bookmark_note,bookmark_time:(new Date).getTime()};a.writeToDb(e)},a.writeToDb=function(e){var t=e.bookmark_list.length,n=0;a.setState({saving:!0});var r={bookmark_url:e.bookmark_url,bookmark_note:e.bookmark_note,bookmark_time:e.bookmark_time,bookmark_isfavorite:!1},o=[];y.collection(String(a.state.uid)).doc("bookmarks").collection("bookmarkCategories").get().then(function(e){e.forEach(function(e){o.push(e.data().category_name)})}).finally(function(){e.bookmark_list.map(function(e){o.includes(e.value)?y.collection(String(a.state.uid)).doc("bookmarks").collection("allBookmarks").add({record:r,bookmark_category:e.value}).then(function(e){++n===t&&a.handleSuccess()}):y.collection(String(a.state.uid)).doc("bookmarks").collection("bookmarkCategories").add({category_name:e.value}).then(function(o){y.collection(String(a.state.uid)).doc("bookmarks").collection("allBookmarks").add({record:r,bookmark_category:e.value}).then(function(e){++n===t&&a.handleSuccess()})})})})},a.handleSuccess=function(){alert("Bookmark saved!"),window.location.reload()},a.state={bookmark_url:"",bookmark_list:["Default"],bookmark_note:"",new_bookmark_list:"",uid:null,saving:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.auth().onAuthStateChanged(function(t){t&&e.setState({uid:t.uid})})}},{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement("div",{className:"newbookmarkFormContainer"},r.a.createElement("div",{className:"newBookmarkForm"},r.a.createElement("h2",{className:"pageTitle"},"Add New Bookmark"),r.a.createElement("input",{type:"text",name:"bookmark_url",placeholder:"URL of bookmark",value:this.state.bookmark_url,onChange:this.handleInput}),r.a.createElement(x.a,{defaultValue:A[0],isMulti:!0,name:"bookmark_list",options:A,className:"basic-multi-select",classNamePrefix:"select",onChange:this.handleListSelect,placeholder:"Bookmark List category"}),r.a.createElement("textarea",{name:"bookmark_note",placeholder:"Add additional notes...",value:this.state.bookmark_note,onChange:this.handleInput}),r.a.createElement("button",{onClick:this.save},"Save"),this.state.saving&&r.a.createElement("span",null,"Please wait..."))))}}]),t}(n.Component),F=(a(173),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={listname:a.props.match.params.listname,uid:null,data:[],filtered_data:[],fetched:!1,filter_query:"",bookmark_sort:"default",view_type:"card"},a.getUid=function(){return new Promise(function(e,t){w.onAuthStateChanged(function(t){t&&a.setState({uid:t.uid},function(){return e(!0)})})})},a.getBookmarks=function(){a.getUid().then(function(e){y.collection(String(a.state.uid)).doc("bookmarks").collection("allBookmarks").where("bookmark_category","==",String(a.state.listname)).get().then(function(e){var t=[];e.forEach(function(e){var a=e.data().record;a.id=e.id,t.push(a),console.log(e.data())}),a.setState({fetched:!0,data:t,filtered_data:t})}).catch(function(e){console.log("Error getting documents: ",e)})})},a.handleFilterQuery=function(e){var t,n,r=e.target.name,o=e.target.value,i=a.state.data;n=0==o.trim().length?i:i.filter(function(e){return String(e.bookmark_url+e.bookmark_note).includes(o)}),a.setState((t={},Object(h.a)(t,r,o),Object(h.a)(t,"filtered_data",n),t))},a.handleSort=function(e){var t,n=e.target.name,r=e.target.value,o=a.state.data,i=o;switch(r){case"latest":i.sort(function(e,t){return t.bookmark_time-e.bookmark_time});break;case"oldest":i.sort(function(e,t){return e.bookmark_time-t.bookmark_time});break;default:i=o}a.setState((t={},Object(h.a)(t,n,r),Object(h.a)(t,"filtered_data",i),t))},a.handleView=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getBookmarks()}},{key:"render",value:function(){var e=this;return r.a.createElement(C,null,!this.state.fetched&&r.a.createElement("span",null,"Please wait while we get your Bookmarks..."),this.state.fetched&&this._renderFilterBar(),r.a.createElement("div",{className:"card"===this.state.view_type?"bookmarkCardContainer":"bookmarkListContainer"},this.state.fetched&&this.state.filtered_data.map(function(t,a){return r.a.createElement(N,{bookmark:t,key:a,viewType:e.state.view_type})})))}},{key:"_renderFilterBar",value:function(){return r.a.createElement("div",{className:"filterBar"},r.a.createElement("input",{type:"text",name:"filter_query",value:this.state.filter_query,onChange:this.handleFilterQuery,placeholder:"Enter your filter keyword"}),r.a.createElement("div",{style:{flexDirection:"row",marginLeft:3}},r.a.createElement("span",null,"Sort by"),r.a.createElement("select",{name:"bookmark_sort",value:this.state.bookmark_sort,onChange:this.handleSort},r.a.createElement("option",{value:"default"},"Default"),r.a.createElement("option",{value:"latest"},"Latest First"),r.a.createElement("option",{value:"oldest"},"Oldest First"))),r.a.createElement("select",{name:"view_type",value:this.state.view_type,onChange:this.handleView,style:{marginLeft:5}},r.a.createElement("option",{value:"card",selected:!0},"card view"),r.a.createElement("option",{value:"list"},"list view")))}}]),t}(n.Component)),M=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(k.a,{path:"/",exact:!0,component:B}),r.a.createElement(k.a,{path:"/new",exact:!0,component:D}),r.a.createElement(k.a,{path:"/list/:listname",exact:!0,component:F})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(175)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.79854a9b.chunk.js.map