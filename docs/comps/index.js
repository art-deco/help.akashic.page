function R(a,b){a.prototype=u(b.prototype);a.prototype.constructor=a;if(z)z(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}function S(){var a=I.call(this)||this;a.state.m=!1;return a}R(S,I);S.prototype.componentDidMount=function(){this.setState({m:!0})};S.prototype.componentWillUnmount=function(){this.setState({m:!1})};
S.prototype.render=function(a){var b=void 0===a.timeout?250:a.timeout;return H("span",{},a.children,this.state.m&&H(T,{timeout:b}))};function T(){var a=I.call(this)||this;a.state={l:0};a.a=null;return a}R(T,I);T.prototype.componentDidMount=function(){var a=this;this.a=setInterval(function(){var b=a.state.l+1;3<b&&(b=0);a.setState({l:b})},this.props.timeout)};T.prototype.componentWillUnmount=function(){clearInterval(this.a)};T.prototype.render=function(){return H("span",{},".".repeat(this.state.l))};var ea={},fa={ellipsis:S,"github-badge":O,"social-buttons":P},ha=L();
[{key:"github-badge",id:"c301a",props:{s:"art-deco",name:"help.akashic.page"}},{key:"social-buttons",id:"c14e9",props:{url:"https://help.akshic.page/",c:!0,className:"b-xq b-Hk"}},{key:"ellipsis",id:"ceb55",props:{timeout:300},children:["\n  Please bear one moment while I add the content\n"]}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children,f=fa[b],n=f.plain||/^\s*class\s+/.test(f.toString())&&!I.isPrototypeOf(f);d.i={f:"/",w:function(g){return F(ea[g])}};
c.split(",").forEach(function(g){var l=K(g,b),k=l.parent,h=l.b;if(h){var m={key:b,id:g,plain:n},p;h.render=function(){return p=N(m,f,p,h,k,d,e)};h.render.c=m;ha.observe(h)}})});

//# sourceMappingURL=index.js.map