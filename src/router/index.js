import Vue from 'vue';
import Router from 'vue-router';
import recommend from 'components/recommend/recommend';
import game from 'components/game/game';
import gameList from 'components/game/gameList';
import outdoor from 'components/outdoor/outdoor';
import music from 'components/music/music';
import girl from 'components/girl/girl';

Vue.use(Router)

var router = new Router({
    'linkActiveClass': 'active',
    routes: [
        { path: '/recommend', component: recommend },
        { path: '/gameList', component: gameList,
          children: [
            { path: ':id', component: game }
          ]
        },
        { path: '/outdoor', component: outdoor },
        { path: '/music', component: music },
        { path: '/girl', component: girl }
    ]
});
router.push('/recommend');

export default router;
