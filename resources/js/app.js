require('./vuetify');
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

window.Vuetify = require('vuetify');

Vue.use(Vuetify);


Vue.component('my-component', require('./components/Example-component.vue'));
Vue.component('app-footer', require('./components/AppFooter.vue'));
Vue.component('app-modal-search',require('./components/AppModalSearch.vue'));
Vue.component('app-asociado-create',require('./components/creditos/AppAsociadoCreate.vue'));
Vue.component('app-agregar-desembolso',require('./components/creditos/AppAgregarDesembolso'));
Vue.component('app-change-password',require('./components/login/AppChangePassword'));
Vue.component('app-update-account',require('./components/creditos/AppUpdateCuentaAsociado'));

/**
 * CREDITOS
 */
import routes from './routes/creditos_routes';

const router = new VueRouter({
    routes
});

const app_creditos = new Vue({
    router,
    el: '#creditos',
    data: ()=> {
        return {
            left_menu:false,
            dialog_search:false,
            actionsUser: [
                ['Cambiar contraseña', 'settings','/password'],
                ['Cerrar Sesión', 'exit_to_app','/logout'],

            ],
            menuCaseFile:[
                {title:'Cálculo y envio expediente', route:'/creditos/create'},
                {title:'Módulo de cálculo', route:'/creditos/calculate'},
            ],
            menuPartner:[
                {title:'Nuevo asociado' , route:'/asociado/create'},
                {title:'Buscar asociado' , route:'/asociado/show'}
            ],
            menuEnvios:[
                {id:1, title:'Expedientes a notario', route:'/envios',icon:'note'}
            ],
            menuReportes:[
                {id:1, title:'No liquidados > a 2 meses', route:'/no_liquidados',icon:'event'},
                {id:3, title:'Liquidados por notario', route:'/liquidados', icon:'done'},
            ],
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            expediente:'',
            expedienteRules:[
                v => !!v || 'Ingrese un número',
                v => v.length <=10 || 'ingrese menos de 10 digitos',
                v => /^[0-9]+$/.test(v)||'el número debe ser válido'
            ]

        };
    },
    methods:{
        buscarExpediente(){
            if(this.ValidarExpediente()){
                window.location.hash='/expediente/'+this.expediente;
                this.dialog_search=false;
                this.$refs.expediente.reset();
                this.expediente='';
            }
        },
        ValidarExpediente(){
            if(this.$refs.expediente.validate()){
                return true;
            }else{
                return false;
            }
        }

    }
});
