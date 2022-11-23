<template>
    <div v-if="isMobile" id="footer">
        <div id="option_center">
            <div class="footer_option active" @click="updateFooter(1)">
                <icon icon="fa-solid fa-house" class="icon_outline"/> 
            </div>
            <div class="footer_option" @click="updateFooter(2)">
                <icon icon="fa-solid fa-car" class="icon_outline"/>
            </div>
            <div class="footer_option" @click="updateFooter(3)">
                <icon icon="fa-solid fa-phone" class="icon_outline"/>
            </div>
            <div class="footer_option" @click="updateFooter(4)">
                <icon icon="fa-solid fa-sack-dollar" class="icon_outline"/>
            </div>

        </div>
    </div>
</template>

<script>

export default {
  name: 'PageFooterMobile',
  props:['isMobile'],
  components: {
    
  },
  methods:{
    updateFooter(elem){
        switch(elem){
            case 1:
                this.footerList[0].className = "footer_option active";
                this.footerList[1].className = "footer_option";
                this.footerList[2].className = "footer_option";
                this.footerList[3].className = "footer_option";
                break;
            case 2:
                this.footerList[0].className = "footer_option";
                this.footerList[1].className = "footer_option active";
                this.footerList[2].className = "footer_option";
                this.footerList[3].className = "footer_option";
                break;
            case 3:
                this.footerList[0].className = "footer_option";
                this.footerList[1].className = "footer_option";
                this.footerList[2].className = "footer_option active";
                this.footerList[3].className = "footer_option";
                break;
            case 4:
                this.footerList[0].className = "footer_option";
                this.footerList[1].className = "footer_option";
                this.footerList[2].className = "footer_option";
                this.footerList[3].className = "footer_option active";
                break;
        }
    }
  },
  mounted(){
    this.footerList = document.getElementsByClassName('footer_option');
  }
}
</script>

<style scoped>
#footer{
    width: 100vw;
    height: 70px;
    position: fixed;
    bottom: 0; left: 0;    
    z-index: 999;
    background-color: black;
    display: flex;
    justify-content: center;align-items: center;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
}
#option_center{
    width: 100%;
    max-width: 700px;
    height: 100%;
    display: flex;
    justify-content: space-around;align-items: center;
    position: relative;
}
.footer_option{
    height: 100%; width: 100%;
    /* aspect-ratio: 1 / 1; */
    /* border-radius: 50%; */
    background-color: rgb(5, 5, 5);
    color: gray;
    display: flex;
    justify-content: center; align-items: center;
    position: relative;
    font-size: 1.5em;
}
.active{
    background-color: rgb(24, 24, 24);
    position: relative;
    color: rgb(213, 27, 27);
    transition: 0.2s ease;
}
.active::after{
    content: '';
    position: absolute;
    width: 100%; height: 6px;
    background-color: rgb(213, 27, 27);
    top: 0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

/* Slightly Resized Screen Styles */
@media screen and (max-width: 1200px) {

}

/* Half-Screen Styles */
@media screen and (max-width: 900px) {

}

/* Mobile Styles */
@media screen and (max-width: 768px) {

}
</style>
