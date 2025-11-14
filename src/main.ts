import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router/router'
import { PrimeVue } from '@primevue/core'
import { Avatar, Badge, Button, Divider, Drawer, IconField, Image, InputIcon, InputText, OverlayBadge, Textarea } from 'primevue'
import Lara from '@primeuix/themes/lara'
import { definePreset } from '@primeuix/themes'

const app = createApp(App)
app.use(createPinia())

const Noir = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{zinc.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{zinc.900}',
                    activeColor: '{zinc.800}'
                },
                highlight: {
                    background: '{zinc.950}',
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{zinc.50}',
                    inverseColor: '{zinc.950}',
                    hoverColor: '{zinc.100}',
                    activeColor: '{zinc.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    },
    pt: {
        avatar: {
            image: 'object-cover shrink-0'
        }
    }
})
app.use(router)
app.component('Button', Button)
app.component('Avatar', Avatar)
app.component('Badge', Badge)
app.component('Drawer', Drawer)
app.component('OverlayBadge', OverlayBadge)
app.component('IconField', IconField)
app.component('InputIcon', InputIcon)
app.component('InputText', InputText)
app.component('Divider', Divider)
app.component('Textarea', Textarea)
app.component('Image', Image)
app.mount('#app')

