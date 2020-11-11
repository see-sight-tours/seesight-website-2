<template>
    <div class="p-20">
        {{modalText}}
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        computed: {
            ...mapState({ modalText: (state) => state.modalText }),
        }
    }
</script>

<style lang="scss" scoped>

</style>