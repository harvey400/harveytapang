import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import '@/assets/main.css'


//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//Solid Icons
import { faPhone } from '@fortawesome/free-solid-svg-icons'
//Brand Icons
import { faVuejs, faJs } from '@fortawesome/free-brands-svg-icons'
library.add(faPhone, faVuejs, faJs);

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
