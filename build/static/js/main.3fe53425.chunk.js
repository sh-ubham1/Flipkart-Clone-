(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(3),i=c.n(a),s=c(31),r=c.n(s),o=(c(65),c(51)),l=c(8),j=(c(66),c(67),c(52)),d=c.n(j),b=c(53),h=c.n(b),u=c(15),m=Object(a.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(n.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:i})},O=function(){return Object(a.useContext)(m)},x=c(40),f=x.a.initializeApp({apiKey:"AIzaSyAwVu4in7HW9ivFmSqU0f7yp4OT5YMzAA4",authDomain:"clone-509d3.firebaseapp.com",projectId:"clone-509d3",storageBucket:"clone-509d3.appspot.com",messagingSenderId:"855847948291",appId:"1:855847948291:web:121165a6b01839cb42be36",measurementId:"G-TYK3HW1G3P"}).firestore(),g=x.a.auth();var _=function(){var e=O(),t=Object(l.a)(e,2),c=t[0],a=c.basket,i=c.user;return t[1],console.log(i),Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(u.b,{to:"/",style:{textDecoration:"none",marginLeft:"10em"},children:Object(n.jsx)("img",{className:"header__logo",src:"//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png",alt:"flipkart"})}),Object(n.jsxs)("div",{className:"header__search",children:[Object(n.jsx)("input",{className:"header__searchInput",type:"text"}),Object(n.jsx)(d.a,{className:"header__searchIcon",style:{color:"#2874f0"}})]}),Object(n.jsxs)("div",{className:"header__nav",children:[Object(n.jsx)(u.b,{to:!i&&"/login",style:{textDecoration:"none"},children:Object(n.jsxs)("div",{onClick:function(){i&&g.signOut()},className:"header__option",children:[Object(n.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",i?i.email:"Guest"]}),Object(n.jsx)("span",{className:"header__optionLineTwo",style:{backgroundColor:"#fff",color:"#000",textAlign:"center",padding:"2px 5px"},children:i?"Sign Out":"Sign In"})]})}),Object(n.jsx)(u.b,{to:"/orders",style:{textDecoration:"none"},children:Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"Return"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(n.jsx)(u.b,{to:"/checkout",style:{textDecoration:"none"},children:Object(n.jsxs)("div",{className:"header__optionBasket",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:Object(n.jsx)(h.a,{})}),Object(n.jsxs)("span",{className:"header__optionLineTwo",children:["Cart ",null===a||void 0===a?void 0:a.length]})]})})]})]})},v=(c(76),c(54)),k=c.n(v);var N=function(){return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)("p",{className:"header__line",children:Object(n.jsx)(k.a,{})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)("span",{children:"Gift Cards"})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)("span",{children:"Best Sellers"})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)("span",{children:"Mobiles"})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)("span",{children:"Today's Deals"})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)("span",{children:"Prime"})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)("span",{children:"New Releases"})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)("span",{children:"Computers"})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)("span",{children:"Flipkart Plus"})})]})},y=(c(77),c(78),c(34)),S=c.n(y);var w=function(e){var t=e.id,c=e.title,a=e.image,i=e.price,s=e.rating,r=O(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product__info",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{className:"product__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:i})]}),Object(n.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(n.jsx)("p",{children:Object(n.jsx)(S.a,{})})}))})]}),Object(n.jsx)("img",{alt:"leanStartup",src:a}),Object(n.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:i,rating:s}})},children:"Add To Cart"})]})};var A=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)("div",{className:"home__container",children:[Object(n.jsx)("img",{className:"home__image",src:"https://entrackr.com/wp-content/uploads/2020/10/flipkart.jpg.webp",alt:"banner"}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(w,{id:"12321341",title:"Hisense A73F 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with 102W JBL 6 Speakers, Dolby Vision and Atmos  (55A73F)",price:999,rating:5,image:"https://rukminim1.flixcart.com/image/416/416/kj1r53k0-0/television/x/w/v/65a73f-hisense-original-imafypfhceyudnsq.jpeg?q=70"}),Object(n.jsx)(w,{id:"49538094",title:"Lenovo Ideapad Gaming 3 Ryzen 5 Hexa Core 4600H - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/60 Hz) 15ARH05 Gaming Laptop  (15.6 inch, Onyx Black, 2.2 kg)",price:990,rating:4,image:"https://rukminim1.flixcart.com/image/416/416/kk2wl8w0/computer/f/k/b/na-gaming-laptop-lenovo-original-imafzgdkvx9guy8q.jpeg?q=70"})]}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(w,{id:"4903850",title:"Apple Watch Series 3 GPS - 42 mm Space Grey Aluminium Case with Black Sport Band  (Black Strap, Regular)",price:900,rating:5,image:"https://rukminim1.flixcart.com/image/416/416/jmi22kw0/smartwatch/y/d/j/mtf32hn-a-apple-original-imaf9ec8ssmfcuxf.jpeg?q=70"}),Object(n.jsx)(w,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(n.jsx)(w,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:599.99,rating:4,image:"https://rukminim1.flixcart.com/image/416/416/kb5eikw0/tablet/z/q/x/apple-mxf52hn-a-original-imafskffwspv33zn.jpeg?q=70"})]}),Object(n.jsx)("div",{className:"home__row",children:Object(n.jsx)("h1",{style:{margin:"50px auto",textTransform:"uppercase",fontSize:"3rem"},children:"Grocery"})}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(w,{id:"90829332",title:"Rostaa Classic Almond Almonds  (35 g)",price:60,rating:3,image:"https://rukminim1.flixcart.com/image/416/416/jhcatu80/nut-dry-fruit/g/f/q/35-almonds-35gm-mini-pack-combo-pouch-rostaa-original-imaf5cgzettwehw3.jpeg?q=70"}),Object(n.jsx)(w,{id:"90829375",title:"Happilo 100% Natural Premium Californian Almonds  (100 g)",price:100,rating:4,image:"https://rukminim1.flixcart.com/image/416/416/jqgy3rk0/nut-dry-fruit/p/t/g/100-100-natural-california-pouch-happilo-original-imafcgnkxtnghcec.jpeg?q=70"}),Object(n.jsx)(w,{id:"908293075",title:"Optimum Nutrition Gold Standard 100% Protein Powder (907 g, Rocky Road)",price:848,rating:4,image:"https://rukminim1.flixcart.com/image/416/416/k8kiw7k0/protein-supplement/b/h/n/gold-standard-100-on266-optimum-nutrition-original-imafqk89ph5zdg5a.jpeg?q=70"}),Object(n.jsx)(w,{id:"90829376",title:"Rajdhani Chakki Atta  (1 kg)",price:100,rating:4,image:"https://rukminim1.flixcart.com/image/416/416/kc54ivk0/flour/h/w/f/1-chakki-atta-1-whole-wheat-flour-rajdhani-original-imaftcygzun4zzgh.jpeg?q=70"})]})]})})},C=(c(79),c(55)),E=c.n(C);var T=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsxs)("div",{className:"footer__options",children:[Object(n.jsx)("img",{className:"footer__Logo",src:"//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png",alt:"flipkart"}),Object(n.jsxs)("p",{className:"footer__language",children:[" English - EN ",Object(n.jsx)(E.a,{})]})]}),Object(n.jsxs)("div",{className:"footer__options",children:[Object(n.jsx)("span",{className:"footer__option",children:"India"}),Object(n.jsx)("span",{className:"footer__option",children:"Canada"}),Object(n.jsx)("span",{className:"footer__option",children:"UAE"}),Object(n.jsx)("span",{className:"footer__option",children:"Singapore"}),Object(n.jsx)("span",{className:"footer__option",children:"Australia"}),Object(n.jsx)("span",{className:"footer__option",children:"Brazil"}),Object(n.jsx)("span",{className:"footer__option",children:"United States"}),Object(n.jsx)("span",{className:"footer__option",children:"Germany"}),Object(n.jsx)("span",{className:"footer__option",children:"Spain"}),Object(n.jsx)("span",{className:"footer__option",children:"United Kingdom"})]})]})},B=c(10);c(80),c(81);var P=function(e){var t=e.id,c=e.image,a=e.title,i=e.price,s=e.rating,r=e.hideButton,o=O(),j=Object(l.a)(o,2),d=(j[0].basket,j[1]);return Object(n.jsxs)("div",{className:"checkoutProduct",children:[Object(n.jsx)("img",{src:c,className:"checkoutProduct__image",alt:"products"}),Object(n.jsxs)("div",{className:"checkoutProduct__info",children:[Object(n.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(n.jsxs)("p",{className:"checkoutProduct__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:i})]}),Object(n.jsx)("p",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(n.jsx)("p",{children:Object(n.jsx)(S.a,{})})}))}),!r&&Object(n.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Cart"})]})]})},D=(c(82),c(24)),L=c.n(D);var I=function(){for(var e=Object(B.f)(),t=O(),c=Object(l.a)(t,2),a=c[0].basket,i=(c[1],0),s=0;s<a.length;s++)i+=a[s].price;return Object(n.jsxs)("div",{className:"subtotal",children:[Object(n.jsx)(L.a,{renderText:function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("p",{children:["Subtotal (",null===a||void 0===a?void 0:a.length," items): ",Object(n.jsx)("strong",{children:e})]})})},decimalScale:2,value:i,displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to checkout"})]})};var R=function(){var e=O(),t=Object(l.a)(e,2),c=t[0],a=c.basket,i=c.user;return t[1],Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"checkout",children:Object(n.jsxs)("div",{className:"checkout__left",children:[Object(n.jsx)("img",{className:"checkout__ad",src:"https://miro.medium.com/max/700/1*rgSRBz1tpXptQcQZqOmdwA.gif",alt:"Ad"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("center",{children:Object(n.jsxs)("h3",{children:["Hello, ",null===i||void 0===i?void 0:i.email]})}),Object(n.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"})]}),a.map((function(e){return Object(n.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})}),Object(n.jsx)("div",{className:"checkout__right",children:Object(n.jsx)(I,{})})]})};c(84);var z=function(){var e=Object(B.f)(),t=Object(a.useState)(""),c=Object(l.a)(t,2),i=c[0],s=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(u.b,{to:"/",children:Object(n.jsx)("img",{className:"login__logo",src:"//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png",alt:"flipkart"})}),Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h5",{children:"E-mail"}),Object(n.jsx)("input",{type:"text",placeholder:"enter your email...",value:i,onChange:function(e){return s(e.target.value)}}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{type:"password",placeholder:"enter your password...",value:j,onChange:function(e){return d(e.target.value)}}),Object(n.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(i,j).then((function(t){e.push("./")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(n.jsx)("p",{children:"By signing-in you agree to FLIPKART FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(i,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Flipkart Account"})]})]})},G=c(29),F=c.n(G),q=c(39),M=(c(86),c(23)),H=c(56),U=c.n(H).a.create({baseURL:"https://us-central1-clone-509d3.cloudfunctions.net/api"});var K=function(){for(var e=O(),t=Object(l.a)(e,2),c=t[0],i=c.basket,s=c.user,r=t[1],o=Object(B.f)(),j=Object(M.useStripe)(),d=Object(M.useElements)(),b=Object(a.useState)(!1),h=Object(l.a)(b,2),m=h[0],p=h[1],x=Object(a.useState)(""),g=Object(l.a)(x,2),_=g[0],v=g[1],k=Object(a.useState)(null),N=Object(l.a)(k,2),y=N[0],S=N[1],w=Object(a.useState)(!0),A=Object(l.a)(w,2),C=A[0],E=A[1],T=Object(a.useState)(!0),D=Object(l.a)(T,2),I=D[0],R=D[1],z=0,G=0;G<i.length;G++)z+=i[G].price;Object(a.useEffect)((function(){(function(){var e=Object(q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({method:"post",url:"/payments/create?total=".concat(100*z)});case 2:t=e.sent,R(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),console.log("The secret is ",I);var H=function(){var e=Object(q.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),e.next=4,j.confirmCardPayment(I,{payment_method:{card:d.getElement(M.CardElement)}}).then((function(e){var t=e.paymentIntent;f.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({basket:i,amount:t.amount,created:t.created}),p(!0),S(null),v(!1),r({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"payment",children:Object(n.jsxs)("div",{className:"payment__container",children:[Object(n.jsxs)("h1",{children:["Checkout (",Object(n.jsxs)(u.b,{to:"/checkout",children:[null===i||void 0===i?void 0:i.length," items"]}),")"]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Delivery Address"})}),Object(n.jsxs)("div",{className:"payment__address",children:[Object(n.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(n.jsx)("p",{children:"14 Fake Street "}),Object(n.jsx)("p",{children:"Delhi, India"})]})]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Review items and delivery"})}),Object(n.jsx)("div",{className:"payment__items",children:i.map((function(e){return Object(n.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Payment Method"})}),Object(n.jsx)("div",{className:"payment__details",children:Object(n.jsxs)("form",{onSubmit:H,children:[Object(n.jsx)(M.CardElement,{onChange:function(e){E(e.empty),S(e.error?e.error.message:"")}}),Object(n.jsxs)("div",{className:"payment__priceContainer",children:[Object(n.jsx)(L.a,{renderText:function(e){return Object(n.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:z,displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsxs)("div",{style:{backgroundColor:"#EAEDED",padding:"10px 10px"},children:[Object(n.jsx)("small",{children:"Card Number: 4242 4242 4242 4242"}),Object(n.jsx)("br",{}),Object(n.jsx)("small",{children:" MM / YY: 0424"}),Object(n.jsx)("br",{}),Object(n.jsx)("small",{children:"CVC :42424 "})]}),Object(n.jsx)("button",{disabled:_||C||m,children:Object(n.jsx)("span",{children:_?Object(n.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),y&&Object(n.jsx)("div",{children:y})]})})]})]})})},V=c(57),Y=(c(103),c(104),c(58)),W=c.n(Y);var $=function e(t){var c,a=t.order,i=O(),s=Object(l.a)(i,2);return s[0].basket,s[1],Object(n.jsxs)("div",{className:"order",children:[Object(n.jsx)("h2",{children:"Order"}),Object(n.jsx)("p",{children:W.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")}),Object(n.jsx)("p",{className:"order__id",children:Object(n.jsx)("small",{children:e.id})}),Object(n.jsx)("p",{children:"Not showing"}),null===(c=a.data.basket)||void 0===c?void 0:c.map((function(e){return Object(n.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(n.jsx)(L.a,{renderText:function(e){return Object(n.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var Q=function(){var e=O(),t=Object(l.a)(e,2),c=t[0],i=(c.basket,c.user),s=(t[1],Object(a.useState)([])),r=Object(l.a)(s,2),o=r[0],j=r[1];return Object(a.useEffect)((function(){i?f.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):j([])}),[i]),Object(n.jsxs)("div",{className:"orders",children:[Object(n.jsx)("h1",{children:"Your Orders"}),Object(n.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(n.jsx)($,{order:e})}))})]})},J=Object(V.a)("pk_test_51IAupsF7Bl6cVbULm0cCJ8EQV6d9UbpjLhTxsT94Zdl3Wf1ZyhxkhhQsJ3hh9D16SakKNuqXgexVuVGMHoLGosdf00Q8VZgBjn");var Z=function(){var e=O(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("User is ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(n.jsx)(u.a,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(B.c,{children:[Object(n.jsxs)(B.a,{path:"/orders",children:[Object(n.jsx)(_,{}),Object(n.jsx)(N,{}),Object(n.jsx)(Q,{})]}),Object(n.jsx)(B.a,{path:"/login",children:Object(n.jsx)(z,{})}),Object(n.jsxs)(B.a,{path:"/checkout",children:[Object(n.jsx)(_,{}),Object(n.jsx)(N,{}),Object(n.jsx)(R,{}),Object(n.jsx)(T,{})]}),Object(n.jsxs)(B.a,{path:"/payment",children:[Object(n.jsx)(_,{}),Object(n.jsx)(N,{}),Object(n.jsx)(M.Elements,{stripe:J,children:Object(n.jsx)(K,{})})]}),Object(n.jsxs)(B.a,{path:"/",children:[Object(n.jsx)(_,{}),Object(n.jsx)(N,{}),Object(n.jsx)(A,{}),Object(n.jsx)(T,{})]})]})})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))},ee=c(41),te=c(21),ce=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(te.a)(Object(te.a)({},e),{},{basket:[].concat(Object(ee.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(te.a)(Object(te.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(ee.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(te.a)(Object(te.a)({},e),{},{basket:n});case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});default:return e}};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{initialState:{basket:[],user:null},reducer:ce,children:Object(n.jsx)(Z,{})})}),document.getElementById("root")),X()},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.3fe53425.chunk.js.map