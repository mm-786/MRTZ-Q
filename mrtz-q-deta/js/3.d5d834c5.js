(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"25fe":function(t,e,a){t.exports=a.p+"img/new.44e4ff5e.png"},"63d8":function(t,e,a){t.exports=a.p+"img/hlw.7a5fc5b1.gif"},"8b24":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"bb bba",staticStyle:{"background-color":"rgba(247, 223, 118,0.1)",height:"100%"}},[e("div",{staticClass:"q-pa-lg flex flex-center",staticStyle:{display:"flex","justify-content":"space-between"}},[t.au?t._e():e("q-chip",{attrs:{round:""}},[e("q-avatar",{staticStyle:{"background-color":"#f76060","font-weight":"bold"},attrs:{"text-color":"white"}},[t._v(t._s(t.diff.length)+"\n      ")]),t._v("\n      New Quotes\n    ")],1),t.au?e("q-chip",{attrs:{round:""},on:{click:function(e){t.currPage=0}}},[e("q-avatar",{staticStyle:{"background-color":"#21d383","font-weight":"bold","font-size":"xx-large"},attrs:{"text-color":"white"},on:{click:function(e){t.currPage=0}}},[e("span",{staticClass:"material-icons",staticStyle:{"font-size":"xx-large"}},[t._v("\n          psychology_alt\n        ")])]),e("span",{on:{click:function(e){t.currPage=0}}},[t._v("Click to know About Me ")])],1):t._e(),e("img",{staticStyle:{"margin-right":"-57px","margin-top":"-35px"},attrs:{src:a("63d8"),width:"100"}}),e("div",{staticStyle:{position:"absolute","margin-top":"100px",right:"0px"}},[e("span",{staticStyle:{"background-color":"rgb(0, 0, 0)","font-size":"medium","font-weight":"500","letter-spacing":"0px",padding:"5px 20px",color:"#F7E36E",border:"4px solid #F7E36E","border-right":"none","border-radius":"25px 0px 0px 25px"}},[t._v(t._s(t.wish[t.wishIndex]))])])],1),t._l(t.allQuotes,(function(i,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:s==t.currPage-1&&0!=t.currPage,expression:"i==currPage-1 && currPage!=0"}],key:s,staticClass:"q-pa-md row items-start q-gutter-md",staticStyle:{"padding-bottom":"65px"}},t._l(i,(function(i,o){return e("q-card",{directives:[{name:"show",rawName:"v-show",value:i.status,expression:"qoute.status"}],key:i.key,staticClass:"my-card cards"},[t.diff.includes(i.key)?e("img",{staticStyle:{position:"absolute",width:"60px",margin:"-7px","z-index":"1"},attrs:{src:a("25fe"),width:"100"}}):t._e(),e("div",{staticStyle:{"text-align":"justify"}},[e("q-badge",{attrs:{color:"blue-grey-9",floating:""}},[t._v(t._s(10*s+o+1))]),e("br")],1),e("q-card-section",{staticStyle:{margin:"0px","margin-top":"10px",padding:"0px"}},[e("div",{staticClass:"box",domProps:{innerHTML:t._s(i.quote)}})]),e("span",{staticStyle:{color:"rgb(81, 80, 86)","font-weight":"bold","margin-left":"10px","margin-top":"20px"}},[t._v(t._s(t.timeFromNow(i.date)))])],1)})),1)})),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.currPage,expression:"currPage==0"}],staticClass:"q-pa-md row items-start q-gutter-md",staticStyle:{"padding-bottom":"65px"}},[e("q-card",{staticClass:"my-card cards2"},[e("q-card-section",{staticStyle:{margin:"0px",padding:"0px"}},[e("p",[t._v("\n          Hola..!"),e("br"),e("br"),t._v("\n          I'm a guy from the dry region of the state of Gujarat, which is well-known by the name of Kachchh. I am\n          currently living in the capital town of Kachchh. "),e("br"),e("br"),t._v("\n          I enjoy reading Shayari from well-known poets such as Mirza Ghalib, Meer Taqi Meer, Allama Iqbal, Nida\n          Fazli, Ahmad Faraz, and many more from Urdu literature. I also enjoy reading works by Mareez, Befam, Saif\n          Palanpuri, Khalil Dhantejvi, and many more from Gujarati literature. "),e("br"),e("br"),t._v("\n          In my daily life, I read many quotes and lines that express gentle and sarcastic thoughts of personalities.\n          I am inspired by\n          these quotes and lines, and I wish to express my thoughts in a similarly gentle and sarcastic form. My\n          thoughts are based on incidents I have faced, personalities i have met, and things i have read."),e("br"),e("br"),t._v("\n          That's enough about me for now! 😉\n\n\n\n          "),e("span",[t._v("ou can send you quotes to post on our site through email "),e("b",[e("a",[t._v("your-quotes@mrtz.in")])])])])])],1)],1),e("div",{staticClass:"abb",staticStyle:{position:"fixed","z-index":"2",width:"100%","max-width":"500px",bottom:"0px","background-color":"white"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"10px"}},[e("q-chip",{staticStyle:{"background-color":"rgb(81, 80, 86)",color:"white","font-size":"medium"},attrs:{square:""}},[e("q-avatar",{staticStyle:{"background-color":"#F7E36E",color:"rgb(81, 80, 86)","font-weight":"bold"},attrs:{"text-color":"black"}},[t._v(t._s(t.allQuotes.length)+"\n        ")]),t._v("\n        Total Page\n      ")],1),e("q-pagination",{attrs:{color:"black",max:t.allQuotes.length,"max-pages":3,ellipses:!1,"boundary-numbers":!1},model:{value:t.currPage,callback:function(e){t.currPage=e},expression:"currPage"}})],1)]),""!=t.text?e("q-footer",{staticStyle:{"max-width":"500px","background-color":"#F7E36E",height:"50px","margin-left":"auto","margin-right":"auto"},attrs:{elevated:""}},[e("q-toolbar",{staticStyle:{height:"100%"}},[e("q-toolbar-title",{staticStyle:{color:"rgb(81, 80, 86)","text-align":"center","letter-spacing":"2px"}},[t._v("\n        "+t._s(t.text)+"\n      ")])],1)],1):t._e()],2)},s=[],o=(a("14d9"),a("cee4")),r={name:"PageIndex",data(){return{quotes:{},old:[],diff:[],text:"",allQuotes:[],currPage:0,visitedPage:[],totl:0,au:0,apiKey:new Date,wish:["Hello","नमस्कार","لسَّلَامُ عَلَيْكُمْ","નમસ્તે","आदाब","Khamma Gani"],wishIndex:0,startTime:(new Date).toLocaleString("en-Us",{timeZone:"Asia/Kolkata"})}},watch:{currPage(){this.visitedPage.push(this.currPage),console.log(this.visitedPage);this.apiKey,this.startTime,this.visitedPage}},methods:{timeFromNow(t){const e=a("4208"),i=a("5a0c");i.extend(e),i().format();const s=i(t).fromNow();return s}},mounted(){setInterval((()=>{this.apiKey,this.startTime,(new Date).toLocaleString("en-Us",{timeZone:"Asia/Kolkata"});this.wishIndex+=1,this.wishIndex==this.wish.length&&(this.wishIndex=0)}),1e3),setInterval((()=>{0!=this.currPage?this.au=!this.au:this.au=!1}),1500),this.old=this.$store.state.kys;let t=this.$store.state.kys;0==t.length?(this.text="Welcome!",setTimeout((()=>{this.text=""}),3e3)):(this.text="Welcome Back!",setTimeout((()=>{this.text=""}),3e3));let e={method:"get",maxBodyLength:1/0,url:"https://mrtzq-1-x3287120.deta.app/get",headers:{}};o["a"].request(e).then((t=>{this.quotes=t.data,this.quotes.items=this.quotes.items.reverse(),this.$store.commit("quotes",this.quotes.items),this.totl=t.data.count;let e=[];this.quotes.items.forEach((t=>{e.push(t.key),this.$store.commit("key",e)}));let a=[],i=10;for(let o=0;o<this.quotes.items.length;o+=i)a.push(this.quotes.items.slice(o,o+i));this.currPage=1,this.allQuotes=a;let s=e.filter((t=>!this.old.includes(t)));this.diff=s,this.$forceUpdate()})).catch((t=>{console.log(t)}));let a=this.quotes.items.filter((t=>!this.old.includes(t)));console.log(a),this.diff=a,console.log(this.diff)}},n=r,l=(a("fd5c"),a("2877")),c=a("9989"),h=a("b047"),d=a("cb32"),u=a("f09f"),g=a("58a8"),m=a("a370"),p=a("3b16"),f=a("7ff0"),b=a("65c6"),x=a("6ac5"),y=a("eebe"),w=a.n(y),v=Object(l["a"])(n,i,s,!1,null,"dec9854e",null);e["default"]=v.exports;w()(v,"components",{QPage:c["a"],QChip:h["a"],QAvatar:d["a"],QCard:u["a"],QBadge:g["a"],QCardSection:m["a"],QPagination:p["a"],QFooter:f["a"],QToolbar:b["a"],QToolbarTitle:x["a"]})},baa3:function(t,e,a){},fd5c:function(t,e,a){"use strict";a("baa3")}}]);