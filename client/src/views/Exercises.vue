<template>
    <div class="page">
        <div class="columns">
            <div class="column is-one-third">
                <Exerciselist/>
            </div>
            <div class="column is-two-thirds">
                <Card/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Exerciselist from '@/components/Exerciselist.vue';
export default {
    name: 'Exercises',
    components: {
        Exerciselist, Card,
    }
}
</script>

<style>

</style>