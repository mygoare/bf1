<template>
        <Layout>
            <header>战地1外挂举报助手</header>
            <content>
                <Checkbox size="large" v-model="wallhack">透视</Checkbox>
                <Checkbox size="large" v-model="damageChange">改伤</Checkbox>
                <Checkbox size="large" v-model="aimbot">自瞄</Checkbox>
                <Checkbox size="large" v-model="oneShotKill">秒杀</Checkbox>
                <Checkbox size="large" v-model="gadgetModify">改装备</Checkbox>
                <Checkbox size="large" v-model="stealth">隐身</Checkbox>
                <Checkbox size="large" v-model="shootingThroughWalls">子弹穿墙</Checkbox>

                <div class="block">
                    使用武器：

                    <Cascader @on-change="handleWeaponChange" filterable size="large" :data="weapons" change-on-select></Cascader>
                </div>
                <div class="block">
                    游戏模式：

                    <Cascader @on-change="handleGameModeChange" size="large" :data="gameModes"></Cascader>
                </div>
                <div class="block">
                    地图：

                    <Cascader @on-change="handleMapChange" filterable size="large" :data="maps"></Cascader>
                </div>
                <div class="block">
                    KD：

                    <Input v-model="kills" width="auto" placeholder="击杀数" size="large" />
                    <Input v-model="deaths" width="auto" placeholder="死亡数" size="large" />
                </div>

                <Divider></Divider>

                <div id="tpl">
                    <p>Use {{hack}} during the game.</p>
                    <p v-html="tpl"></p>
                </div>

                <Divider></Divider>

                <Button data-clipboard-target="#tpl" type="primary" @click="copy">复制文本</Button>

                <a href="https://www.3dmgame.com/gl/3667467.html" target="_blank">如何举报外挂？</a>
            </content>
            <footer>
                <p>
                    有任何的意见或想法，欢迎 mygoare#gmail.com 联系我
                    <br>
                    written by <a target="_blank" href="https://battlefieldtracker.com/bf1/profile/pc/fxodof3ts23edfsr">fxodof3ts23edfsr</a>
                </p>
            </footer>
        </Layout>
</template>
<style>
    header, content, footer {
        padding: 1rem 2rem;
    }
    footer {
        background-color: #eee;
        font-size: .7rem;
    }
    header {
        font-size: 1.2rem;
    }

    .block {
        margin: .4rem auto;
    }

</style>
<script>
const maps = require('./json/maps.json')
const weapons = require('./json/weapons.json')
const gameModes = require('./json/gameModes.json')

new ClipboardJS('.ivu-btn')

export default {
    data() {
        return {
            wallhack: false,
            damageChange: false,
            aimbot: true,
            oneShotKill: false,
            gadgetModify: false,
            stealth: false,
            shootingThroughWalls: false,

            soldierClass: '',
            map: '',
            weapon: '',
            gameMode: '',
            weapons,
            gameModes,
            maps,
            kills: '',
            deaths: '',
        }
    },
    methods: {
        copy () {
            this.$Message.info('已复制');
        },
        handleMapChange(value) {
            this.map = value[1]
        },
        handleWeaponChange(value) {
            this.soldierClass = value[0]
            this.weapon = value.slice(1).join(' ')
        },
        handleGameModeChange(value) {
            this.gameMode = value.join(' - ')
        }
    },
    computed: {
        hack: function() {
            let arr = []
            if (this.wallhack) arr.push('wallhack')
            if (this.damageChange) arr.push('damage change')
            if (this.aimbot) arr.push('aimbot')
            if (this.oneShotKill) arr.push('one shot kill')
            if (this.gadgetModify) arr.push('gadget modify')
            if (this.stealth) arr.push('stealth')
            if (this.shootingThroughWalls) arr.push('shooting through walls')

            return arr.join(', ')
        },
        tpl: function() {
            return `
                Class: ${this.soldierClass}
                <br>
                Using weapon: ${this.weapon} 
                <br>
                Game Mode: ${this.gameMode}
                <br>
                Map: ${this.map}
                <br>
                KD: ${this.kills} - ${this.deaths}
            `
        }
    }
}
</script>
