<template>
  <PageHeader></PageHeader>
  
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
  
  <div id="card_holder">
    Style 2
    <CardNum2 
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

  <div id="card_holder">
    Style 3
    <CardNum3 
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
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import VehicleCard from '@/components/VehicleCard.vue';
import CardNum2 from '@/components/CardNum2.vue';
import CardNum3 from '@/components/CardNum3.vue';
import carlist from '@/assets/carlist.json';

export default {
  name: 'App',
  components: {
    PageHeader,
    VehicleCard,
    CardNum2, CardNum3,
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
#card_holder{
  margin-top: 30px;
  width: 100%; height: calc(100% - 120px);
  display: flex; justify-content: center; align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}


</style>
