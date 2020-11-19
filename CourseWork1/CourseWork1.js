

new Vue({
    el: '#app',
    data: {
        title: "After School Club",
        showProduct: true,
        order:{
            fullName: "",
            phoneNumber: "",
            address: "",
            city: "",
            postcode:""
        },
        cities:{
            London: "London",
            Luton: "Luton",
            Watford: "Watford",
            Birmingham: "Birmingham",
            Liverpool: "Liverpool"
        },
        lesson: {
            
            id: 1001,
            spacesLeft: 10,
            image: './images/maths.png',
            subject: "Math",
            mathIcon: "",
            location: "London",
            price: "Price: 100",
            numberOfSpaces: "Number of spaces: ",
            rating: 3
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
                
             
        },

        checkRating(n){
            return this.lesson.rating - n >=0;
        },

        submitForm(){ //submit button on the checkout form
           alert("Order Placed");
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

