(window.webpackJsonpnomflix=window.webpackJsonpnomflix||[]).push([[0],{42:function(e,t,n){e.exports=n(70)},70:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(33),c=n.n(o),i=n(19),u=n(14),s=n(15),l=n(13);function p(){var e=Object(s.a)(["\n  height: 50px;\n  /* width: 100%;\n  height: 100%; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return e},e}function d(){var e=Object(s.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return d=function(){return e},e}function m(){var e=Object(s.a)(["\n  display: flex;\n"]);return m=function(){return e},e}function h(){var e=Object(s.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  /* background-color: red; */\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return h=function(){return e},e}var f=l.default.header(h()),v=l.default.ul(m()),g=l.default.li(d(),function(e){return e.current?"#3498db":"transparent"}),b=Object(l.default)(i.b)(p()),x=Object(u.g)(function(e){var t=e.location.pathname;return a.a.createElement(f,null,a.a.createElement(v,null,a.a.createElement(g,{current:"/"===t},a.a.createElement(b,{to:"/"},"Movies")),a.a.createElement(g,{current:"/tv"===t},a.a.createElement(b,{to:"/tv"},"T V")),a.a.createElement(g,{current:"/search"===t},a.a.createElement(b,{to:"/search"},"Search"))))}),y=n(4),O=n.n(y),j=n(7),w=n(8),E=n(9),k=n(11),S=n(10),R=n(12),T=function(){return"Home"},C=n(38),D=n.n(C).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"923c1e32263f1e7ecb5c2ea0396a25c9",language:"en-US"}}),_={nowPlaying:function(){return D.get("movie/now_playing")},upcoming:function(){return D.get("movie/upcoming")},popular:function(){return D.get("movie/popular")},movieDetail:function(e){return D.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return D.get("search/movie",{params:{query:encodeURIComponent(e)}})}},M={topRated:function(){return D.get("tv/top_rated")},popular:function(){return D.get("tv/popular")},airingToday:function(){return D.get("tv/airing_today")},showDetail:function(e){return D.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return D.get("search/tv",{params:{query:encodeURIComponent(e)}})}},P=function(e){function t(){var e,n;Object(w.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(k.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(a)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(R.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(O.a.mark(function e(){var t,n,r,a,o,c;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,_.upcoming();case 7:return r=e.sent,a=r.data.results,e.next=11,_.popular();case 11:o=e.sent,c=o.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find  movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,o=e.error,c=e.loading;return a.a.createElement(T,{nowPlaying:t,upcoming:n,popular:r,error:o,loading:c})}}]),t}(a.a.Component),U=function(){return"TV"},I=function(e){function t(){var e,n;Object(w.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(k.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(a)))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},n.componentDidMount=Object(j.a)(O.a.mark(function e(){var t,r,a,o,c,i;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.topRated();case 3:return t=e.sent,r=t.data.results,e.next=7,M.popular();case 7:return a=e.sent,o=a.data.results,e.next=11,M.airingToday();case 11:c=e.sent,i=c.data.results,n.setState({topRated:r,popular:o,airingToday:i}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),n.setState({error:"Can't find TV information."});case 19:return e.prev=19,n.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,null,[[0,16,19,22]])})),n}return Object(R.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,o=e.error,c=e.loading;return a.a.createElement(U,{topRated:t,popular:n,airingToday:r,error:o,loading:c})}}]),t}(a.a.Component),B=function(){return"Search"},z=function(e){function t(){var e,n;Object(w.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(k.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(a)))).state={movieResults:null,tvResults:null,searchTerm:"code",error:null,loading:!1},n.handleSubmit=function(){""!==n.state.searchTerm&&n.searchByTerm()},n.searchByTerm=Object(j.a)(O.a.mark(function e(){var t,r,a,o,c;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,_.search(t);case 5:return r=e.sent,a=r.data.results,e.next=9,M.search(t);case 9:o=e.sent,c=o.data.results,n.setState({movieResults:a,tvResults:c}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[2,14,17,20]])})),n}return Object(R.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,o=e.error,c=e.loading;return a.a.createElement(B,{movieResults:t,tvResults:n,searchTerm:r,error:o,loading:c,handleSubmit:this.handleSubmit})}}]),t}(a.a.Component),A=function(){return"Detail"},N=function(e){function t(e){var n;Object(w.a)(this,t),n=Object(k.a)(this,Object(S.a)(t).call(this,e));var r=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:r.includes("/movie")},n}return Object(R.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(O.a.mark(function e(){var t,n,r,a,o,c,i,u;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,o=parseInt(n),!isNaN(o)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,_.movieDetail(o);case 10:i=e.sent,c=i.data,e.next=18;break;case 14:return e.next=16,M.showDetail(o);case 16:u=e.sent,c=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}},e,this,[[6,20,23,26]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return console.log(this.state),a.a.createElement(A,{result:t,error:n,loading:r})}}]),t}(a.a.Component),V=function(){return a.a.createElement(i.a,null,a.a.createElement(x,null),a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"/",exact:!0,component:P}),a.a.createElement(u.b,{path:"/tv",component:I}),a.a.createElement(u.b,{path:"/search",component:z}),a.a.createElement(u.b,{path:"/movie/:id",component:N}),a.a.createElement(u.b,{path:"/show/:id",component:N}),a.a.createElement(u.a,{from:"*",to:"/"})))},q=n(39),F=n.n(q);function H(){var e=Object(s.a)(["\n  ","\n  a {\n    text-decoration:none;\n    color:inherit;\n  }\n  * {\n    box-sizing:border-box;\n  }\n  body {\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size:12px;\n    background-color:rgba(20,20,20,1);\n    color:white;\n    padding-top:50px;\n  }\n"]);return H=function(){return e},e}var J=Object(l.createGlobalStyle)(H(),F.a);var G=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(V,null),a.a.createElement(J,null))};c.a.render(a.a.createElement(G,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9dfbf8f4.chunk.js.map