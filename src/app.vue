<template>
    <div class="container">
        <Layout>
            <Header>战地1举报外挂模板生成</Header>
            <Content>
                <Checkbox size="large" v-model="wallhack">透视</Checkbox>
                <Checkbox size="large" v-model="damageChange">改伤</Checkbox>
                <Checkbox size="large" v-model="aimbot">自瞄</Checkbox>
                <Checkbox size="large" v-model="oneShotKill">秒杀</Checkbox>
                <Checkbox size="large" v-model="weaponModify">改装备</Checkbox>

        <p>
            使用兵种
            <Select siez="large">
                <Option v-for="item in classes" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>


        </p>

        <p>
            使用武器

            <Cascader size="large" :data="weapons" trigger="hover" v-model="value1"></Cascader>
        </p>
        <p>
            游戏模式

            <Cascader size="large" :data="gameModes" trigger="hover" v-model="value1"></Cascader>
        </p>
        <p>
            地图

            <Cascader size="large" :data="maps" trigger="hover" v-model="value1"></Cascader>
        </p>

        <Divider></Divider>

        <p v-html="tpl"></p>
        
        <Button type="primary">复制文本</Button>
        </Content>
        <Footer>

            <p>
                written by <a target="_blank" href="https://battlefieldtracker.com/bf1/profile/pc/fxodof3ts23edfsr">fxodof3ts23edfsr</a>
            </p>

        </Footer>
        </Layout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tpl: `
Use wallhack, aimbot, damage change during the game.
<br>
Class: Assault
<br>
Using weapon: M97 Trench Gun Sweeper 
<br>
Game Mode: Conquest
<br>
Map: Sinai Desert
<br>
            `,
            classes: [
                {
                    value: "Assault",
                    label: "突击"
                },
                {
                    value: "Medic",
                    label: "医疗"
                },
                {
                    value: "Support",
                    label: "支援"
                },
                {
                    value: "Scout",
                    label: "侦查"
                },
                {
                    value: "Tanker",
                    label: "坦克"
                },
                {
                    value: 'Pilot',
                    label: '飞行员'
                }
            ],
            value1: ['Assault'],
            weapons: [{
                value: 'Assault',
                label: '突击',
                children: [
                    {
                        value: 'Model 10-A',
                        label: 'Model 10-A',
                        children: [
                            {
                                value: 'Slug',
                                label: '散弹块'
                            },
                            {
                                value: 'Hunter',
                                label: '猎人'
                            },
                            {
                                value: 'Factory',
                                label: '原厂'
                            },
                        ]
                    },
                    {
                        value: 'M97 Trench Gun',
                        label: 'M97',
                        children: [
                            {
                                value: 'Sweeper',
                                label: '扫荡'
                            },
                            {
                                value: 'Backbored',
                                label: '低后座'
                            },
                            {
                                value: 'Hunter',
                                label: '猎人'
                            },
                        ]
                    },
                    {
                        value: 'Mp18',
                        label: 'Mp18',
                        children: [
                            {
                                value: 'Trench',
                                label: '壕沟战'
                            },
                            {
                                value: 'Experimental',
                                label: '实验'
                            },
                            {
                                value: 'Optical',
                                label: '瞄准镜'
                            },
                        ]
                    },
                    {
                        value: 'Automatico M1918',
                        label: 'M1918'
                    },
                    {
                        value: '12g Automatic',
                        label: '12g'
                    },
                    {
                        value: 'hellriegel 1915',
                        label: 'hellriegel 1915'
                    },
                    {
                        value: 'Hellfighter Trench Shotgun',
                        label: 'Hellfighter Trench Shotgun'
                    },
                    {
                        value: 'Sjogren Inertial',
                        label: 'Sjogren Inertial'
                    },
                    {
                        value: 'Ribeyrolles 1918',
                        label: 'Ribeyrolles 1918'
                    },
                    {
                        value: 'Model 1900',
                        label: '1900'
                    },
                    {
                        value: 'SMG 08/18',
                        label: 'SMG 08/18'
                    },
                    {
                        value: 'Maschinenpistole M1912/p.16',
                        label: 'M1912/p.16'
                    },
                    {
                        value: 'M1917 Carbine',
                        label: 'M1917 Carbine'
                    },
                    {
                        value: 'RSC SMG',
                        label: 'RSC SMG'
                    },
                    {
                        value: 'M1919 SMG',
                        label: 'M1919 SMG'
                    },
                    {
                        value: 'Annihilator',
                        label: 'Annihilator'
                    },
                    {
                        value: 'Frommer Stop Auto',
                        label: 'Frommer Stop Auto'
                    },
                    {
                        value: 'Sawed Off Shotgun',
                        label: 'Sawed Off Shotgun'
                    }
                ]
            }, {
                value: 'Medic',
                label: '医疗',
                children: [
                    {
                        value: 'Cei-Rigotti',
                        label: 'Cei-Rigotti',
                        children: [
                            {
                                value: 'Trench',
                                label: '壕沟战',
                            },
                            {
                                value: 'Optical',
                                label: '瞄准镜',
                            },
                            {
                                value: 'Factory',
                                label: '原厂',
                            }
                        ]
                    },
                    {
                        value: 'Selbstlader M1916',
                        label: 'M1916',
                        children: [
                            {
                                value: 'Marksman',
                                label: '神射手',
                            },
                            {
                                value: 'Optical',
                                label: '瞄准镜',
                            },
                            {
                                value: 'Factory',
                                label: '原厂'
                            }
                        ]
                    }
                ],
            }],
            gameModes: [
                {
                    value: 'Conquest',
                    label: '征服'
                },
                {
                    value: 'Domination',
                    label: '抢攻'
                },
                {
                    value: 'Frontlines',
                    label: '前线'
                },
                {
                    value: 'Rush',
                    label: '突袭'
                },
                {
                    value: 'shock operations',
                    label: '闪击行动'
                },
                {
                    value: 'Grand Operations',
                    label: '大行动'
                },
                {
                    value: 'Team Deathmatch',
                    label: '团队死斗'
                },
            ],
            maps: [{
                value: 'Base',
                label: '游戏本体',
                children: [
                    {
                        value: 'Ballroom Blitz',
                        label: '流血宴厅'
                    },
                    {
                        value: 'Argonne Forest',
                        label: '阿尔贡森林'
                    },
                    {
                        value: 'Fao Fortress',
                        label: '法欧堡'
                    },
                    {
                        value: 'Suez',
                        label: '苏伊士'
                    },
                    {
                        value: 'The St. Quentin Scar',
                        label: '圣康坦的伤痕'
                    },
                    {
                        value: 'Sinai Desert',
                        label: '西奈沙漠'
                    },
                    {
                        value: 'Amiens',
                        label: '亚眠'
                    },
                    {
                        value: 'Monte Grappa',
                        label: '格拉巴山'
                    },
                    {
                        value: 'Empire’s Edge',
                        label: '帝国边缘'
                    },
                    {
                        value: 'Giant’s Shadow',
                        label: '庞然暗影'
                    }
                ]
            },
            {
                value: 'They Shall Not Pass',
                label: '誓死坚守 dlc',
                children: [
                    {
                        value: 'Verdun Heights',
                        label: '凡尔登高地'
                    },
                    {
                        value: 'Fort De Vaux',
                        label: '法乌克斯要塞'
                    },
                    {
                        value: 'Soissons',
                        label: '苏瓦松'
                    },
                    {
                        value: 'Rupture',
                        label: '决裂'
                    },
                    {
                        value: 'Nivelle Nights',
                        label: '维尼尔之夜'
                    },
                    {
                        value: 'Prise de Tahure',
                        label: '攻占托儿'
                    }
                ]
            },
            {
                value: 'In the Name of the Tsar',
                label: '以沙皇之名 dlc',
                children: [
                    {
                        value: 'Lupkow Pass',
                        label: '武普库夫山口'
                    },
                    {
                        value: 'Albion',
                        label: '阿尔比恩'
                    },
                    {
                        value: 'Galacia',
                        label: '加利西亚'
                    },
                    {
                        value: 'Brusilov Keep',
                        label: '勃鲁西洛夫关口'
                    },
                    {
                        value: 'Volga River',
                        label: '窝瓦河'
                    },
                    {
                        value: 'Tsaritsyn',
                        label: '察里津'
                    }
                    
                ]
            },
            {
                value: 'Turning Tides',
                label: '力挽狂澜 dlc',
                children: [
                    {
                        value: 'Cape Helles',
                        label: '海丽丝岬'
                    },
                    {
                        value: 'Achi Baba',
                        label: '阿奇巴巴'
                    },
                    {
                        value: 'Heligoland Bight',
                        label: '黑尔格兰海湾'
                    },
                    {
                        value: 'Zeebrugge',
                        label: '泽布勒赫'
                    }
                    
                    
                ]
            },
            {
                value: 'Apocalypse',
                label: '天启 dlc',
                children: [
                    {
                        value: 'Passchendaele',
                        label: '帕斯尚尔'
                    },
                    {
                        value: 'Caporetto',
                        label: '卡波雷托'
                    },
                    {
                        value: 'River Somme',
                        label: '索姆河'
                    },
                    {
                        value: 'Razor\'s Edge',
                        label: '剃刀边缘'
                    },
                    {
                        value: 'London Calling',
                        label: '伦敦的呼唤'
                    }
                    
                ]
            }
            ]
        }
    },
    methods: {
        change (status) {
            this.$Message.info('开关状态：' + status);
        }
    }
}
</script>
