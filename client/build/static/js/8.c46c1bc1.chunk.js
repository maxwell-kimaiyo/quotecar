(this["webpackJsonp@pickbazar/admin"]=this["webpackJsonp@pickbazar/admin"]||[]).push([[8],{193:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return d}));var a=n(135),r=n.n(a),l=n(136),o=n(2),c=n(137),i=n.n(c),s=function(){return function(){var e=Object(l.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:o.e}),e.prev=1,e.next=4,i.a.get("http://127.0.0.1:5000/location");case 4:n=e.sent,a=n.data,t({type:o.f,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:o.d,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(n){var a,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:o.w}),t.prev=1,t.next=4,i.a.get("http://127.0.0.1:5000/location/pickUp?category=".concat(e));case 4:a=t.sent,l=a.data,n({type:o.x,payload:l}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:o.v,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(n){var a,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:o.t}),t.prev=1,t.next=4,i.a.get("http://127.0.0.1:5000/location/dropOff?category=".concat(e));case 4:a=t.sent,l=a.data,n({type:o.u,payload:l}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:o.s,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(135),r=n.n(a),l=n(136),o=n(2),c=n(137),i=n.n(c),s=function(e,t,n,a,c,s,p,d){return function(){var m=Object(l.a)(r.a.mark((function l(m){var u,f,x;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return m({type:o.n,payload:{reference:e,carMake:t,carModel:n,pickUp:a,dropOff:c,name:s,email:p,phone:d}}),r.prev=1,r.next=4,i.a.post("http://127.0.0.1:5000/quote",{reference:e,carMake:t,carModel:n,pickUp:a,dropOff:c,name:s,email:p,phone:d});case 4:u=r.sent,f=u.data,m({type:o.o,payload:f}),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),x=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,m({type:o.m,error:x});case 13:case"end":return r.stop()}}),l,null,[[1,9]])})));return function(e){return m.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(n){var a,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:o.z,payload:e}),t.prev=1,t.next=4,i.a.get("http://127.0.0.1:5000/quote/find/?category=".concat(e));case 4:a=t.sent,l=a.data,n({type:o.A,payload:l}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:o.y,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},829:function(e,t,n){"use strict";n.r(t);var a,r,l,o,c,i,s,p,d,m,u,f,x=n(149),h=n(0),b=n.n(h),g=n(28),_=n(21),E=n(33),w=(_.c.div(a||(a=Object(g.a)(["\n  @media (min-width: 990px) {\n    display: none;\n  }\n"]))),_.c.div(r||(r=Object(g.a)(["\n  #content {\n    height: 100%;\n    padding: 100px 0px 60px;\n  }\n  #content:not(.hide-header) {\n    margin-top: 69px;\n  }\n  #content > div {\n    height: 100%;\n    padding: 30px;\n  }\n  .container {\n    height: 100%;\n    margin: 0 auto;\n    max-width: 1060px;\n    padding: 0 10px 0 10px;\n  }\n  i {\n    font-style: italic;\n  }\n\n  li {\n    font-size: 16px;\n  }\n  .quote-results {\n    background-color: #f7f7f7;\n  }\n\n  .quote-results .blue_banner {\n    background-color: #b7271c;\n    color: #fff;\n    width: 100%;\n    padding: 30px 0 30px 0;\n  }\n\n  .quote-results strong {\n    font-size: 16px;\n  }\n\n  .quote-results .things_to_know {\n    color: #888888;\n    margin-left: 7px;\n  }\n\n  .quote-results .personalised_title {\n    font-size: 34px;\n    text-align: center !important;\n  }\n  .quote-results .prepared_by_title {\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 32px;\n    text-align: center !important;\n    color: #666;\n  }\n  .quote-results .need_help {\n    line-height: 1.3;\n    font-size: 35px;\n    font-weight: bold;\n    color: #c60e00;\n  }\n\n  .quote-results .route_map {\n    width: 535px;\n    height: 380px;\n    background-color: white;\n    -webkit-box-shadow: 4px 4px 7px 0px rgba(50, 50, 50, 0.66);\n    -moz-box-shadow: 4px 4px 7px 0px rgba(50, 50, 50, 0.66);\n    box-shadow: 4px 4px 7px 0px rgba(50, 50, 50, 0.66);\n  }\n  .quote-results .route_map > div > div > div:first-child {\n    cursor: default !important;\n  }\n"])))),v=(_.c.div(l||(l=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: 400px;\n  background-color: #f4f4f4;\n"]))),_.c.main(o||(o=Object(g.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: #f7f7f7;\n  padding-right: 0;\n  transition: padding-right 0.35s ease-in-out;\n"]))),_.c.div(c||(c=Object(g.a)(["\n  background-color: #ffffff;\n  width: 320px;\n\n  @media (max-width: 1500px) {\n    width: 320px;\n  }\n\n  @media (max-width: 1199px) {\n    width: 280px;\n  }\n\n  @media (max-width: 990px) {\n    display: none;\n  }\n"]))),_.c.div(i||(i=Object(g.a)(["\n  width: calc(100% - 320px);\n  height: auto;\n  min-height: 100vh;\n  padding: 30px 45px 50px;\n\n  @media (max-width: 768px) {\n    padding: 30px 7.5px 100px;\n  }\n\n  @media (max-width: 1199px) and (min-width: 991px) {\n    padding: 15px 30px 50px;\n  }\n\n  @media (max-width: 1367px) and (min-width: 1200px) {\n    padding: 15px 30px 50px;\n  }\n\n  @media (max-width: 1500px) {\n    width: calc(100% - 320px);\n  }\n\n  @media (max-width: 1199px) {\n    width: calc(100% - 280px);\n  }\n\n  @media (max-width: 990px) {\n    width: 100%;\n  }\n\n  @media (max-width: 768px) {\n    padding-top: 15px;\n    min-height: auto;\n  }\n\n  .offer-slider {\n    padding: 0 0 30px 30px;\n  }\n"]))),_.c.div(s||(s=Object(g.a)(["\n  width: 100%;\n  display: block;\n  padding: 60px;\n  background-color: #ffffff;\n  position: relative;\n  border-bottom: 1px solid ",";\n\n  @media (max-width: 1199px) and (min-width: 991px) {\n    padding: 20px 15px;\n    .prevButton {\n      left: 0;\n    }\n\n    .nextButton {\n      right: 0;\n    }\n  }\n  @media (max-width: 990px) {\n    padding: 15px;\n\n    .prevButton {\n      left: 5px;\n    }\n\n    .nextButton {\n      right: 5px;\n    }\n  }\n"])),Object(E.a)("colors.borderColor","#f1f1f1")),_.c.h2(p||(p=Object(g.a)(["\n  font-size: 24px;\n  font-weight: 700;\n  color: #009e7f;\n  padding: 0px 20px 20px;\n  margin: 50px 10px 20px;\n  border-bottom: 2px solid #009e7f;\n  width: auto;\n  display: inline-block;\n"]))),_.c.div(d||(d=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 30px;\n  background-color: #f7f7f7;\n\n  @media (max-width: 768px) {\n    margin-left: -7.5px;\n    margin-right: -7.5px;\n    margin-top: 15px;\n  }\n"]))),_.c.div(m||(m=Object(g.a)(["\n  flex: 0 0 20%;\n  max-width: 20%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 30px;\n\n  @media (max-width: 1650px) {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  @media (max-width: 1300px) {\n    flex: 0 0 33.3333333%;\n    max-width: 33.3333333%;\n  }\n  @media (max-width: 1199px) and (min-width: 900px) {\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 20px;\n  }\n  @media (max-width: 899px) and (min-width: 769px) {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  @media (max-width: 768px) {\n    padding-left: 7.5px;\n    padding-right: 7.5px;\n    margin-bottom: 15px;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  @media (max-width: 490px) {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n"]))),n(816)),N=n(819),y=n(590),O=n(59),k=n(820),j=n(193),q=Object(k.a)(Object(k.c)((function(){return{isOpen:!1}}),{onToggleOpen:function(e){var t=e.isOpen;return function(){return{isOpen:!t}}}}),Object(k.b)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA54JBsA6cxG0J32SRpAtOhUIIM_VrS40M&v=3.exp&libraries=geometry,drawing,places",loadingElement:b.a.createElement("div",{style:{height:"100%"}}),containerElement:b.a.createElement("div",{style:{height:"100%"}}),mapElement:b.a.createElement("div",{style:{height:"100%"}})}),y.withScriptjs,y.withGoogleMap)((function(e){var t=e.pickUp,n=e.dropOff,a=Object(O.c)((function(e){return e.dropOffReducer})),r=a.dropOffLoading,l=a.dropOffError,o=a.dropOffData,c=Object(O.c)((function(e){return e.pickUpReducer})),i=c.pickUpLoading,s=c.pickUpError,p=c.pickUpData,d=[{id:1,latitude:parseFloat(i||s?null:p.lat),longitude:parseFloat(i||s?null:p.lon),shelter:"Pickup"},{id:2,latitude:parseFloat(r||l?null:o.lat),longitude:parseFloat(r||l?null:o.lon),shelter:"Delivery"}],m=Object(O.b)();return Object(h.useEffect)((function(){return m(Object(j.c)(t)),m(Object(j.a)(n)),function(){}}),[n,t]),b.a.createElement(b.a.Fragment,null,b.a.createElement(y.GoogleMap,{defaultZoom:3,defaultCenter:{lat:25.0391667,lng:121.525},defaultOptions:{streetViewControl:!1,scaleControl:!1,mapTypeControl:!1,panControl:!1,zoomControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUI:!1,scrollwheel:!1}},d.map((function(e){return b.a.createElement(y.Marker,{key:e.id,position:{lat:e.latitude,lng:e.longitude}},b.a.createElement(y.InfoWindow,null,b.a.createElement("div",null,e.shelter)))}))))})),M=_.c.div(u||(u=Object(g.a)(['\n  .header {\n    background-color: #c60e00;\n    color: #fff;\n    padding: 10px;\n    font-size: 16px;\n    font-weight: 300;\n  }\n  .quote_details_table {\n    border: none;\n    width: 100%;\n  }\n  .quote_details_table td {\n    padding: 10px;\n  }\n  .quote_details_table_left_col {\n    color: #888888;\n    width: 120px;\n    font-size: 16px;\n    font-weight: 700;\n  }\n  .roboto_thin {\n    font-family: "roboto", sans-serif;\n    font-size: 15px;\n    font-weight: 300;\n    color: #888;\n    text-transform: capitalize;\n  }\n  .vehicle_list {\n    padding-left: 20px;\n    margin: 0;\n  }\n  .rate_table,\n  .rate_table td,\n  .rate_table tr {\n    border: 1px solid #e3e3e3;\n  }\n  .rate_table {\n    border-collapse: collapse;\n    width: 100%;\n  }\n  .quoteResultsPromoCodeForm > * {\n    display: inline-block;\n    margin: 0 4px;\n  }\n  .quoteResultsPromoCodeForm .ant-input {\n    max-width: 300px;\n  }\n  .quoteResultsPromoCodeForm button {\n    margin-left: 10px;\n    cursor: pointer;\n  }\n  .promoCodeAppliedMessage {\n    display: none;\n  }\n  .book_now_button {\n    background-color: #549404;\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    font-size: 17px;\n    margin: 0 auto;\n    padding: 18px 43px 18px 43px;\n    outline: none;\n    cursor: pointer;\n  }\n  .book_now_button:hover {\n    background-color: #5f9434;\n  }\n  .feature_list li {\n    list-style-type: none;\n    padding: 5px 0 5px 0;\n    border-bottom: 1px solid rgba(218, 222, 225, 0.86);\n  }\n  .feature_list_left {\n    padding-left: 20px !important;\n  }\n  .blueArrow {\n    font-weight: bold;\n    color: #c60e00;\n    font-size: 16px;\n    top: 2px;\n    position: relative;\n  }\n\n  .feature_list_text {\n    padding-left: 4px;\n  }\n  .feature_list_right {\n    padding-left: 20px !important;\n  }\n  .more_options_caption {\n    color: #888888;\n    font-weight: 300;\n  }\n  .terms_text {\n    line-height: 2.1;\n  }\n  .email_label {\n    font-weight: 700;\n  }\n  .rate_table {\n    border: 1px solid #e3e3e3;\n  }\n  .rate_table tr {\n    border: 1px solid #e3e3e3;\n  }\n  .rate_table td {\n    border: 1px solid #e3e3e3;\n  }\n  .rate_col {\n    padding: 30px 0 10px 0;\n    width: 50%;\n  }\n  .mui--text-center {\n    text-align: center !important;\n  }\n  .rate_location_text_start {\n    font-size: 16px;\n    color: #666;\n    text-transform: capitalize;\n  }\n  .rate_location_text_end {\n    font-size: 16px;\n    color: #666;\n    text-transform: capitalize;\n  }\n  .rate_price {\n    position: relative;\n    margin-top: 10px;\n    color: #6dab3c;\n    font-size: 35px;\n    font-weight: 700;\n  }\n  .rate_price {\n    position: relative;\n    margin-top: 10px;\n    color: #6dab3c;\n    font-size: 35px;\n    font-weight: 700;\n  }\n  .delivery_time_text {\n    font-size: 15px;\n    font-weight: 300;\n  }\n  .delivery_time_text {\n    font-size: 15px;\n    font-weight: 300;\n  }\n']))),U=(Object(_.c)("div")(f||(f=Object(g.a)(["\n  max-width: 1170px;\n  width: 100%;\n\n  margin-right: auto;\n  margin-left: auto;\n"]))),n(6)),z=function(e){var t=e.reference,n=e.carType,a=e.pickUp,r=e.dropOff,l=e.email,o=e.distance,c=e.pickUpDepot,i=e.dropUpDepot,s=Math.floor(3.25*o),p=Math.floor(3.15*o),d=Math.floor(2.85*o),m=Math.floor(2.65*o),u=Object(U.f)();return b.a.createElement(M,null,b.a.createElement("div",{className:"header"},"Quote Reference Number:",t,b.a.createElement("span",null)),b.a.createElement("table",{className:"quote_details_table"},b.a.createElement("tbody",null,b.a.createElement("tr",null,b.a.createElement("td",{className:"quote_details_table_left_col"},"Vehicle(s)"),b.a.createElement("td",{className:"roboto_thin"},b.a.createElement("ul",{className:"vehicle_list"},b.a.createElement("li",null,n)))),b.a.createElement("tr",null,b.a.createElement("td",{className:"quote_details_table_left_col"},"Pickup"),b.a.createElement("td",{className:"roboto_thin"},a," or "+c+" Depot")),b.a.createElement("tr",null,b.a.createElement("td",{className:"quote_details_table_left_col"},"Delivery"),b.a.createElement("td",{className:"roboto_thin"},r," or "+i+" Depot")))),b.a.createElement("div",{className:"header"},"Vehicle Transport Options *"),b.a.createElement("table",{className:"rate_table"},b.a.createElement("tbody",null,b.a.createElement("tr",{className:"rate_row"},b.a.createElement("td",{className:"rate_col mui--text-center"},b.a.createElement("span",{className:"rate_location_text_start"},a),b.a.createElement("br",null),"to",b.a.createElement("br",null),b.a.createElement("span",{className:"rate_location_text_end"},r),b.a.createElement("div",{className:"content_spacing_1"}),b.a.createElement("span",{className:"rate_price"},"$",b.a.createElement("span",{className:"large-price"},s)),b.a.createElement("br",null)),c&&i&&b.a.createElement("td",{className:"rate_col mui--text-center"},b.a.createElement("span",{className:"rate_location_text_start"},a),b.a.createElement("br",null),"to",b.a.createElement("br",null),b.a.createElement("span",{className:"rate_location_text_end"},i?i+" Depot":""),b.a.createElement("div",{className:"content_spacing_1"}),b.a.createElement("span",{className:"rate_price"},"$",b.a.createElement("span",{className:"large-price"},p)),b.a.createElement("br",null))),b.a.createElement("tr",{className:"rate_row"},c&&i&&b.a.createElement("td",{className:"rate_col mui--text-center"},b.a.createElement("span",{className:"rate_location_text_start"},c?c+" Depot":""),b.a.createElement("br",null),"to",b.a.createElement("br",null),b.a.createElement("span",{className:"rate_location_text_end"},r),b.a.createElement("div",{className:"content_spacing_1"}),b.a.createElement("span",{className:"rate_price"},"$",b.a.createElement("span",{className:"large-price"},d)),b.a.createElement("br",null)),c&&i&&b.a.createElement("td",{className:"rate_col mui--text-center"},b.a.createElement("span",{className:"rate_location_text_start"},c?c+" Depot":""),b.a.createElement("br",null),"to",b.a.createElement("br",null),b.a.createElement("span",{className:"rate_location_text_end"},i?i+" Depot":""),b.a.createElement("div",{className:"content_spacing_1"}),b.a.createElement("span",{className:"rate_price"},"$",b.a.createElement("span",{className:"large-price"},m)),b.a.createElement("br",null))))),b.a.createElement("div",{className:"text-center"},b.a.createElement("div",{className:"content_spacing_1"}),b.a.createElement("button",{className:"book_now_button",onClick:function(){t&&u.push("/ref/".concat(t))}},"BOOK NOW")),b.a.createElement("div",{className:"content_spacing_7"}),b.a.createElement(v.a,null,b.a.createElement(N.a,{sm:24,md:14,lg:14},b.a.createElement("ul",{className:"feature_list feature_list_left"},b.a.createElement("li",null,b.a.createElement("i",{className:"fas fa-arrow-right blueArrow"}),b.a.createElement("span",{className:"feature_list_text roboto_thin"},"Enclosed Vehicle Transport")),b.a.createElement("li",null,b.a.createElement("i",{className:"fas fa-arrow-right blueArrow"}),b.a.createElement("span",{className:"feature_list_text roboto_thin"},"Vehicle model newer than 1985")),b.a.createElement("li",null,b.a.createElement("i",{className:"fas fa-arrow-right blueArrow"}),b.a.createElement("span",{className:"feature_list_text roboto_thin"},"Vehicle drivable and unmodified")))),b.a.createElement(N.a,{sm:24,md:10,lg:10},b.a.createElement("ul",{className:"feature_list feature_list_right"},b.a.createElement("li",null,b.a.createElement("i",{className:"fas fa-arrow-right blueArrow"}),b.a.createElement("span",{className:"feature_list_text roboto_thin"},"Full Warranty")),b.a.createElement("li",null,b.a.createElement("i",{className:"fas fa-arrow-right blueArrow"}),b.a.createElement("span",{className:"feature_list_text roboto_thin"},"Friendly Service")),b.a.createElement("li",null,b.a.createElement("i",{className:"fas fa-arrow-right blueArrow"}),b.a.createElement("span",{className:"feature_list_text roboto_thin"},"30 Years of Experience"))))),b.a.createElement("div",{className:"content_spacing_4"}),b.a.createElement("div",{className:"text-center"},b.a.createElement("i",{className:"more_options_caption"},"More options available when you book.")),b.a.createElement("div",{className:"content_spacing_5"}),b.a.createElement("p",{className:"terms_text roboto_thin"},"* Quoted prices include GST & fuel levy.",b.a.createElement("br",null),b.a.createElement("span",null,"A vehicle must travel enclosed. Prices quoted represent enclosed services. This service is not available to all suburbs.",b.a.createElement("br",null)),"Transit days exclude weekends and public holidays.",b.a.createElement("br",null)," All vehicle transport is subject to our terms and conditions .",b.a.createElement("br",null)," A link to this quote has been sent to",b.a.createElement("b",{className:"email_label"}," ",l),"."))},C=n(245);t.default=function(e){var t=Object(O.c)((function(e){return e.quoteDetails})),n=t.loading,a=t.error,r=t.quoteDetail;console.log(t);var l=n||a?"":r.pickUp,o=n||a?"":r.dropOff,c=Object(O.c)((function(e){return e.dropOffReducer})),i=c.dropOffLoading,s=c.dropOffError,p=c.dropOffData,d=Object(O.c)((function(e){return e.pickUpReducer})),m=d.pickUpLoading,u=d.pickUpError,f=d.pickUpData,g=parseFloat(m||u?null:f.lat),_=parseFloat(m||u?null:f.lon),E=parseFloat(i||s?null:p.lat),y=parseFloat(i||s?null:p.lon),k=m||u?"":f.dc,M=i||s?"":p.dc,U=function(e,t,n,a,r){if(e===n&&t===a)return 0;var l=Math.PI*e/180,o=Math.PI*n/180,c=t-a,i=Math.PI*c/180,s=Math.sin(l)*Math.sin(o)+Math.cos(l)*Math.cos(o)*Math.cos(i);return s>1&&(s=1),s=60*(s=180*(s=Math.acos(s))/Math.PI)*1.1515,"K"===r&&(s*=1.609344),"N"===r&&(s*=.8684),s}(g,_,E,y,"K"),A=e.match.params.quoteId,D=Object(h.useState)(),R=Object(x.a)(D,2),F=(R[0],R[1],Object(h.useState)()),T=Object(x.a)(F,2),I=(T[0],T[1],Object(O.b)());Object(h.useEffect)((function(){I(Object(C.b)(A)),I(Object(j.c)(l)),I(Object(j.a)(o))}),[A]);var P=k&&k.split(" ").slice(0,2).join(" ").toLowerCase(),S=M&&M.split(" ").slice(0,2).join(" ").toLowerCase();return b.a.createElement(b.a.Fragment,null,b.a.createElement(w,null,b.a.createElement("div",{id:"content",className:"hide-header"},b.a.createElement("div",{className:"quote-results",style:{display:"block"}},b.a.createElement("div",{className:"blue_banner"},b.a.createElement("div",{className:"container"},b.a.createElement("div",{className:"personalised_title"},"YOUR PERSONALISED VEHICLE TRANSPORT QUOTE"))),b.a.createElement("div",{className:"container"},b.a.createElement("div",{className:"content_spacing_1"}),b.a.createElement("div",{className:"prepared_by_title"},"Prepared by TRANSCARGO Transport Services",b.a.createElement("div",{className:"content_spacing_8"})),b.a.createElement(v.a,{justify:"space-around"},b.a.createElement(N.a,{sm:24,md:11,lg:11},b.a.createElement(z,{reference:n||a?"":r.reference,carType:n||a?"":r.carMake+" "+r.carModel,pickUp:n||a?"":r.pickUp.toLowerCase(),dropOff:n||a?"":r.dropOff.toLowerCase(),email:n||a?"":r.email,distance:U,pickUpDepot:P,dropUpDepot:S})),b.a.createElement(N.a,{sm:24,md:11,lg:11},b.a.createElement("div",{className:"text-center need_help"},b.a.createElement("div",{className:"content_spacing_10"}),"Need Help?",b.a.createElement("br",null)," 1300 660 616"),b.a.createElement("div",{className:"content_spacing_5"}),b.a.createElement("div",{className:"route_map"},b.a.createElement(q,{pickUp:n||a?"":r.pickUp,dropOff:n||a?"":r.dropOff})),b.a.createElement("div",{className:"content_spacing_1"}))),b.a.createElement("div",null,b.a.createElement("div",{className:"content_spacing_5"}),b.a.createElement("p",{className:"terms_text text-center"},"If you require information, please contact one of our Customer Relations Officers on",b.a.createElement("a",{href:"tel:1300 660 616"},"1300 660 616")," and quote your reference number (",b.a.createElement("span",{className:"quote_reference"},n||a?"":r.reference),").")))))))}}}]);
//# sourceMappingURL=8.c46c1bc1.chunk.js.map