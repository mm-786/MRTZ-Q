<template>
  <q-page class="" style="background-color: rgb(206, 206, 206);">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-editor v-model="editor" min-height="10rem" style="width: 100%;" toolbar-bg="grey" :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          'bold','italic', 'strike', 'underline', 'subscript', 'superscript', 'token', 'hr', 'link', 'custom_btn', 'fullscreen', 'undo', 'redo','removeFormat'
        ],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana',
              'brush'
            ]
          },
         
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent','viewsource'],
      ]" :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana',
        brush:'Brush Script MT'

      }" />

      <q-input v-model="pass" type="password" style="width: 100%;" label="Password" />

      <q-btn @click="putData()" style="background-color: black; color: white; width: 100%;">SUBMIT
      </q-btn>

    </div>

  </q-page>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'PageIndex',
    data() {
      return {
        editor: '',
        pass: '',
        key: 'MyHouse7806'
      }
    },
    methods: {
      putData() {
        if (this.pass == this.key) {
          const dayjs = require('dayjs')
          let s = {}
          const date = new Date().toLocaleString("en-Us", { timeZone: 'Asia/Kolkata' });
          let k = dayjs(date).valueOf()
          let kk = k.toString()
          // alert(typeof(k)+"-"+k+"-"+typeof(kk))
          s['key'] = kk
          s['date'] = date;
          s['quote'] = this.editor

        //  alert(JSON.stringify(s));

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
              this.editor="";
              this.pass="";
            })
            .catch((error) => {
              console.log(error);
            });


          // let data = {
          //   "quote": this.editor
          // };

          // let config = {
          //   method: 'post',
          //   maxBodyLength: Infinity,
          //   url: 'https://mrtzq-1-x3287120.deta.app/put',
          //   data: data
          // };

          // axios.request(config)
          //   .then((response) => {
          //     console.log(JSON.stringify(response.data));
          //     this.editor="";
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });

        }
        else {
          alert('Wrong password!')
        }
      }
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
    font-weight: 500;
    letter-spacing: 1px;
    background-color: rgba(247, 223, 118, 0.4);
  }

  .box {
    /* background-color: #F7DF76; */
    background-color: rgba(247, 223, 118, 0.5);
    margin: 2%;
    width: 96%;
    padding: 10px;
    word-wrap: break-word
  }
</style>