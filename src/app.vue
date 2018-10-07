<template>
        <Layout>
            <Header>战地1举报外挂模板生成</Header>
            <Content>
                <Checkbox size="large" v-model="wallhack">透视</Checkbox>
                <Checkbox size="large" v-model="damageChange">改伤</Checkbox>
                <Checkbox size="large" v-model="aimbot">自瞄</Checkbox>
                <Checkbox size="large" v-model="oneShotKill">秒杀</Checkbox>
                <Checkbox size="large" v-model="gadgetModify">改装备</Checkbox>
        <p>
            使用武器

            <Cascader @on-change="handleWeaponChange" filterable size="large" :data="weapons" trigger="hover" v-model="value1"></Cascader>
        </p>
        <p>
            游戏模式

            <Cascader @on-change="handleGameModeChange" size="large" :data="gameModes" trigger="hover"></Cascader>
        </p>
        <p>
            地图

            <Cascader @on-change="handleMapChange" filterable size="large" :data="maps" trigger="hover" v-model="value1"></Cascader>
        </p>

        <Divider></Divider>

        <p id="tpl" v-html="tpl"></p>
        
        <Button data-clipboard-target="#tpl" type="primary" @click="copy">复制文本</Button>
        </Content>
        <Footer>

            <p>
                written by <a target="_blank" href="https://battlefieldtracker.com/bf1/profile/pc/fxodof3ts23edfsr">fxodof3ts23edfsr</a>
            </p>

        </Footer>
        </Layout>
</template>

<script>
const maps = require('./json/maps.json')
const weapons = require('./json/weapons.json')
const gameModes = require('./json/gameModes.json')

const ClipboardJS = require('clipboard')
new ClipboardJS('.ivu-btn')

export default {
    data() {
        return {
            hack: '',
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
        tpl: function() {
            return `
                Use wallhack, aimbot, damage change during the game.
                <br>
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
