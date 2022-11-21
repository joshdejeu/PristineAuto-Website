<template>
    <div id="card">

      <div id="vehicleCard_img_parent">
        <div v-if="sale" id="saleIcon">SALE</div>
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
    props: [
      'carType',
      'year',
      'make',
      'model',
      'series',
      'mileage',
      'title',
      'vin',
      'carImg',
      'sale'
    ],
    components: {
      
    }
  }
</script>

<style>
#card{
  width: 230px; height: 330px;
  background-color: white; color: black;
  border: 1px solid rgb(186, 186, 186);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  position: relative;
}
#card::after{
  content: '';
  transition: 0.2s ease;
  color: white;
  cursor: pointer;
}
#card::before{
  transition: 0.2s ease;
}
#card:hover:after{
  content: '';
  display: flex; justify-content: center; align-items: center;
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
#card:hover:before{
  content: 'View Listing';
  display: flex; justify-content: center; align-items: center;
  position: absolute;
  left: 25%;
  top: 42%;
  margin-top: -0px;
  z-index: 2;
  width: 50%; height: 15%;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.5);
  border: 3px solid white;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
#saleIcon{
  position: absolute;
  top: 15px; left: 15px;
  padding: 6px; background-color: #337AB7;
  border-radius: 5px;
  font-size: 0.7em;
  color: white;
}
#vehicleCard_img_parent{
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center; align-items: center;
}
#vehicleCard_img{
  width: 90%; height: 90%;
  object-fit: cover;
  box-shadow:
  0px 0px 0px 4px white,
  0px 0px 0px 5px rgb(219, 219, 219);
  border-radius: 3px;
}
#vehicleCard_desc{
  display: flex;
  justify-content: center; align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 0.9em;
  padding-left: 15px; padding-right: 15px;
}
</style>
  