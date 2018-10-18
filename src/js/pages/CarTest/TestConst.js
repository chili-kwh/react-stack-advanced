const QUESTIONS = {
    1: {
        key: 1,
        question: '你买二手车是为了什么？',
        answers: [
            {desc: '为了情怀', toQues: 2},
            {desc: '为了实用', toQues: 10},
        ]
    },
    2: {
        key: 2,
        question: '你有很多钱吗？',
        answers: [
            {desc: '有', toQues: 3},
            {desc: '没有', toQues: 9},
        ]
    },
    3: {
        key: 3,
        question: '你愿意花很多时间折腾车子吗？',
        answers: [
            {desc: '愿意', toQues: 4},
            {desc: '不愿意', toQues: 8},
        ]
    },
    4: {
        key: 4,
        question: '你买车是出于什么目的？',
        answers: [
            {desc: '投资', toQues: 5},
            {desc: '充场面', toQues: 6},
            {desc: '儿时的梦想', toQues: 7},
        ]
    },
    5: {
        key: 5,
        question: '投资回报是？',
        answers: [
            {desc: '收取使用补偿', toResult: 'A'},
            {desc: '屯着未来卖', toResult: 'B'},
        ]
    },
    6: {
        key: 6,
        question: '你想要主流的答案还是非主流的？',
        answers: [
            {desc: '主流', toResult: 'C'},
            {desc: '非主流', toResult: 'D'},
        ]
    },
    7: {
        key: 7,
        question: '你有充足的养车预算吗？',
        answers: [
            {desc: '有', toResult: 'E'},
            {desc: '没有', toResult: 'F'},
        ]
    },
    8: {
        key: 8,
        question: '你会买日系车吗？',
        answers: [
            {desc: '考虑购买', toResult: 'G'},
            {desc: '不考虑购买', toResult: 'H'},
        ]
    },
    9: {
        key: 9,
        question: '你愿意花很多时间折腾车子吗？',
        answers: [
            {desc: '愿意', toResult: 'I'},
            {desc: '不愿意', toResult: 'J'},
        ]
    },
    10: {
        key: 10,
        question: '你有很多钱吗？',
        answers: [
            {desc: '有', toQues: 11},
            {desc: '没有', toQues: 19},
        ]
    },

    11: {
        key: 11,
        question: '你喜欢什么车系的车子？',
        answers: [
            {desc: '日系', toQues: 12},
            {desc: '韩系', toQues: 15},
            {desc: '美系', toQues: 16},
            {desc: '德系', toQues: 17},
            {desc: '其他自主品牌', toQues: 18},
        ]
    },
    12: {
        key: 12,
        question: '你是否有本田情怀？',
        answers: [
            {desc: '有', toQues: 13},
            {desc: '没有', toQues: 14},
        ]
    },
    13: {
        key: 13,
        question: '你的预算超过8w吗？',
        answers: [
            {desc: '超过', toResult: 'K'},
            {desc: '不超过', toResult: 'L'},
        ]
    },
    14: {
        key: 14,
        question: '你对舒适性的优先级要求高吗？',
        answers: [
            {desc: '高', toResult: 'M'},
            {desc: '不高', toResult: 'N'},
        ]
    },
    15: {
        key: 15,
        question: '你会选择起亚还是现代？',
        answers: [
            {desc: '起亚', toResult: 'O'},
            {desc: '现代', toResult: 'P'},
        ]
    },
    16: {
        key: 16,
        question: '你有充足的养车预算吗？',
        answers: [
            {desc: '有', toResult: 'Q'},
            {desc: '没有', toResult: 'R'},
        ]
    },
    17: {
        key: 17,
        question: '你是否具有大众信仰？',
        answers: [
            {desc: '有', toResult: 'S'},
            {desc: '没有', toResult: 'T'},
        ]
    },
    18: {
        key: 18,
        question: '你目前有喜欢的自主品牌吗？',
        answers: [
            {desc: '有', toResult: 'U'},
            {desc: '没有', toResult: 'V'},
        ]
    },
    19: {
        key: 19,
        question: '你有时间和耐心折腾车子吗？',
        answers: [
            {desc: '有', toQues: 20},
            {desc: '没有', toResult: 'W'},
        ]
    },
    20: {
        key: 20,
        question: '你会选择购买日系车吗？',
        answers: [
            {desc: '考虑购买', toResult: 'X'},
            {desc: '不考虑购买', toResult: 'Y'},
        ]
    },
}

const RESULTS = {
    A: '一些大型活动如婚庆、开幕式用来撑场子的，各种美系大轿车、加长车、老款跑车等。',
    B: '限量车型或情怀性能车，例如纯原装未改装的三菱EVO 7/8/9、思域Si。',
    C: '有钱有闲又要有面，BBA的豪华车，蝴蝶奔、W12的A8、V12宝马760。',
    D: '有钱还不怕修车，捷豹路虎玛莎拉蒂，开着10年前的英国豹，装逼装得猝不及防，秒咖喱豹几条街好么。',
    E: '欧系性能车，尤其是奔驰AMG，加得起油不买AMG简直是犯罪。',
    F: '老甲虫、老Mini、老宝马、老奔驰、老皇冠、萨博、大众系性能车，但要注意翻新零部件的获得渠道。',
    G: '下地5年内的雷克萨斯、讴歌、英菲尼迪',
    H: '下地两年内的美系、德系（非豪华）、韩系、自主品牌车，5年内的奥迪。',
    I: '有时间那就滚去赚钱啊，没钱想玩情怀，反被情怀玩。',
    J: '买锤子四个轮啊，小牛电动车、凤凰二八大杠也很有情怀的。',
    K: '买GK5，剩下的钱买理财产品。',
    L: '那就买经济实惠的飞度吧。',
    M: '日产，除GTR外，每一个车型在细分市场几乎都是最舒服的。',
    N: '丰田或马自达都是不错的选择。',
    O: '买起亚，别买出租车同款。',
    P: '买现代，别买出租车同款。',
    Q: '别克涡轮化之前的车，君威GS、老君越，福特非双离合非6AT车型。',
    R: '别克涡轮化之后的车，新科鲁兹、新英朗，福特1.5T系列轿车。',
    S: '大众旗下各款都是不错的选择哟。',
    T: '法系？俄系？呆梨系？只有德系靠谱啊。德国车只有大众算是非豪华品牌，所以……',
    U: '喜欢谁买谁，喜欢电动车的例外。',
    V: '荣威、长安比较买的过。',
    W: '10年车龄左右的保有量大的日系车。',
    X: '帕杰罗、老雅阁、老凯美瑞、老风度、跑车如丰田赛利卡、三零GTO。',
    Y: '别克老凯越、赛欧2，大众老捷达、桑塔纳，五菱各种后驱超跑。',
}

export {
    QUESTIONS,
    RESULTS,
}