(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(25)},16:function(e,t,a){},22:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),i=a.n(l);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18),a(20);var r=a(1),o=a(2),d=a(5),m=a(3),u=a(6),b=(a(22),a(10)),s=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var f=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var h=function(e){var t="fa fa-heart";return t+=e.liked?"":"-o",c.a.createElement("i",{style:{cursor:"pointer"},className:t,onClick:e.onClick})},g=a(4),k=a.n(g),v=function(e){var t=e.pageSize,a=e.itemsCount,n=e.currentPage,l=a/t,i=k.a.range(1,l+1);return c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},i.map(function(t){return c.a.createElement("li",{key:t,className:t===n?"page-item active":"page-item",onClick:function(){return e.onPageChange(t)}},c.a.createElement("a",{className:"page-link"},t))})))},E=function(e,t,a){var n=(a-1)*t;return k()(e).slice(n).take(t).value()},y=function(e){var t=e.items;e.selectedItem;return c.a.createElement("ul",{className:"list-group"},t.map(function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},e.name)}))},p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],genres:[],currentPage:1,pageSize:4},a.handlePageChange=function(e){a.setState({currentPage:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({movies:f,genres:s.filter(function(e){return e})})}},{key:"handleDelete",value:function(e){this.setState({movies:this.state.movies.filter(function(t){return t._id!==e})})}},{key:"handleLiked",value:function(e){var t=Object(b.a)(this.state.movies),a=t.indexOf(e);t[a].liked=!t[a].liked,this.setState({movies:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pageSize,n=t.currentPage,l=t.movies,i=t.genres,r=this.state.movies.length,o=E(l,a,n);return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement(y,{items:i})),c.a.createElement("div",{className:"col"},c.a.createElement("h1",null,"showing ",r," movies from database"),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"title"),c.a.createElement("th",null,"DailyRental"),c.a.createElement("th",null,"no. of stocks"),c.a.createElement("th",null),c.a.createElement("th",null))),c.a.createElement("tbody",null,o.map(function(t){return c.a.createElement("tr",{key:t._id},c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.dailyRentalRate),c.a.createElement("td",null,t.numberInStock),c.a.createElement("td",null,c.a.createElement(h,{liked:t.liked,onClick:function(){return e.handleLiked(t)}})),c.a.createElement("td",{className:"badge badge-danger",onClick:function(){return e.handleDelete(t._id)}},"Delete"))}))),c.a.createElement(v,{pageSize:a,currentPage:n,onPageChange:this.handlePageChange,itemsCount:r})))}}]),t}(n.Component),_=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement("div",{className:"container"},c.a.createElement(p,null)))}}]),t}(n.Component);i.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.fc52a5ec.chunk.js.map