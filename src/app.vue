<template>
    <div class="container">
        <p>
            <label class="checkbox">
                <input type="checkbox">
                透视
            </label>
            <label class="checkbox">
                <input type="checkbox">
                改伤
            </label>
            <label class="checkbox">
                <input type="checkbox">
                自瞄
            </label>
            <label class="checkbox">
                <input type="checkbox">
                秒杀
            </label>
            <label class="checkbox">
                <input type="checkbox">
                锁头
            </label>
        </p>
        <p>
            兵种
            <div class="select">
                <select>
                    <option value="">突击</option>
                    <option value="">医疗</option>
                    <option value="">支援</option>
                    <option value="">侦查</option>
                </select>
            </div>
        </p>

        <p>
            使用武器
            <div class="select">
                <select>
                    <option value="">12g</option>
                    <option value="">菲德洛夫</option>
                </select>
            </div>
        </p>
        <p>
            地图
            <div class="select">
                <select>
                    <option value="">阿尔贡森林</option>
                    <option value="">流血盛宴</option>
                </select>
            </div>
        </p>


        <p>
            made by 一个bf1玩家 fxodo
        </p>
            
        <div>{{text}}</div>
    </div>
</template>

<script>
export default {
    data: ()=> {
        return {
            text: 'da shu'
        }
    }
}
</script>