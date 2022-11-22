/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './pages/Home/App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faCar, 
    faHouse
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCar, faHouse)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


