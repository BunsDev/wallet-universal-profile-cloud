(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{70701:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview/[id]",function(){return c(93313)}])},93313:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return aw}});var d,e,f,g,h,i,j,k,l=c(47568),m=c(82670),n=c(29815),o=c(34051),p=c.n(o),q=c(85893),r=c(19485),s=c(67294),t=c(11163),u=function(a){var b=a.message;return(0,q.jsx)("div",{className:"text-5xl flex mt-20 justify-center",children:b})},v=u,w=c(96562),x=c(316),y=c(51897),z=(e=(0,l.Z)(p().mark(function a(b,c){var d,e,f;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=new x.pY(y,b,c),a.next=3,d.fetchData("LSP5ReceivedAssets[]");case 3:return f=(e=a.sent).value,a.abrupt("return",f);case 6:case"end":return a.stop()}},a)})),function(a,b){return e.apply(this,arguments)}),A=z,B=c(10220),C=c(1438),D=function(){var a=(0,s.useState)(),b=a[0],c=a[1];return(0,s.useEffect)(function(){c(new B.r(C.YN))},[]),b},E=D,F=c(68209),G=(f=(0,l.Z)(p().mark(function a(b,c){var d,e;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=C.MK.supportsInterface,e=new F.CH(b,d,c),a.prev=2,a.next=5,e.supportsInterface(C.Bj.LSP7DigitalAsset);case 5:if(!a.sent){a.next=9;break}return a.abrupt("return","LSP7");case 9:return a.next=11,e.supportsInterface(C.Bj.LSP8IdentifiableDigitalAsset);case 11:if(!a.sent){a.next=13;break}return a.abrupt("return","LSP8");case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(2),console.log(a.t0);case 18:case"end":return a.stop()}},a,null,[[2,15]])})),function(a,b){return f.apply(this,arguments)}),H=G,I=c(3283),J=c.n(I),K=function(){var a=(0,s.useState)(),b=a[0],c=a[1];return(0,s.useEffect)(function(){var a=new(J()).providers.HttpProvider(C.YN);c(a)},[]),b},L=K,M=function(a){var b=a.icon,c=a.amount,d=a.name,e=a.symbol;return(0,q.jsxs)("div",{className:"border border-darkGray p-3 rounded-lg h-[280px] mt-8",children:[(0,q.jsx)("div",{className:"rounded h-[180px] overflow-hidden mb-2",children:(0,q.jsx)("img",{src:b,alt:"nft-image",className:"object-none rounded w-full h-full bg-cover bg-repeat bg-center"})}),(0,q.jsxs)("div",{children:[(0,q.jsx)("div",{className:"text-sm font-bold text-gray-600 leading-6",children:d}),(0,q.jsx)("div",{className:"leading-6",children:e}),(0,q.jsxs)("div",{className:"text-xs leading-6",children:[c," tokens"]})]})]})},N=M,O=function(){var a=(0,s.useContext)(w.G).lsp7Assets;return a.length?(0,q.jsx)("div",{className:"grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-3",children:a.map(function(a,b){return(0,q.jsx)(N,{icon:a.icon,amount:a.amount,name:a.name,symbol:a.symbol},"lsp7-".concat(b))})}):(0,q.jsx)("div",{children:" No token yet"})},P=O,Q=function(a){var b=a.assetJSON;return(0,q.jsxs)("div",{className:"border border-darkGray p-3 rounded-lg h-[280px] mt-8",children:[(0,q.jsx)("div",{className:"rounded h-[180px] overflow-hidden mb-2",children:(0,q.jsx)("img",{src:b.image,alt:"nft-image",className:"object-none rounded w-full h-full bg-cover bg-repeat bg-center"})}),(0,q.jsx)("div",{className:"text-xs font-bold text-gray-600 leading-6",children:b.collectionName}),(0,q.jsxs)("div",{className:"text-sm leading-6",children:["#",parseInt(b.tokenId)]})]})},R=Q,S=function(){var a=(0,s.useContext)(w.G).lsp8Assets;return a.length?(0,q.jsx)(q.Fragment,{children:(0,q.jsx)("div",{className:"grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-3",children:a.map(function(a,b){return(0,q.jsx)(R,{assetJSON:a},"lsp8-".concat(b))})})}):(0,q.jsx)("div",{children:" No NFTs yet"})},T=S,U=c(11288),V=c.n(U),W=function(a){var b,c=a.lsp3JSON,d=(0,s.useState)(),e=d[0],f=d[1],g=(0,s.useState)(""),h=g[0],i=g[1],j=(0,t.useRouter)(),k=(0,s.useState)(),m=k[0],n=k[1],o=(0,s.useState)(),r=o[0],u=o[1],v=function(a){var b,c;if(null===(c=null===(b=a.LSP3Profile)|| void 0===b?void 0:b.profileImage[0])|| void 0===c?void 0:c.url){var d,e=a.LSP3Profile.profileImage[0].url;return e.includes("ipfs://")?"".concat(C.c2).concat(e.split("ipfs://")[1]):null==a?void 0:null===(d=a.LSP3Profile)|| void 0===d?void 0:d.profileImage[0].url}return V()(h)},w=(b=(0,l.Z)(p().mark(function a(){return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:c&&(n(v(c)),f(c),y());case 1:case"end":return a.stop()}},a)})),function(){return b.apply(this,arguments)}),x=function(a){return"".concat(a.slice(0,6),"...").concat(a.slice(-4))},y=function(){var a;(null===(a=null==c?void 0:c.LSP3Profile.links[0])|| void 0===a?void 0:a.url)&&u(c.LSP3Profile.links[0])};return(0,s.useEffect)(function(){if(c){w();return}h?n(V()(h)):n(V()("lukso")),f(void 0),u(void 0)},[c,h]),(0,s.useEffect)(function(){j.query.id&&i(x(j.query.id))},[j]),(0,q.jsx)("div",{children:(0,q.jsxs)("div",{className:"flex mt-8",children:[(0,q.jsx)("img",{src:m,className:"rounded-lg w-[150px] h-[150px] object-cover",alt:"profileImage"}),(0,q.jsxs)("div",{className:"ml-4",children:[(0,q.jsx)("div",{className:"text-xs",children:x(h)}),(0,q.jsx)("div",{className:"text-2xl font-bold my-2",children:null==e?void 0:e.LSP3Profile.name}),(0,q.jsx)("div",{className:"h-[120px]",children:r&&(0,q.jsx)("a",{href:r.url,target:"_blank",rel:"noreferrer",className:"text-xs text-blue-500",children:r.title})})]})]})})},X=W,Y=c(828),Z=c(56517),$=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q=[[]],r=[],s=[],t=[];return(null==a?void 0:null===(b=a.LSP4Metadata)|| void 0===b?void 0:null===(c=b.images)|| void 0===c?void 0:c.length)&&(q=null==a?void 0:null===(k=a.LSP4Metadata)|| void 0===k?void 0:null===(l=k.images)|| void 0===l?void 0:l.filter(function(a){return null!=a&&!!a.length&&aa(a)})),(null==a?void 0:null===(d=a.LSP4Metadata)|| void 0===d?void 0:null===(e=d.links)|| void 0===e?void 0:e.length)&&(r=null==a?void 0:null===(m=a.LSP4Metadata)|| void 0===m?void 0:m.links.filter(function(a){return(null==a?void 0:a.title)&&(null==a?void 0:a.url)})),(null==a?void 0:null===(f=a.LSP4Metadata)|| void 0===f?void 0:null===(g=f.assets)|| void 0===g?void 0:g.length)&&(s=null==a?void 0:null===(n=a.LSP4Metadata)|| void 0===n?void 0:n.assets.filter(function(a){return(null==a?void 0:a.hash)&&(null==a?void 0:a.url)&&(null==a?void 0:a.hashFunction)&&a.fileType})),(null==a?void 0:null===(h=a.LSP4Metadata)|| void 0===h?void 0:null===(i=h.icons)|| void 0===i?void 0:i.length)&&(t=null==a?void 0:null===(o=a.LSP4Metadata)|| void 0===o?void 0:null===(p=o.icons)|| void 0===p?void 0:p.filter(function(a){return _(a)})),{LSP4Metadata:{description:(null==a?void 0:null===(j=a.LSP4Metadata)|| void 0===j?void 0:j.description)||"",links:r,images:q,assets:s,icons:t}}},_=function(a){return a.width&&a.url&&a.hash&&a.hashFunction&&a.height},aa=function(a){return a.every(function(a){return a.url&&a.hash&&a.width&&a.height&&a.hashFunction})},ab=(g=(0,l.Z)(p().mark(function a(b,c){var d,e,f,g,h,i,j,k,l,m;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d={ipfsGateway:C.c2},e=new x.ZP(Z,b,c,d),a.prev=2,a.next=6,e.fetchData(["LSP4TokenName","LSP4TokenSymbol","LSP4Metadata",]);case 6:return k="string"==typeof(null===(f=(j=a.sent)[0])|| void 0===f?void 0:f.value)?null===(g=j[0])|| void 0===g?void 0:g.value:"",l="string"==typeof(null===(h=j[1])|| void 0===h?void 0:h.value)?null===(i=j[1])|| void 0===i?void 0:i.value:"",m=$(j[2].value),a.abrupt("return",[k,l,m]);case 13:return a.prev=13,a.t0=a.catch(2),console.log(a.t0),a.abrupt("return",["","",{LSP4Metadata:{description:"",links:[],images:[[]],icons:[],assets:[]}},]);case 17:case"end":return a.stop()}},a,null,[[2,13]])})),function(a,b){return g.apply(this,arguments)}),ac=ab,ad=c(14242),ae=(h=(0,l.Z)(p().mark(function a(b,c,d){var e,f,g;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ac(b,d);case 2:return e=a.sent,a.next=5,af(b,c,d);case 5:if(0!=(f=a.sent)){a.next=8;break}return a.abrupt("return");case 8:return g=ag(e,f,b),a.abrupt("return",g);case 10:case"end":return a.stop()}},a)})),function(a,b,c){return h.apply(this,arguments)}),af=(i=(0,l.Z)(p().mark(function a(b,c,d){var e,f,g;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f=new(e=new(J())(C.YN)).eth.Contract(ad.Mt,b),a.next=4,f.methods.balanceOf(c).call();case 4:return g=a.sent,a.abrupt("return",g);case 6:case"end":return a.stop()}},a)})),function(a,b,c){return i.apply(this,arguments)}),ag=function(a,b,c){var d,e,f=(0,Y.Z)(a,3),g=f[0],h=f[1],i=f[2],j={name:g,symbol:h,amount:b,icon:(null===(d=i.LSP4Metadata.icons[0])|| void 0===d?void 0:d.url)?null===(e=i.LSP4Metadata.icons[0])|| void 0===e?void 0:e.url:C.s8,address:c};return j},ah=ae,ai=c(733),aj=c(16441),ak={name:"LSP8TokenIdType",key:"0x715f248956de7ce65e94d9d836bfead479f7e70d69b718d47bfe7b00e05b4fe4",keyType:"Singleton",valueType:"uint256",valueContent:"Number"},al={name:"LSP8MetadataJSON:<uint256>",key:"0x9a26b4060ae7f7d5e3cd0000<uint256>",keyType:"Mapping",valueType:"bytes",valueContent:"JSONURL"};(j=d||(d={})).address="1",j.number="2",j.bytes32="3";var am,an,ao=(k=(0,l.Z)(p().mark(function a(b,c,d){var e,f,g,h,i,j;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ap(b,c,d);case 2:if((e=a.sent).length){a.next=5;break}return a.abrupt("return");case 5:return a.t0=Y.Z,a.next=8,ac(b,d);case 8:return a.t1=a.sent,g=(f=(0,a.t0)(a.t1,3))[0],h=f[1],i=f[2],j=[],a.next=16,Promise.all(e.map(function(){var a=(0,l.Z)(p().mark(function a(c){var e,f;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ar(c,b,d);case 2:f=aq(e=a.sent,c,g,h,b,i),j.push(f);case 5:case"end":return a.stop()}},a)}));return function(b){return a.apply(this,arguments)}}()));case 16:return a.abrupt("return",j);case 17:case"end":return a.stop()}},a)})),function(a,b,c){return k.apply(this,arguments)}),ap=(am=(0,l.Z)(p().mark(function a(b,c,d){var e,f,g;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f=new(e=new(J())(C.YN)).eth.Contract(ai.Mt,b),a.next=4,f.methods.tokenIdsOf(c).call();case 4:return g=a.sent,a.abrupt("return",g);case 6:case"end":return a.stop()}},a)})),function(a,b,c){return am.apply(this,arguments)}),aq=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=a.LSP4Metadata,n=m.description,o=(m.links,m.images),p=(m.assets,m.icons),q={tokenId:b,description:n,image:(null===(g=o[0][0])|| void 0===g?void 0:g.url)?o[0][0].url:C.s8,icon:(null===(h=p[0])|| void 0===h?void 0:h.url)?p[0].url:C.s8,collectionName:c,collectionSymbol:d,collectionAddress:e,collectionDescription:f.LSP4Metadata.description,collectionImage:(null===(i=f.LSP4Metadata.images[0][0])|| void 0===i?void 0:i.url)?null===(j=f.LSP4Metadata.images[0][0])|| void 0===j?void 0:j.url:C.s8,collectionIcon:(null===(k=f.LSP4Metadata.icons[0])|| void 0===k?void 0:k.url)?null===(l=f.LSP4Metadata.icons[0])|| void 0===l?void 0:l.url:C.s8};return q},ar=(an=(0,l.Z)(p().mark(function a(b,c,e){var f,g,h,i,j;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f=function(){var a=(0,l.Z)(p().mark(function a(b,c){var d;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.fetchData([{keyName:"LSP8MetadataJSON:<".concat(b,">"),dynamicKeyParts:c},]);case 2:return d=a.sent,a.abrupt("return",$(d[0].value));case 4:case"end":return a.stop()}},a)}));return function(b,c){return a.apply(this,arguments)}}(),g={ipfsGateway:C.c2},h=new x.ZP([ak,al],c,e,g),a.prev=3,a.next=6,h.fetchData(["LSP8TokenIdType"]);case 6:if((j=(i=a.sent)[0].value.toString())!==d.address){a.next=12;break}return a.abrupt("return",f("address",aj.p3(b.toString(),12)));case 12:if(j!==d.number){a.next=16;break}return a.abrupt("return",f("uint256",parseInt(b).toString()));case 16:if(j!==d.bytes32){a.next=20;break}return a.abrupt("return",f("bytes32",b.toString()));case 20:return a.abrupt("return",{LSP4Metadata:{description:"",links:[],images:[[]],icons:[],assets:[]}});case 21:a.next=27;break;case 23:return a.prev=23,a.t0=a.catch(3),console.log(a.t0),a.abrupt("return",{LSP4Metadata:{description:"",links:[],images:[[]],icons:[],assets:[]}});case 27:case"end":return a.stop()}},a,null,[[3,23]])})),function(a,b,c){return an.apply(this,arguments)}),as=ao,at=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=[],q=[],r=[],s=[];return(null==a?void 0:null===(b=a.LSP3Profile)|| void 0===b?void 0:null===(c=b.profileImage)|| void 0===c?void 0:c.length)&&(r=aa(null==a?void 0:null===(j=a.LSP3Profile)|| void 0===j?void 0:j.profileImage)?null==a?void 0:null===(k=a.LSP3Profile)|| void 0===k?void 0:k.profileImage:[]),(null==a?void 0:null===(d=a.LSP3Profile)|| void 0===d?void 0:null===(e=d.backgroundImage)|| void 0===e?void 0:e.length)&&(s=aa(null==a?void 0:null===(l=a.LSP3Profile)|| void 0===l?void 0:l.backgroundImage)?null==a?void 0:null===(m=a.LSP3Profile)|| void 0===m?void 0:m.backgroundImage:[]),(null==a?void 0:null===(f=a.LSP3Profile)|| void 0===f?void 0:null===(g=f.links)|| void 0===g?void 0:g.length)&&(q=null==a?void 0:null===(n=a.LSP3Profile)|| void 0===n?void 0:n.links.filter(function(a){return(null==a?void 0:a.title)&&(null==a?void 0:a.url)})),(null==a?void 0:null===(h=a.LSP3Profile)|| void 0===h?void 0:null===(i=h.tags)|| void 0===i?void 0:i.length)&&(p=null==a?void 0:null===(o=a.LSP3Profile)|| void 0===o?void 0:o.tags.filter(function(a){return(null==a?void 0:a.title)&&(null==a?void 0:a.url)})),{LSP3Profile:{name:(null==a?void 0:a.LSP3Profile.name)||"",description:(null==a?void 0:a.LSP3Profile.description)||"",links:q,tags:p,profileImage:r,backgroundImage:s}}},au={ipfsGateway:C.c2},av=function(){var a=(0,t.useRouter)(),b=(0,s.useState)(""),c=b[0],d=b[1],e=(0,s.useState)(!1),f=e[0],g=e[1],h=(0,s.useState)(!1),i=h[0],j=h[1],k=(0,s.useState)(!0),o=k[0],u=k[1],z=(0,s.useState)(),B=z[0],C=z[1],D=(0,s.useState)("");D[0],D[1];var F,G,I=(0,s.useContext)(w.G),J=I.lsp7Assets,K=I.setLsp7Assets,M=I.lsp8Assets,N=I.setLsp8Assets,O=E(),Q=L(),R=(F=(0,l.Z)(p().mark(function a(b){var c,d,e;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,A(b,Q);case 2:return c=a.sent,d=[],e=[],a.next=7,Promise.all(c.map(function(){var a=(0,l.Z)(p().mark(function a(b){var c;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,H(b,O);case 2:"LSP7"===(c=a.sent)&&d.push(b),"LSP8"===c&&e.push(b);case 5:case"end":return a.stop()}},a)}));return function(b){return a.apply(this,arguments)}}()));case 7:return a.next=9,Promise.all(d.map(function(){var a=(0,l.Z)(p().mark(function a(c){var d;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ah(c,b,Q);case 2:d=a.sent,(0,m.Z)(d,Object)&&K(function(a){return(0,n.Z)(a).concat([d])});case 4:case"end":return a.stop()}},a)}));return function(b){return a.apply(this,arguments)}}()));case 9:return a.next=11,Promise.all(e.map(function(){var a=(0,l.Z)(p().mark(function a(c){var d;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,as(c,b,Q);case 2:d=a.sent,(0,m.Z)(d,Object)&&N(function(a){return(0,n.Z)(a).concat((0,n.Z)(d))});case 4:case"end":return a.stop()}},a)}));return function(b){return a.apply(this,arguments)}}()));case 11:j(!1);case 12:case"end":return a.stop()}},a)})),function(a){return F.apply(this,arguments)}),S=(G=(0,l.Z)(p().mark(function a(b){var c,e,f;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=new x.pY(y,b,Q,au),a.prev=1,a.next=4,c.fetchData(["LSP3Profile"]);case 4:return e=a.sent,g(!0),f=at(e[0].value),C(f),a.next=10,R(b);case 10:a.next=19;break;case 12:a.prev=12,a.t0=a.catch(1),console.log(a.t0),d("Address is not a Universal Profile"),g(!1),j(!1),C(void 0);case 19:case"end":return a.stop()}},a,null,[[1,12]])})),function(a){return G.apply(this,arguments)}),U=function(){K([]),N([])};return(0,s.useEffect)(function(){U();var b=a.query.id;b&&Q&&(d(""),r.UJ(b)?(j(!0),S(b)):d("Invalid Address"))},[a,Q]),(0,q.jsxs)("div",{className:"mx-8",children:["string"==typeof a.query.id&&(0,q.jsx)(X,{lsp3JSON:B}),i&&(0,q.jsx)("div",{className:"text-5xl flex justify-center mt-20",children:"Loading..."}),c&&!i?(0,q.jsx)(v,{message:c}):(0,q.jsx)("div",{}),!i&&(J.length||M.length)?(0,q.jsxs)("div",{className:"mt-8",children:[(0,q.jsxs)("div",{className:"border-b border-darkGray flex pb-2",children:[(0,q.jsx)("div",{className:"px-2 cursor-pointer ".concat(o&&"text-blue-500"),onClick:function(){return u(!0)},children:"Tokens"}),(0,q.jsx)("div",{onClick:function(){return u(!1)},className:"px-2 cursor-pointer ".concat(!o&&"text-blue-500"),children:"NFTs"})]}),(0,q.jsx)(q.Fragment,{children:o?(0,q.jsx)(P,{}):(0,q.jsx)(T,{})})]}):(0,q.jsx)("div",{}),i||J.length||M.length||!f?(0,q.jsx)("div",{}):(0,q.jsx)("div",{className:"text-xl",children:"No assets received yet"})]})},aw=av},80950:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){},43503:function(){}},function(a){a.O(0,[482,714,113,774,888,179],function(){var b;return a(a.s=70701)}),_N_E=a.O()}])