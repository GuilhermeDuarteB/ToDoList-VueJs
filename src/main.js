import { createApp } from 'vue'
import {createPinia} from 'pinia'
import router from '../router/index.js'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHouse } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faUser, faHouse, faLinkedin)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')