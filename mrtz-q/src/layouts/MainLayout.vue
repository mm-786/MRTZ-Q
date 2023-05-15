<template>
  <q-layout view="lHh Lpr lFf" style="max-width: 500px; margin-left: auto; margin-right: auto; overflow-x: hidden;">
    <q-header class="abb" elevated style="max-width: 500px; height: max-content; margin-left: auto; margin-right: auto;">
      <q-toolbar style="height: 100%;">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          MRTZ's Quotes 
        /> -->

        <q-toolbar-title style="color:#F7E36E;">
          <img  @dblclick="$router.push('/')" style="padding: 5px;" src="../../public/ttl.svg" width="150" />
        </q-toolbar-title>

        <div>
          <img @dblclick="$router.push('/add')" style="padding: 5px;" src="../../public/logo.svg" width="50" />
        </div>
      </q-toolbar>
      
        <q-toolbar-title style="color:#F7E36E;">
        <marquee v-if="status" behavior="alternate" style=" font-weight: 400; border-top: 2px dashed #F7E36E; letter-spacing: 3px; font-size: large;">{{text}}</marquee></q-toolbar-title>
    
    </q-header>

   
    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <div v-if="wish" style="background-color: rgba(0, 0, 0,0.5); border-radius: 10px; padding: 15px; width: 80%; margin: 10%; margin-top: 80px; text-align:  center; color: bisque; position: absolute; z-index: 10;">
        <span>sdsjdsjhkj</span>
      </div>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
import axios from 'axios';


export default {
  name: 'MainLayout',
  components: {
    // EssentialLink
  },
  data () {
    return {
      text:'',
      status:0,
      wish:false,
    }
  },
  mounted(){

    
   axios.get('https://mrtzq-1-x3287120.deta.app/wish').then(r=>{
     this.text = r.data.wish
     this.status = r.data.status
   })
  }
}
</script>

<style>
  /* .bb{
    background-image: url("../../public/b.png");
  } */


  </style>
