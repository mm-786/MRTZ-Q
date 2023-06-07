<template>
  <q-page class="bb bba" style="background-color: rgba(247, 223, 118,0.1); height: 100%;">
    <div class="q-pa-lg flex flex-center" style="display: flex; justify-content: space-between;">
      <q-chip v-if="!au" round>
        <q-avatar @dblclick="currPage = 1" style="background-color: #f76060; font-weight: bold;" text-color="white">
          {{diff.length}}
        </q-avatar>
        New Quotes
      </q-chip>

      <q-chip v-if="au" @click="currPage=0" round>
        <q-avatar @click="currPage=0" style="background-color: #21d383; font-weight: bold; font-size: xx-large;"
          text-color="white"><span style="font-size: xx-large;" class="material-icons">
            psychology_alt
          </span>
        </q-avatar>
        <span @click="currPage=0">Click to know About Me </span>
      </q-chip>

      <img src="../../public/hlw.gif" width="100" style="margin-right: -57px; margin-top: -35px;" />

      <div style="position: absolute; margin-top: 100px; right: 0px;">
        <span
          style="background-color: rgb(0, 0, 0); font-size: medium; font-weight: 500; letter-spacing: 0px; padding: 5px 20px; color: #FFFFFF; border:4px solid #FFFFFF; border-right:none ; border-radius: 25px 0px 0px 25px;">{{wish[wishIndex]}}</span>
      </div>

      <div style="position: absolute; margin-top: 100px; left: 0px;">
        <span v-if="currPage!=-1" @click="currPage=-1"
          style="background-color: rgb(255, 255, 255); font-size: medium; font-weight: 500; letter-spacing: 0px; padding: 5px 20px; color: #000000; border:4px solid #000000; border-left:none ; border-radius: 0px 25px 25px 0px;">View
          Saved</span>

        <span v-else @click="currPage= visitedPage[visitedPage.length-2]"
          style="background-color: rgb(255, 255, 255); font-size: medium; font-weight: 500; letter-spacing: 0px; padding: 5px 20px; color: #000000; border:4px solid #000000; border-left:none ; border-radius: 0px 25px 25px 0px;">
          View All
        </span>
      </div>
    </div>

   

    <!-- Saved start -->
    <div class="q-pa-md row items-start q-gutter-md" style="padding-bottom: 65px;" :key="i" v-show="currPage==-1">
      <q-card class="my-card cards" v-for="qoute in quotes.items" :key="qoute.key" v-show="quotesLike[qoute.key]">
        <img v-if="diff.includes(qoute.key)" src="../../public/new.png" width="100"
          style="position: absolute; width: 60px; margin: -7px; z-index: 1;" />
        <div style="text-align: justify;">
          <br />
        </div>
        <q-card-section style="margin: 0px; margin-top: 10px; padding: 0px;">


          <div class="box" v-html="qoute.quote">
          </div>

        </q-card-section>
        <span
          style="font-weight: bold; float: right; font-size: small; margin-right: 10px;">{{timeFromNow(qoute.date)}}</span>

        <q-icon v-if="quotesLike[qoute.key]" @click="saveQuote(1,qoute.key)"
          style="margin-left: 10px; font-size: x-large;" name="turned_in" />
        <q-icon v-else @click="saveQuote(0,qoute.key)" style="margin-left: 10px; font-size: x-large;"
          name="turned_in_not" />
      </q-card>

    </div>
    <!-- end -->

    <!-- new start-->
    <!-- <div class="row" style="padding-bottom: 25px; padding-top: 15px;" :key="i">

      <div class="col-4" v-for="qoute,i in quotes.items" :key="qoute.key"
        v-show="diff.includes(qoute.key) && currPage != parseInt(i/10)+1">

        <q-card @click="currPage = parseInt(i/10)+1"
          style="font-weight: bold; margin:5px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center;">

          <div style="width: 100%; background-color: rgb(255, 224, 87); padding: 3px; color: #f76060;">
            NEW QUOTE
          </div>

          <q-card-section
            style="margin: 0px; font-weight: bold; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center; padding: 2px;">

            <span v-html="GetPage(i)"
              style="font-size: smaller; margin-bottom: 10px; color: rgb(130, 130, 221);"></span>
          </q-card-section>

          <div v-if="currPage==parseInt(i/10)+1"
            style="width: 100%; background-color: rgb(41, 93, 6); padding: 3px; color: #FFFFFF;">
            On Page {{parseInt(i/10)+1}}
          </div>
          <div v-else style="width: 100%; background-color: rgb(129, 19, 11); padding: 3px; color: #FFFFFF;">
            View page {{parseInt(i/10)+1}}
          </div>

        </q-card>
      </div>

    </div> -->
    <!-- end -->



    <div class="q-pa-md row items-start q-gutter-md" style="padding-bottom: 65px;" v-for="quotes,i in allQuotes"
      :key="i" v-show="i==currPage-1 && currPage!=0">
      <q-card class="my-card cards" v-for="qoute,ii in quotes" :key="qoute.key">
        <img v-if="diff.includes(qoute.key) && qoute.status==0" src="../../public/new.png" width="100"
          style="position: absolute; width: 60px; margin: -7px; z-index: 1;" />

        <div style="text-align: right;">
          <!-- <span style="margin-right: 25px;"><b>Quote Id- </b>{{qoute.key}}</span> -->
          <q-badge color="blue-grey-9" floating>#{{i*10 +
            ii+1}}<span style="opacity: 0.5;">/{{totl}}</span></q-badge>
          <!-- <span
            style="color:rgb(72, 53, 53); float: left; font-weight: bold; margin-left: 10px; margin-top: 0px;">{{i*10 +
            ii+1}}</span> -->
          <br />
        </div>
        <q-card-section class="" style="margin: 0px; margin-top: 10px; padding: 0px;">


          <div class="box" v-html="qoute.quote">
          </div>

        </q-card-section>
        <div style="display: flex; justify-content: space-between;">


          <q-icon v-if="quotesLike[qoute.key]" @click="saveQuote(1,qoute.key)"
            style="margin-left: 10px; font-size: x-large;" name="turned_in" />
          <q-icon v-else @click="saveQuote(0,qoute.key)" style="margin-left: 10px; font-size: x-large;"
            name="turned_in_not" />

          <!-- <span style="font-weight: 200;"><b>#</b>{{qoute.key/1000*9999}}</span> -->

          <span
            style="font-weight: bold; float: right; font-size: small; margin-right: 10px;">{{timeFromNow(qoute.date)}}</span>
        </div>
      </q-card>

    </div>

    <div class="q-pa-md row items-start q-gutter-md" style="padding-bottom: 5px;" v-show="currPage==0">
      <!-- <img src="../../public/my.jpg" style="width: 15%; border-radius: 50%; border: 5px solid rgba(250, 240, 230, 1); opacity: 1; left:37.5%; margin-top: -5%; z-index: 2; position: absolute;" width="100px"/>  -->
      <q-card class="my-card cards2">
        <q-card-section class="cc" style="margin: 0px; padding: 0px;">
          <div class="q-pa-md" style="float: right;">
            <q-btn-dropdown color="primary" label="Language">
              <q-list>
                <q-item clickable v-close-popup @click="lang='e'; visitedPage.push('e')">
                  <q-item-section>
                    <q-item-label>English</q-item-label>
                  </q-item-section>
                </q-item>
        
                <q-item clickable v-close-popup @click="lang='g'; visitedPage.push('g')">
                  <q-item-section>
                    <q-item-label>Gujarati</q-item-label>
                  </q-item-section>
                </q-item>
        
                <q-item clickable v-close-popup @click="lang='h'; visitedPage.push('h')">
                  <q-item-section>
                    <q-item-label>Hindi</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <br>
          <br>
          <br>

          <p v-if="lang=='e'">
            Hola..!
            <br><br>
            I'm a guy from the dry region of the state of Gujarat, which is well-known by the name of Kachchh. I am
            currently living in the capital town of Kachchh. <br><br>
            I enjoy reading Shayari from well-known poets such as Mirza Ghalib, Meer Taqi Meer, Allama Iqbal, Nida
            Fazli, Ahmad Faraz, and many more from Urdu literature. I also enjoy reading works by Mareez, Befam,
            Saif
            Palanpuri, Khalil Dhantejvi, and many more from Gujarati literature. <br><br>
            In my daily life, I read many quotes and lines that express gentle and sarcastic thoughts of
            personalities.
            I am inspired by
            these quotes and lines, and I wish to express my thoughts in a similarly gentle and sarcastic form. My
            thoughts are based on incidents I have faced, personalities i have met, and things i have read.<br><br>
            That's enough about me for now! 😉<br /><br />

            <br />



            <!-- <span>You can send you quotes to post on our site through email <b><a>your-quotes@mrtz.in</a></b></span> -->
          </p>

          <p v-else-if="lang=='g'">
            હેલો..!<br><br>

            હું ગુજરાત રાજ્યના સૂકા પ્રદેશનો એક વ્યક્તિ છું, જે કચ્છના નામથી જાણીતો છે. હું હાલમાં કચ્છના પાટનગર શહેરમાં
            રહું છું.<br><br>

            મને મિર્ઝા ગાલિબ, મીર તકી મીર, અલ્લામા ઈકબાલ, નિદા ફાઝલી, અહમદ ફરાઝ અને ઉર્દૂ સાહિત્યના ઘણા જાણીતા કવિઓની
            શાયરી વાંચવાની મજા આવે છે. મને ગુજરાતી સાહિત્યમાંથી મારીઝ, બેફામ, સૈફ પાલનપુરી, ખલીલ ધનતેજવી અને બીજા ઘણાની
            રચનાઓ વાંચવાની પણ મજા આવે છે.<br><br>

            મારા રોજિંદા જીવનમાં, હું ઘણા અવતરણો અને રેખાઓ વાંચું છું જે વ્યક્તિત્વના સૌમ્ય અને વ્યંગાત્મક વિચારોને
            વ્યક્ત કરે છે. હું આ અવતરણો અને પંક્તિઓથી પ્રેરિત છું, અને હું મારા વિચારોને એવા જ સૌમ્ય અને વ્યંગાત્મક
            સ્વરૂપમાં વ્યક્ત કરવા ઈચ્છું છું. મારા વિચારો મેં અનુભવેલી ઘટનાઓ, મને મળેલી વ્યક્તિત્વો અને મેં વાંચેલી
            વસ્તુઓ પર આધારિત છે.<br><br>

            મારા વિશે હમણાં પૂરતું છે! 😉<br><br><br>
          </p>

          <p v-else-if="lang=='h'">
            नमस्ते..!<br><br>

            मैं गुजरात राज्य के सूखे इलाके का आदमी हूं, जो कच्छ के नाम से मशहूर है। मैं वर्तमान में राजधानी शहर कच्छ में
            रह रहा हूं।<br><br>

            मुझे मिर्ज़ा ग़ालिब, मीर तकी मीर, अल्लामा इकबाल, निदा फ़ाज़ली, अहमद फ़राज़ और उर्दू साहित्य के कई अन्य
            प्रसिद्ध कवियों की शायरी पढ़ने में मज़ा आता है। मुझे मरीज़, बेफाम, सैफ पालनपुरी, खलील धनतेजवी, और गुजराती
            साहित्य से कई अन्य लोगों के कार्यों को पढ़ने में भी आनंद आता है।<br><br>

            अपने दैनिक जीवन में, मैं कई उद्धरण और पंक्तियाँ पढ़ता हूँ जो व्यक्तित्वों के कोमल और व्यंग्यात्मक विचारों को
            व्यक्त करते हैं। मैं इन उद्धरणों और पंक्तियों से प्रेरित हूं, और मैं अपने विचारों को उसी तरह कोमल और
            व्यंग्यात्मक रूप में व्यक्त करना चाहता हूं। मेरे विचार उन घटनाओं पर आधारित हैं जिनका मैंने सामना किया है,
            जिन व्यक्तियों से मैं मिला हूं, और जिन चीजों को मैंने पढ़ा है।<br><br>

            अभी के लिए मेरे लिए इतना ही काफी है! 😉<br><br><br>
          </p>
          <p v-else style="text-align:center;">
          <br>
            Select language<br><br>ભાષા પસંદ કરો<br><br>भाषा चुने
          </p>
        </q-card-section>
      </q-card>

    </div>

    <div style="padding-bottom: 60px; text-align: center; font-weight: 500; letter-spacing: 3px;">
      © 2023 MRTZ's Quotes. All rights reserved.
    </div>

    <div class="abb"
      style="position: fixed; z-index: 2; width: 100%; max-width: 500px; bottom: 0px; background-color: white;">
      <div class="" style="display: flex; justify-content: space-between; padding: 10px;">

        <q-chip square style="background-color: rgb(178, 178, 178); color: black; font-size: medium;">
          <q-avatar @dblclick="currPage = allQuotes.length"
            style="background-color:#000; color: rgb(81, 80, 86); font-weight: bold;" text-color="white">
            {{allQuotes.length}}
          </q-avatar>
          Total Page
        </q-chip>

        <q-pagination v-model="currPage" color="black" :max="allQuotes.length" :max-pages="3" :ellipses="false"
          :boundary-numbers="false" />
      </div>

    </div>
    <q-footer v-if="text!=''" elevated
      style="max-width: 500px; background-color:#FFFFFF; height: 50px; margin-left: auto; margin-right: auto; ">
      <q-toolbar style="height: 100%;">
        <q-toolbar-title style="color:rgb(81, 80, 86); text-align: center; letter-spacing: 2px;">
          {{text}}
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
  import axios from 'axios';



  export default {
    name: 'PageIndex',
    data() {
      return {
        quotes: {},
        old: [],
        diff: [],
        text: '',
        allQuotes: [],
        quotesLike: this.$store.state.like,
        currPage: 0,
        visitedPage: [],
        totl: 0,
        au: 0,
        c: 0,
        lang:'',
        likeKey: 'xxx',
        apiKey: new Date(),
        wish: ['Hello', 'नमस्कार', 'لسَّلَامُ عَلَيْكُمْ', 'નમસ્તે', 'आदाब', 'Khamma Gani'],
        wishIndex: 0,
        startTime: new Date().toLocaleString("en-Us", { timeZone: 'Asia/Kolkata' }),
      }
    },
    watch: {
      // whenever question changes, this function will run
      currPage() {
        this.visitedPage.push(this.currPage)
        console.log(this.visitedPage);
        let data = {
          "key": this.apiKey,
          "startTime": this.startTime,
          "list": this.visitedPage
        };

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://mrtzq-1-x3287120.deta.app/pv',
          data: data
        };


        axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });


      }
    },
    methods: {

      GetPage(n) {
        let page = parseInt(n / 10) + 1

        return "On Page " + page + "<br>Quote No. " + parseInt(n + 1)
      },

      ins(d) {
        const dayjs = require('dayjs')
        // let d = this.quotes.items[i]
        let s = {}
        let k = dayjs(d.key).valueOf()
        let kk = k.toString()
        // alert(typeof(k)+"-"+k+"-"+typeof(kk))
        s['key'] = kk
        s['date'] = d.date;
        s['quote'] = d.quote
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://mrtzq-1-x3287120.deta.app/tsq',
          data: s
        };

        axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            console.log(response.data.key)
            // this.editor="";
          })
          .catch((error) => {
            console.log(error);
          });
      },

      timeFromNow(d) {
        const relativeTime = require('dayjs/plugin/relativeTime');
        const dayjs = require('dayjs')
        dayjs.extend(relativeTime)
        dayjs().format()
        const a = dayjs(d).fromNow();
        return a
      },
      saveQuote(mode, id) {
        if (mode == 0) {
          this.quotesLike[id] = true
        }
        else {
          this.quotesLike[id] = false
        }
        this.$store.commit('like', this.quotesLike)

        let data = JSON.stringify({
          "key": this.likeKey,
          "list": this.quotesLike
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://main.mrtz.in/lk',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };


        axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });

      }
    },
    mounted() {


      setInterval(() => {
        let data = {
          "key": this.apiKey,
          "startTime": this.startTime,
          "endTime": new Date().toLocaleString("en-Us", { timeZone: 'Asia/Kolkata' })
        };

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://mrtzq-1-x3287120.deta.app/ts',
          data: data
        };

        axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });


        this.wishIndex += 1;
        if (this.wishIndex == this.wish.length) {
          this.wishIndex = 0;
        }

      }, 1000);

      setInterval(() => {
        if (this.currPage != 0) {
          this.au = !this.au
        }
        else {
          this.au = false;
        }
      }, 1500);

      this.old = this.$store.state.kys;
      // console.log(this.old);

      let a = this.$store.state.kys

      if (a.length == 0) {
        this.text = "Welcome!"
        setTimeout(() => {
          this.text = ''
        }, 3000);
      }
      else {
        this.text = "Welcome Back!"
        setTimeout(() => {
          this.text = ''
        }, 3000);
      }

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://mrtzq-1-x3287120.deta.app/get',
        headers: {}
      };

      axios.request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          this.startTime = new Date().toLocaleString("en-Us", { timeZone: 'Asia/Kolkata' });
          this.quotes = response.data;
          this.quotes.items = this.quotes.items.reverse();
          this.$store.commit('quotes', this.quotes.items);
          // this.put();
          this.totl = response.data.count
          let k = [];
          this.quotes.items.forEach(element => {
            k.push(element.key);
            // this.timeFromNow(element.date)
            this.$store.commit('key', k)
          });

          let temp = [];
          let chunk = 10;
          for (let i = 0; i < this.quotes.items.length; i += chunk) {
            temp.push(this.quotes.items.slice(i, i + chunk))
          }
          // console.log(temp);


          this.currPage = 1;
          this.allQuotes = temp;

          let difference = k.filter(x => !this.old.includes(x));
          console.log(difference);
          this.diff = difference;
          // this.diff = ['5/9/2023, 9:30:11 PM','5/8/2023, 8:05:30 PM','5/6/2023, 8:07:46 PM']
          this.$forceUpdate()
        })
        .catch((error) => {
          console.log(error);
        });


      let difference = this.quotes.items.filter(x => !this.old.includes(x));
      console.log(difference);
      this.diff = difference
      console.log(this.diff);

    }
  }
</script>
<style scoped>
  .cards {
    width: 100%;
    max-width: 100%;
    border: 2px solid black;
    border-radius: 15px 5px 5px 5px;
    text-align: justify;
    letter-spacing: 1px;
    background-color: rgba(84, 83, 78, 0.2);

  }



  .cards-new {
    border: 2px solid rgb(255, 224, 87);
    border-radius: 15px;
    text-align: justify;
    letter-spacing: 1px;
    background-color: rgba(218, 217, 214, 0.8);
  }

  .cards2 {
    width: 100%;
    max-width: 100%;
    height: max-content;
    padding: 10px;
    font-size: medium;
    border-radius: 10px;
    text-align: justify;
    letter-spacing: 2px;
    font-weight: 500;
    border: 5px solid rgba(250, 240, 230, 1);
    background-color: rgba(250, 240, 230, 0.8);
  }

  .box {
    /* background-color: #F7DF76; */
    /* background-color: rgba(247, 223, 118, 0.7); */
    background-color: black;
    color: white;
    border-radius: 15px 5px 5px 5px;
    /* border:2px solid rgb(98, 98, 98) ; */
    margin: 2%;
    width: 96%;
    padding: 10px;
    word-wrap: break-word
  }

  /* .cbb:before {
    content: " ";
    background-image: url("../../public/b.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    opacity: .4;
    z-index: -1;
  } */

  .bb {
    background-image: url("../../public/b.png");
    /* background-size: contain; */
    background-size: cover;
  }






  .abb:before {
    content: " ";
    background-image: url("../../public/s.svg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 58px;
    max-width: 500px;
    z-index: -1;
  }
</style>