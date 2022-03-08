app.component('review-table', {
    template: /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="recommended">Would you recommend this product? (Yes / No)</label>
    <input id="recommended" v-model="recommended" />

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit">

    </form>
    `,
    data(){
        return{
            name: "",
            review: "",
            rating: null,
            recommended: null
        }     
    },
    methods:{
        onSubmit(){
            if(this.name === "" || this.review === "" || this.rating === null){
                alert("Incomplete review, please fill out every field")
                return
            }
            // }else if(this.recommended === null || this.recommended.toLowerCase() !== "yes" || this.recommended.toLowerCase() !== "no"){
            //     alert("Please type in yes or no if you want to recommend this product")
            //     return
            // }
            let formValues = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommendValue
            }

            this.$emit('review-submitted', formValues)

            this.name = ""
            this.review = ""
            this.rating = null
            this.recommended = null
        }
    },
    computed:{
        recommendValue(){
            return this.recommended.toLowerCase()
        }
    }
})