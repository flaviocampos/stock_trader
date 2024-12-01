<template>
    <div>
        <h1>Flavio Campos</h1>
        <p>Estou pelejando com o VUE, o Delphi é muito mais fácil e confiavel.</p>
        <p>É <strong>muito</strong> trabalho manual</p>

        <v-divider class="my-4" />

        <v-card>
            <v-card-title class="headline grey">
                <span class="pr-4"> <router-link to="/sobre/equipe">Equipe</router-link></span>
                <span> <router-link to="/sobre/historia">História</router-link></span>
            </v-card-title>
            <v-container fill-height class="grey lighten-3">
                <router-view></router-view>
            </v-container>
        </v-card>

    </div>
</template>

<script>
export default {

}
</script>

<style></style>