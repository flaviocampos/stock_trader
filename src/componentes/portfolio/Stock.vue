<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="white--text"
            :class="{ 'blue darken-3': !insufficientQuantity, 'red darken-3': insufficientQuantity }">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>({{ stock.price | currency }} | Qtde: {{ stock.quantity
                        }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" :error="insufficientQuantity" type="number"
                    v-model.number="quantity" />
                <v-btn class="blue darken-3 white--text" @click="sellStock"
                    :disabled="isBtnCompraDisabled">Vender</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
//Fez mapeamento, teve que trocar o nome sellStockAction: 'sellStock', para não conflitar
//import { mapActions } from 'vuex';
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        isBtnCompraDisabled() {
            return this.insufficientQuantity || this.quantity <= 0 || !Number.isInteger(this.quantity)
        },
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        //...mapActions({ sellStockAction: 'sellStock'}),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            //this.sellStockAction(order)
            this.$store.dispatch('sellStock', order)
            this.quantity = 0
        }
    }

}
</script>

<style></style>