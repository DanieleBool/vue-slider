const app = new Vue({
    el: '#root',
    data: {
        items: {

            title: [
                'Svezia',
                'Svizzera',
                'Gran Bretagna',
                'Germania',
                'Paradise'
            ],
            
            text: [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                'Lorem ipsum',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            ],
    
            images: [
                "img/01.jpg",
                "img/02.jpg",
                "img/03.jpg",
                "img/04.jpg",
                "img/05.jpg",
            ],
        },

        currentImg: 0,

    },

    methods: {
        nextImage: function(){
            if(this.currentImg == this.items.images.length - 1){
                this.currentImg = 0;
            }else{
                this.currentImg++;
            }
        },
        prevImage: function(){
            if(this.currentImg == 0){
                this.currentImg = this.items.images.length -1;
            }else{
                this.currentImg--;
            }
        },
        selectImg: function(index){
            this.currentImg = index;
        }
        // alternativa all'operatore ternario nel class:thumb

        // setActiveClass: function(index){
        //     if(index == this.currentImg){
        //         return 'active';
        //     }else{
        //         return '';
        //     },
        // },
    }
});