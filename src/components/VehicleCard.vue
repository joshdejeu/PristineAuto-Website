<template>
    <div id="card">

      <div id="vehicleCard_img_parent">
        <img :src="carImg" id="vehicleCard_img">
      </div>

      <div id="vehicleCard_desc">
        {{year}} {{make}} {{model}} {{ series}}
      </div>

      <div id="vehicleCard_price">
        <div>SALE PRICE</div>
        <div>LIST PRICE</div>
      </div>
        
    </div>
</template>
  
<script>
  
  export default {
    name: 'VehicleCard',
    props: ['carType','year','make','model','series','mileage','title','vin','carImg'],
    components: {
      
    }
  }
</script>

<style>
#card{
  width: 200px; height: 300px;
  background-color: black; color: white;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
#vehicleCard_img_parent{

}
#vehicleCard_img{
  width: 100%; height: 100%;
  object-fit: cover;
}
#vehicleCard_desc{
  display: flex;
  justify-content: center; align-items: center;
  text-align: center;
}
</style>
  