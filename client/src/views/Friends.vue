<template>
    <div class="page">
        <div class="columns">
            <div class="column is-one-third">
                <Friendslist/>
            </div>
        </div>
    </div>
</template>

<script>
import Friendslist from '@/components/Friendslist.vue';
export default {
    name: 'Friends',
    components: {
        Friendslist,
    }
}
</script>

<style>

</style>