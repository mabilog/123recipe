(this.webpackJsonprecipetut=this.webpackJsonprecipetut||[]).push([[0],{40:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var i,c,r,a,o,s,d,l,p,j,x,b,h,f,u,O,g,m,v,w,y,S,k,I=t(0),R=t.n(I),z=t(21),F=t.n(z),C=(t(40),t(3)),N=t(25),J=t(15),_=t(11),q=t(5),E=t(4),Q=t(2),B=E.a.div(i||(i=Object(C.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* bottom: 0; */\n  width: 100vw;\n  height: 100vh;\n  background-color: aliceblue;\n  /* overflow-x: auto; */\n\n  \n"]))),D=E.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 250px;\n  height: 250px;\n\n  h3{\n    font-size: 16px;\n    \n  }\n  img{\n    height: 150px;\n    width: 150px;\n  }\n"]))),M=function(e){var n=e.favorites,t=e.removeFavorite,i=e.setRecipeId;return Object(Q.jsx)(B,{id:"favorite__wrapper",children:n&&n.map((function(e){return Object(Q.jsxs)(D,{children:[Object(Q.jsx)("h3",{children:e.title}),Object(Q.jsx)("button",{onClick:function(){return t(e)},children:"Remove from Favorite"}),Object(Q.jsx)("img",{src:e.image,alt:e.title}),Object(Q.jsx)(_.b,{to:{pathname:"/recipe/".concat(e.id)},onClick:i(e.id),children:"View"})]})}))})},A=E.a.div(r||(r=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  width: 70%;\n  min-width: 480px;\n  font-family: sans-serif;\n  position: relative;\n  height: 100vh;\n"]))),K=E.a.h3(a||(a=Object(C.a)(["\n  padding: 10px;\n  font-size: 36px;\n"]))),G=E.a.img(o||(o=Object(C.a)(["\n  margin-bottom: 60px;\n  border-radius: 5px;\n  box-shadow: 10px 10px 10px;\n"]))),H=E.a.h4(s||(s=Object(C.a)(["\n  font-size: 28px; \n  margin-bottom: 20px;\n"]))),L=E.a.button(d||(d=Object(C.a)(["\n  padding: 3px 6px;\n  background: none;\n  border: 1px solid orange;\n"]))),T=function(e){var n=e.recipeId,t=e.addFavorite,i=Object(I.useState)([]),c=Object(J.a)(i,2),r=c[0],a=c[1],o=Object(q.f)();return Object(I.useEffect)((function(){fetch("https://api.spoonacular.com/recipes/".concat(n,"/information?apiKey=").concat("6a8005a5d1a04af7852c54afcb5eb5f5")).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){return console.log("Something went wrong while fetching recipe info "+e)}))}),[]),Object(Q.jsx)(A,{children:0!==r&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(K,{children:r.title}),Object(Q.jsx)(G,{src:r.image,alt:r.title}),Object(Q.jsx)(H,{children:"Summary"}),Object(Q.jsx)("p",{dangerouslySetInnerHTML:{__html:r.summary}}),Object(Q.jsx)(L,{onClick:function(){return t(r)},children:"Add to favorite"}),Object(Q.jsx)("button",{onClick:function(){return o.goBack()},children:"Go back"})]})})},V=E.a.div(l||(l=Object(C.a)(["\n  position: relative;\n  margin: auto;\n  font-family: sans-serif;\n  display: flex;\n  flex-flow: row wrap;\n  max-width: 1000px;\n  width: 100%;\n  \n  @media screen and (max-width: 780px){\n    flex-direction: column;\n  }\n"]))),W=E.a.div(p||(p=Object(C.a)(["\n  margin: 0 auto;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  h3{\n    margin: 10px;\n  }\n\n  img{\n    width: 100%;\n  }\n\n  span{\n    display: flex;\n    justify-content: center;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    margin: 1rem 0;\n    position: relative;\n    bottom: 20px;\n    background-color: grey;\n    color: white;\n    font-family: sans-serif;\n    width: 100%;\n    padding: 10px;\n    cursor: pointer;\n  }\n"]))),X=function(e){var n=e.recipes,t=e.addFavorite,i=e.setRecipeId;return Object(Q.jsx)(V,{children:n&&n.map((function(e){return Object(Q.jsxs)(W,{children:[Object(Q.jsx)("img",{src:e.image,alt:e.title}),Object(Q.jsx)("h3",{children:e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,30),"...")}),Object(Q.jsx)("button",{onClick:function(){t(e)},children:"add to favorite"}),Object(Q.jsx)("span",{children:Object(Q.jsx)(_.b,{to:{pathname:"/recipe/".concat(e.id),state:{id:e.id}},onClick:function(){return i(e.id)},children:"Check recipe"})})]},e.title)}))})},P=t(34),U=t.n(P),Y=t(32),Z=t.n(Y),$=t(33),ee=t.n($),ne=t.p+"static/media/autumn (2).867a95fe.jpg",te=t(31),ie=t.n(te),ce=E.a.form(j||(j=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 50px;\n\n  input {\n    /* padding: 3px;\n    font-size: 16px;\n    border: none;\n    border-bottom: 1px solid black;\n    width: 100%; */\n\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    border-radius: 12px;\n    outline: none;\n    border: none;\n    padding-left: 50px;\n    font-size: 18px;\n    color: white;\n    background: #1d1b31;\n  }\n  \n  .searchIcon{\n    position: absolute;\n    left: 15px;\n    z-index: 99;\n    color: white;\n  }\n"]))),re=function(e){var n=e.setRecipes,t=(e.recipes,e.query),i=e.setQuery,c=Object(q.f)();return Object(Q.jsxs)(ce,{onSubmit:function(e){e.preventDefault(),fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=".concat("6a8005a5d1a04af7852c54afcb5eb5f5","&ingredients=").concat(t)).then((function(e){return e.json()})).then((function(e){return n(e)})).then((function(){return c.push("/recipes/")})).catch((function(e){return console.log("Something went wrong "+e)}))},children:[Object(Q.jsx)("input",{type:"text",name:"recipeName",onChange:function(e){e.preventDefault(),i(e.target.value)}}),Object(Q.jsx)(ie.a,{className:"searchIcon"})]})},ae=E.a.div(x||(x=Object(C.a)(["\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #11101d;\n  padding: 6px 14px;\n  /* color: white; */\n"]))),oe=E.a.div(b||(b=Object(C.a)(["\n cursor: pointer;\n"]))),se=E.a.div(h||(h=Object(C.a)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  height: 50px;\n  width: 100%;\n  padding: 10px;\n"]))),de=E.a.div(f||(f=Object(C.a)(["\n  font-size: 20px;\n  font-weight:400;\n  padding-left: 10px;\n"]))),le=E.a.ul(u||(u=Object(C.a)(["\n  margin-top: 20px;\n  width: 100%;\n  \n  li{\n    position: relative;\n    height: 50px;\n    width: 100%;\n    margin: 20px 5px;\n    list-style: none;\n    line-height: 50px;\n    /* border-radius: 5px; */\n    a{\n      color: white;\n      text-decoration: none;\n      display: flex;\n      align-items: center;\n      width: 100%;\n      padding-left: 15px;\n      &:hover{\n        background-color: white;\n        color: #11101d;\n        border-radius: 50px;\n        /* transform: translateX(-5px); */\n      }\n      /* span{\n        padding-left: 15px;\n      } */\n      \n    }\n  }\n  "]))),pe=Object(E.a)(_.b)(O||(O=Object(C.a)(["\n    span{\n      padding-left: 15px;\n    }\n  "]))),je=E.a.div(g||(g=Object(C.a)(["\n  position: absolute;\n  color: white;\n  bottom: 0;\n  left: 0;\n\n"]))),xe=E.a.div(m||(m=Object(C.a)(["\n  position: relative;\n  padding: 10px 6px;\n  height: 60px;\n  display: flex;\n"]))),be=E.a.div(v||(v=Object(C.a)(["\n  display: flex;\n  align-items: center;\n\n  img{\n    height: 45px;\n    width: 45px;\n    object-fit: cover;\n    border-radius: 6px;\n    margin-right: 10px;\n  }\n"]))),he=E.a.div(w||(w=Object(C.a)(["\n  font-size: 20px;\n"]))),fe=E.a.div(y||(y=Object(C.a)(["\n  font-size: 12px;\n"]))),ue=function(e){var n=e.recipes,t=e.setRecipes,i=e.query,c=e.setQuery,r=Object(q.f)();return Object(Q.jsxs)(ae,{children:[Object(Q.jsx)(oe,{children:Object(Q.jsxs)(se,{children:[Object(Q.jsx)(Z.a,{}),Object(Q.jsx)(de,{onClick:function(){return r.push("/")},children:"123Recipe"})]})}),Object(Q.jsxs)(le,{children:[Object(Q.jsx)("li",{children:Object(Q.jsx)(re,{recipes:n,setRecipes:t,query:i,setQuery:c})}),Object(Q.jsx)("li",{children:Object(Q.jsxs)(pe,{to:"/recipes",children:[Object(Q.jsx)(ee.a,{}),Object(Q.jsx)("span",{children:"Recipes"})]})}),Object(Q.jsx)("li",{children:Object(Q.jsxs)(pe,{to:"/saved",children:[Object(Q.jsx)(U.a,{}),Object(Q.jsx)("span",{children:"Saved"})]})})]}),Object(Q.jsx)(je,{className:"profile_content",children:Object(Q.jsx)(xe,{children:Object(Q.jsxs)(be,{children:[Object(Q.jsx)("img",{src:ne,alt:"profile"}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(he,{children:"Angelo Mabilog"}),Object(Q.jsx)(fe,{children:"Web Developer"})]})]})})})]})};var Oe=E.a.div(S||(S=Object(C.a)(["\n  display: flex;\n  font-family: sans-serif;\n"]))),ge=E.a.div(k||(k=Object(C.a)(["\n  position: relative;\n  top: 0;\n  width: calc(100vw - 260px);\n  left: 240px;\n  z-index: 99;\n"]))),me=function(){var e=Object(I.useState)([]),n=Object(J.a)(e,2),t=n[0],i=n[1],c=Object(I.useState)(""),r=Object(J.a)(c,2),a=r[0],o=r[1],s=Object(I.useState)([]),d=Object(J.a)(s,2),l=d[0],p=d[1],j=Object(I.useState)(""),x=Object(J.a)(j,2),b=x[0],h=x[1];Object(I.useEffect)((function(){localStorage.getItem("recipes")?p(JSON.parse(localStorage.getItem("recipes"))):p([]),localStorage.getItem("favorites")?i(JSON.parse(localStorage.getItem("favorites"))):i([]),o([])}),[]),Object(I.useEffect)((function(){var e=JSON.stringify(l);localStorage.setItem("recipes",e)}),[l]);var f=function(e){var n=t.includes(e)?Object(N.a)(t):[].concat(Object(N.a)(t),[e]);i(n),localStorage.setItem("favorites",JSON.stringify(n))},u=function(e){var n=t.filter((function(n){return n!==e}));i(n),localStorage.setItem("favorites",JSON.stringify(n))};return Object(Q.jsx)(Oe,{children:Object(Q.jsxs)(_.a,{children:[Object(Q.jsx)(ue,{recipes:l,setRecipes:p,query:b,setQuery:h}),Object(Q.jsx)(ge,{children:Object(Q.jsxs)(q.c,{children:[Object(Q.jsx)(q.a,{path:"/recipes/",exact:!0,render:function(){return Object(Q.jsx)(X,{recipes:l,addFavorite:f,removeFavorite:u,setRecipeId:o})}}),Object(Q.jsx)(q.a,{path:"/recipe/:id",component:function(){return Object(Q.jsx)(T,{addFavorite:f,recipeId:a})}}),Object(Q.jsx)(q.a,{path:"/saved/",component:function(){return Object(Q.jsx)(M,{favorites:t,setFavorites:i,removeFavorite:u,setRecipeId:o})}})]})})]})})};F.a.render(Object(Q.jsx)(R.a.StrictMode,{children:Object(Q.jsx)(me,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.9a9cdc91.chunk.js.map