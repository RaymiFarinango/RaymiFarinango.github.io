(function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},r=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3881:function(e,t,a){e.exports=a.p+"img/home.972bea3e.jpg"},5033:function(e){e.exports=JSON.parse('{"aboutContent":[{"hobbies":["Painting","Dancing","Voleyball","Videogames","Trekking"]},{"experience":{"Pragma":"Motion & UI Designer | Since 2019","Fury Records":"Motion Designer | 2019","Fundación Delirio":"Motion Designer | 2018","Quan Esstudios":"Intern | 2018","Uniautónoma del Cauca":"Intern | 2018","Icesi University":"Designer Jr | 2015-17"}}],"projects":[{"id":1,"name":"fobosair","title":"FobosAir","subtitle":"UI Design - Branding - App","mainImage":"proj1-img-01.png","images":["proj1-img-02.png","proj1-img-03.png","proj1-img-04.png"],"description":"FobosAir is an application for\\nbooking tickets to get a full\\nexperience on Mars. I make this\\nby doing research into user\\nexperiences in similar apps."},{"id":2,"name":"pequenin","title":"Pequenin 2021","subtitle":"UI Design - Web - App","mainImage":"proj2-img-01.png","images":["proj2-img-02.png","proj2-img-03.png","proj2-img-04.png"],"description":"Re-branding of the visual\\nguidelines and brand for\\nPequeñin. New design for the\\nwebsite of Pequeñin."},{"id":3,"name":"factory","title":"Factory","subtitle":"UX Design - UI Design - App","mainImage":"proj3-img-01.png","images":["proj3-img-02.png","proj3-img-03.png","proj3-img-04.png"],"description":"Factory is a local family business\\nwith a need to enter the e&#8209;commerce model. I start from\\nscratch. From the redesign of\\nthe brand to the whole app UI/UX."}]}')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i,n,r,s,o,l,c,u,p,d,m,f,h=a("2b0e"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{ref:"circleRef",staticClass:"pointer-circle",class:{dark:"/"!==this.$route.path&&"reel"!==this.$route.path}}),a("div",{ref:"pointer",staticClass:"pointer",class:{dark:"/"!==this.$route.path&&"reel"!==this.$route.path}}),a("keep-alive",[a("router-view")],1),a("span",{staticClass:"noise",staticStyle:{backgroundImage:"url('../assets/whiteNoise.png')"}})],1)},v=[],g={mounted:function(){this.addEvents()},methods:{addEvents:function(){var e=this;window.addEventListener("mousemove",(function(t){e.followPointer(t)}))},followPointer:function(e){this.rawX=e.clientX,this.rawY=e.clientY,this.halfW=window.innerWidth/2,this.halfH=window.innerHeight/2-window.scrollY,gsap.to(this.$refs.circleRef,1,{x:this.rawX-this.halfW,y:this.rawY-this.halfH,ease:"power4.out"}),gsap.to(this.$refs.pointer,0,{x:this.rawX-this.halfW,y:this.rawY-this.halfH,ease:"power4.out"})}}},b=g,y=(a("5c0b"),a("2877")),w=Object(y["a"])(b,_,v,!1,null,null,null),C=w.exports,x=a("8c4f"),R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"home"},[i("div",{staticClass:"global-container outer-pad",attrs:{id:"global-container"}},[i("header",{staticClass:"main-header"},[i("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:a("9b19")}}),i("div",{staticClass:"masked-animation__wrapper"},[i("router-link",{ref:"aboutBtnRef",staticClass:"masked-animation__element about-link",attrs:{to:"/about"}},[e._v("about")])],1)]),i("main",{staticClass:"main-container"},[i("div",{staticClass:"masked-animation__wrapper"},[i("h1",{ref:"headingRef",staticClass:"masked-animation__element"},[e._v("Portfolio")])]),i("div",{staticClass:"masked-animation__wrapper"},[i("p",{ref:"descriptionRef",staticClass:"home__description"})]),i("div",{staticClass:"home-navigation"},[i("div",{staticClass:"home-navigation__element__inner-wrapper navigation__element-reel",on:{mouseover:function(t){e.reelHovered=!0},mouseout:function(t){e.reelHovered=!1}}},[i("span",{staticClass:"home-navigation__element__hover"},[e._v("Play")]),i("div",{ref:"reelWrapperRef",staticClass:"masked-animation__wrapper"},[i("router-link",{ref:"reelBtnRef",staticClass:"home-navigation__element masked-animation__element",attrs:{to:"/reel"},nativeOn:{click:function(t){return e.navigateReel(t)}}},[e._v(" Motion Reel ")])],1)]),i("div",{ref:"wrapperRef",staticClass:"home-navigation__circle masked-animation__element"},[i("svg",{ref:"circleSvgRef",attrs:{height:"100%",width:"100%"}},[i("circle",{ref:"circleRef",staticClass:"path",attrs:{cx:"50%",cy:"50%",r:"49%",stroke:"white","stroke-width":"2",fill:"none"}})]),i("span",{ref:"reelLine",staticClass:"home-navigation__element__line",class:{"home-navigation__element__line--hovered":e.reelHovered}}),i("span",{ref:"designLine",staticClass:"home-navigation__element__line",class:{"home-navigation__element__line--hovered":e.designHovered}}),i("div",{ref:"pictureRef",staticClass:"home-navigation__circle__image-wrapper"},[i("img",{attrs:{src:a("3881"),alt:"",srcset:""}})])]),i("div",{staticClass:"home-navigation__element__inner-wrapper navigation__element-design",on:{mouseover:function(t){e.designHovered=!0},mouseout:function(t){e.designHovered=!1}}},[i("span",{staticClass:"home-navigation__element__hover"},[e._v("View")]),i("div",{ref:"designWrapperRef",staticClass:"masked-animation__wrapper"},[i("router-link",{ref:"designBtnRef",staticClass:"home-navigation__element masked-animation__element",attrs:{to:"/carousel"},nativeOn:{click:function(t){return e.navigateUI(t)}}},[e._v(" UI Design ")])],1)])])])])]),i("router-view")],1)},j=[],k=a("cffa"),O={animate:!0,patternWidth:300,patternHeight:300,grainOpacity:.05,grainDensity:2,grainWidth:2,grainHeight:2},T=function(e){return grained(e,O)},$="expo.inOut",D={a:30},E=function(e){var t=e.circle,a=e.picture,i=e.circleSvgRef;function n(){k["b"].set(a,{webkitFilter:"blur("+D.a+"px)",filter:"blur("+D.a+"px)"})}return k["b"].timeline().add([k["b"].to(t,3,{strokeDashoffset:0,ease:$}),k["b"].fromTo(i,1.75,{scale:.3,x:"-50%",y:"-50%"},{scale:1,x:"-50%",y:"-50%",ease:$,delay:1.75}),k["b"].fromTo(a,1,{opacity:0},{opacity:1,ease:$,delay:1.6}),k["b"].to(D,1.5,{a:0,onUpdate:n,delay:1.9}),k["b"].from(a,1,{scale:.26,ease:$,delay:2.4})])},P=function(e){var t=e.wrapper,a=e.heading,i=e.designBtn,n=e.reelBtn,r=e.about;return k["b"].timeline({delay:0}).add([k["b"].fromTo(t,1.5,{y:-150},{y:0,ease:$,delay:0}),k["b"].from(a,1.5,{y:"100%",ease:$,delay:0}),k["b"].fromTo(n,1.5,{y:"100%"},{y:0,ease:$,delay:.5}),k["b"].fromTo(i,1.5,{y:"100%"},{y:0,ease:$,delay:.6}),k["b"].fromTo(r,1.5,{y:"100%",opacity:0},{y:0,opacity:1,ease:$,delay:.4})])},W=function(e){return k["b"].timeline({delay:1,onComplete:T("#global-container")}).add(E(e)).add(P(e),"-=0.25")},M={data:function(){return{windowWidth:window.innerWidth}},computed:{isMobile:function(){return this.windowWidth<900}},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.windowWidth=window.innerWidth}))}},I=M,L=Object(y["a"])(I,i,n,!1,null,null,null),S=L.exports,H=(a("4160"),a("ac1f"),a("1276"),a("159b"),{methods:{breakText:function(e){var t=e.split(/\r?\n/);return t},createTextLine:function(e,t){var a=document.createElement("span");return a.innerHTML=e,a.style.display="block",t.appendChild(a),a},animateTextLines:function(e,t,a){var i=this;t.innerHTML="";var n=this.breakText(e),r=[];n.forEach((function(e){var a=i.createTextLine(e,t);r.push(a)})),k["a"].from(r,.3,{y:"20px",opacity:0,stagger:.1,delay:a})}}}),A=H,B=Object(y["a"])(A,r,s,!1,null,null,null),N=B.exports,Y={name:"Home",data:function(){return{mainTimeline:k["b"].timeline(),animateElements:{},descriptionTextMobile:"UI and motion designer working in\ndesign field since 2015.",descriptionTextDesktop:"UI and motion designer working in design field\nsince 2015.",reelHovered:!1,designHovered:!1}},components:{},mixins:[S,N],mounted:function(){W(this.returnAnimateElements()).add(this.animateTextLines(this.isMobile?this.descriptionTextMobile:this.descriptionTextDesktop,this.$refs.descriptionRef,4)).play(.1)},methods:{returnAnimateElements:function(){return{wrapper:this.$refs.wrapperRef,circle:this.$refs.circleRef,picture:this.$refs.pictureRef,heading:this.$refs.headingRef,designBtn:this.$refs.designBtnRef.$el,reelBtn:this.$refs.reelBtnRef.$el,about:this.$refs.aboutBtnRef.$el,circleSvgRef:this.$refs.circleSvgRef}},navigateUI:function(){!this.isMobile&&k["b"].to(this.$refs.designWrapperRef,.4,{y:50,yoyo:!0,repeatDelay:1,repeat:1})},navigateReel:function(){!this.isMobile&&k["b"].to(this.$refs.reelWrapperRef,.4,{y:50,yoyo:!0,repeatDelay:1,repeat:1})}}},q=Y,U=Object(y["a"])(q,R,j,!1,null,null,null),X=U.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{appear:""},on:{enter:e.enter,leave:e.leave}},[a("div",{ref:"videoContainerRef",staticClass:"video",attrs:{id:"video"}},[a("div",{ref:"videoWrapper",staticClass:"video-wrapper"},[a("iframe",{attrs:{src:"https://www.youtube.com/embed/4MJAbcNDb6Y?rel=0&autoplay=1",allow:"autoplay",frameborder:"0",allowfullscreen:""}})]),a("router-link",{staticStyle:{position:"fixed",top:"32px",right:"32px"},attrs:{to:"/"}},[a("span",{ref:"closeButtonRef"},[e._v("Close")])])],1)])},J=[],V={methods:{enterTransitionX:function(e,t,a,i){e.style.transformOrigin=t;var n=k["b"].from(e,1.5,{x:"left"===t?"-101%":"101%",delay:a,ease:"expo.inOut",onComplete:i});return n},leaveTransitionX:function(e,t,a,i){e.style.transformOrigin=t;var n=k["b"].to(e,1.5,{x:"left"===t?"-101%":"101%",delay:a,ease:"expo.inOut",onComplete:i});return n},enterTransitionY:function(e,t,a,i){e.style.transformOrigin=t;var n=k["b"].from(e,1.5,{y:"101%",delay:a,ease:"expo.inOut",onComplete:i});return n},leaveTransitionY:function(e,t,a,i){e.style.transformOrigin=t;var n=k["b"].to(e,1.5,{y:"101%",delay:a,ease:"expo.inOut",onComplete:i});return n},slideInX:function(e,t,a,i){e.style.transformOrigin=t;var n=k["b"].from(e,1.5,{height:"0",delay:a,ease:"expo.inOut",onComplete:i});return n}}},z=V,Q=Object(y["a"])(z,o,l,!1,null,null,null),G=Q.exports,K={name:"Reel",mounted:function(){},mixins:[G],methods:{leave:function(e,t){k["a"].to(this.$refs.videoContainerRef,1.5,{xPercent:-101,ease:"expo.inOut",delay:.1}),k["a"].to(this.$refs.videoWrapper,1.5,{xPercent:101,yPercent:-50,ease:"expo.inOut",delay:.1,onComplete:t}),k["a"].to(this.$refs.closeButtonRef,.6,{opacity:0,delay:0})},enter:function(e,t){T("#video"),k["a"].from(this.$refs.videoContainerRef,1.5,{xPercent:-101,ease:"expo.inOut",delay:0}),k["a"].fromTo(this.$refs.videoWrapper,1.5,{xPercent:101,opacity:0,yPercent:-50},{xPercent:0,opacity:1,yPercent:-50,ease:"expo.inOut",delay:0}),k["a"].from(this.$refs.closeButtonRef,.6,{opacity:0,y:"20px",delay:.8,onComplete:t})}}},Z=K,ee=Object(y["a"])(Z,F,J,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{appear:""},on:{leave:e.leave,enter:e.enter}},[a("div",{ref:"carouselMainRef",staticClass:"carousel__outer-main-container"},[a("h1",{ref:"titleRef",staticClass:"h1--large bordered-heading carousel__title"},[e._v("Ui Design")]),a("div",{ref:"carouselRef",staticClass:"carousel__main-container",class:{"no-scrollable":!this.routeMatch},attrs:{id:"wave"},on:{"&scroll":function(t){return e.updateLineWidth(t)}}},[a("router-link",{staticClass:"back-button",attrs:{to:"/"}},[a("span",{ref:"backRef"},[e._v("back")])]),a("div",{staticClass:"carousel__outer-container"},[a("div",{ref:"carouselContainer",staticClass:"carousel__container",on:{"&scroll":function(t){return e.updateLineWidth(t)}}},e._l(e.projectData,(function(t,i,n){return a("project-card",{key:n,ref:"carouselElement",refInFor:!0,attrs:{projectData:e.projectData[i],index:i}})})),1)])],1),a("div",{ref:"carouselIndicator",staticClass:"carousel-indicator"},[a("div",{staticClass:"carousel-indicator__number"},[a("p",[e._v("01")])]),a("div",{staticClass:"carousel-indicator__line"},[a("span",{ref:"lineRef"})]),a("div",{staticClass:"carousel-indicator__number"},[a("p",[e._v("0"+e._s(e.projectData.length))])])]),a("router-view")],1)])},ie=[],ne=(a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{ref:"carouselElement",staticClass:"carousel__element",attrs:{to:{name:"Project",params:{name:e.getData.name,data:e.getData}}}},[a("div",{staticClass:"carousel__element-title"},[a("div",{staticClass:"carousel__element-subtitle__inner-wrapper"},[a("div",{staticClass:"masked-animation__wrapper"},[a("span",{ref:"subtitleRef",staticClass:"carousel__element-subtitle masked-animation__element"},[e._v(e._s(this.getData.subtitle)+" ")])]),a("span",{ref:"lineRef",staticClass:"carouel__element-title__line"})]),a("div",{staticClass:"masked-animation__wrapper"},[a("div",{ref:"titleRef",staticClass:"h1 h1--dark masked-animation__element"},[e._v(e._s(this.getData.title)+" ")])])]),a("div",{staticClass:"carousel__element-image__wrapper"},[a("div",{ref:"imageWrapperRef",staticClass:"carousel__element-image"},[a("img",{ref:"imageRef",attrs:{src:""+e.publicPath+this.getData.mainImage,alt:""}})])]),a("div",{staticClass:"carousel__element-number__wrapper"},[a("h3",{staticClass:"carousel__element-number"},[a("span",{ref:"numberRef1",staticClass:"masked-animation__element"},[e._v("0")]),a("span",{ref:"numberRef2",staticClass:"masked-animation__element"},[e._v(e._s(e.projectData.id))])])])])}),re=[],se={name:"projectCard",mixins:[S],props:{projectData:{type:Object,required:!0},test:{type:String,required:!1}},data:function(){return{getData:this.$props.projectData,publicPath:"https://mateoodlc.github.io/assets/"}},mounted:function(){var e=this.$refs,t=e.imageRef,a=e.imageWrapperRef,i=e.lineRef,n=e.subtitleRef,r=e.titleRef,s=e.numberRef1,o=e.numberRef2;this.isMobile||(k["a"].from(t,1.5,{yPercent:-101,delay:1,ease:"expo.inOut"}),k["a"].from(a,1.5,{yPercent:101,delay:1,ease:"expo.inOut"})),k["a"].from(i,1.5,{scaleX:"0",ease:"power3.out",delay:1.3}),k["a"].from(n,1,{y:this.isMobile?"150%":"100%",ease:"power3.out",delay:1.8}),k["a"].from(r,1,{y:"-105%",ease:"power3.out",delay:1.8}),k["a"].from(s,.5,{opacity:0,ease:"power3.out",delay:1.8}),k["a"].from(o,.5,{y:"10px",opacity:0,ease:"power3.out",delay:2})}},oe=se,le=Object(y["a"])(oe,ne,re,!1,null,null,null),ce=le.exports,ue=a("f7fe"),pe=a.n(ue),de=a("5033"),me={name:"carousel",components:{projectCard:ce},data:function(){return{projectData:de.projects,timeline:k["a"].timeline({paused:!0}),scrollX:window.pageXOffset||document.documentElement.scrollLeft}},mixins:[G,S],methods:{enter:function(e,t){var a=this.$refs,i=a.carouselRef,n=a.carouselContainer,r=a.titleRef,s=a.backRef,o=a.carouselIndicator,l=k["a"].fromTo(r,.7,{opacity:0,x:"100px"},{opacity:1,x:"0px",delay:1}),c=k["a"].from(o,.7,{opacity:0,delay:1}),u=k["a"].timeline().add([k["a"].from(i,1.5,{xPercent:101,ease:"expo.inOut"}),k["a"].from(n,1.5,{xPercent:-101,ease:"expo.inOut"})]),p=function(e){return k["a"].from(e,.7,{opacity:0,y:"20px",delay:1.8})};k["a"].timeline().add([l,p(s),c,u]),t()},leave:function(e,t){var a=this.$refs,i=a.carouselRef,n=a.carouselContainer,r=a.backRef,s=a.carouselIndicator,o=a.titleRef,l=function(e){return k["a"].to(e,.7,{opacity:0})};k["a"].timeline({paused:!0,onComplete:t}).add([l(r),l(o),l(s),this.isMobile?"":l(n),k["a"].to(i,1.5,{xPercent:101,ease:"expo.inOut",delay:.3}),k["a"].to(n,1.5,{xPercent:-101,ease:"expo.inOut",delay:.3})]).play()},getElementX:function(){return this.$refs.carouselElement[0].$el.getBoundingClientRect().x},getElementWidth:function(){var e=this.isMobile?0:420,t=this.isMobile?0:256*this.projectData.length,a=this.$refs.carouselElement[0].$el.getBoundingClientRect().width*(this.isMobile?this.projectData.length-1:this.projectData.length);return a-e-t},map:function(e,t,a,i,n,r){var s=(e-t)/(a-t)*(n-i)+i;return r?i<n?this.constrain(s,i,n):this.constrain(s,n,i):s},constrain:function(e,t,a){return Math.max(Math.min(e,a),t)},updateLineWidth:pe()((function(){var e=this.getElementX(),t=0,a=-this.getElementWidth(),i=1/de.projects.length,n=1,r=this.map(e,t,a,i,n,!0);this.$refs.lineRef.style.transform="translateY(-50%) scaleX(".concat(r)}),0)},mounted:function(){this.updateLineWidth()},computed:{routeMatch:function(){return"/carousel"===this.$route.path}}},fe=me,he=Object(y["a"])(fe,ae,ie,!1,null,null,null),_e=he.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{appear:""},on:{enter:e.enter,leave:e.leave}},[a("div",{ref:"projectRef",staticClass:"project"},[a("div",{ref:"projectWrapperRef",staticClass:"project__wrapper outer-pad outer-pad--large max-bound--project",attrs:{id:"projectWrapperId"}},[a("div",{ref:"projectContentWrapperRef",staticClass:"project__inner-wrapper"},[a("div",{staticClass:"project__hero"},[a("div",{staticClass:"project__hero__text-content"},[a("div",{staticClass:"project__hero__title"},[a("div",{ref:"heroTitleMarkerRef",staticClass:"h1 project__hero__title-marker"},[a("span",{ref:"number1",staticClass:"bordered-heading"},[e._v("0")]),a("span",{ref:"number2",staticClass:"bordered-heading"},[e._v(e._s(this.computedData.id))])]),a("h1",{ref:"projectTitleRef"},[e._v(e._s(this.computedData.title))])]),a("div",{staticClass:"project__hero__description"},[a("p",{ref:"descriptionRef"})])]),a("div",{ref:"heroImageWrapperRef",staticClass:"project__hero__image"},[a("img",{ref:"heroImageRef",attrs:{src:""+e.publicPath+this.computedData.mainImage,alt:""}})])]),a("div",{staticClass:"project__content"},e._l(this.computedData.images,(function(t,i,n){return a("div",{key:i,ref:"projectImageWrapperRef",refInFor:!0,staticClass:"project__content__image",attrs:{index:n}},[a("span",{staticClass:"image-size"}),a("div",{staticClass:"image"},[a("img",{attrs:{src:""+e.publicPath+t,alt:""}})])])})),0),a("button",{staticClass:"project__inner-navigation",on:{click:e.goToNext}},[a("h1",{staticClass:"bordered-heading"},[e._v("Next Project")])]),a("router-link",{staticClass:"back-button",attrs:{to:"/carousel"}},[a("span",{ref:"backRef"},[e._v("back")])])],1)])])])},ge=[],be=(a("a4d3"),a("e01a"),a("4de4"),a("caad"),a("b0c0"),a("2532"),{name:"App",methods:{hasHistory:function(){return window.history.length>2}}}),ye=be,we=Object(y["a"])(ye,c,u,!1,null,null,null),Ce=we.exports,xe={data:function(){return{isScrolled:!1,fadesStaggered:!1}},methods:{sectionCatcher:pe()((function(e,t){var a=this;if(e.length>1)e.forEach((function(e){var t=a.getOffset(e);window.scrollY>t-window.innerHeight/1.2&&(e.classList.contains("scrolled")||e.classList.add("scrolled"))}));else{var i=this.getOffset(e);window.scrollY>i-window.innerHeight/1.2&&(this.isScrolled||(t(),this.isScrolled=!0))}}),50),staggerFades:pe()((function(e,t){var a=this;e.forEach((function(e){var i=e.element,n=e.state,r=a.getOffset(i);window.scrollY>r-window.innerHeight/1.2&&(n||a.animateLists(e,t))}))})),animateLists:function(e,t){var a=e.element,i=a.classList.contains("content__description"),n=a.querySelectorAll("li"),r=a.querySelector("h3");i?(t(),e.state=!0):(k["a"].to([r,n],.4,{y:"0",opacity:1,scaleY:"1",delay:.2,ease:"power2.inOut",stagger:.1}),e.state=!0)},getOffset:function(e){var t=e.getBoundingClientRect();return t.top+window.scrollY}},mixins:[N]},Re=xe,je=Object(y["a"])(Re,p,d,!1,null,null,null),ke=je.exports,Oe={name:"project",props:{data:Object,type:Object},data:function(){return{tl:void 0,imageElements:void 0,publicPath:"https://mateoodlc.github.io/assets/"}},mixins:[G,Ce,N,ke],methods:{enter:function(e,t){this.tl=k["a"].timeline({onComplete:t}).add(this.entryAnimation(!1))},leave:function(e,t){this.leaveAnimation(t)},leaveAnimation:function(e){var t=this.$refs,a=t.projectWrapperRef,i=t.projectRef,n=t.projectContentWrapperRef;k["a"].to(n,.1,{opacity:0}),k["a"].to(i,1.5,{yPercent:101,delay:.3,ease:"expo.inOut"}),k["a"].to(a,1.5,{yPercent:-101,delay:.3,ease:"expo.inOut",onComplete:e})},entryAnimation:function(e){var t=this.$refs,a=t.descriptionRef,i=t.heroImageRef,n=t.heroImageWrapperRef,r=t.projectTitleRef,s=t.backRef,o=t.number1,l=t.number2,c=t.projectWrapperRef,u=t.projectContentWrapperRef,p=t.projectRef;k["a"].to(u,.2,{opacity:1});var d=[this.isMobile?k["a"].from(i,1,{opacity:0,delay:1.5}):k["a"].from(i,1.5,{xPercent:-101,delay:1,ease:"expo.inOut"}),k["a"].from(n,1.5,{xPercent:101,delay:1,ease:"expo.inOut"})],m=k["a"].timeline({}).add([e?"":k["a"].from(p,1.5,{y:"101vh",delay:0,ease:"expo.inOut"}),e?"":k["a"].from(c,1.5,{y:"-101vh",delay:0,ease:"expo.inOut"}),k["a"].from([o,l],.5,{y:"1.25rem",opacity:0,stagger:.1,delay:1}),d,k["a"].fromTo(r,.5,{y:"100%",opacity:0},{y:"0",opacity:1,delay:1.2,ease:"power3.inOut"}),k["a"].from(s,.5,{y:"100%",opacity:0,delay:.9,ease:"power3.inOut"}),this.animateTextLines(this.computedData.description,a,1.6)]);return m},nextProjectTransition:function(e){return k["a"].to(this.$refs.projectContentWrapperRef,.1,{opacity:0,onComplete:e})},goToNext:function(){var e=this,t=function(){return e.$router.push(e.returnNextPage).catch((function(e){"NavigationDuplicated"!==e.name&&e.message.includes("Avoided redundant navigation to current location")}))};this.nextProjectTransition(t),setTimeout((function(){e.imageElements.forEach((function(e){e.classList.contains("scrolled")&&e.classList.remove("scrolled")})),e.entryAnimation(!0),window.scrollTo({top:0})}),250)}},computed:{computedData:function(){var e=this;return de.projects.filter((function(t){return t.name===e.currentName}))[0]},currentName:function(){return this.$route.params.name},returnNextPage:function(){var e=this.computedData.id,t=e+1>de.projects.length;if(t)return de.projects[0].name;var a=e+1,i=de.projects.filter((function(e){return e.id===a}))[0];return i.name}},watch:{currentName:function(){}},mounted:function(){var e=this;this.imageElements=document.querySelectorAll(".image"),window.addEventListener("scroll",(function(){e.sectionCatcher(e.imageElements)}))}},Te=Oe,$e=Object(y["a"])(Te,ve,ge,!1,null,null,null),De=$e.exports,Ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{appear:""},on:{enter:e.enter,leave:e.leave}},[i("div",[i("div",{ref:"wave",staticClass:"view-wave",staticStyle:{position:"fixed"},attrs:{id:"about__view-wave"}}),i("div",{staticClass:"about"},[i("div",{ref:"aboutContainerRef",staticClass:"about__main-container max-bound outer-pad"},[i("router-link",{staticClass:"back-button",attrs:{to:"/"}},[i("span",{ref:"backRef"},[e._v("back")])]),i("div",{staticClass:"about__hero"},[i("h2",{ref:"aboutTitle"},[e._v("Hello!")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticClass:"content__description"},[i("p",{ref:"descriptionRef__mobile"})]),i("div",{ref:"imageWrapperRef",staticClass:"about__image"},[i("img",{ref:"imageRef",attrs:{src:a("a46c"),alt:"",srcset:""}})]),i("div",{staticClass:"about__inspirational-phrase"},[i("blockquote",{ref:"blockquoteRef"}),i("cite",{ref:"citeRef"})])]),i("div",{ref:"aboutContentRef",staticClass:"about__content outer-pad outer-pad--large"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile,expression:"!isMobile"}],staticClass:"content__description scrollable"},[i("p",{ref:"descriptionRef__desktop"})]),i("div",{staticClass:"about__me"},[i("div",{staticClass:"about__me__items scrollable scrollable"},[i("div",{staticClass:"about__me-title"},[i("h3",{ref:"contentTitleRef"},[e._v("Hobbies")])]),i("div",{staticClass:"about__me-items"},[i("ul",{staticClass:"about__me__item-list"},e._l(e.hobbies,(function(t,a,n){return i("li",{key:a,attrs:{index:n}},[e._v(e._s(t))])})),0)])]),i("div",{ref:"experienceListRef",staticClass:"about__me__items scrollable"},[i("div",{staticClass:"about__me-title"},[i("h3",{ref:"experienceTitleRef"},[e._v("Experience")])]),i("div",{staticClass:"about__me__items-wrapper"},[i("ul",{staticClass:"about__me__item-list about__me__item-list__experience"},e._l(e.experienceData,(function(t,a,n){return i("li",{key:a,attrs:{index:n}},[i("p",{staticClass:"about__me-experience__company"},[e._v(e._s(a))]),i("p",{staticClass:"about__me-experience__role"},[e._v(e._s(t))])])})),0)])]),i("div",{staticClass:"about__me__items scrollable"},[i("div",{staticClass:"about__me-title"},[i("h3",[e._v("Find me on")])]),i("ul",{staticClass:"about__me__item-list"},[i("li",{staticClass:"social"},[i("a",{attrs:{href:"https://www.behance.net/raymicfc",target:"_blank"}},[i("strong",[e._v("Behance")])])]),i("li",{staticClass:"social"},[i("a",{attrs:{href:"https://dribbble.com/raymicfc",target:"_blank"}},[i("strong",[e._v("Dribbble")])])]),i("li",{staticClass:"social"},[i("a",{attrs:{href:"https://www.instagram.com/raymicfc",target:"_blank"}},[i("strong",[e._v("Instagram")])])]),i("li",{staticClass:"social"},[i("a",{attrs:{href:"https://www.linkedin.com/mwlite/in/raymicfc",target:"_blank"}},[i("strong",[e._v("LinkedIn")])])])])]),i("div",{staticClass:"about__me__items scrollable"},[i("div",{staticClass:"about__me-title"},[i("h3",[e._v("Contact")])]),i("ul",{staticClass:"about__me__item-list"},[i("li",[i("strong",[e._v("Email: ")]),e._v("raymi.fc@gmail.com")]),i("li",[i("strong",[e._v("Cell: ")]),e._v("(+57) 314 777 5799")])])])])])],1)])])])},Pe=[],We=(a("99af"),a("a630"),a("3ca3"),a("2909")),Me={methods:{breakAllTitles:function(e,t){this.createWords(e,t)},createWords:function(e,t){var a=e,i=a.innerHTML,n=i.split(" ");a.innerHTML="";for(var r=0;r<n.length;r++)if(""==!n[r]){var s=n[r].split(""),o=document.createElement("span"),l=document.createElement("span");o.classList.add("title-letter__wrapper"),o.style.display="inline-block",o.style.overflow="hidden";for(var c=document.createTextNode(" "),u=0;u<s.length;u++){var p=s[u],d=document.createElement("span"),m=document.createTextNode(p);d.appendChild(m),d.classList.add("title-letter"),o.appendChild(d)}l.appendChild(c),a.appendChild(o),a.appendChild(l)}this.animateLetters(t)},animateLetters:function(){k["a"].from(".title-letter",.5,{y:"101%",scaleY:.5,delay:.7,stagger:{each:.1,ease:"sine.out",amount:.4}})}}},Ie=Me,Le=Object(y["a"])(Ie,m,f,!1,null,null,null),Se=Le.exports,He={data:function(){return{mainTimeline:k["a"].timeline({paused:!0}),quote:"&quot;You musn't be afraid\nto dream a little bigger,\ndarling.&quot;",cite:"&mdash; Christopher Nolan,\nInception",description:"My name is <strong>Raymi Farinango</strong>. I'm a UI &amp;\nMotion Designer based in Colombia in love\nwith motion graphics, beautiful interfaces\nand animated interactions.",windowWidth:window.innerWidth,hobbies:de.aboutContent[0].hobbies,experienceData:de.aboutContent[1].experience,scrollableElements:void 0}},mixins:[G,Ce,N,Se,ke,S],mounted:function(){var e=this;this.scrollableElements=Array.from(document.querySelectorAll(".scrollable")).map((function(e){return{element:e,state:!1}})),this.addScrollEvent(this.scrollableElements),window.addEventListener("resize",(function(){e.windowWidth=window.innerWidth}))},methods:{leave:function(e,t){var a=this.$refs,i=a.wave,n=a.aboutContainerRef;this.leaveTransitionY(i,"bottom",.1,t),k["a"].to(n,.2,{opacity:0,delay:0})},enter:function(e,t){var a=this.$refs.wave;this.mainTimeline.add([this.enterTransitionY(a,"bottom",0,t)].concat(Object(We["a"])(this.setEntryTimeline()))),this.mainTimeline.play()},setEntryTimeline:function(){var e=this.$refs,t=e.imageRef,a=e.imageWrapperRef,i=e.aboutTitle,n=e.blockquoteRef,r=e.citeRef,s=e.descriptionRef__mobile,o=e.aboutContainerRef,l=e.backRef;return[k["a"].from(o,0,{opacity:0,delay:.6}),k["a"].from(l,.5,{y:"100px",opacity:0,delay:1.5}),k["a"].from(a,.9,{yPercent:"101",delay:.8,ease:"power4.inOut"}),k["a"].from(t,.9,{yPercent:"-101",delay:.8,ease:"power4.inOut"}),this.breakAllTitles(i,1),this.isMobile?this.animateTextLines(this.description,s,1):"",this.animateTextLines(this.quote,n,1),this.animateTextLines(this.cite,r,1.5)]},onScrollAnimate:function(){var e=this.$refs.descriptionRef__desktop;this.animateTextLines(this.description,e,.5)},addScrollEvent:function(e){var t=this;window.addEventListener("scroll",(function(){t.staggerFades(e,t.onScrollAnimate)}))}}},Ae=He,Be=Object(y["a"])(Ae,Ee,Pe,!1,null,null,null),Ne=Be.exports;h["a"].use(x["a"]);var Ye=[{path:"/",name:"Home",component:X,children:[{path:"/reel",component:te},{path:"/about",component:Ne},{path:"carousel",component:_e,children:[{name:"Project",path:"project/:name",component:De,props:!0}]}]}],qe=new x["a"]({base:"/",routes:Ye}),Ue=qe,Xe=a("2f62");h["a"].use(Xe["a"]);var Fe=new Xe["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Je=a("650a");Object(Je["silcCoreInit"])(),h["a"].config.productionTip=!1,new h["a"]({router:Ue,store:Fe,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9b19":function(e,t,a){e.exports=a.p+"img/logo.c09d8551.svg"},"9c0c":function(e,t,a){},a46c:function(e,t,a){e.exports=a.p+"img/about.f057db59.jpg"}});
//# sourceMappingURL=app.c580472f.js.map