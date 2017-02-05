<template>
    <div id="app">
        <header class="head">
            <img src="./common/img/logo.png" height="34" width="85">
        </header>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/recommend">推荐</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/game">游戏</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/outdoor">户外</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/girl">妹子</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/car">汽车</router-link>
            </div>
        </div>
        <div class="carousel">
            <carousel></carousel>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

    import carousel from 'components/carousel/carousel';

    export default {
        name: 'app',
        components: {
            carousel,

        }
    }
</script>

<style lang="scss">

    @import 'common/scss/mixin.scss';

    #app {
        .head {
            padding: 20px 0 10px 0;
            background: #eee;
        }
        .tab {
            display: flex;
            height: 40px;
            line-height: 40px;
            @include border-1px(#ddd);
        }
        .tab-item {
            flex: 1;
            a {
                display: block;
                font-size: 14px;
                text-align: center;
                &.active {
                    color: #ff630e;
                }
            }
        }
    }
</style>
