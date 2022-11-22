<template>
    <div v-if="isMobile" id="footer">
        <div id="option_center">
            <div class="footer_option">
                <font-awesome-icon icon="fa-regular fa-house" />            </div>
            <div class="footer_option">
                <font-awesome-icon icon="fa-solid fa-house" />
            </div>
            <div class="footer_option"></div>
            <div class="footer_option"></div>

        </div>
    </div>
</template>

<script>

export default {
  name: 'PageFooterMobile',
  props:['isMobile'],
  components: {
    
  }
}
</script>

<style scoped>
#footer{
    width: 100vw;
    height: 100px;
    position: fixed;
    bottom: 0; left: 0;    
    z-index: 999;
    background-color: white;
    display: flex;
    justify-content: center;align-items: center;
}
#option_center{
    width: 100%;
    max-width: 700px;
    height: 100%;
    display: flex;
    justify-content: space-around;align-items: center;
}
.footer_option{
    height: 90%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.045);
    color: gray;
    display: flex;
    justify-content: center; align-items: center;
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
