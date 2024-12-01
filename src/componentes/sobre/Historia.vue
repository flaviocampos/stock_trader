<template>
    <div>
        <h2>Nossa História - {{ componentName }}</h2>
        <p>Com o tempo, vou conseguindo chegar na criação, mas estou muito cru neste treco.</p>
    </div>
</template>

<script>
export default {
    name: 'Adesão',
    data() {
        return {
            componentName: this.$options.name // Expondo o name explicitamente
        };
    }
};
</script>

<style>
/* Estilos opcionais */
</style>
