(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=a(1),s=a(2),o=a(4),m=a(3),p=a(5),u=(a(14),a(15),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.type,c=e.base_experience,i="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("div",{className:"Pokecard-identity"},r.a.createElement("h2",null,a),r.a.createElement("img",{src:i,alt:a})),r.a.createElement("div",{className:"Pokecard-stats"},r.a.createElement("dl",null,r.a.createElement("dt",null,"Type:")," ",r.a.createElement("dd",null,n)),r.a.createElement("dl",null,r.a.createElement("dt",null,"Experience:")," ",r.a.createElement("dd",null,c))))}}]),t}(n.Component)),d=(a(16),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.team,a=e.totalExp,n=e.isWinner,c=t.map(function(e){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,type:e.type,base_experience:e.base_experience})});return r.a.createElement("div",{className:"Pokedex"},r.a.createElement("div",{className:n?"Pokedex-win":"Pokedex-lose"},r.a.createElement("h2",null,n?"This team wins!":"This team loses!"),r.a.createElement("h3",null,"Total Experience = ",a),r.a.createElement("div",{className:"Pokedex-cards"},c)))}}]),t}(n.Component)),h=[],b=[],E=0,f=0;var x=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return function(e){for(var t=0;t<e.length;t++){var a=Math.floor(2*Math.random())+1;1===a&&h.length<4||4===b.length?(h.push(e[t]),E+=e[t].base_experience):(2===a&&b.length<4||4===h.length)&&(b.push(e[t]),f+=e[t].base_experience)}}(this.props.pokemons),r.a.createElement("div",{className:"Pokegame"},r.a.createElement("h1",{className:"Pokegame-title"},"Pokedex"),r.a.createElement("a",{className:"Pokegame-button",href:"javascript:history.go(0)"},"PLAY AGAIN"),r.a.createElement(d,{team:h,totalExp:E,isWinner:E>f}),r.a.createElement(d,{team:b,totalExp:f,isWinner:f>E}))}}]),t}(n.Component);x.defaultProps={pokemons:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var y=x;a(17);var k=function(){return r.a.createElement(y,null)};i.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e3c72f28.chunk.js.map