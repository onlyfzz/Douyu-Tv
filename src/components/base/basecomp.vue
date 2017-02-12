<template>
    <div class="base-panel">
        <div class="panel-title clearfix">
            <div class="title-left">
                <img src="https://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/icon_hot.png?v=3.1">
                <span class="text">最热</span>
            </div>
            <span class="title-right">
                <a href="https://m.douyu.com/roomlists">全部 &gt;</a>
            </span>
        </div>
        <div class="content">
            <template v-for="room in rooms">
                <a class="live" :href="room.url">
                    <img :src="room.room_src" class="live-item">
                    <span class="title">{{ room.room_name }}</span>
                    <div class="footer">
                        <span class="name fl"><i class="iconfont icon-renwu1"></i>{{ room.nickname }}</span>
                        <span class="people fr"><i class="iconfont icon-renwu"></i>{{ room.online }}</span>
                    </div>
                </a>
            </template>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            rooms: Array
        }
    }
</script>

<style lang="scss" scoped>
    
    @import '../../common/scss/mixin.scss';
    @import '../../common/scss/iconfont.css';

    .base-panel {
        padding: rem(5);
        .panel-title {
            height: rem(40);
            padding: 0 rem(5);
            line-height: rem(40);
            .title-left {
                display: inline-block;
                vertical-align: top;
                font-size: 12px;
                img {
                    width: rem(14);
                }
                .text {
                    vertical-align: top;
                }
            }
            .title-right {
                float: right;
                font-size: 12px;
            }
        }
        .content {
            font-size: 0;
            .live {
                display: inline-block;
                width: rem(165);
                padding: rem(5);
                overflow: hidden;
                .live-item {
                    width: 100%;
                    border-radius: rem(7);
                }
                .title {
                    display: inline-block;
                    width: rem(160);
                    line-height: 1.8;
                    font-size: 12px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .footer {
                    span {
                        display: inline-block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: 8px;
                        &.name {
                            width: 60%;
                        }
                        &.people {
                            width: 40%;
                            text-align: right;
                        }
                        .iconfont {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>