<template>
        <Layout>
            <header>战地1举报外挂模板生成</header>
            <content>
                <Checkbox size="large" v-model="wallhack">透视</Checkbox>
                <Checkbox size="large" v-model="damageChange">改伤</Checkbox>
                <Checkbox size="large" v-model="aimbot">自瞄</Checkbox>
                <Checkbox size="large" v-model="oneShotKill">秒杀</Checkbox>
                <Checkbox size="large" v-model="gadgetModify">改装备</Checkbox>
                <Checkbox size="large" v-model="stealth">隐身</Checkbox>

                <p>
                    使用武器

                    <Cascader @on-change="handleWeaponChange" filterable size="large" :data="weapons" change-on-select></Cascader>
                </p>
                <p>
                    游戏模式

                    <Cascader @on-change="handleGameModeChange" size="large" :data="gameModes"></Cascader>
                </p>
                <p>
                    地图

                    <Cascader @on-change="handleMapChange" filterable size="large" :data="maps" trigger="hover"></Cascader>
                </p>

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
                    written by <a target="_blank" href="https://battlefieldtracker.com/bf1/profile/pc/fxodof3ts23edfsr">fxodof3ts23edfsr</a>
                </p>
            </footer>
        </Layout>
</template>
<style>
    header, content, footer {
        padding: 1rem 2rem;
    }
    header, footer {
        background-color: #eee;
        font-size: .6rem;
    }
    header {
        font-size: 1.2rem;
    }

</style>
<script>
const maps = require('./json/maps.json')
const weapons = require('./json/weapons.json')
const gameModes = require('./json/gameModes.json')

const ClipboardJS = require('clipboard')
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

            soldierClass: '',
            map: '',
            weapon: '',
            gameMode: '',
            weapons,
            gameModes,
            maps,
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
            `
        }
    }
}
</script>
