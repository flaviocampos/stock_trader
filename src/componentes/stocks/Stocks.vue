<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
import Stock from './Stock.vue'
export default {
    components: { Stock },
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110 },
                { id: 2, name: 'Google', price: 250 },
                { id: 3, name: 'Apple', price: 280 },
                { id: 4, name: 'Twiter', price: 83 },
                { id: 5, name: 'Specialized', price: 120 },

            ]
        }
    }
}
</script>

<style></style>