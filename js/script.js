new Vue ({
    el:"#app",
    data:{
        message:"ciao",
        immagine: src="img/dell.jpg",
        nome:"",
        
    },
    methods:{
        salutami:function(){
            alert(`ciao ${this.nome}`);

        }
    }
})