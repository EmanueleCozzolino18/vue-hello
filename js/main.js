const { createApp } = Vue

createApp({
    data() {
        return {
            benvenuto: 'Benvenuto Vue',
            immagine: 'https://m.media-amazon.com/images/I/816xM732cvL.jpg'
        }
    }
}).mount('#app')