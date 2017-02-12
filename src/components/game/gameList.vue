<template>
    <div class="game-list">
        <div class="list" v-show="isShow"  @click="hide">
            <template v-for="room in list">
                <router-link :to="'gameList/'+room.short_name">
                    <div class="list-item">
                        <img :src="room.game_icon">
                        <br>{{ room.game_name }}
                    </div>
                </router-link>
            </template>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: Array,
                gameList: 'gameList',
                isShow: true
            }
        },
        created() {
            this.$http.get('api/RoomApi/game').then((response) => {
                response = response.body;
                if (response.error === 0) {
                    this.list = response.data;
                }
            });
        },
        updated() {
            this.isShow = true;
        },
        methods: {
            hide() {
                this.isShow = false;
            }
        }
    };
</script>

<style lang="scss">
    
    @import '../../common/scss/mixin.scss';

    .game-list {
        background: #f4f4f4;
        .list-item {
            display: inline-block;
            box-sizing: border-box;
            width: rem(120);
            height: rem(120);
            border-right: 1px dashed #ddd;
            border-bottom: 1px dashed #ddd;
            text-align: center;
            font-size: 12px;
            img {
                width: rem(60);
                height: rem(60);
                margin-top: rem(30);
                margin-bottom: rem(10);
                border-radius: 50%;
            }
        }
    }
</style>