<template>
    <div>
        <h1 class="display-3 font-weight-bold.font-italic mb-4">Negocie e Consulte sua Ações</h1>
        <v-sheet :elevation="6" class="pa-2" color="primary">
            <v-icon class="pr-2 white--text">info</v-icon>
            <span class="headline white--text font-weight-light">Você pode Salvar e Carregar os Dados</span>
        </v-sheet>

        <v-sheet :elevation="6" class="pa-2 success darken-1 mt-3">
            <v-icon class="pr-2 white--text">info</v-icon>
            <span class="headline white--text font-weight-light">Clique em 'Finalizar dia' para iniciar um novo
                dia!</span>
        </v-sheet>
        <v-divider class="my-4" />
        <p class="text-capitalize display-1"><strong class="pr-3">seu saldo:</strong>{{ funds | currency }}</p>
    </div>
</template>

<script>

export default {
    computed: {
        funds() {
            return this.$store.getters.funds
            //return this.$store.state.portfolio.funds
        }
    }
}
</script>

<style></style>