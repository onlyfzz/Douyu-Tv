<template>
    <div id="app">
        <div class="top-fix">
            <header class="head">
                <img src="./common/img/logo.png" height="34" width="85">
            </header>
            <div class="tab">
                <div class="tab-item">
                    <router-link to="/recommend">推荐</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/gameList">游戏</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/outdoor">户外</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/girl">妹子</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/music">音乐</router-link>
                </div>
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
    import {rem} from 'common/js/rem.js';

    export default {
        name: 'app',
        created() {
            rem(document, window);
        },
        components: {
            carousel,

        }
    }
</script>

<style lang="scss">

    @import 'common/scss/mixin.scss';

    #app {
        .top-fix {
            position: fixed;
            z-index: 999;
            left: 0;
            top: 0;
            width: 100%;
        }
        .head {
            padding: rem(5) 0;
            background: #eee;
        }
        .tab {
            display: flex;
            height: rem(40);
            line-height: rem(40);
            @include border-1px(#ddd);
            background: #fff;
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
        .carousel {
            margin-top: rem(98);
        }
    }
</style>
