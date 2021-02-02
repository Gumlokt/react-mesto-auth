(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),c=n(20),i=n.n(c),o=n(8),l=(n(31),n(13)),u=n(11),d=n(2),m=n(3),j=r.a.createContext(),p="https://auth.nomoreparties.co",h=n.p+"static/media/logo.2e17206c.svg";var b=function(e){var t=Object(m.g)();return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(a.jsx)("div",{className:"header__bar",children:e.loggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{className:"header__text",children:e.userEmail}),Object(a.jsx)("button",{onClick:function(){localStorage.removeItem("token"),e.onLogout(!1),t.push("/sing-in")},className:"header__button",children:"\u0412\u044b\u0445\u043e\u0434"})]}):Object(a.jsx)(o.b,{to:e.navLink,className:"header__link",children:e.navTitle})})]})},f=n(24);var _=function(e){var t=r.a.useContext(j),n=e.card.owner._id===t._id,s=e.card.likes.some((function(e){return e._id===t._id}));return Object(a.jsxs)("ul",{className:"element",children:[Object(a.jsxs)("li",{className:"element__item",children:[Object(a.jsx)("img",{onClick:function(){e.onCardClick(e.card)},src:e.card.link,alt:"\u0424\u043e\u0442\u043e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430",className:"element__image"}),n?Object(a.jsx)("button",{onClick:function(){e.onCardDelete(e.card)},className:"element__btn-remove",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}):""]}),Object(a.jsx)("li",{className:"element__item",children:Object(a.jsxs)("div",{className:"element__body",children:[Object(a.jsx)("h2",{className:"element__title",children:e.card.name}),Object(a.jsxs)("div",{className:"element__like-zone",children:[Object(a.jsx)("button",{onClick:function(){e.onCardLike(e.card)},className:"element__btn-like".concat(s?" element__btn-like_clicked":""),type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0443\u0431\u0440\u0430\u0442\u044c \u043b\u0430\u0439\u043a"}),Object(a.jsx)("p",{className:"element__likes",children:e.card.likes.length})]})]})})]})};var O=function(e){var t=r.a.useContext(j);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__data",children:[Object(a.jsx)("button",{onClick:e.onEditAvatar,className:"profile__btn-edit-avatar",children:Object(a.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 (\u0444\u043e\u0442\u043e) \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{onClick:e.onEditProfile,className:"profile__btn-edit",type:"button","aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(a.jsx)("p",{className:"profile__about",children:t.about})]})]}),Object(a.jsx)("button",{onClick:e.onAddPlace,className:"profile__btn-add",type:"button","aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"})]}),Object(a.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(a.jsx)(_,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var x=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var g=function(e){return Object(a.jsx)("div",{className:"popup".concat(e.isOpen?" popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{onClick:e.onClose,className:"popup__btn-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"}),Object(a.jsxs)("form",{onSubmit:e.onSubmit,className:"form",name:e.name,children:[Object(a.jsx)("h2",{className:"form__title",children:e.title}),e.inputs,Object(a.jsx)("button",{className:"form__btn-save",name:"saveButton",children:e.btnTitle})]})]})})};var v=function(e){var t=r.a.useRef();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(g,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",btnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",inputs:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){t.current.value=e.target.value},ref:t,type:"url",className:"form__text-input",name:"avatar",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",id:"avatar",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"avatar-error"})]}),isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}})})};var C=function(e){var t=r.a.useContext(j),n=r.a.useState(""),s=Object(d.a)(n,2),c=s[0],i=s[1],o=r.a.useState(""),l=Object(d.a)(o,2),u=l[0],m=l[1];return r.a.useEffect((function(){i(t.name),m(t.about)}),[t]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(g,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",btnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",inputs:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){i(e.target.value)},defaultValue:c,type:"text",className:"form__text-input",name:"name",placeholder:"\u0418\u043c\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"40",id:"name",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"name-error"}),Object(a.jsx)("input",{onChange:function(e){m(e.target.value)},defaultValue:u,type:"text",className:"form__text-input",name:"about",placeholder:"\u0414\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",minLength:"2",maxLength:"200",id:"about",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"about-error"})]}),isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})}})})};var N=function(e){var t=r.a.useState(""),n=Object(d.a)(t,2),s=n[0],c=n[1],i=r.a.useState(""),o=Object(d.a)(i,2),l=o[0],u=o[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(g,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"card",btnTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",inputs:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onChange:function(e){c(e.target.value)},defaultValue:s,type:"text",className:"form__text-input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",id:"name",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"name-error"}),Object(a.jsx)("input",{onChange:function(e){u(e.target.value)},defaultValue:l,type:"url",className:"form__text-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"link",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"link-error"})]}),isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:s,link:l})}})})};var k=function(e){return Object(a.jsx)("div",{className:"popup".concat(e.isOpen?" popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container popup__container_theme_dark",children:[Object(a.jsx)("button",{onClick:e.onClose,className:"popup__btn-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"}),Object(a.jsxs)("figure",{className:"popup__image-container",children:[Object(a.jsx)("img",{src:e.card.link,alt:"\u0424\u043e\u0442\u043e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u043d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d",className:"popup__image"}),Object(a.jsx)("figcaption",{className:"popup__image-title",children:e.card.name})]})]})})},y=n(22),S=n(23),L=new(function(){function e(t){Object(y.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(S.a)(e,[{key:"_getResponseData",value:function(e,t){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status,". ").concat(t)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t,"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b...")}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e,"\u041d\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430...")}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e,"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0430...")}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b...")}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b...")}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e,"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d...")}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e,"\u041b\u0430\u0439\u043a \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d...")}))}},{key:"unsetLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e,"\u041b\u0430\u0439\u043a \u043d\u0435 \u0443\u0434\u0430\u043b\u0451\u043d...")}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.unsetLike(e):this.setLike(e)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"7e8aae9c-bb81-4fe9-ac24-f206bc985678","Content-Type":"application/json"}});var T=function(e){var t=r.a.useState(!1),n=Object(d.a)(t,2),s=n[0],c=n[1],i=r.a.useState(!1),o=Object(d.a)(i,2),l=o[0],u=o[1],m=r.a.useState(!1),j=Object(d.a)(m,2),p=j[0],h=j[1],_=r.a.useState(!1),y=Object(d.a)(_,2),S=y[0],T=y[1],w=r.a.useState({}),E=Object(d.a)(w,2),D=E[0],U=E[1],I=r.a.useState([]),A=Object(d.a)(I,2),P=A[0],F=A[1];function R(){h(!1),u(!1),c(!1),T(!1)}return r.a.useEffect((function(){Promise.all([L.getUserInfo(),L.getInitialCards()]).then((function(t){var n=Object(d.a)(t,2),a=n[0],s=n[1];e.handleUser(a),F(s)})).catch((function(e){console.log(e.message)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{loggedIn:e.loggedIn,userEmail:e.userEmail,onLogout:e.onLogout}),Object(a.jsx)(O,{cards:P,onCardLike:function(t){var n=t.likes.some((function(t){return t._id===e.currentUser._id}));L.changeLikeCardStatus(t._id,n).then((function(e){var n=P.map((function(n){return n._id===t._id?e:n}));F(n)}))},onCardDelete:function(e){L.deleteCard(e._id).then((function(t){var n=P.filter((function(t){return t._id!==e._id}));F(n)}))},onEditAvatar:function(){c(!0)},onEditProfile:function(){u(!0)},onAddPlace:function(){h(!0)},onCardClick:function(e){U(e),T(!0)}}),Object(a.jsx)(x,{}),Object(a.jsx)(v,{isOpen:s,onClose:R,onUpdateAvatar:function(t){L.setAvatar(t).then((function(t){e.handleUser(t),R()}))}}),Object(a.jsx)(C,{isOpen:l,onClose:R,onUpdateUser:function(t){L.setUserInfo(t).then((function(t){e.handleUser(t),R()}))}}),Object(a.jsx)(N,{isOpen:p,onClose:R,onAddCard:function(e){L.addCard(e).then((function(e){F([e].concat(Object(f.a)(P))),R()}))}}),Object(a.jsx)(g,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirmation",btnTitle:"\u0414\u0430",isOpen:!1,onClose:R}),Object(a.jsx)(k,{card:D,isOpen:S,onClose:R})]})};var w=function(e){return Object(a.jsx)("main",{className:"content",children:Object(a.jsx)("section",{className:"credentials",children:Object(a.jsxs)("form",{onSubmit:e.loginUser,className:"form",name:"login",children:[Object(a.jsx)("h2",{className:"form__title form__title_theme_dark",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsx)("input",{onChange:e.onCredentialsChange,value:e.credentials.email,type:"email",className:"form__text-input form__text-input_theme_dark",name:"email",placeholder:"Email",id:"email",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"email-error"}),Object(a.jsx)("input",{onChange:e.onCredentialsChange,value:e.credentials.password,type:"password",className:"form__text-input form__text-input_theme_dark",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"password-error"}),Object(a.jsx)("button",{className:"form__btn-save form__btn-save_theme_light",name:"saveButton",children:"\u0412\u043e\u0439\u0442\u0438"})]})})})};var E=function(e){return Object(a.jsx)("main",{className:"content",children:Object(a.jsx)("section",{className:"credentials",children:Object(a.jsxs)("form",{onSubmit:e.registerUser,className:"form",name:"registration",children:[Object(a.jsx)("h2",{className:"form__title form__title_theme_dark",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsx)("input",{onChange:e.onCredentialsChange,value:e.credentials.email,type:"email",className:"form__text-input form__text-input_theme_dark",name:"email",placeholder:"Email",id:"email",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"email-error"}),Object(a.jsx)("input",{onChange:e.onCredentialsChange,value:e.credentials.password,type:"password",className:"form__text-input form__text-input_theme_dark",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"password-error"}),Object(a.jsx)("button",{className:"form__btn-save form__btn-save_theme_light",name:"saveButton",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsxs)("p",{className:"form__suggestion",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(a.jsx)(o.b,{to:"/sign-in",className:"form__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})},D=n.p+"static/media/icon-success.1b6082f8.svg",U=n.p+"static/media/icon-fail.df8eddf6.svg";var I=function(e){return Object(a.jsx)("div",{className:"popup".concat(e.isOpen?" popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{onClick:e.onClose,className:"popup__btn-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"}),Object(a.jsx)("img",{src:e.successIcon?D:U,alt:"Success icon",className:"popup__icon"}),Object(a.jsx)("p",{className:"popup__message",children:e.message})]})})},A=n(25),P=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return Object(a.jsx)(m.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(u.a)({},n)):Object(a.jsx)(m.a,{to:"/sign-in"})}})};var F=function(){var e=Object(m.g)(),t=Object(s.useState)(!1),n=Object(d.a)(t,2),c=n[0],i=n[1],o=Object(s.useState)(""),h=Object(d.a)(o,2),f=h[0],_=h[1],O=Object(s.useState)({}),x=Object(d.a)(O,2),g=x[0],v=x[1],C=Object(s.useState)(!1),N=Object(d.a)(C,2),k=N[0],y=N[1],S=Object(s.useState)({email:"",password:""}),L=Object(d.a)(S,2),D=L[0],U=L[1],A=Object(s.useState)(""),F=Object(d.a)(A,2),R=F[0],q=F[1],J=Object(s.useState)(!1),B=Object(d.a)(J,2),V=B[0],z=B[1];function H(e){U(Object(u.a)(Object(u.a)({},D),{},Object(l.a)({},e.target.name,e.target.value)))}function M(e){i(e)}function G(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];q(e),y(!0),z(t)}return r.a.useEffect((function(){if(localStorage.getItem("token")){var t=localStorage.getItem("token");t&&function(e){return fetch("".concat(p,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}(t).then((function(t){t&&(_(t.data.email),M(!0),e.push("/"))}))}})),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(m.d,{children:[Object(a.jsxs)(m.b,{path:"/sign-in",children:[Object(a.jsx)(b,{navLink:"/sign-up",navTitle:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsx)(w,{credentials:D,onCredentialsChange:H,loginUser:function(t){t.preventDefault(),function(e){var t=e.email,n=e.password;return fetch("".concat(p,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){return e.json()})).then((function(e){return e.token&&localStorage.setItem("token",e.token),e})).catch((function(e){console.log(e)}))}(D).then((function(t){t?t.message?G(t.message):t.token?(U({email:"",password:""}),M(!0),e.push("/")):G("\u0411\u0430\u0440\u0430\u0431\u0430\u0448\u043a\u0430 \u0432\u0437\u044f\u043b \u0442\u0430\u043a \u0438 \u0443\u0447\u0443\u0434\u0438\u043b \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e :-)"):G("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!")}))}})]}),Object(a.jsxs)(m.b,{path:"/sign-up",children:[Object(a.jsx)(b,{navLink:"/sign-in",navTitle:"\u0412\u043e\u0439\u0442\u0438"}),Object(a.jsx)(E,{credentials:D,onCredentialsChange:H,registerUser:function(e){e.preventDefault(),function(e){var t=e.email,n=e.password;return fetch("".concat(p,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(D).then((function(e){if(e)return e.error?void G(e.error):void G("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430!",!0);G("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!")}))}})]}),Object(a.jsx)(j.Provider,{value:g,children:Object(a.jsx)(P,{path:"/",currentUser:g,handleUser:function(e){v(e)},loggedIn:c,userEmail:f,onLogout:M,component:T})})]}),Object(a.jsx)(I,{message:R,successIcon:V,isOpen:k,onClose:function(){y(!1),q(""),V&&(U({email:"",password:""}),e.push("/sing-in")),z(!1)}})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(F,{})})}),document.getElementById("root")),R()}},[[37,1,2]]]);
//# sourceMappingURL=main.10394ef2.chunk.js.map