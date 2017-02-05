<template>
    <div class="recommend">
        推荐
    </div>
</template>

<script type="text/javascript">
    import basecomp from 'components/base/basecomp';

    export default {
        data() {
            return {
                data: []
            };
        },
        created() {
            this.$http.get('/api/RoomApi/live').then((response) => {
                    response = response.body;
                    if (response.error === 0) {
                        this.data = response.data;
                        console.log(this.data);
                    }
            });
        },
        components: {
            basecomp
        }
    }
</script>

<style lang="scss">
    
</style>