<template>
    <div class="page">
        <div class="columns">
            <div class="column is-one-third">
                <Exerciselist/>
            </div>
            <div class="column is-two-thirds">
                <Cardlist/>
            </div>
        </div>
    </div>
</template>

<script>
import Cardlist from '@/components/Cardlist.vue'
import Exerciselist from '@/components/Exerciselist.vue';
import Card from '@/components/Card.vue'
export default {
    name: 'Exercises',
    components: {
        Exerciselist, Cardlist, Card,
    }
}
</script>

<style>

</style>