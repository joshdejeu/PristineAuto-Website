<template>
    <div id="pagebg"></div>
    <div id="page">
        <div id="inventory_filter">
            <div id="inventory_search">
                <input type="text" id="inventory_searchbar" placeholder="Keyword Search">
                <button id="button_inventory_search">Search</button>
            </div>
            <div id="inventory_text">
                {{vehicleCount}} Vehicles Available
            </div>
            <div id="inventory_dropdowns">
                <div class="inventory_dropdown_parent">
                    <select name="inv_year" class="inventory_dropdown">
                        <option class="inventory_option" value="anyyear">Any Year</option>
                    </select>
                </div>
                <div class="inventory_dropdown_parent">
                    <select name="inv_make" class="inventory_dropdown">
                        <option class="inventory_option" value="anymake">Any Make</option>
                    </select>
                </div>
                <div class="inventory_dropdown_parent">
                    <select name="inv_model" class="inventory_dropdown">
                        <option class="inventory_option" value="anymodel">Any Model</option>
                    </select>
                </div>
            </div>
            <div id="inventory_search_button">
                <button id="button_inventory_search_button">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
import carlist from '@/assets/carlist.json';

export default {
    name: 'InventorySearch',
    components: {
      
    },
  data(){
    return{
        availableVehicles: 0,
        vehicleCount: 0,
    }
  },
  methods:{
    countVehicles(){
        if(this.vehicleCount>=this.availableVehicles){
            return;
        }
        setTimeout(() => {
            this.vehicleCount++;
            this.countVehicles();
        }, 100);
    }
  },
  mounted(){
    this.availableVehicles = carlist.length-1;
    this.countVehicles();
  }
}
</script>

<style scoped>
#pagebg{
    scroll-snap-align: start;
    scroll-snap-stop: always;
    position: relative;
    width: 100%; height: calc(100vh - 135px);
    padding-top: 135px;
    background: url('@/assets/home/compressed.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(50%);
    position: absolute;
}
#page{
    scroll-snap-align: start;
    scroll-snap-stop: always;
    position: relative;
    width: 100%; height: calc(100vh - 135px);
    padding-top: 135px;
    background: transparent;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
}
#inventory_filter{
    width: 40%;
    height: 50%;
    display: grid;
    grid-template-rows: repeat(4,1fr);
}
#inventory_search{
    display: flex;
    justify-content: center;
    align-items: center;
}
#inventory_searchbar{
    width: 50%; height: 30px;
    padding: 5px 10px;
    outline: none;
    border: 2.3px solid rgba(199, 199, 199, 0.8);
    background-color: rgba(236, 236, 236, 0.8);
    color: rgb(70, 70, 70);
}
#inventory_searchbar::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-weight: bold;
    color: rgb(70, 70, 70);
    opacity: 1; /* Firefox */
}
#inventory_searchbar:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgb(70, 70, 70);
    font-weight: bold;
}
#inventory_searchbar::-ms-input-placeholder { /* Microsoft Edge */
    color: rgb(70, 70, 70);
    font-weight: bold;
}
#button_inventory_search{
    width: 10%; height: calc(30px + 1em);
    padding: 5px 10px;
    cursor: pointer;
    color: white;
    border: none;
    background-color: rgb(213, 27, 27);
}
#inventory_text{
    display: flex;
    justify-content: center; align-items: center;
    font-size: 60px; color: white;
}
#inventory_dropdowns{
    display: flex; gap: 1em;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.inventory_dropdown_parent{
    height: 50%; width: 33%;
    display: flex;
    justify-content: center;align-items: center;
}
.inventory_dropdown{
    width: 100%; height: 100%;
    padding: 0px 10px;
    background-color: rgba(236, 236, 236, 0.8);
    color: black;
    border: none; outline: none;
    cursor: s-resize;
}
.inventory_dropdown{
    font-size: 1em;
    color: black;
}
#inventory_search_button{
    display: flex;
    justify-content: center; align-items: flex-start;
}
#button_inventory_search_button{
    width: 15%; height: calc(30px + 1em);
    padding: 5px 10px;
    font-size: 1em; font-weight: bold;
    background-color: rgb(213, 27, 27);
    color: white; cursor: pointer;
    border: none;
    transition: 0.1s ease;
}
#button_inventory_search:hover,#button_inventory_search_button:hover{
    background-color: rgb(187, 24, 24);
}




/* Odd Rules */
@media screen and (max-width: 1600px) {
    #button_inventory_search{
        width: 15%;
    }
    #button_inventory_search_button{
        width: 25%;
    }
}


/* Slightly Resized Screen Styles */
@media screen and (max-width: 1200px) {
    #inventory_filter{
        width: 80%;
    }
    #inventory_text{
        font-size: 45px;
    }
    #button_inventory_search{
        width: 10%;
    }
    #button_inventory_search_button{
        width: 20%;
    }
    .inventory_dropdown_parent{
        height: 70%;
    }
}

/* Half-Screen Styles */
@media screen and (max-width: 900px) {
    #inventory_filter{
        width: 90%;
    }
    #inventory_text{
        font-size: 40px;
    }
    #button_inventory_search{
        width: 20%;
    }
    #button_inventory_search_button{
        width: 30%;
    }
}

/* Mobile Styles */
@media screen and (max-width: 768px) {
    #inventory_filter{
        width: 100%;
    }
    #inventory_text{
        font-size: 35px;
    }
}
</style>
