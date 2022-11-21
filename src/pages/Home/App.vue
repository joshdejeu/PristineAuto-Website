<template>
  <div id="App">
    <div id="scrollDots">
      <div class="scrollDot" id="activedot"></div>
      <div class="scrollDot"></div>
      <div class="scrollDot"></div>
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12714.724830658051!2d-93.36655444150506!3d37.1840463979456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf61b2e1dfde01%3A0x84db824ceb602bf6!2sPristine%20Auto%20Line!5e0!3m2!1sen!2sus!4v1669012717247!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    }
  },
  methods: {

  },
  mounted(){
    this.car_list = carlist;
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
  left: 25px;
  top: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  gap: 15px;
  justify-content: center; align-items: center;
  transition: 0.5s ease;
}
.scrollDot{
  background-color: rgba(0, 0, 0, 0.427);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  cursor: pointer;
  transition: 0.1s ease;
}
.scrollDot:hover{
  width: 15px;
  height: 15px;
}
#activedot{
  width: 20px;
  height: 20px;
}
#fullpage{
  width: 100%; height: calc(100vh - 100px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex; justify-content: center;align-items: center;
}

</style>
