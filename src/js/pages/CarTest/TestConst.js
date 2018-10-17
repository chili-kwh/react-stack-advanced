const QUESTIONS = {
    1: {
        key: 1,
        question: '你会接受二手车吗?',
        answers: [
            {desc: '能', toQues: 2},
            {desc: '不能', toResult: 'A'},
        ]
    },
    2: {
        key: 2,
        question: '你买二手车是为了什么？?',
        answers: [
            {desc: '情怀', toQues: 3},
            {desc: '实用', toResult: 'B'},
        ]
    },
    3: {
        key: 3,
        question: '你有很多的钱吗?',
        answers: [
            {desc: '有', toResult: 'C'},
            {desc: '没有', toResult: 'D'},
        ]
    },

}

const RESULTS = {
    A: '有时间那就滚去赚钱啊，没钱想玩情怀，反被情怀玩。',
    B: '买锤子四个轮啊，小牛电动车、凤凰二八大杠也很有情怀的。',
    C: '10年车龄左右的保有量大的日系车。',
    D: '老甲虫、老Mini、老宝马、老奔驰、老皇冠、萨博、大众系性能车，但要注意翻新零部件的获得渠道。'

}

export {
    QUESTIONS,
    RESULTS,
}