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
            <Select siez="large" @on-change="handleSoldierClassChange">
                <Option v-for="item in classes" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>


        </p>

        <p>
            使用武器

            <Cascader @on-change="handleWeaponChange" filterable size="large" :data="weapons" trigger="hover" v-model="value1"></Cascader>
        </p>
        <p>
            游戏模式

            <Cascader @on-change="handleGameModeChange" size="large" :data="gameModes" trigger="hover" value="Conquest"></Cascader>
        </p>
        <p>
            地图

            <Cascader @on-change="handleMapChange" filterable size="large" :data="maps" trigger="hover" v-model="value1"></Cascader>
        </p>

        <Divider></Divider>

        <p v-html="tpl"></p>
        
        <Button type="primary" @click="copy">复制文本</Button>
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
            hack: '',
            soldierClass: '',
            map: '',
            weapon: '',
            gameMode: '',
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
                    },
                    {
                        value: 'M1907 SL',
                        label: 'M1907'
                    },
                    {
                        value: 'Mondragon',
                        label: ' 蒙德拉贡'
                    },
                    {
                        value: 'Autoloading 8.35',
                        label: '8.35 八爷'
                    },
                    {
                        value: 'Selbstlader 1906',
                        label: '1906'
                    },
                    {
                        value: 'RSC 1917',
                        label: 'RSC 1917'
                    },
                    {
                        value: 'Fedorov Avtomat',
                        label: ' 菲德洛夫'
                    },
                    {
                        value: 'General Liu Rifle',
                        label: '刘将军'
                    },
                    {
                        value: 'Farquhar-Hill',
                        label: '法夸尔'
                    },
                    {
                        value: 'Howell Automatic',
                        label: 'Howell'
                    },
                ],
            }, 
            {
                value: 'Support',
                label: '支援',
                children: [
                    {
                        value: 'Lewis Gun',
                        label: '路易斯'
                    },
                    {
                        value: 'M1909 Benet-Mercie',
                        label: 'M1909'
                    },
                    {
                        value: 'Madsen MG',
                        label: '麦德森'
                    },
                    {
                        value: 'MG15 n.A.',
                        label: 'MG15'
                    },
                    {
                        value: 'BAR M1918',
                        label: 'BAR M1918'
                    },
                    {
                        value: 'Huot Automatic',
                        label: '霍特'
                    },
                    {
                        value: 'Chauchat',
                        label: '绍沙'
                    },
                    {
                        value: 'Parabellum MG14/17',
                        label: 'MG 14/17'
                    },
                    {
                        value: 'Perino Model 1908',
                        label: 'Perino Model 1908'
                    },
                    {
                        value: 'M1917 MG',
                        label: 'M1917 MG'
                    },
                    {
                        value: 'IMG 08/18',
                        label: 'IMG 08/18'
                    },
                    {
                        value: 'Burton LMR',
                        label: '波顿'
                    },
                    {
                        value: 'C96 Carbine',
                        label: 'C96 卡宾'
                    },
                    {
                        value: 'P08 Artillerie',
                        label: 'P08'
                    },
                    {
                        value: 'Pieper M1893',
                        label: 'Pieper M1893'
                    },
                    {
                        value: 'M1911 Extended',
                        label: 'M1911 扩展'
                    },
                    {
                        value: 'Mle 1903 Extended',
                        label: 'Mle 1903 扩展'
                    },
                    {
                        value: 'C93 Carbine',
                        label: 'C93 卡宾'
                    }
                ]
            },
            {
                value: 'Scout',
                label: '侦查',
                children: [
                    {
                        value: 'Russian 1895',
                        label: 'Russian 1895'
                    },
                    {
                        value: 'Gewehr 98',
                        label: 'G98'
                    },
                    {
                        value: 'SMLE MKIII',
                        label: '老李'
                    },
                    {
                        value: 'Gewehr M.95',
                        label: 'G95'
                    },
                    {
                        value: 'M1903',
                        label: 'M1903'
                    },
                    {
                        value: 'Martini-Henry',
                        label: '马提尼'
                    },
                    {
                        value: 'Lawrence of Arabia\'s SMLE',
                        label: '劳伦的老李'
                    },
                    {
                        value: 'Lebel Model 1886',
                        label: 'Lebel 1886'
                    },
                    {
                        value: 'Mosin-Nagant M91',
                        label: '莫辛纳甘 M91'
                    },
                    {
                        value: 'Vetterli-Vitali M1870/87',
                        label: 'Vetterli-Vitali M1870/87'
                    },
                    {
                        value: 'Type 38 Arisaka',
                        label: '三八式步枪'
                    },
                    {
                        value: 'Carcano M91',
                        label: 'Carcano M91'
                    },
                    {
                        value: 'Ross MKIII',
                        label: ' 罗斯'
                    },
                    {
                        value: 'M1917 Enfield',
                        label: 'M1917 英菲尔德',
                        children: [
                            {
                                value: 'Infantry',
                                label: '步兵'
                            },
                            {
                                value: 'Silenced',
                                label: '消音器'
                            },
                        ]
                    }
                ]
            },
            {
                value: 'Tanker',
                label: '坦克',
                children: [
                    {
                        value: 'Landship',
                        label: '巡航坦克'
                    },
                    {
                        value: 'Heavy Tank',
                        label: '重坦'
                    },
                    {
                        value: 'Light Tank',
                        label: '轻坦'
                    },
                    {
                        value: 'Artillery Truck',
                        label: '火炮车'
                    },
                    {
                        value: 'Assault Tank',
                        label: '圣莎萌'
                    },
                    {
                        value: 'Assault Truck',
                        label: '菊花车'
                    },
                ]
            }, {
                value: 'Pilot',
                label: '飞行员',
                children: [
                    {
                        value: 'Attack Plane',
                        label: '攻击机'
                    },
                    {
                        value: 'Bomber',
                        label: '轰炸机'
                    },
                    {
                        value: 'Fighter',
                        label: ' 狗斗机'
                    },
                    {
                        value: 'Heavy Bomber',
                        label: '重型轰炸机'
                    }
                ]
            }
            ],
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
                    value: 'Shock Operations',
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
                value: 'They Shall Not Pass DLC',
                label: '誓死坚守 DLC',
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
                value: 'In the Name of the Tsar DLC',
                label: '以沙皇之名 DLC',
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
                value: 'Turning Tides DLC',
                label: '力挽狂澜 DLC',
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
                value: 'Apocalypse DLC',
                label: '天启 DLC',
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
        copy () {
            this.$Message.info('已复制！');
        },
        handleMapChange(value) {
            this.map = value.join(' - ')

            console.log(value.join(' - '), this.map)
        },
        handleWeaponChange(value) {
            this.weapon = value.join(' - ')

            console.log(value.join(' - '))
        },
        handleGameModeChange(value) {
            this.gameMode = value.join(' - ')

            console.log(value.join(' - '))
        },
        handleSoldierClassChange(value) {
            this.soldierClass = value
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
