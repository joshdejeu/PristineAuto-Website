<template>
    <div id="card">

      <div id="vehicleCard_img_parent">
        <div v-if="sale" id="saleIcon">SALE</div>
        <div v-if="sold" id="saleIconSOLD">SOLD</div>
        <img :src="carImg" id="vehicleCard_img">
      </div>

      <div id="vehicleCard_desc">
        {{year}} {{make}} {{model}} {{ series}}
      </div>

      <div id="vehicleCard_price">
        <div id="vehicleCard_salePrice">
          <div id="saleprice_text">SALE PRICE</div>
          <div id="saleprice">19999</div>
        </div>
        <div id="vehicleCard_listPrice">
          <div id="listprice_text">LIST PRICE</div>
          <div id="listprice">29999</div>
        </div>
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
      'sale',
      'sold'
    ],
    components: {
      
    }
  }
</script>

<style scoped>
#card{
  max-width: 230px; max-height: 330px;
  min-width: 230px; min-height: 330px;
  background-color: white; color: black;
  border: 1px solid rgb(186, 186, 186);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  position: relative;
  flex: 50%;
}
#card::after{
  content: '';
  transition: 0.2s ease;
  color: white;
  cursor: pointer;
  z-index: 3;
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
  z-index: 4;
  width: 50%; height: 15%;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.5);
  border: 3px solid white;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
#saleIcon{
  background-color: #337AB7;
}
#saleIconSOLD{
  background-color: #d92525;
}
#saleIcon,#saleIconSOLD{
  position: absolute;
  top: 15px; left: 15px;
  padding: 6px;
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
#vehicleCard_price{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;
  margin-left: 20px;
  padding-right: 20px;
  position: relative;
  background: linear-gradient(40deg,#e7e7e7 50%,#F2F2F2 45%);
  overflow: hidden;
  background-clip: content-box;
}

#vehicleCard_listPrice{
  width: 100%; height: 50%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center; align-items: center;
  z-index: 2;
}
#listprice_text{
  padding-left: 5px;
  font-size: 0.75em;
}
#listprice{
  font-size: 1em;
  padding-right: 10px;
  text-decoration: line-through;
  position: relative;
}
#listprice::after{
  content: '$';
  position: absolute;
  top: 0; left: 0;
  margin-left: -7px;
  margin-top: -3px;
  font-size: 0.75em; font-weight: bold; 
}
#vehicleCard_salePrice{
  width: 100%; height: 50%;
  padding-top: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center; align-items: center;
  color: rgb(192, 54, 54);
  z-index: 2;
}
#saleprice_text{
  width: 100%;
  height: 100%;
  font-size: 0.75em;
  padding-left: 5px;
}
#saleprice{
  font-size: 1.1em;
  padding-right: 10px;
  position: relative;
}
#saleprice::after
{
  content: '$';
  position: absolute;
  top: 0; left: 0;
  margin-left: -7px;
  margin-top: -3px;
  font-size: 0.75em; font-weight: bold; 
}
</style>
  