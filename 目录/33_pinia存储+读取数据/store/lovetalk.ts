import { defineStore } from 'pinia'

export const useLoveTalkStore = defineStore('lovetalk', {
    //真正存储数据的地方
    state() {
        return {
            talkList: [
                { id: 'asdioa01', title: '今天你有点怪，哪里怪？怪好看的！' },
                { id: 'asdioa01', title: '草莓，蓝莓，蔓越莓，你想我了没？' },
                { id: 'asdioa01', title: '心里给你留了一块地，我的死心塌地' },

            ]
        }
    }
})