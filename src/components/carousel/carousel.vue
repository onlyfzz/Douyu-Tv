<template>
    <swiper :options="swiperOption">
        <swiper-slide>
            <img src="https://staticlive.douyucdn.cn/upload/signs/201702041434134178.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="https://staticlive.douyucdn.cn/upload/signs/201702041501186034.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="https://staticlive.douyucdn.cn/upload/signs/201702042010263810.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="https://staticlive.douyucdn.cn/upload/signs/201702041640305667.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="https://staticlive.douyucdn.cn/upload/signs/201702050951007395.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="https://staticlive.douyucdn.cn/upload/signs/201702042321292124.jpg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>

    import Vue from 'vue';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default {
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="scss">
    .swiper-container {
        width: 100%;
        .swiper-slide > img {
            width: 100%;
            height: 100%;
        }
        .swiper-pagination-bullet-active {
            background: #FA7122;
        }
    }
</style>