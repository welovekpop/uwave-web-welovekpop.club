(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{779:function(n,e,a){},786:function(n,e,a){"use strict";a.r(e);var t=a(2),o=a.n(t),r=a(17),i=a.n(r),s=a(184),d=a.n(s),u=a(693),c=a.n(u),p=a(5),v=a(14),l=a(0),m=a.n(l),f=a(1),b=a.n(f),g=a(196),h=a(171),y=a.n(h),O=a(463),w=a.n(O),M=a(100),A=a.n(M),C=a(33),j=a.n(C),S=a(103),U=a.n(S),T=a(518),E=a(517),k=a(516),x=a(460),L=a(109),N=a(38),P=a(793),R=a(264),_=a(259),B=a.n(_),D=a(281),z=i()(A()("newMotd","setMotd",function(n){return n.motd}),A()("expanded","setExpanded",!1),j()(function(n){return{parsedMotd:Object(D.a)(B()(n.newMotd),n.compileOptions),onExpand:function(){return n.setExpanded(!n.expanded)}}}),U()({onChange:function(n){return function(e){n.setMotd(e.target.value)}},onSubmit:function(n){return function(){n.onSetMotd(n.newMotd),n.setExpanded(!1)}}}));function I(n){n&&n.focus()}var F=m()(R.a,{}),H=function(n){var e=n.canChangeMotd,a=n.newMotd,t=n.parsedMotd,o=n.expanded,r=n.onChange,i=n.onSubmit,s=n.onExpand;return m()(x.a,{className:"AdminMotd"},void 0,m()(T.a,{title:"Message of the Day",action:e&&m()(N.a,{onClick:s},void 0,F)}),m()(E.a,{},void 0,t),m()(P.a,{in:o,unmountOnExit:!0},void 0,m()(E.a,{style:{paddingTop:0}},void 0,b.a.createElement("textarea",{className:"AdminMotd-field",rows:4,onChange:r,value:a,ref:I})),m()(k.a,{},void 0,m()(L.a,{variant:"raised",color:"primary",onClick:i},void 0,"Save"))))};H.propTypes={},H.defaultProps={canChangeMotd:!1};var J=z(H),V=a(21),q=a(75),W=a(12).i,Y=Object(p.b)({motd:q.k,compileOptions:q.e,canChangeMotd:W}),G={onSetMotd:V.i},K=Object(v.b)(Y,G)(J),Q=m()("div",{},void 0,m()("p",{},void 0,"Note that the admin interface is not yet done and most things do not work. You can, however, configure the message of the day! :P"),m()(K,{})),X=function(){return Q};X.propTypes={};var Z=X,$=a(8),nn=a(792),en=a(790),an=a(788),tn=a(789),on=a(787),rn=a(13),sn=a.n(rn),dn=a(10),un=a.n(dn),cn=a(193),pn=a.n(cn),vn=a(682),ln=a(181),mn=a(791),fn=a(55),bn=a(102),gn=a(72),hn=i()(Object(bn.a)(),j()(function(n){return{onUsernameClick:function(e){e.preventDefault(),n.openUserCard(n.user)}}})),yn=function(n){var e=n.user,a=n.onUsernameClick;return m()("button",{onClick:a},void 0,m()(gn.a,{user:e}))};yn.propTypes={};var On=hn(yn),wn=a(462),Mn={width:48,paddingRight:0},An={width:48,paddingLeft:0,paddingRight:0},Cn=j()({className:"AdminUserRow-cell"})(nn.a),jn=m()(Cn,{},void 0,"Email"),Sn=m()(mn.a,{}),Un=m()(ln.a,{},void 0,"Ban"),Tn=function(n){function e(){for(var e,a,t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return e=a=n.call.apply(n,[this].concat(o))||this,a.state={open:!1,anchorEl:null},a.menu=pn()("menu"),a.handleOpenMenu=function(n){a.setState({open:!0,anchorEl:n.currentTarget})},a.handleCloseMenu=function(){a.setState({open:!1,anchorEl:null})},e||sn()(a)}return un()(e,n),e.prototype.render=function(){var n=this.props.user,e=this.state,a=e.open,t=e.anchorEl;return m()(en.a,{className:"AdminUserRow"},void 0,m()(Cn,{style:Mn},void 0,m()(fn.a,{user:n})),m()(Cn,{},void 0,m()(On,{user:n})),m()(Cn,{},void 0,Object(wn.a)(n.createdAt)),jn,m()(Cn,{},void 0,n.roles.join(", ")),m()(Cn,{style:An},void 0,m()(N.a,{onClick:this.handleOpenMenu,"aria-haspopup":"true","aria-owns":a?this.menu:null},void 0,Sn),m()(vn.a,{id:this.menu,open:a,anchorEl:t,onClose:this.handleCloseMenu},void 0,Un)))},e}(b.a.Component);Tn.propTypes={};var En=j()({style:{background:"#9d2053",padding:"12px 24px",lineHeight:"35px"}})("div"),kn=j()({style:{background:"#631032",color:"#ffffff",border:0,marginLeft:12,paddingLeft:12,height:35},type:"text"})("input"),xn=Object($.c)(),Ln=m()("span",{},void 0,"Managing Users:"),Nn=m()(kn,{}),Pn=m()(nn.a,{}),Rn=m()(nn.a,{}),_n=function(n){var e=n.t,a=n.users;return m()(b.a.Fragment,{},void 0,m()(En,{},void 0,Ln,m()("span",{style:{float:"right"}},void 0,"Filter User:",Nn)),m()(tn.a,{},void 0,m()(an.a,{},void 0,m()(en.a,{},void 0,Pn,m()(nn.a,{},void 0,e("admin.users.user")),m()(nn.a,{},void 0,e("admin.users.joinedAt")),m()(nn.a,{},void 0,e("admin.users.email")),m()(nn.a,{},void 0,e("admin.users.roles")),Rn)),m()(on.a,{},void 0,a.map(function(n){return m()(Tn,{user:n})}))))};_n.propTypes={};var Bn=xn(_n),Dn=a(15),zn="uwave/admin/view/TRANSITION",In="uwave/admin/users/LOAD_USERS_START",Fn="uwave/admin/users/LOAD_USERS_COMPLETE",Hn="uwave/admin/bans/LOAD_BANS_START",Jn="uwave/admin/bans/LOAD_BANS_COMPLETE";function Vn(){return{type:In}}function qn(n){return{type:Fn,payload:{users:n.data,page:Math.floor(n.meta.offset/n.meta.pageSize)},meta:n.meta}}var Wn=function(n){return n.admin},Yn=Object(p.a)(Wn,function(n){return n.users.currentPage}),Gn=Object(p.a)(Wn,function(n){return n.users.users}),Kn=Object(p.b)({currentPage:Yn,users:Gn}),Qn={onLoadUsers:function(n){return void 0===n&&(n=null),Object(Dn.get)("/users",{qs:n?{page:n}:null,onStart:Vn,onComplete:qn})}},Xn=i()(Object(v.b)(Kn,Qn),c()({componentDidMount:function(){this.props.onLoadUsers()}}))(Bn),Zn=a(130);function $n(){return{type:Hn}}function ne(n){var e=n.meta;return{type:Jn,payload:{bans:Object(Zn.a)(n)},meta:{page:Math.floor(e.offset/e.pageSize),size:e.pageSize}}}function ee(){return Object(Dn.get)("/bans",{onStart:$n,onComplete:ne})}var ae=a(126),te=a.n(ae),oe=Object($.c)(),re={width:48,paddingRight:0},ie=function(n){var e=n.t,a=n.ban,t=n.onUnbanUser;return m()(en.a,{},void 0,m()(nn.a,{style:re},void 0,m()(fn.a,{user:a.user})),m()(nn.a,{},void 0,m()(On,{user:a.user})),m()(nn.a,{},void 0,te()(a.duration,{long:!0})),m()(nn.a,{},void 0,a.reason||m()("em",{},void 0,e("admin.bans.noReason"))),m()(nn.a,{},void 0,m()(On,{user:a.moderator})),m()(nn.a,{},void 0,m()(L.a,{variant:"raised",onClick:t},void 0,e("admin.bans.unban"))))};ie.propTypes={};var se=oe(ie),de=Object($.c)(),ue=j()({style:{background:"#9d2053",padding:"12px 24px",lineHeight:"35px"}})("div"),ce=j()({style:{background:"#631032",color:"#ffffff",border:0,marginLeft:12,paddingLeft:12,height:35},type:"text"})("input"),pe=m()("span",{},void 0,"Managing Bans:"),ve=m()(ce,{}),le=m()(nn.a,{}),me=function(n){var e=n.t,a=n.bans,t=n.onUnbanUser;return m()(b.a.Fragment,{},void 0,m()(ue,{},void 0,pe,m()("span",{style:{float:"right"}},void 0,"Filter User:",ve)),m()(tn.a,{},void 0,m()(an.a,{},void 0,m()(en.a,{},void 0,le,m()(nn.a,{},void 0,e("admin.bans.user")),m()(nn.a,{},void 0,e("admin.bans.duration")),m()(nn.a,{},void 0,e("admin.bans.reason")),m()(nn.a,{},void 0,e("admin.bans.bannedBy")),m()(nn.a,{},void 0,e("admin.bans.actions")))),m()(on.a,{},void 0,a.map(function(n){return m()(se,{ban:n,onUnbanUser:function(){return t(n.user)}},n.user._id)}))))};me.propTypes={};var fe=de(me),be={onLoadBans:ee,onUnbanUser:function(n){return function(e){return e(function(n){return Object(Dn.del)("/bans/"+n._id,{})}(n)).then(function(){return e(ee())})}}},ge={main:Z,users:Xn,bans:i()(Object(v.b)(function(n){return{bans:n.admin.bans.bans}},be),c()({componentDidMount:function(){this.props.onLoadBans()}}))(fe)},he=y()(function(n){return{component:ge[n.page]}})(w()("component")),ye=(a(779),m()(g.b,{primary:"Main"})),Oe=m()(g.b,{primary:"Users"}),we=m()(g.b,{primary:"Bans"}),Me=function(n){var e=n.currentView,a=n.onTransition;return m()("div",{className:"AdminApp"},void 0,m()("div",{className:"AdminApp-menu"},void 0,m()(g.c,{},void 0,m()(g.a,{selected:"main"===e,className:"AdminApp-menuItem",onClick:function(){return a("main")}},void 0,ye),m()(g.a,{selected:"users"===e,className:"AdminApp-menuItem",onClick:function(){return a("users")}},void 0,Oe),m()(g.a,{selected:"bans"===e,className:"AdminApp-menuItem",onClick:function(){return a("bans")}},void 0,we))),m()("div",{className:"AdminApp-page"},void 0,m()(he,{page:e})))};Me.propTypes={};var Ae=Me,Ce=a(18),je=a(6),Se=a.n(je),Ue={currentPage:0,totalPages:0,totalUsers:0,users:[]};var Te={currentPage:{offset:0,limit:50},bans:[]};var Ee=Object(Ce.c)({users:function(n,e){switch(void 0===n&&(n=Ue),e.type){case In:return n;case Fn:return Se()({},n,{currentPage:e.payload.page,totalUsers:e.meta.total,totalPages:Math.ceil(e.meta.total/e.meta.pageSize),users:e.payload.users});default:return n}},bans:function(n,e){switch(void 0===n&&(n=Te),void 0===e&&(e={}),e.type){case Hn:return n;case Jn:return Se()({},n,{bans:e.payload.bans});default:return n}},view:function(n,e){return void 0===n&&(n="main"),e.type===zn?e.payload:n}});var ke=Object(p.a)(Wn,function(n){return n.view}),xe=Object(p.b)({currentView:ke}),Le={onTransition:function(n){return{type:zn,payload:n}}};function Ne(n){(function(n){var e=n.getState();return e&&!!e.admin})(n)||function(n){n.mount("admin",Ee)}(n)}var Pe=i()(d()({store:o.a.object}),c()({componentWillMount:function(){this.props.store&&Ne(this.props.store)}}),Object(v.b)(xe,Le));e.default=Pe(Ae)}}]);
//# sourceMappingURL=admin_af0112b.js.map