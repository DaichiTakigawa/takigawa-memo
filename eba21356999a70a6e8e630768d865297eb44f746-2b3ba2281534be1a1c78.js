(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,a,t){"use strict";t("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,a,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("XfO3"),t("EK0E"),t("INYr"),t("0mN4");var i=t("TqRt");a.__esModule=!0,a.default=void 0;var A,n=i(t("PJYZ")),c=i(t("VbXa")),s=i(t("8OQS")),d=i(t("pVnL")),r=i(t("q1tI")),o=i(t("17x9")),b=function(e){var a=(0,d.default)({},e),t=a.resolutions,i=a.sizes,A=a.critical;return t&&(a.fixed=t,delete a.resolutions),i&&(a.fluid=i,delete a.sizes),A&&(a.loading="eager"),a.fluid&&(a.fluid=B([].concat(a.fluid))),a.fixed&&(a.fixed=B([].concat(a.fixed))),a},f=function(e){var a=e.media;return!!a&&(h&&!!window.matchMedia(a).matches)},l=function(e){var a=e.fluid,t=e.fixed;return g(a||t).src},g=function(e){if(h&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var a=e.findIndex(f);if(-1!==a)return e[a];var t=e.findIndex((function(e){return void 0===e.media}));if(-1!==t)return e[t]}return e[0]},u=Object.create({}),p=function(e){var a=b(e),t=l(a);return u[t]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,w=h&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var a=e.src,t=e.srcSet,i=e.srcSetWebp,A=e.media,n=e.sizes;return r.default.createElement(r.default.Fragment,{key:a},i&&r.default.createElement("source",{type:"image/webp",media:A,srcSet:i,sizes:n}),r.default.createElement("source",{media:A,srcSet:t,sizes:n}))}))}function B(e){var a=[],t=[];return e.forEach((function(e){return(e.media?a:t).push(e)})),[].concat(a,t)}function j(e){return e.map((function(e){var a=e.src,t=e.media,i=e.tracedSVG;return r.default.createElement("source",{key:a,media:t,srcSet:i})}))}function S(e){return e.map((function(e){var a=e.src,t=e.media,i=e.base64;return r.default.createElement("source",{key:a,media:t,srcSet:i})}))}function y(e,a){var t=e.srcSet,i=e.srcSetWebp,A=e.media,n=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(A?'media="'+A+'" ':"")+'srcset="'+(a?i:t)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var Q=function(e,a){var t=(void 0===A&&"undefined"!=typeof window&&window.IntersectionObserver&&(A=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var a=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(e.target),v.delete(e.target),a())}}))}),{rootMargin:"200px"})),A);return t&&(t.observe(e),v.set(e,a)),function(){t.unobserve(e),v.delete(e)}},O=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",A=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',c=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",r=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?y(e,!0):"")+y(e)})).join("")+"<img "+r+c+s+t+i+a+n+A+d+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=r.default.forwardRef((function(e,a){var t=e.src,i=e.imageVariants,A=e.generateSources,n=e.spreadProps,c=e.ariaHidden,s=r.default.createElement(R,(0,d.default)({ref:a,src:t},n,{ariaHidden:c}));return i.length>1?r.default.createElement("picture",null,A(i),s):s})),R=r.default.forwardRef((function(e,a){var t=e.sizes,i=e.srcSet,A=e.src,n=e.style,c=e.onLoad,o=e.onError,b=e.loading,f=e.draggable,l=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return r.default.createElement("img",(0,d.default)({"aria-hidden":l,sizes:t,srcSet:i,src:A},g,{onLoad:c,onError:o,ref:a,loading:b,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var C=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=h&&p(a),t.isCritical="eager"===a.loading||a.critical,t.addNoScript=!(t.isCritical&&!a.fadeIn),t.useIOSupport=!m&&w&&!t.isCritical&&!t.seenBefore;var i=t.isCritical||h&&(m||!t.useIOSupport);return t.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=r.default.createRef(),t.placeholderRef=a.placeholderRef||r.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)(t)),t.handleRef=t.handleRef.bind((0,n.default)(t)),t}(0,c.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=Q(e,(function(){var e=p(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){a.setState({imgLoaded:e,imgCached:!(!a.imageRef.current||!a.imageRef.current.currentSrc)})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=b(e),t=l(a),u[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=b(this.props),a=e.title,t=e.alt,i=e.className,A=e.style,n=void 0===A?{}:A,c=e.imgStyle,s=void 0===c?{}:c,o=e.placeholderStyle,f=void 0===o?{}:o,l=e.placeholderClassName,u=e.fluid,p=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,w=e.Tag,v=e.itemProp,B=e.loading,y=e.draggable,Q=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,d.default)({opacity:Q?1:0,transition:C?"opacity "+h+"ms":"none"},s),k="boolean"==typeof m?"lightgray":m,X={transitionDelay:h+"ms"},U=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&X,s,f),N={title:a,alt:this.state.isVisible?"":t,style:U,className:l,itemProp:v};if(u){var z=u,L=g(u);return r.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:L.maxWidth?L.maxWidth+"px":null,maxHeight:L.maxHeight?L.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},r.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),k&&r.default.createElement(w,{"aria-hidden":!0,title:a,style:(0,d.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&X)}),L.base64&&r.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:L.base64,spreadProps:N,imageVariants:z,generateSources:S}),L.tracedSVG&&r.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:L.tracedSVG,spreadProps:N,imageVariants:z,generateSources:j}),this.state.isVisible&&r.default.createElement("picture",null,E(z),r.default.createElement(R,{alt:t,title:a,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:B,draggable:y})),this.addNoScript&&r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:t,title:a,loading:B},L,{imageVariants:z}))}}))}if(p){var T=p,J=g(p),W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:J.width,height:J.height},n);return"inherit"===n.display&&delete W.display,r.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(J.srcSet)},k&&r.default.createElement(w,{"aria-hidden":!0,title:a,style:(0,d.default)({backgroundColor:k,width:J.width,opacity:this.state.imgLoaded?0:1,height:J.height},C&&X)}),J.base64&&r.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:J.base64,spreadProps:N,imageVariants:T,generateSources:S}),J.tracedSVG&&r.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:J.tracedSVG,spreadProps:N,imageVariants:T,generateSources:j}),this.state.isVisible&&r.default.createElement("picture",null,E(T),r.default.createElement(R,{alt:t,title:a,width:J.width,height:J.height,sizes:J.sizes,src:J.src,crossOrigin:this.props.crossOrigin,srcSet:J.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:B,draggable:y})),this.addNoScript&&r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:t,title:a,loading:B},J,{imageVariants:T}))}}))}return null},a}(r.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),k=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string,maxWidth:o.default.number,maxHeight:o.default.number});C.propTypes={resolutions:I,sizes:k,fixed:o.default.oneOfType([I,o.default.arrayOf(I)]),fluid:o.default.oneOfType([k,o.default.arrayOf(k)]),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var X=C;a.default=X},"Fi+E":function(e){e.exports=JSON.parse('{"data":{"image":{"nodes":[{"fluid":{"aspectRatio":1.6,"src":"/static/808d5c90144abf03ccae1a50193cb191/ee604/gatsby-semantic-ui.png","srcSet":"/static/808d5c90144abf03ccae1a50193cb191/69585/gatsby-semantic-ui.png 200w,\\n/static/808d5c90144abf03ccae1a50193cb191/497c6/gatsby-semantic-ui.png 400w,\\n/static/808d5c90144abf03ccae1a50193cb191/ee604/gatsby-semantic-ui.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAABlUlEQVQoz2P4DwP//v37j+CgcnEABrhqIHh0483xLbfO7Ln35eMPdONwaf77F6TozO67syr3zKneN69u39KOIx/efAXrx6sZYvzHN1+BeiYXbE/SnVbqviTDZNbq/uMQc//++/cHFf1DaAZbe//Ky77MLcs6jyTpTStxXzy7as/cmn2E/Qy1+e232ZV7Tmy9BbSwPnTV8q6jOxZegITF2if3O25cbL1+sfHa+Y4bl6beufb25w9IKCH8fGr77YWNB4B2zq/fP6dm35tnnyHGx5w6KL55eemlU7Pv3XQ6uF1959p7Xz6BdP37x4DsjPuXX+5ZdvnY5puf33+Hh3bK2SN+x/Z8/v17+t3rPkd32xzY+vDrF3TNyBHzDxzPEH7muWPau9a3XL9w9O3L4ounzPZtfvj1Mxabger//vkLRPCUAtHsdnjHnPs3z7x7s+zRXfN9mx99+4JFM4pB0ITzP/nMEdUda3IvHC++dEpv9waTvZvuY7UZKzj//u2uF082Pnu0/unDPS+fHnz9/Ouf34jQJhsAAFuhu5t2+L4kAAAAAElFTkSuQmCC"}},{"fluid":{"aspectRatio":1.6,"src":"/static/992eb9a211af0fd7f4d4b4d8e04f9d63/ee604/gatsby-thumbnail.png","srcSet":"/static/992eb9a211af0fd7f4d4b4d8e04f9d63/69585/gatsby-thumbnail.png 200w,\\n/static/992eb9a211af0fd7f4d4b4d8e04f9d63/497c6/gatsby-thumbnail.png 400w,\\n/static/992eb9a211af0fd7f4d4b4d8e04f9d63/ee604/gatsby-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAAA4klEQVQoz2P4TwFgwCXx79//v3///QMj0jT/+4fG/UesZojSp3fe7lhwYeucc6d23P77hzjNEEc+vfNuesmuWRV7phTumFq4Y8vss3ApfJohlqybfHJh04F001kJ2lNLXBflO8x/8+wzpvux2zy/fv/KnqOT87cn6k6dU7N3VuWem2efgYz++4+wzQfXXF094fjJ7benFe2cXblnWfvhrx9/YAYkA9Zw/vXjz4Zpp2aU755ZvntB44Ebp58S5WeEE/7+e3Dt9ZVjjz6+/oppJ8FE8g/uFhLiGTnw8CQvApoJAgAG8OLW4zhUUwAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.9607843137254901,"src":"/static/c2f90615dd55701f24e509d9c466742c/ee604/neovim-v-screanshot.png","srcSet":"/static/c2f90615dd55701f24e509d9c466742c/69585/neovim-v-screanshot.png 200w,\\n/static/c2f90615dd55701f24e509d9c466742c/497c6/neovim-v-screanshot.png 400w,\\n/static/c2f90615dd55701f24e509d9c466742c/ee604/neovim-v-screanshot.png 800w,\\n/static/c2f90615dd55701f24e509d9c466742c/f3583/neovim-v-screanshot.png 1200w,\\n/static/c2f90615dd55701f24e509d9c466742c/06587/neovim-v-screanshot.png 1391w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABJ0lEQVQoz42RSU/DMBCF81OyOJuz2LGTpqTkUBaJQ5siDsCBW3tACIn/f3rYbqKkpUU5fJqZN/azx7ZeDgd8/Hzj9esTu/0ez6q+e39Dvdliuelmc7Pdoek6WG1Zoa0a1KKGyCuUbAFGBZKQIYuO6Hyo0yFGY236AUPkU1hLuUDFS5SKRBlFUYE4FgZKj5hckdBR0yRUjnUsEcY5LJZKyFxAZGpBzEF8puBwCYdDih5hou0y2N4El000rkhgyXKF9foJq9t7tO0jmuYBaVbDUYu06XXYn9whKSwSSvhRiWCCaRpDZuLAqHN4fjFq2tDrDbVgu7lp6jjk080D1+pTQ3XS/6Od4hB24TkmIw8nzUXfxLu4p/8UEgrzHl4wDxIIw7muJw1ogV+wtTD7xgrwMgAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/5f75d65b2742ec3af97f8519757be22f/ee604/windows-neovim-thumbnail.png","srcSet":"/static/5f75d65b2742ec3af97f8519757be22f/69585/windows-neovim-thumbnail.png 200w,\\n/static/5f75d65b2742ec3af97f8519757be22f/497c6/windows-neovim-thumbnail.png 400w,\\n/static/5f75d65b2742ec3af97f8519757be22f/ee604/windows-neovim-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAAB00lEQVQ4y5VTPUgcQRQektbOQpJGCNilF05IFQQLi4ht6iAWERQFQUEwjYJlIlqkCPfjIUQ0KCLe+Yd4STTxNBBFQQtj9O729uf0Nrsz+2VnZ3ednAbOB4/3Zvbtt9/33lviOA64c2Ne5GdAvg9iNUaCJHiJCrSwgDJ2L1DCC5lfvH15jvb0CVTLBbIphmayyBvmLUCZeaUSH1CwmPg6hNq3MYztUWQOzvCkK4lS2QqLmeQ2c2C5TivAiUgE4PjWa/QsDONZVMHA7D4ivQno11ZVkoPn/zAcXOxEbGcEk59N1Pal8bTjPfQrMxyY+ofhp2bjm2Lh3bGJnt0rvNg0kFXtsP9E7sHwUj9Wjxa9vPHNFtpGV7ypc8uZDA3zCki8gOZVDSRRAPmQ9zx9KVTYAaCYJsVv/TyUcHhmQCnZ4fmi7AIuFFHzUcHLjI76eRWPPxVRN1dEpiAxvGuCjMlrI/KCy7BtQ0NkuYiBrIHWdR0t3Nc0/PAlM5lh0MtwydnNRLn9uqZ4OC1kPl9RQZJuPiV8zZdMKwErmcp3hsXQ/b2EppSGV190PJpT8IB/IJpH6sLvIXNu/pRqViIwzvq0RLGZsxA/LXvsQ8nVgvFIpRb8r+4vlLLGRYQq/JcAAAAASUVORK5CYII="}},{"fluid":{"aspectRatio":1.6,"src":"/static/831e89b5542535363c21ffdc58e26dc5/ee604/android-thumbnail.png","srcSet":"/static/831e89b5542535363c21ffdc58e26dc5/69585/android-thumbnail.png 200w,\\n/static/831e89b5542535363c21ffdc58e26dc5/497c6/android-thumbnail.png 400w,\\n/static/831e89b5542535363c21ffdc58e26dc5/ee604/android-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAAA5UlEQVQoz2P4TwFgwCP379+ff//+AhHJmv8BIVk2g7T9/vPtypPF+64XX3+24s/fn3Bx/Jr/QazdcTll6THrY7dbFh412XutAFkWp2agP4Hk/dc7Fx0xefT2AJB968X6RUdNH787DJfFqfkvWPrio9mbzkf++fsDyP75+9O6swHXn62Ey+KxGRS2bz5fW3DY8PT9/u+/3hy51bDkmMWHr3fhsvgC7N8/kMeuPV266qTLpnPhK0+53ny+Fuzdv0RFFSSevvx4BvTqlx8vsQY13nhGciGudII3hYF88Pc/7tTCQEnaBgBXre3hX7mt1wAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/5935bbe91d8b29516cdc571efaa03cbb/ee604/android-amplify-thumbnail.png","srcSet":"/static/5935bbe91d8b29516cdc571efaa03cbb/69585/android-amplify-thumbnail.png 200w,\\n/static/5935bbe91d8b29516cdc571efaa03cbb/497c6/android-amplify-thumbnail.png 400w,\\n/static/5935bbe91d8b29516cdc571efaa03cbb/ee604/android-amplify-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAABhElEQVQ4y51STUsCQRjeX9ShQ12jT+hUl6Bzp+ocBGXHukXXTgkFWac+oIigQA01RaOMLbBEzKjUtsiPTWfnaWad/Rg1kh723Zl9551nn/dDAQel/GU+oISZAdtvnnUORbpgEbn3/ya0CPJHQDXj+IRKKuJo076RlpsQIk2OYgwIjwIPHkFYb1TBRWAwn2EwY3fa/USxlenvQHQBuJwCEuPAZ1QEE7EaLem1quWEhlDnnwfiq0BuDwiOAHczdg0tshqp4CbrReDeg8e3Y4lYTrmqAYf9QGAMuF5ktgQkpwEtKCpEUSdVHCQmsRsZNgm9wW6EUsu2ekchh6myDpAyWyqukWnUikN99mHzohc5LWR+X2XW2XcPCl+qVBKl/Vg4Pt4EjlBqBafJWdtf1l+xExlCpnAm4oi7y/RXswKzRT82Al24fdqCXvvAuTqH7XAfSvpLk8I/4O5kLL0GX3gA+/EJpm4Q6fyJNAkdETZ3USulzDTL33lJmdyUDsioa3ycM9IS9wM+ReMoZo0+XQAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/5935bbe91d8b29516cdc571efaa03cbb/ee604/android-amplify-thumbnail.png","srcSet":"/static/5935bbe91d8b29516cdc571efaa03cbb/69585/android-amplify-thumbnail.png 200w,\\n/static/5935bbe91d8b29516cdc571efaa03cbb/497c6/android-amplify-thumbnail.png 400w,\\n/static/5935bbe91d8b29516cdc571efaa03cbb/ee604/android-amplify-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAABhElEQVQ4y51STUsCQRjeX9ShQ12jT+hUl6Bzp+ocBGXHukXXTgkFWac+oIigQA01RaOMLbBEzKjUtsiPTWfnaWad/Rg1kh723Zl9551nn/dDAQel/GU+oISZAdtvnnUORbpgEbn3/ya0CPJHQDXj+IRKKuJo076RlpsQIk2OYgwIjwIPHkFYb1TBRWAwn2EwY3fa/USxlenvQHQBuJwCEuPAZ1QEE7EaLem1quWEhlDnnwfiq0BuDwiOAHczdg0tshqp4CbrReDeg8e3Y4lYTrmqAYf9QGAMuF5ktgQkpwEtKCpEUSdVHCQmsRsZNgm9wW6EUsu2ekchh6myDpAyWyqukWnUikN99mHzohc5LWR+X2XW2XcPCl+qVBKl/Vg4Pt4EjlBqBafJWdtf1l+xExlCpnAm4oi7y/RXswKzRT82Al24fdqCXvvAuTqH7XAfSvpLk8I/4O5kLL0GX3gA+/EJpm4Q6fyJNAkdETZ3USulzDTL33lJmdyUDsioa3ycM9IS9wM+ReMoZo0+XQAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/5935bbe91d8b29516cdc571efaa03cbb/ee604/android-amplify-thumbnail.png","srcSet":"/static/5935bbe91d8b29516cdc571efaa03cbb/69585/android-amplify-thumbnail.png 200w,\\n/static/5935bbe91d8b29516cdc571efaa03cbb/497c6/android-amplify-thumbnail.png 400w,\\n/static/5935bbe91d8b29516cdc571efaa03cbb/ee604/android-amplify-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAABhElEQVQ4y51STUsCQRjeX9ShQ12jT+hUl6Bzp+ocBGXHukXXTgkFWac+oIigQA01RaOMLbBEzKjUtsiPTWfnaWad/Rg1kh723Zl9551nn/dDAQel/GU+oISZAdtvnnUORbpgEbn3/ya0CPJHQDXj+IRKKuJo076RlpsQIk2OYgwIjwIPHkFYb1TBRWAwn2EwY3fa/USxlenvQHQBuJwCEuPAZ1QEE7EaLem1quWEhlDnnwfiq0BuDwiOAHczdg0tshqp4CbrReDeg8e3Y4lYTrmqAYf9QGAMuF5ktgQkpwEtKCpEUSdVHCQmsRsZNgm9wW6EUsu2ekchh6myDpAyWyqukWnUikN99mHzohc5LWR+X2XW2XcPCl+qVBKl/Vg4Pt4EjlBqBafJWdtf1l+xExlCpnAm4oi7y/RXswKzRT82Al24fdqCXvvAuTqH7XAfSvpLk8I/4O5kLL0GX3gA+/EJpm4Q6fyJNAkdETZ3USulzDTL33lJmdyUDsioa3ycM9IS9wM+ReMoZo0+XQAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/e8e4f3ac54efd4b6635732b76f852060/ee604/yaml-thumbnail.png","srcSet":"/static/e8e4f3ac54efd4b6635732b76f852060/69585/yaml-thumbnail.png 200w,\\n/static/e8e4f3ac54efd4b6635732b76f852060/497c6/yaml-thumbnail.png 400w,\\n/static/e8e4f3ac54efd4b6635732b76f852060/ee604/yaml-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAA80lEQVQoz8VSOw5EUBS1FEsQi9ApqCxAgYRd0GlIFCJaoVGIiEqpEoXGAhQqlU/8ZuYmEpmImWQyJnOLk5ebd985556H3L8o5Mrh29v6AfO6roBxHCdJEgRBnue2bXuel2WZZVmmafq+7zjO+fAmqaoqgiBIkqzrmqZpQRBc10VRFMdxRVFYll2WZaM5yp7nGVCSJFmWm6bBMIyiKFVVeZ6HpqZpoijuNMdheBUQFILsMAyBStd1hmHSNI2iyDAMOHMcV5blbvO4sLZth2Houm6aJtACEsZxhE7f9+ClKAq4sPO/3PZpNh/k/OzwNGrkb9/zAcbSzMuv80iBAAAAAElFTkSuQmCC"}},{"fluid":{"aspectRatio":1.6,"src":"/static/126e1544c7d4fdeea64a43f0d112f586/ee604/github-gatsby-thumbnail.png","srcSet":"/static/126e1544c7d4fdeea64a43f0d112f586/69585/github-gatsby-thumbnail.png 200w,\\n/static/126e1544c7d4fdeea64a43f0d112f586/497c6/github-gatsby-thumbnail.png 400w,\\n/static/126e1544c7d4fdeea64a43f0d112f586/ee604/github-gatsby-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAC4jAAAuIwF4pT92AAABh0lEQVQoz2P4DwP/wADO/fv3739CgAGuE0j+/v17//798+bNO3/+/H8iAANc548fP2JiYhgZGRkYGNjZ2Zubm+FS+DQDLQSSpaWl/v7+t2/fPnjw4KVLl3R0dNatWwcU//PnD8SUv3/+oZnFAOcbGRn19vYCGd++fQOSkZGRKSkpEM3IepDZDPBwcnV1BaoGsoEO+fXrl56eXkVFBTjk/vz8/vvM7rv7V145t/ferx9/UJwNcdjGjRvNzMyWLFkCZNva2nJycgK9AGT/+vl7ZffRmRV7phXvnFWxe8O0U+ihDQFLly5dsWIFkJGenr5r1y6I4Oldd+bX768LXpmgPbXcc0mKwfSrxx+DXfSPAS2e4dELZP/5DWJvn39+bu2+mRW7Y9Un96ZvBtp/YPVVkOY//1BsRtYJZP/7CwqLy4cfLmk9dHbPvZlluyfmbF3acfjm2WfoNmMBsHDdOvfsgob900p2Ap2wY/55sOkYfsYFgO6/cfrp4Q3Xb517hhJVhLX++48rngFiBqx1Ta1UWgAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/831e89b5542535363c21ffdc58e26dc5/ee604/android-thumbnail.png","srcSet":"/static/831e89b5542535363c21ffdc58e26dc5/69585/android-thumbnail.png 200w,\\n/static/831e89b5542535363c21ffdc58e26dc5/497c6/android-thumbnail.png 400w,\\n/static/831e89b5542535363c21ffdc58e26dc5/ee604/android-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAAA5UlEQVQoz2P4TwFgwCP379+ff//+AhHJmv8BIVk2g7T9/vPtypPF+64XX3+24s/fn3Bx/Jr/QazdcTll6THrY7dbFh412XutAFkWp2agP4Hk/dc7Fx0xefT2AJB968X6RUdNH787DJfFqfkvWPrio9mbzkf++fsDyP75+9O6swHXn62Ey+KxGRS2bz5fW3DY8PT9/u+/3hy51bDkmMWHr3fhsvgC7N8/kMeuPV266qTLpnPhK0+53ny+Fuzdv0RFFSSevvx4BvTqlx8vsQY13nhGciGudII3hYF88Pc/7tTCQEnaBgBXre3hX7mt1wAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/5935bbe91d8b29516cdc571efaa03cbb/ee604/android-amplify-thumbnail.png","srcSet":"/static/5935bbe91d8b29516cdc571efaa03cbb/69585/android-amplify-thumbnail.png 200w,\\n/static/5935bbe91d8b29516cdc571efaa03cbb/497c6/android-amplify-thumbnail.png 400w,\\n/static/5935bbe91d8b29516cdc571efaa03cbb/ee604/android-amplify-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAABhElEQVQ4y51STUsCQRjeX9ShQ12jT+hUl6Bzp+ocBGXHukXXTgkFWac+oIigQA01RaOMLbBEzKjUtsiPTWfnaWad/Rg1kh723Zl9551nn/dDAQel/GU+oISZAdtvnnUORbpgEbn3/ya0CPJHQDXj+IRKKuJo076RlpsQIk2OYgwIjwIPHkFYb1TBRWAwn2EwY3fa/USxlenvQHQBuJwCEuPAZ1QEE7EaLem1quWEhlDnnwfiq0BuDwiOAHczdg0tshqp4CbrReDeg8e3Y4lYTrmqAYf9QGAMuF5ktgQkpwEtKCpEUSdVHCQmsRsZNgm9wW6EUsu2ekchh6myDpAyWyqukWnUikN99mHzohc5LWR+X2XW2XcPCl+qVBKl/Vg4Pt4EjlBqBafJWdtf1l+xExlCpnAm4oi7y/RXswKzRT82Al24fdqCXvvAuTqH7XAfSvpLk8I/4O5kLL0GX3gA+/EJpm4Q6fyJNAkdETZ3USulzDTL33lJmdyUDsioa3ycM9IS9wM+ReMoZo0+XQAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/992eb9a211af0fd7f4d4b4d8e04f9d63/ee604/gatsby-thumbnail.png","srcSet":"/static/992eb9a211af0fd7f4d4b4d8e04f9d63/69585/gatsby-thumbnail.png 200w,\\n/static/992eb9a211af0fd7f4d4b4d8e04f9d63/497c6/gatsby-thumbnail.png 400w,\\n/static/992eb9a211af0fd7f4d4b4d8e04f9d63/ee604/gatsby-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAAA4klEQVQoz2P4TwFgwCXx79//v3///QMj0jT/+4fG/UesZojSp3fe7lhwYeucc6d23P77hzjNEEc+vfNuesmuWRV7phTumFq4Y8vss3ApfJohlqybfHJh04F001kJ2lNLXBflO8x/8+wzpvux2zy/fv/KnqOT87cn6k6dU7N3VuWem2efgYz++4+wzQfXXF094fjJ7benFe2cXblnWfvhrx9/YAYkA9Zw/vXjz4Zpp2aU755ZvntB44Ebp58S5WeEE/7+e3Dt9ZVjjz6+/oppJ8FE8g/uFhLiGTnw8CQvApoJAgAG8OLW4zhUUwAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.6,"src":"/static/ed431d7caf80e46ad7b1257b96041c93/ee604/atcoder-thumbnail.png","srcSet":"/static/ed431d7caf80e46ad7b1257b96041c93/69585/atcoder-thumbnail.png 200w,\\n/static/ed431d7caf80e46ad7b1257b96041c93/497c6/atcoder-thumbnail.png 400w,\\n/static/ed431d7caf80e46ad7b1257b96041c93/ee604/atcoder-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABYElEQVQ4y7VTPavCUAztn/IPuLvYqYtuFRdFLBQHV+niUAcRnd0s1dGlWxERxC4FBxEqgoguLQh+HknkvleL2/MdCAlJOLn5uBK+DOnrhI/Hg437/c4ibALFbrcbRM6nXOF7e6EIxm0iiuN6vXKMtMDlcuE84SctCYL1es1CCIKA9fF4hG3biKLojXy322G1Wn1uWVQslUqo1+vwfR+pVAqz2Qy1Wg3NZpMJ2u02ptMplsslstks+v0+HMfBaDTCdrtFq9XCZDJ5tXw6nZDJZCDLMjzPQz6fx2azQS6X42KWZaFaraJcLqNQKEDTNFQqFaTTaRSLRS5KDwrD8EW4WCzQaDRgGAbm8zl0XYfruuh0Opw4Ho+hqipM02RRFAW9Xo8LdLtdDAYDDIfD36XEB00zPZ/PXI1A7Yh5Uoy2ejgcIDrb7/c/S6SYFD+J5Akkz+VTLOmT4mR/lf/5Kd8mfAJ1lMPuDmf61gAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.8691588785046729,"src":"/static/e47b349b839cfdb2288fb8f735ec9e8f/3c741/execution-time.png","srcSet":"/static/e47b349b839cfdb2288fb8f735ec9e8f/69585/execution-time.png 200w,\\n/static/e47b349b839cfdb2288fb8f735ec9e8f/497c6/execution-time.png 400w,\\n/static/e47b349b839cfdb2288fb8f735ec9e8f/3c741/execution-time.png 690w","sizes":"(max-width: 690px) 100vw, 690px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABn0lEQVQoz51SW0sCQRT2Z/bQS0TQfwiCbvTeS1B2Lwp6MNJNlB66EF0gsFXJstDQ1tbVdHfHy46uX7MzTW1WD3Xg4zucs/vNmflOACx6vR5c14VuWCiXTdRqDby+eiDv+Sd79f6anwNSkBAbaqaIu7sCDC5sQdfNL+xHf89j77+AJ+ZFt0txnnhCLqexhs2bAnYfW7/2KhVbTOi6QnQtrGJbUaGXjI9J5LSSf6r5OUAIgQiXCSYxNBnD6VUW2rPxD0E2Yb1eB+104bQINg9SGBhTML97DV0rQyvV+Ud/EqSUModq6DhNLjg4HsXEwhky90Xu+ItuMZjs0SUL+GufB9nCFO5Lj2JdSWJ4Oo7R2UNMLZ4hn9dATIKG1ULDZrCaAjJ/52qVfBXkprgOlvYS/MojM3E+6dzWJZSjDJSTBxwwKMdZzhLR00dEWC33VEVZro1w2UWHtnFxU8BGJI3taBo7sVtmUgrB0A2W91R2mIrVcBor+0meewiGEpxTmQJKmiHWRu6hCJl3v9XaDRO0ZbMnqPKN8H/nOG1+S0o7eAOlpSh6Zo6SNQAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.8691588785046729,"src":"/static/297ed52dc22506764af12a34fff19e01/407fb/memory-usage.png","srcSet":"/static/297ed52dc22506764af12a34fff19e01/69585/memory-usage.png 200w,\\n/static/297ed52dc22506764af12a34fff19e01/497c6/memory-usage.png 400w,\\n/static/297ed52dc22506764af12a34fff19e01/407fb/memory-usage.png 692w","sizes":"(max-width: 692px) 100vw, 692px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACBElEQVQoz22T3U/TUBjG92car1CBKC6CojfijegUQRAv9MKEELkQZmIkZmPdJ2MYZwJEmdnko3Nsbk3XsXWslX21fTgfrQznSX55n572PHnec05dlmWBQkfqoIyPsQP4N7PwJcQL5ApV1KoaajWdoap/+jStLmpkmBaMzikWVndxacKPwcdBXJ3kXJkUyHMIn7dE/BILkMsnUJQGo/yPrlQacNF01BDoYllI48ZUBHfn47jzgjNOtHsmhkBiH8WCBEmqkYUaW3yOxkyPjzU7oWHCMlpY8v1gqdwzUdx8FsEIwT0dxZAnBM9CEke5EvJ5mS2kRk46R1Njl67rsLeQGQ48FIhZlCXtZfhJGK+9O8hmizjKl0mLvUY9hqqqcjeYWPLbhtMXDUcI15+Gmb7/ahMThHsvNxBNipCK1Lz+15i1zLbQbOOtL2UnjPQldKDtU649CuL2XBzxr4fI5STIcp0npIfSbLbQbup4F0hj2BPG2Nw6Rp/HcIvgVEePznLGZtfZ/o7Pb+BQLEEuKVCoYafTIfenDqN9isVPKVx+sMYS0KtCU7BKrhHVvdD5QXt+cfUbvmyLqCgnvGU6LLOL5O5vcjBprAgZlnZZ+MlrIANvaA/e4B7eh/exEiTza/R9hugM3nz4jsR2HrKk8JadP+X/g78zuy1o9SoaBD5n9X3TNQycAQnY35NaJvZJAAAAAElFTkSuQmCC"}},{"fluid":{"aspectRatio":1.6,"src":"/static/831e89b5542535363c21ffdc58e26dc5/ee604/android-thumbnail.png","srcSet":"/static/831e89b5542535363c21ffdc58e26dc5/69585/android-thumbnail.png 200w,\\n/static/831e89b5542535363c21ffdc58e26dc5/497c6/android-thumbnail.png 400w,\\n/static/831e89b5542535363c21ffdc58e26dc5/ee604/android-thumbnail.png 800w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABJ0AAASdAHeZh94AAAA5UlEQVQoz2P4TwFgwCP379+ff//+AhHJmv8BIVk2g7T9/vPtypPF+64XX3+24s/fn3Bx/Jr/QazdcTll6THrY7dbFh412XutAFkWp2agP4Hk/dc7Fx0xefT2AJB968X6RUdNH787DJfFqfkvWPrio9mbzkf++fsDyP75+9O6swHXn62Ey+KxGRS2bz5fW3DY8PT9/u+/3hy51bDkmMWHr3fhsvgC7N8/kMeuPV266qTLpnPhK0+53ny+Fuzdv0RFFSSevvx4BvTqlx8vsQY13nhGciGudII3hYF88Pc/7tTCQEnaBgBXre3hX7mt1wAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":2,"src":"/static/1a404eb3e49d6745b87a17b042f545aa/ee604/Screenshot_2020-01-10%20Typography%20js.png","srcSet":"/static/1a404eb3e49d6745b87a17b042f545aa/69585/Screenshot_2020-01-10%20Typography%20js.png 200w,\\n/static/1a404eb3e49d6745b87a17b042f545aa/497c6/Screenshot_2020-01-10%20Typography%20js.png 400w,\\n/static/1a404eb3e49d6745b87a17b042f545aa/ee604/Screenshot_2020-01-10%20Typography%20js.png 800w,\\n/static/1a404eb3e49d6745b87a17b042f545aa/f3583/Screenshot_2020-01-10%20Typography%20js.png 1200w,\\n/static/1a404eb3e49d6745b87a17b042f545aa/5707d/Screenshot_2020-01-10%20Typography%20js.png 1600w,\\n/static/1a404eb3e49d6745b87a17b042f545aa/d5e42/Screenshot_2020-01-10%20Typography%20js.png 1898w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABG0lEQVQoz3WSa2qEMBSFZ0WCoNjZgeCaXIEr1B/+KGod6/sdo57mZlCsbS4cruTx5eTEBy6177sUVVkWiKIIeZ5j2zas63rOHZ3GqcIwhOM4sG0bDxUwyzIBLTEMA6ZpFpok9D9gEAQwDAPP58df4NHHcUA/9ALCoTr0CjRNE5ZlqYF5ViL+/BK9wjwu59x17R1ILpXAtu3AFw7OV7CZYVkWKcbYCTq67/vQNA26rqsz/BYZRnGEOI6Rpql8HMqVOuf8FzBJEriuC8/z1MCu61DXNZqmEW5bkekoRY9ETu/rj1ICq6qSjoqikL2u32A6hF78HhG5JSkzJCD9NsdmMSp1dXRdf0jpkK5K2bxemdAgvnuR3/vajKmv/AMXLPYw8tUe6AAAAABJRU5ErkJggg=="}},{"fluid":{"aspectRatio":1.8691588785046729,"src":"/static/a74bf9763f05ddba620ab88df348c413/ee604/neovim-screenshot.png","srcSet":"/static/a74bf9763f05ddba620ab88df348c413/69585/neovim-screenshot.png 200w,\\n/static/a74bf9763f05ddba620ab88df348c413/497c6/neovim-screenshot.png 400w,\\n/static/a74bf9763f05ddba620ab88df348c413/ee604/neovim-screenshot.png 800w,\\n/static/a74bf9763f05ddba620ab88df348c413/f3583/neovim-screenshot.png 1200w,\\n/static/a74bf9763f05ddba620ab88df348c413/5707d/neovim-screenshot.png 1600w,\\n/static/a74bf9763f05ddba620ab88df348c413/eeb1b/neovim-screenshot.png 1920w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABJ0AAASdAHeZh94AAABIklEQVQoz52S226DMBBE+QbCxTeulkJAaoFAQpr3/P8nTXfduKJRVNo8HGm9tsazYwfX2w3DxxnjdcHbMqObR7QvcUR3OiLItEYaxyjzHFpKyCSBSFLqJYijCMk/CYQQUEqhKEtUVQVNtaJLuPcKgSRXiijIYU48P6jv/ElQgEVZjEU1uWPXHt6TdNBB9XrvEd53DqWQyLIMJY3tBV3/zm8ia9I05QwlTCZQ2RxGG9dcH/DrZ+O5uFZrNuQexWQS82nENM1473u0bYumaWBrC2stPVjxw/EjXpBj+xpZKvTDgOVyIdGJBDvs9w2JHtAeWtR1/R3D1tiBLyL6Q2EYYrfbIYojxPQ3PesYNgXZpiUHRVG4f8hwFh7u84NtYYxx8XwCxt4lkJ9dcPYAAAAASUVORK5CYII="}},{"fluid":{"aspectRatio":1,"src":"/static/db973386cf08463abb13a334103ad8c7/bc59e/profile.png","srcSet":"/static/db973386cf08463abb13a334103ad8c7/69585/profile.png 200w,\\n/static/db973386cf08463abb13a334103ad8c7/497c6/profile.png 400w,\\n/static/db973386cf08463abb13a334103ad8c7/bc59e/profile.png 512w","sizes":"(max-width: 512px) 100vw, 512px","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABJ0AAASdAHeZh94AAAB30lEQVQ4y61Uzct5URC+/5iFrRV/ASlZ8Q8gWVmwsbIjG5SUjSgSpSQ2hPJN8p3yVcrX8zan7tv93c65fu/bO3Wa7p2ZZ56ZOWckcOT9fn9r5VHaRCLxgEher9c/YPK3MpEmoNKJgnlJlDYRqKQOlAPW6zUKhQIqlQrG4zHTava8hBIPrN/vIxAIwGazMW2xWKDT6eDxeLDb7X7G8HK5IBwOw2QyMSCfzwe32w2n0wm9Xg+Xy4VerycEldSGTCaDRCIBq9WKarWKdruNYDAIv98Pg8EAo9GIUCiE5/MpLlkudTgcMud8Po94PM70aDRCt9tFuVyG1+uFw+FgCa/Xq3YP6VDWw+GA1WqFZDKJaDSKVqvFHHO5HOx2O2q1GjqdDk6nkxhQadhut9jv9yyQ2FK/aBD1eh1msxnT6ZSBHY/HzwxJyHmz2WA+n2O5XOJ2uyGbzaLRaLBrdD6fmf2/GVLZk8nk22GxWDAguXQSSkbAHwFlIw1CHlIqlUIsFkMkEkGxWGTMqGzNa6M20l0cDAbspNNplEolNJtNxpL+PR4P4aKQeBuGhHpHAyKW9HJoOFTq/X7n+mtuG6UT9XQ2m7FJq+2aDNVli97qp70oiRbsb5espLV9eWx/tLH/Qr4AcgvkmC1Ho1AAAAAASUVORK5CYII="}},{"fluid":{"aspectRatio":2.0408163265306123,"src":"/static/91a589e0703fac54b13a984242c14fac/14b42/home-image.jpg","srcSet":"/static/91a589e0703fac54b13a984242c14fac/f836f/home-image.jpg 200w,\\n/static/91a589e0703fac54b13a984242c14fac/2244e/home-image.jpg 400w,\\n/static/91a589e0703fac54b13a984242c14fac/14b42/home-image.jpg 800w,\\n/static/91a589e0703fac54b13a984242c14fac/47498/home-image.jpg 1200w,\\n/static/91a589e0703fac54b13a984242c14fac/0e329/home-image.jpg 1600w,\\n/static/91a589e0703fac54b13a984242c14fac/82a5a/home-image.jpg 4795w","sizes":"(max-width: 800px) 100vw, 800px","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABc9byrOKg/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIAAxEhIjH/2gAIAQEAAQUCeoTBlmGxj8sJ/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Bqv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAABESAiUXH/2gAIAQEABj8CeK6Qap//xAAaEAEAAwEBAQAAAAAAAAAAAAABABFBITFh/9oACAEBAAE/IQwVZTJ29jjkFXT4gL8gKcJZhP/aAAwDAQACAAMAAAAQiz//xAAXEQADAQAAAAAAAAAAAAAAAAAAAVER/9oACAEDAQE/EFBiH//EABYRAQEBAAAAAAAAAAAAAAAAAAEAUf/aAAgBAgEBPxBIHb//xAAcEAEAAgMAAwAAAAAAAAAAAAABABExQVEhgaH/2gAIAQEAAT8QsWDWDbxvrcsRRLxJNP2MIFfSaRnkOwDWajUVnqT/2Q=="}}]}}}')},I9pS:function(e,a,t){"use strict";var i,A,n,c,s=t("wTIg"),d=t("q1tI"),r=t("rB5o"),o=t("Wbzz"),b=t("qKvR"),f=Object(s.a)("div",{target:"e1hsvbzv0"})({fontSize:Object(r.b)(1).fontSize,lineHeight:Object(r.a)(2),textAlign:"center",color:"#474747",border:"2px solid #787878",marginLeft:Object(r.a)(1),marginRight:Object(r.a)(1),padding:Object(r.a)(3)+" "+Object(r.a)(1),"&:hover":{backgroundColor:"#4f4f4f",border:"2px solid #4f4f4f",color:"white"}}),l=function(){return Object(b.b)(o.Link,{to:"/"},Object(b.b)(f,null,"TAKIGAWA",Object(b.b)("br",null),"MEMO"))},g=t("wJIZ"),u=t("zMNa"),p=Object(s.a)("div",{target:"efpfotv0"})({margin:Object(r.a)(2)+" "+Object(r.a)(1),"& > span":{marginRight:Object(r.a)(.5)}}),m=Object(s.a)("a",{target:"efpfotv1"})({name:"1d2u890",styles:"color:#363636;&:hover{color:#3273dc;}"}),h=function(){return Object(b.b)(p,null,Object(b.b)("span",{className:"icon is-medium"},Object(b.b)(m,{href:"https://github.com/DaichiTakigawa"},Object(b.b)("i",{className:"fab fa-lg fa-github"}))),Object(b.b)("span",{className:"icon is-medium"},Object(b.b)(m,{href:"https://twitter.com/damenin27844103"},Object(b.b)("i",{className:"fab fa-lg fa-twitter"}))))},w=Object(s.a)("nav",{target:"e1my8y8g0"})({margin:Object(r.a)(2)+" "+Object(r.a)(1)}),v=function(e){var a=e.currentPage;return Object(b.b)(w,{className:"manu"},Object(b.b)("ul",{className:"menu-list"},Object(b.b)("li",null,Object(b.b)(o.Link,{className:"Home"===a?"is-active":"",to:"/"},"Home")),Object(b.b)("li",null,Object(b.b)(o.Link,{className:"Blog"===a?"is-active":"",to:"/blog/"},"Blog")),Object(b.b)("li",null,Object(b.b)(o.Link,{className:"About"===a?"is-active":"",to:"/about/"},"About")),Object(b.b)("li",null,Object(b.b)(o.Link,{className:"Contact"===a?"is-active":"",to:"/contact/"},"Contact"))))},E=Object(s.a)("div",{target:"ezfxmno0"})({name:"8kjoqe",styles:"position:sticky;top:0;"}),B=Object(s.a)(g.a,{target:"ezfxmno1"})({margin:Object(r.a)(2)+" "+Object(r.a)(1)}),j=function(e){var a=e.currentPage;return Object(b.b)(d.Fragment,null,Object(b.b)(l,null),Object(b.b)(E,null,Object(b.b)(B,null),Object(b.b)(v,{currentPage:a}),Object(b.b)(h,null),Object(b.b)(u.a.Responsive,{format:"rectangle"})))},S=Object(s.a)("nav",{target:"edan03w0"})({name:"l6euv0",styles:"text-align:center;background:white;box-shadow:rgba(0, 0, 0, 0.5) 0px 3px 5px;position:absolute;top:0;right:0;left:0;"}),y=Object(s.a)("span",{target:"edan03w1"})({fontSize:Object(r.b)(.5).fontSize,paddingLeft:Object(r.a)(.5)}),Q=function(e){var a=e.currentPage,t=Object(d.useState)({expand:!1}),i=t[0],A=t[1];return Object(b.b)(S,{className:"navbar"},Object(b.b)("div",{className:"navbar-brand"},Object(b.b)(o.Link,{className:"navbar-item",to:"/"},Object(b.b)(y,null,"TAKIGAWA MEMO")),Object(b.b)("span",{className:"navbar-burger burger "+(i.expand?"is-active":""),onClick:function(){return A({expand:!i.expand})}},Object(b.b)("span",{"aria-hidden":"true"}),Object(b.b)("span",{"aria-hidden":"true"}),Object(b.b)("span",{"aria-hidden":"true"}))),Object(b.b)("div",{className:"navbar-menu "+(i.expand?"is-active":"")},Object(b.b)("div",{className:"navbar-start"},Object(b.b)(o.Link,{className:"navbar-item "+("Home"===a?"is-active":""),to:"/"},"Home"),Object(b.b)(o.Link,{className:"navbar-item "+("Blog"===a?"is-active":""),to:"/blog/"},"Blog"),Object(b.b)(o.Link,{className:"navbar-item "+("About"===a?"is-active":""),to:"/about/"},"About"),Object(b.b)(o.Link,{className:"navbar-item "+("Contact"===a?"is-active":""),to:"/contact/"},"Contact"))))},O=t("Gx08"),x=Object(s.a)("div",{target:"eywoqjl0"})(((i={backgroundColor:"#ececec",padding:0,position:"absolute",top:0,left:0,right:0})["@media (min-width: "+O.a.tablet.minWidth+"px)"]={display:"flex",flexDirection:"row"},i)),R=Object(s.a)("div",{target:"eywoqjl1"})(((A={margin:Object(r.a)(4)+" "+Object(r.a)(.5)+" "+Object(r.a)(1)+" "+Object(r.a)(.5),background:"white",boxShadow:"rgba(0, 0, 0, 0.5) 0px 3px 5px"})["@media (max-width: "+O.a.tablet.maxWidth+"px) and (min-width: "+O.a.tablet.minWidth+"px)"]={margin:Object(r.a)(2)+" "+Object(r.a)(1)+" "+Object(r.a)(2)+" "+Object(r.a)(1),width:"100%",minWidth:0},A["@media (min-width: "+O.a.computer.minWidth+"px)"]={margin:Object(r.a)(4)+" 10%",width:"100%",minWidth:0},A)),C=Object(s.a)("div",{target:"eywoqjl2"})(((n={})["@media (min-width: "+O.a.tablet.minWidth+"px)"]={display:"none"},n)),I=Object(s.a)("div",{target:"eywoqjl3"})(((c={padding:Object(r.a)(2)+" 0",backgroundColor:"white",boxShadow:"rgba(0, 0, 0, 0.5) 0px 3px 5px"})["@media (max-width: "+O.a.mobile.maxWidth+"px)"]={display:"none"},c));a.a=function(e){var a=e.currentPage,t=e.children;return Object(b.b)(x,null,Object(b.b)(C,null,Object(b.b)(Q,{currentPage:a})),Object(b.b)(I,null,Object(b.b)(j,{currentPage:a})),Object(b.b)(R,null,t))}},INYr:function(e,a,t){"use strict";var i=t("XKFU"),A=t("CkkT")(6),n="findIndex",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),i(i.P+i.F*c,"Array",{findIndex:function(e){return A(this,e,arguments.length>1?arguments[1]:void 0)}}),t("nGyu")(n)},OGtf:function(e,a,t){var i=t("XKFU"),A=t("eeVq"),n=t("vhPU"),c=/"/g,s=function(e,a,t,i){var A=String(n(e)),s="<"+a;return""!==t&&(s+=" "+t+'="'+String(i).replace(c,"&quot;")+'"'),s+">"+A+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(s),i(i.P+i.F*A((function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",t)}},dLmr:function(e,a,t){"use strict";t("Z2Ku"),t("L9s1"),t("dRSK");var i=t("Fi+E"),A=(t("q1tI"),t("9eSz")),n=t.n(A),c=t("qKvR");a.a=function(e){var a=e.fileName,t=e.alt,A=i.data.image.nodes.find((function(e){return e.fluid.src.includes(a)})).fluid;return A?Object(c.b)(n.a,{fluid:A,alt:t}):null}},wJIZ:function(e,a,t){"use strict";var i=t("wTIg"),A=Object(i.a)("hr",{target:"e1fzyoa30"})({name:"ad2tcz",styles:"background-color:rgba(34, 36, 38, 0.15);height:1px;"});a.a=A},zMNa:function(e,a,t){"use strict";var i=t("wTIg"),A=t("q1tI"),n=t("rB5o"),c=t("Gx08"),s=t("qKvR"),d=function(e){var a=e.format,t=void 0===a?"auto":a;return Object(A.useEffect)((function(){if(window)try{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}catch(e){}})),Object(s.b)("div",null,Object(s.b)(o,{className:"adsbygoogle","data-ad-client":"ca-pub-6195920683902846","data-ad-slot":"4511974705","data-ad-format":t}))};d.Responsive=function(e){var a=e.format,t=void 0===a?"auto":a,i=Object(A.useState)({showAds:!1}),n=i[0],d=i[1];return Object(A.useEffect)((function(){if(n.showAds)try{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}catch(a){}if(window){var e=c.a.tablet.minWidth;window.innerWidth>=e&&d({showAds:!0})}}),[n.showAds]),n.showAds?Object(s.b)(r,null,Object(s.b)(o,{className:"adsbygoogle","data-ad-client":"ca-pub-6195920683902846","data-ad-slot":"4511974705","data-ad-format":t})):null};var r=Object(i.a)("div",{target:"e1wi66gt0"})({margin:Object(n.a)(1)+" "+Object(n.a)(.5)}),o=Object(i.a)("ins",{target:"e1wi66gt1"})({name:"13o7eu2",styles:"display:block;"});a.a=d}}]);
//# sourceMappingURL=eba21356999a70a6e8e630768d865297eb44f746-2b3ba2281534be1a1c78.js.map