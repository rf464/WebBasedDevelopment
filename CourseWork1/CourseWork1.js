new Vue({
    el: '#app',
    data: {
        title: "After School Club",
        showProduct: false,
        order:{
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            postcode:""
        },
        lesson: {
            
            id: 1001,
            spacesLeft: 5,
            image: './images/maths.png',
            subject: "Math",
            mathIcon: "",
            location: "London",
            price: "Price: 100",
            numberOfSpaces: "Number of spaces: ",
        },

        cart: []
       

    },


    methods: {
        
        showCheckout(){
            this.showProduct = this.showProduct ? false : true ;
        },

        addToCart() {//function that decrements the counter if it is bigger than 5
            
                console.log("addtocart");
                this.cart.push(this.lesson.id);
                this.lesson.spacesLeft--;
                
             
        }
    },

    
    computed: {
        cartItemCount: function () {
            return this.cart.length || '';
        },
        canAddToCart: function() {
            return this.lesson.spacesLeft != 0;
        }

    },
    
})

