<template>
    <div class="music">
        <basecomp :rooms="list"></basecomp>
        <loading :is-loading="loading"></loading>
    </div>
</template>

<script>
    import basecomp from 'components/base/basecomp';
    import loading from 'components/loading/loading';
    import { load } from 'common/js/lazyload';

    export default {
        data() {
            return {
                list: [],
                loading: true,
                offset: 0
            }
        },
        created() {
            this.fetchData().then(() => {
                this.loading = false;
            });
        },
        mounted() {
            var self = this;
            window.addEventListener('scroll', function() {
                self.$nextTick(function() {
                    self.load = load();    
                });
                if (self.load) {
                    self.offset += 2;
                    self.page += 1;
                    self.getMore('?offset=' + self.offset);
                }
            }, false);
        },
        methods: {
            fetchData() {
                return this.$http.get('/api/RoomApi/live/music').then((response) => {
                    response = response.body;
                    if (response.error === 0) {
                        this.list = response.data;
                    }
                });
            },
            getMore(offset) {
                return this.$http.get('/api/RoomApi/live/music' + offset).then((response) => {
                    response = response.body;
                    if (response.error === 0 && response.data) {
                        this.list = this.list.concat(response.data.slice(-2));
                    }
               }); 
            }
        },
        components: {
            basecomp,
            loading
        }
    };
</script>

<style lang="scss">
    
</style>