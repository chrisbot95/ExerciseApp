<template>
    <div class="page">
        <div class="columns">
            <div class="column is-one-third">
                <Friendslist/>
            </div>
            <div class="column is-two-thirds">
                <Profile :is="currentComponent"/>
            </div>
        </div>
    </div>
</template>

<script>
import Friendslist from '@/components/Friendslist.vue';
import Profile from '@/components/Profile.vue';
export default {
    name: 'Friends',
    components: {
        Friendslist, Profile
    },
    data(){
        return{
            currentComponent: 'default comp'
        }
    }
}
</script>

<style>

</style>