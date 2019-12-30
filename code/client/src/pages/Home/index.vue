<template>
    <div class="home-layout">
        <Entry v-if="showEntry"></Entry>
        <MainPage v-if="showMain"></MainPage>   
    </div>
</template>
<script>
export default {
    components: {
        Entry: resolve => require(['./entry/index'], resolve),
        MainPage: resolve => require(['./main/index'], resolve)
    },
    data () {
        return {
            showEntry: false,
            showMain: false
        }
    },
    mounted () {
        this.setShow()
    },
    methods: {
        setShow () {
            // import('@/utils/storage').then(({Session}) => {
            //     const isEntry = Session.get('entry')
            //     this.showEntry = !isEntry
            //     this.showMain = isEntry
            //     Session.set('entry', 1)
            // })
            // 不根据 session 来判断是否进入初始页，后续添加完备案信息后可重新考虑
            this.showEntry = false;
            this.showMain = true;
        }
    }
}
</script>
<style lang="less">
    .home-layout {

    }
</style>