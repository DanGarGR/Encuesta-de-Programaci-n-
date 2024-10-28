const inst = {
    data() {
        return {
            legustaPro: '',
            lenguajesSeleccionados: [],
            aniosExperiencia: 0,
            objetivoProgramacion: '',
            proyectoFavorito: '',
            mostrarResultados: false
        };
    },
    methods: {
        mostrarResultadosFinales() {
            this.mostrarResultados = true;
        }
    }
};

const app = Vue.createApp(inst).mount('#componente');
