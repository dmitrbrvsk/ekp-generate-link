(this["webpackJsonpekp-generate-link"]=this["webpackJsonpekp-generate-link"]||[]).push([[0],{40:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t(11),i=t.n(l),s=t(9),c=t(4),d=t(12),h=t(13),r=t(16),o=t(15),f=t(7),u=t(14),C=t(3),j=t(17),m=t(8),b=(t(40),t(2)),O=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={fields:{AttractionChannel:"SourceDEALUL1",BranchId:"MOCO",ClientManager:"U_M0ZKG",ClientName:'\u041e\u041e\u041e "\u0426\u0412\u0415\u0422\u041e\u041a"',ClientOGRN:"5105415093988",ClientTIN:"2875033373",CreditTerm:"36",IdDealSFA:Object(m.a)(10),IdOffer:Object(m.a)(10),LoanAmount:"500000",LoanProduct:"LT01",ManagerDomain:"MOSCOW",OfferVariantSequence:"1",PartnerPinEQ:"UACOQA",PinEQ:"UALERA",ProfileId:"123123",Rate:"15",RegionCode:"77",SelectedAccount:"40702810702840000000"},link:"https://testjmb.alfabank.ru/credits/?"},e.generateLink=function(){var a="https://testjmb.alfabank.ru/credits/?".concat(Object.entries(e.state.fields).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&"));e.setState({link:a})},e.handleClickButton=function(){e.generateLink()},e.handleChangeInput=function(a,t){var n=t.value;e.setState({fields:Object(c.a)(Object(c.a)({},e.state.fields),{},Object(s.a)({},a.target.name,n))})},e.handleClickButtonRandomOffer=function(){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{fields:Object(c.a)(Object(c.a)({},e.fields),{},{IdOffer:Object(m.a)(10)})})}))},e.handleClickButtonRandomIdDealSFA=function(){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{fields:Object(c.a)(Object(c.a)({},e.fields),{},{IdDealSFA:Object(m.a)(10)})})}))},e}return Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.fields!==this.state.fields&&this.generateLink()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(u.a.Title,{tag:"h1",view:"small",className:"title",children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0441\u044b\u043b\u043a\u0438 \u0434\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0430\u043d\u043a\u0435\u0442\u044b \u0415\u041a\u041f"}),Object(b.jsxs)("div",{className:"container-fields",children:[Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"IdDealSFA",name:"IdDealSFA",value:this.state.fields.IdDealSFA,rightAddons:Object(b.jsx)(f.a,{size:"xs",view:"transparent",onClick:this.handleClickButtonRandomIdDealSFA,children:"random"})}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"IdOffer",name:"IdOffer",value:this.state.fields.IdOffer,rightAddons:Object(b.jsx)(f.a,{size:"xs",view:"transparent",onClick:this.handleClickButtonRandomOffer,children:"random"})}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"AttractionChannel",name:"AttractionChannel",value:this.state.fields.AttractionChannel}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"BranchId",name:"BranchId",value:this.state.fields.BranchId}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"ClientManager",name:"ClientManager",value:this.state.fields.ClientManager}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"ClientName",name:"ClientName",value:this.state.fields.ClientName}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"ClientOGRN",name:"ClientOGRN",value:this.state.fields.ClientOGRN}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"ClientTIN",name:"ClientTIN",value:this.state.fields.ClientTIN}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"CreditTerm",name:"CreditTerm",value:this.state.fields.CreditTerm}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"LoanAmount",name:"LoanAmount",value:this.state.fields.LoanAmount}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"LoanProduct",name:"LoanProduct",value:this.state.fields.LoanProduct}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"ManagerDomain",name:"ManagerDomain",value:this.state.fields.ManagerDomain}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"OfferVariantSequence",name:"OfferVariantSequence",value:this.state.fields.OfferVariantSequence}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"PartnerPinEQ",name:"PartnerPinEQ",value:this.state.fields.PartnerPinEQ}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"PinEQ",name:"PinEQ",value:this.state.fields.PinEQ}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"ProfileId",name:"ProfileId",value:this.state.fields.ProfileId}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"Rate",name:"Rate",value:this.state.fields.Rate}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"RegionCode",name:"RegionCode",value:this.state.fields.RegionCode}),Object(b.jsx)(C.a,{className:"field",onChange:this.handleChangeInput,label:"SelectedAccount",name:"SelectedAccount",value:this.state.fields.SelectedAccount})]}),Object(b.jsx)(f.a,{className:"button",view:"primary",onClick:this.handleClickButton,children:"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(b.jsx)(j.a,{className:"link",view:"default",rel:"noopener",target:"_blank",href:this.state.link,children:this.state.link})]})}}]),t}(n.Component),g=O;t(42);i.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cd18a584.chunk.js.map