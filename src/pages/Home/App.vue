<template>
  <div id="App" @scroll="handleScroll">
    <div id="scrollDots">
      <div @click="goToPage(1)">
        <div class="scrollDot" id="activedot"></div>
      </div>
      <div @click="goToPage(2)">
        <div class="scrollDot" id=""></div>
      </div>
      <div @click="goToPage(3)">
        <div class="scrollDot" id=""></div>
      </div>
    </div>
    <PageHeader></PageHeader>
    <InventorySearch/>
    
    <div id="fullpage">
      <div id="card_holder">
        Style 1 <br>
        (original)
        <VehicleCard 
        v-for="(car,index) in car_list"  
        :key="index"
        :carType="car.type"
        :year="car.year"
        :make="car.make"
        :model="car.model"
        :series="car.series"
        :milage="car.milage"
        :title="car.tite"
        :vin="car.vin"
        :carImg="car.carImg"
        :sale="car.onSale"
        :sold="car.sold"
        />
      </div>
    </div>
    <div id="fullpage">
      <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12714.724830658051!2d-93.36655444150506!3d37.1840463979456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf61b2e1dfde01%3A0x84db824ceb602bf6!2sPristine%20Auto%20Line!5e0!3m2!1sen!2sus!4v1669012717247!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

</template>

<script>

import PageHeader from '@/components/PageHeader.vue';
import VehicleCard from '@/components/VehicleCard.vue';
import InventorySearch from '@/components/InventorySearch.vue';
import carlist from '@/assets/carlist.json';

export default {
  name: 'App',
  components: {
    PageHeader,
    VehicleCard,
    InventorySearch,
},
  data(){
    return{
      car_list: [],
      pageList: [],
    }
  },
  methods: {
    handleScroll(e){
      var h = document.getElementById('App').scrollHeight;
      var section = (e.srcElement.scrollTop / h).toFixed(3);
      section = parseFloat(section);
      if(section > 0.45){
        //case 3
        this.pageList[0].id = "";
        this.pageList[1].id = "";
        this.pageList[2].id = "activedot";
        return;
      }
      if(section < 0.25)
      {
        //case 1
        this.pageList[0].id = "activedot";
        this.pageList[1].id = "";
        this.pageList[2].id = "";
        return;
      }
      else if(section < 0.45 || section > 0.33)
      {
        //case 2
        this.pageList[0].id = "";
        this.pageList[1].id = "activedot";
        this.pageList[2].id = "";
        return;
      }     

    },
    goToPage(pageNum){
      var h = document.getElementById('App');
      switch(pageNum){
        case 1:
            this.pageList[0].id = "activedot";
            this.pageList[1].id = "";
            this.pageList[2].id = "";
            h.scrollTop = 50;
            break;
          case 2:
            this.pageList[0].id = "";
            this.pageList[1].id = "activedot";
            this.pageList[2].id = "";
            h.scrollTop = 500;
            break;
          case 3:
            this.pageList[0].id = "";
            this.pageList[1].id = "";
            this.pageList[2].id = "activedot";
            h.scrollTop = 2000;
            break;
        }
    }
  },
  mounted(){
    this.car_list = carlist;
    this.pageList = document.getElementsByClassName('scrollDot');
  }
}
</script>

<style>
*{
  padding: 0; margin: 0;
  font-family: 'Poppins', sans-serif;
}
body,html{
  width: 100%; height: 100%;
}
#App{
  position: relative;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;

  width: 100vw; height: 100vh;
}
#card_holder{
  margin-top: 30px;
  width: 100%; height: calc(100% - 120px);
  display: flex; justify-content: center; align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}
#scrollDots{
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  gap: 10px;
  justify-content: center; align-items: center;
  transition: 0.5s ease;
  z-index: 999;
  transition: 0.2s ease;
  padding: 10px;
}
#scrollDots:hover{
  border-radius: 50px;
  background-color: rgba(0,0,0,0.5);
}
#scrollDots:hover>div>div{
  background-color: white;
  transition: 0.2s ease;
}
#scrollDots>div{
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex; justify-content: center; align-items: center;
}
.scrollDot{
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  transition: 0.1s ease;
  border: 1px solid rgba(255,255,255,0.5);
  transition: 0.2s ease;
}
.scrollDot:hover{
  width: 10px;
  height: 10px;
}
#activedot{
  width: 15px;
  height: 15px;
}
#fullpage{
  width: 100%; height: calc(100vh - 135px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex; justify-content: center;align-items: center;
  padding-top: 135px;

}
#map{
  width: 100%; height: 100%;
}
::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
</style>
