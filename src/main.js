import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import '@/assets/main.css'


//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//Solid Icons
import { faFile } from '@fortawesome/free-solid-svg-icons'
//Brand Icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faFile, faLinkedin, faGithub);

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
