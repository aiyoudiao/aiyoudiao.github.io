(window.webpackJsonp=window.webpackJsonp||[]).push([[12,20,22,25,29,36,40],{268:function(t,e,a){},279:function(t,e){t.exports=function(t){return null==t}},282:function(t,e,a){},284:function(t,e,a){},287:function(t,e,a){},288:function(t,e,a){},289:function(t,e,a){},293:function(t,e,a){"use strict";a(268)},298:function(t,e,a){"use strict";a.r(e);var i={name:"UpdateArticle",props:{length:{type:[String,Number],default:3},moreArticle:String},data:()=>({posts:[],currentPath:""}),computed:{topPublishPosts(){return this.$sortPostsByDate?this.$sortPostsByDate.filter(t=>{const{path:e}=t;return e!==this.currentPath}).slice(0,this.length):[]},isShowArticle(){const{frontmatter:t}=this.$page;return!(!1!==t.article)}},created(){this.posts=this.$site.pages,this.currentPath=this.$page.path},methods:{getNum:t=>t<9?"0"+(t+1):t+1,getDate:t=>t.frontmatter.date?t.frontmatter.date.split(" ")[0].slice(5,10):""},watch:{$route(){this.currentPath=this.$page.path}}},s=(a(293),a(1)),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["article-list",{"no-article-list":t.isShowArticle}]},[a("div",{staticClass:"article-title"},[a("router-link",{staticClass:"iconfont icon-bi",attrs:{to:t.moreArticle||"/archives/"}},[t._v("最近更新")])],1),t._v(" "),a("div",{staticClass:"article-wrapper"},[t._l(t.topPublishPosts,(function(e,i){return a("dl",{key:i},[a("dd",[t._v(t._s(t.getNum(i)))]),t._v(" "),a("dt",[a("router-link",{attrs:{to:e.path}},[a("div",[t._v(t._s(e.title))])]),t._v(" "),a("span",[t._v(t._s(t.getDate(e)))])],1)])})),t._v(" "),a("dl",[a("dd"),t._v(" "),a("dt",[a("router-link",{staticClass:"more",attrs:{to:t.moreArticle||"/archives/"}},[t._v("更多文章>")])],1)])],2)])}),[],!1,null,null,null);e.default=n.exports},302:function(t,e,a){"use strict";e.a={data:()=>({badges:["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABGpJREFUSA3tVVtoXFUU3fvOI53UlmCaKIFmwEhsE7QK0ipFEdHEKpXaZGrp15SINsXUWvBDpBgQRKi0+KKoFeJHfZA+ED9KKoIU2gYD9UejTW4rVIzm0VSTziPzuNu1z507dibTTjL4U/DAzLn3nL3X2o91ziX6f9wMFdh6Jvbm9nNSV0msViVO6tN1Rm7NMu2OpeJ9lWBUTDxrJbYTS0hInuwciu9eLHlFxCLCZEk3MegsJmZ5K/JD6t7FkFdEvGUo1g7qJoG3MHImqRIn8/nzY1K9UPKKiJmtnUqHVE3Gbuay6vJE/N2FEmuxFjW2nUuE0yQXRRxLiTUAzs36zhZvOXJPdX850EVnnLZkB8prodQoM5JGj7Xk2mvC7JB8tG04Ef5PiXtG0UtxupRQSfTnBoCy554x18yJHI6I+G5Eru4LHmPJZEQsrvPUbMiA8G/WgMK7w7I+ez7++o2ANfbrjvaOl1tFMs+htG3IrZH9/hDX1Pr8Tc0UvH8tcX29KzAgIGcEkINyW5BF9x891hw6VYqgJHEk0huccS7vh3C6gTiODL+26huuBtbct8eZnqLML8PkxGYpuPZBqtqwkSjgc4mB5gbgig5i+y0UDK35LMxXisn9xQtK+nd26gTIHsHe/oblK/b29fUmN/8Y+9jAQrnBp56m1LcDlDp9irKTExSKduXJVWSqdBMA08pEJnEIOB3FPPMybu/oeV8zFeYN3xx576Q6RH+VmplE4ncQV5v+5rzSoyOU7PuEAg8g803PwBJ0CExno/jcMbN8tONYeOmHiuUNryvm3fRUy4tMPVLdAGkUhNWuggGrJcXPv+ouCjz0MKUHz1J2/E8IC9nqTabcxgaBYM0hPhD5Y65FsbxRQKxCQrDjDctW7PUM3HuZunFyifSAqEfuzCp48Il24luWUWZoyJCaPR82jE0+kFA643wRFVni4RYSq3ohJO2pZ7B5dO4xkDWbEpossJPLSrPjYID8rS2UHTlvyNxqIGsg674XJJ7vnh5L7PNwC4hh2sjCI96mzszOTpxLF0T7l88Yz7lAuK6OnL8gXLOnTvpzSb22YG8W7us3jSebFHeeqnXRG1vt+MoUM84LQIBmMsCTAcOauTh0T0l0neQK7m2bLMt2mGxU3HYssS0J2cdv5wljlPsrIuZLAG/2DOZIXgCYT8uMGZN+e2kSirfxZOPCsC0f24nTZzspnVn9VePS1Z5vubmAGGXG8ZFno9Hel0yfA5ZPhF7Dh972BQJ2qCpgH67lmWtBYbvk6sz02wjky2vXyz0XErP/kFB619js1BtwfOV4OPRqOQBjy3Qbk18vigUPPSD5ceHnwck7W9bhAqZdd7SuG7w4/P2F/GaJh8c7e9qgow+Q7cGBo+98WsLkuktFqiZabtXuQTu/Y5ETbR0v7tNSFnvrmu6pjdoan2KjMu8q/Hmj1EfCO2ZGfEIbIXKUlw8qaX9/b2oeSJmFksSeT/Fn0V3nSypChh4Gjh74ybO9aeZ/AN2dwciu2/MhAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABH1JREFUSA3tVl1oHFUUPmdmd2ltklqbpJDiNnXFmgbFktho7YMPNiJSSZM0+CAYSkUELVhM6YuwIPpgoOKDqOBDC0XE2CQoNtQXBUFTTcCi+Wlh1V2TQExsUzcltd3M9Tt3ZjZzZ2fT+OJTL8yeM+eee757fmeJbq//KQL8X3DUSFOcfr7cRsRtxNQMWueeVzOkaITIGqQHNg5y8+jNW9ldM7A6nTpAjuolUikAwq7CE3WcM2RRDz+XGVgN3FptU/aUSlvq9Pa3iZ1+sgAqJyyAFqkipd9dqiwHF3P65YycLWc/6sqGrvoEoIp6DOFaX5h6+dnfjkWprwqsPk0dUGq5vySwDImC10KxFHgGL1SWoc92O3eVht09qdXNH11I2SsTsJYqMWzihqGMi+A+Garf3BAuuLI5oGlULyNfyB/HYNujwktOfRrMr5t77NmevqaUopx0grnKAyvVpmwUDB4x6FPXuGvYLTDwWsejwgtgkYKPqRJg8SV6xaiZ3ZTppGneS4yfH5/66fZSDHv+QZci/+h5c5UHtpy67JUqGppM0sh0Nc1dW6/N1W5Yoqat8/TU/VnadmdeW2PLLSyh0cvxBs3KbqTmwYPpxN4do/mzE8nEpvX/UMu2Wbp74zUAK5q6WkHns7V0eWkdPbPzd3rxkTGybadYySumVzhcaJFbs5UrEkQ/+CK8gF5dnh/6ciIZ73gwQ927L1IitoxKLXYP3SjYdOrHHfTZhRRlFyrorafPk20B3HPD1y2G3qKZME5Jcf3t/HUC13/8tSd++vqFveMUTwAUxSUFI1QekR1+bIze3D9MF2aq6cPvG72CgnldWCFqyRw3lwH8ZMerjTD9ElRO7Gv44wNpC90aASqGfVlz/Rx17srQ57/UU26hkhQqUB7dBR71WmzQhHUnblGmVOEw0jhbV1n9OlXUDCIRGaNV5Jp43N516fN7JmnTHdfp7Hgy0luO4aMhtkLL8Bi3bUWYvzh5Mn1dTxrL6QmGuRhGL/TiTTxRoEdTszSaq9GR0NGA3KdkOz3hqSV3MIDhQ5IVX/Ivx3umBti2es2h4eZby7x8br1rkf7Mo90AqC8aQ3sJeNzqFRu+vSANAQe3PL7l0HGOAdwDCeZYvNKeoZp1Qfs6Aipndh86HmFRi0LAnEO47wsqM6cdfjh3jBPUzhZy7nvlUfFsamED1VQt6aISHVymXZ/B2aCtIG8AI8xfobj2d3en1wWVhOeHELKmLQ1s211s88comkv4UCwWyF787mJdYXtNfhKAXVqnKTq8QZvGAGGOfaTo5pGZ/PwbUCr5+DPr/1J92JNHr9aOl/F3iI5+O1nfybsGxoimvZ3ViWSluDITw3P37mypheDIPY0tw7+O/5ApbkYw+zpfaUVu32Pi98+defdUhEpZkRFq0aqyNh9FuL9hpYbEm6iwi0z2REd09ZmyENEbuhjDWzKvZXTqKYaBIr3tt5kuPtQBZFvEUwHt60vfCNu41XsksH9Ij1BMMz1Y0OOunHNShFIP5868g5zeXmuLwL9T4b6Q2+KejgAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABKFJREFUSA3tVl1oFVcQnrMbrak3QUgkya1akpJYcrUtIqW1JvFBE9LiQ5v6JmJpolbMg32rVrhgoYK0QiMY6i9Y6EMaW5D+xFJaTYItIuK2Kr3+BJNwkxBj05sQY3b3nM6cs2dv9t7NT/vQJw/sndk5M/PNzJkzewGerP+pAmy+ON8lLzUJgA8ZYxYIYZmGYRnctDaWvJJAmTtfP1pvXsBCCPP8QFcCaRkZYACgDZFO4stNIcBCajEOlmmC9XpJ9bAGCaPaPmzPl32dvLSVu3BWCTQs0XQQ6g0DYgwLIoAZbBCdW/i+781o1VVlm/410mw4h06Y7bIPHNyWDyL4FHkX03Q8SrzNhZTZriieckWt7cL6MM85YcLpsi/7O9/iXFT6MswI0DmmpkSaJ0qLxFIm3+i1THHB3zmBH3PYx9CcykcLOeQVVa7QtdxTgQgEleX2AjHYfwA+2ddV77ruGoJUbhGDI09YSNXyMpUt5ylOzxgbUmtOp7NmbNt8v3arjTBfYELmLUV+M+nSawNNAUqpT3ClJWg5I3BLT+cGW/DXNGCa6tx1aakCGEigArTn4TDIPdrXXYKCZNrHLMCOEPvHBlLQ99s9eHB7EB6NTki73CVPQ2F5MSx/uRQixfmq7rK0wYD8w8E905bnPDfwoWs/rfv93NWN/ZfvwsLIU7A09gxECyISeGJkHAau98L97tuw7NXnoPyNF8FcYGLGKsOs0mN3OEyec9esGW/ZEl945dTP34wlR2FZVQWU1q0Cw8Tr7p+hgLLNL0FPxx/Q35mA8aEUrH6nCgwEl0tn7wUiZYJnNRh6DK4UH/k0lfyrsBKdPVv/AriGIQcEDQZ65LBAGe2Rzui9Ybjz7XUppz1/uKBbyVPGkN3ZAeC6hr0x7Nr38N5+EqkoOm17xpoqR9ohQF55ERSvr4Dkr3chNfC3DMzGJlNBElW8w9nsGQvhNGIzDkXzCg8cLK951xHsFBlTJspJNi3ZFIMF2AeDV3q8DNOB+YHi6QTrChDIWDBRi5U5f+ZMfJLu3ccrqxtdxk4SKH336LFxSmkqefwU5T8fhdSdQf9IVKD6aNiwI/hnmcAZ91isYMJIaCUCx9W098+LgruikeTqzqqxKPUwqJyCPJiyemVVZBOijDGjD38Os0jOiSPL1z3SPjXNANbiNPXAdzTfukjjuknNBbyz3nwgTd3AVFqUJ5hpHlq9MveLnWwttUfoygBmvVjuikxND3znrhsELnZk7k+OjIGxeNEkomyLVta0xxn+HZhjBc4YZ/AFjHjz9u3xRZl2BN4aq9nFwWh16IrQ1aHHEd3j1+4/dB9OtH4e29A2H1DyHQRmOSfQZ1Fy7MHBTGB6J/Djq6p3OxyO2cB+4Car7v/o3GXgfAkj23+x9ID1Teoamo/SXcbvSf2PX7Vc8DdCmE1vN9di+32P9/5YR3vLnhCVGUWBjEkr3yh4H8v9CzmsbdhzOKzsJKM90iFdaTMjRPhGVsakRvOaRidljo6H6G7j+ctrJpsP+4COhDIl0La2+FS4+5mlocBaXY5QnGZysIBYoeSsl5qQzrSj/cgNrfuEzlWBfwA+EjrZyWUvpAAAAABJRU5ErkJggg=="],currentBadge:""}),created(){this.$themeConfig.titleBadgeIcons&&(this.badges=this.$themeConfig.titleBadgeIcons),this.currentBadge=this.getBadge()},watch:{"$route.path"(){this.currentBadge=this.getBadge()}},methods:{getBadge(){return this.badges[Math.floor(Math.random()*this.badges.length)]}}}},311:function(t,e,a){"use strict";a(282)},315:function(t,e,a){"use strict";a(284)},323:function(t,e,a){"use strict";a(287)},324:function(t,e,a){var i=a(15),s=a(7),n=a(13);t.exports=function(t){return"string"==typeof t||!s(t)&&n(t)&&"[object String]"==i(t)}},325:function(t,e,a){"use strict";a(288)},326:function(t,e,a){"use strict";a(289)},327:function(t,e,a){},333:function(t,e,a){"use strict";a.r(e);var i={data:()=>({articleInfo:{}}),watch:{"$route.path"(){this.articleInfo=this.getPageInfo()}},created(){this.articleInfo=this.getPageInfo()},methods:{getPageInfo(){const t=this.$page,{relativePath:e}=t,{sidebar:a}=this.$themeConfig,i=e.split("/"),s=i[0].split("."),n=s.length>1?s[1]:s[0],r=i.length>2?i[1].split(".")[1]:void 0,o=i.length>3?i[2].split(".")[1]:void 0,l=a&&a.catalogue?a.catalogue[n]:void 0,c=this.$frontmatter.author||this.$themeConfig.author;let u=(t.frontmatter.date||"").split(" ")[0];const{categories:h}=this.$frontmatter;return{date:u,classify1:n,classify2:r,classify3:o,cataloguePermalink:l,author:c,categories:h}}}},s=(a(311),a(1)),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"articleInfo-wrap"},[a("div",{staticClass:"articleInfo"},[t.articleInfo.classify1&&"_posts"!==t.articleInfo.classify1?a("ul",{staticClass:"breadcrumbs"},[a("li",[a("router-link",{staticClass:"iconfont icon-home",attrs:{to:"/",title:"首页"}})],1),t._v(" "),a("li",[t.articleInfo.cataloguePermalink?a("router-link",{attrs:{to:t.articleInfo.cataloguePermalink,title:t.articleInfo.classify1+"-目录页"}},[t._v(t._s(t.articleInfo.classify1))]):!1!==t.$themeConfig.category?a("router-link",{attrs:{to:"/categories/?category="+encodeURIComponent(t.articleInfo.classify1),title:"分类"}},[t._v("\n          "+t._s(t.articleInfo.classify1)+"\n        ")]):a("span",[t._v(t._s(t.articleInfo.classify1))])],1),t._v(" "),t.articleInfo.classify2?a("li",[t.articleInfo.cataloguePermalink?a("router-link",{attrs:{to:t.articleInfo.cataloguePermalink+"/#"+t.articleInfo.classify2,title:t.articleInfo.classify1+"#"+t.articleInfo.classify2}},[t._v("\n          "+t._s(t.articleInfo.classify2)+"\n        ")]):!1!==t.$themeConfig.category?a("router-link",{attrs:{to:"/categories/?category="+encodeURIComponent(t.articleInfo.classify2),title:"分类"}},[t._v("\n          "+t._s(t.articleInfo.classify2)+"\n        ")]):a("span",[t._v(t._s(t.articleInfo.classify2))])],1):t._e(),t._v(" "),t.articleInfo.classify3?a("li",[t.articleInfo.cataloguePermalink?a("router-link",{attrs:{to:t.articleInfo.cataloguePermalink+"/#"+t.articleInfo.classify3,title:t.articleInfo.classify1+"#"+t.articleInfo.classify3}},[t._v(t._s(t.articleInfo.classify3))]):!1!==t.$themeConfig.category?a("router-link",{attrs:{to:"/categories/?category="+encodeURIComponent(t.articleInfo.classify3),title:"分类"}},[t._v(t._s(t.articleInfo.classify3))]):a("span",[t._v(t._s(t.articleInfo.classify3))])],1):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"info"},[t.articleInfo.author?a("div",{staticClass:"author iconfont icon-touxiang",attrs:{title:"作者"}},[t.articleInfo.author.href||t.articleInfo.author.link&&"string"==typeof t.articleInfo.author.link?a("a",{staticClass:"beLink",attrs:{href:t.articleInfo.author.href||t.articleInfo.author.link,target:"_blank",title:"作者"}},[t._v("\n          "+t._s(t.articleInfo.author.name)+"\n        ")]):a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.articleInfo.author.name||t.articleInfo.author))])]):t._e(),t._v(" "),t.articleInfo.date?a("div",{staticClass:"date iconfont icon-riqi",attrs:{title:"创建时间"}},[a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.articleInfo.date))])]):t._e(),t._v(" "),!1===t.$themeConfig.category||t.articleInfo.classify1&&"_posts"!==t.articleInfo.classify1||!t.articleInfo.categories?t._e():a("div",{staticClass:"date iconfont icon-wenjian",attrs:{title:"分类"}},t._l(t.articleInfo.categories,(function(e,i){return a("router-link",{key:i,attrs:{to:"/categories/?category="+encodeURIComponent(e)}},[t._v("\n          "+t._s(e+" ")+"\n        ")])})),1)])])])}),[],!1,null,"18fb2c02",null);e.default=n.exports},335:function(t,e,a){"use strict";a.r(e);var i={data:()=>({pageData:null,isStructuring:!0}),created(){this.getPageData();const t=this.$themeConfig.sidebar;t&&"auto"!==t||(this.isStructuring=!1,console.error("目录页数据依赖于结构化的侧边栏数据，请在主题设置中将侧边栏字段设置为'structuring'，否则无法获取目录数据。"))},methods:{getPageData(){const t=this.$frontmatter.pageComponent;t&&t.data?this.pageData={...t.data,title:this.$frontmatter.title}:console.error("请在front matter中设置pageComponent和pageComponent.data数据")},getCatalogueList(){const{sidebar:t}=this.$site.themeConfig,e=t[`/${this.$frontmatter.pageComponent.data.key}/`];return e||console.error("未获取到目录数据，请查看front matter中设置的key是否正确。"),console.log(e),e},type:t=>Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase()},watch:{"$route.path"(){this.getPageData()}}},s=(a(315),a(1)),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-vdoing-content"},[a("div",{staticClass:"column-wrapper"},[a("img",{attrs:{src:t.$withBase(t.pageData.imgUrl)}}),t._v(" "),a("dl",{staticClass:"column-info"},[a("dt",{staticClass:"title"},[t._v(t._s(t.pageData.title))]),t._v(" "),a("dd",{staticClass:"description",domProps:{innerHTML:t._s(t.pageData.description)}})])]),t._v(" "),t.isStructuring?a("div",{staticClass:"catalogue-wrapper"},[a("div",{staticClass:"catalogue-title"},[t._v("目录")]),t._v(" "),a("div",{staticClass:"catalogue-content"},[t._l(t.getCatalogueList(),(function(e,i){return["array"===t.type(e)?a("dl",{key:i,staticClass:"inline"},[a("dt",[a("router-link",{attrs:{to:e[2]}},[t._v(t._s(i+1+". "+e[1]))])],1)]):"object"===t.type(e)?a("dl",{key:i},[a("dt",{attrs:{id:t.anchorText=e.title}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"+t.anchorText}},[t._v("#")]),t._v("\n            "+t._s(i+1+". "+e.title)+"\n          ")]),t._v(" "),a("dd",[t._l(e.children,(function(e,s){return["array"===t.type(e)?[a("router-link",{key:s,attrs:{to:e[2]}},[t._v(t._s(i+1+"-"+(s+1)+". "+e[1]))])]:"object"===t.type(e)?a("div",{key:s,staticClass:"sub-cat-wrap"},[a("div",{staticClass:"sub-title",attrs:{id:t.anchorText=e.title}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"+t.anchorText}},[t._v("#")]),t._v("\n                  "+t._s(i+1+"-"+(s+1)+". "+e.title)+"\n                ")]),t._v(" "),t._l(e.children,(function(e,n){return a("router-link",{key:i+1+"-"+(s+1)+"-"+(n+1),attrs:{to:e[2]}},[t._v("\n                  "+t._s(i+1+"-"+(s+1)+"-"+(n+1)+". "+e[1])+"\n                ")])}))],2):t._e()]}))],2)]):t._e()]}))],2)]):t._e()])}),[],!1,null,"1ec9a832",null);e.default=n.exports},336:function(t,e,a){"use strict";a.r(e);var i=a(279),s=a.n(i),n=a(12),r={name:"PageEdit",computed:{tags(){return this.$frontmatter.tags},lastUpdated(){return this.formatTime(this.$page.lastUpdated)},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=s()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:a="",docsBranch:i="master",docsRepo:n=e}=this.$site.themeConfig;return t&&n&&this.$page.relativePath?this.createEditLink(e,n,a,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,a,i,s){if(/bitbucket.org/.test(t)){return(n.j.test(e)?e:t).replace(n.b,"")+"/src"+`/${i}/`+(a?a.replace(n.b,"")+"/":"")+s+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}return(n.j.test(e)?e:"https://github.com/"+e).replace(n.b,"")+"/edit"+`/${i}/`+(a?a.replace(n.b,"")+"/":"")+s},formatTime(t,e){let a=String(new Date(t).toLocaleString()).match(/\d+/g);return e=(e=e||"{0}年{1}月{2}日 {3}时{4}分{5}秒").replace(/\{(\d+)\}/g,(t,e)=>{let i=a[e]||"00";return i.length<2&&(i="0"+i),i})}}},o=(a(323),a(1)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),!1!==t.$themeConfig.tag&&t.tags&&t.tags[0]?a("div",{staticClass:"tags"},t._l(t.tags,(function(e,i){return a("router-link",{key:i,attrs:{to:"/tags/?tag="+encodeURIComponent(e),title:"标签"}},[t._v("#"+t._s(e))])})),1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=l.exports},337:function(t,e,a){"use strict";a.r(e);a(18);var i=a(12),s=a(324),n=a.n(s),r=a(279),o=a.n(r),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return u(c.PREV,this)},next(){return u(c.NEXT,this)}},methods:{showTooltip(t){const e=document.body.clientWidth,a=t.clientX,i=t.target.querySelector(".tooltip");if(!i)return;const s=i.style;a<e/2?(s.right=null,s.left=a+10+"px"):(s.left=null,s.right=e-a+10+"px"),s.top=t.clientY+10+"px"}}};const c={NEXT:{resolveLink:function(t,e){return h(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return h(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function u(t,{$themeConfig:e,$page:a,$route:s,$site:r,sidebarItems:l}){const{resolveLink:c,getThemeLinkConfig:u,getPageLinkConfig:h}=t,g=u(e),f=h(a),d=o()(f)?g:f;return!1===d?void 0:n()(d)?Object(i.l)(r.pages,d,s.path):c(a,l)}function h(t,e,a){const i=[];!function t(e,a){for(let i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],a):a.push(e[i])}(e,i);for(let e=0;e<i.length;e++){const s=i[e];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[e+a]}}var g=l,f=(a(325),a(1)),d=Object(f.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-nav-wapper"},[!1!==t.$themeConfig.pageButton&&(t.prev||t.next)?a("div",{staticClass:"page-nav-centre-wrap"},[t.prev?a("router-link",{staticClass:"page-nav-centre page-nav-centre-prev",attrs:{to:t.prev.path},nativeOn:{mouseenter:function(e){return t.showTooltip(e)},mousemove:function(e){return t.showTooltip(e)}}},[a("div",{staticClass:"tooltip"},[t._v(t._s(t.prev.title||t.prev.path))])]):t._e(),t._v(" "),t.next?a("router-link",{staticClass:"page-nav-centre page-nav-centre-next",attrs:{to:t.next.path},nativeOn:{mouseenter:function(e){return t.showTooltip(e)},mousemove:function(e){return t.showTooltip(e)}}},[a("div",{staticClass:"tooltip"},[t._v(t._s(t.next.title||t.next.path))])]):t._e()],1):t._e(),t._v(" "),t.prev||t.next?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v(" "+t._s(t.next.title||t.next.path)+" ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=d.exports},338:function(t,e,a){"use strict";a.r(e);var i={data:()=>({headers:[],hashText:""}),watch:{$route(){this.headers=this.$page.headers,this.getHashText()}},mounted(){this.getHeadersData(),this.getHashText()},methods:{getHeadersData(){this.headers=this.$page.headers},getHashText(){this.hashText=decodeURIComponent(window.location.hash.slice(1))}}},s=(a(326),a(1)),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-menu-wrapper"},[a("div",{staticClass:"right-menu-margin"},[a("div",{staticClass:"right-menu-content"},t._l(t.headers,(function(e,i){return a("div",{key:i,class:["right-menu-item","level"+e.level,{active:e.slug===t.hashText}]},[a("a",{attrs:{href:"#"+e.slug}},[t._v(t._s(e.title))])])})),0)])])}),[],!1,null,null,null);e.default=n.exports},350:function(t,e,a){"use strict";a(327)},368:function(t,e,a){"use strict";a.r(e);var i=a(336),s=a(337),n=a(333),r=a(335),o=a(298),l=a(338),c=a(302),u={props:["sidebarItems"],components:{PageEdit:i.default,PageNav:s.default,ArticleInfo:n.default,Catalogue:r.default,UpdateArticle:o.default,RightMenu:l.default},mixins:[c.a],data:()=>({updateBarConfig:null}),computed:{bgStyle(){const{contentBgStyle:t}=this.$themeConfig;return t?"bg-style-"+t:""},isShowUpdateBar(){return!this.updateBarConfig||!1!==this.updateBarConfig.showToArticle},showTitle(){return!this.$frontmatter.pageComponent},showRightMenu(){return this.$page.headers&&!1!==(this.$frontmatter&&this.$frontmatter.sidebar&&!1!==this.$frontmatter.sidebar)},pageComponent(){return!!this.$frontmatter.pageComponent&&this.$frontmatter.pageComponent.name}},created(){this.updateBarConfig=this.$themeConfig.updateBar},methods:{isArticle(){return!1!==this.$frontmatter.article}}},h=(a(350),a(1)),g=Object(h.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("div",{class:"theme-vdoing-wrapper "+t.bgStyle},[t.isArticle()?a("ArticleInfo"):t._e(),t._v(" "),t.pageComponent?a(t.pageComponent,{tag:"component",staticClass:"theme-vdoing-content"}):t._e(),t._v(" "),a("div",{staticClass:"content-wrapper"},[t.showRightMenu?a("RightMenu"):t._e(),t._v(" "),t.showTitle?a("h1",[!1!==t.$themeConfig.titleBadge?a("img",{attrs:{src:t.currentBadge}}):t._e(),t._v(" "),a("span",[t._v("\n            "+t._s(this.$page.title)+"\n          ")])]):t._e(),t._v(" "),a("Content",{staticClass:"theme-vdoing-content"})],1),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),t.isShowUpdateBar?a("UpdateArticle",{attrs:{length:3,moreArticle:t.updateBarConfig&&t.updateBarConfig.moreArticle}}):t._e(),t._v(" "),t._t("bottom")],2)])}),[],!1,null,null,null);e.default=g.exports}}]);