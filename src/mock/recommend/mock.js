let Mock = require("mockjs")
let obj = [
    {
        "title":"【1月】天才王子的赤字国家振兴术11",
        "imgurl":require("@/assets/img/1.jpg"),
        "num":["405.3万","2.2万"]

    },
    {
        "title":"【1月】天才王子的赤字国家振兴术11",
        "imgurl":require("@/assets/img/2.jpg.webp"),
        "num":["405.3万","2.2万"]

    },
    {
        "title":"【1月】天才王子的赤字国家振兴术11",
        "imgurl":require("@/assets/img/3.jpg.webp"),
        "num":["405.3万","2.2万"]

    },
    {
        "title":"【1月/完结】里亚德录大地 12【独家正版】",
        "imgurl":require("@/assets/img/4.jpg.webp"),
        "num":["405.3万","2.2万"]

    },
    {
        "title":"【1月】与变成了异世界美少女的好友一起冒险 11【独家正版】",
        "imgurl":require("@/assets/img/5.jpg.webp"),
        "num":["405.3万","2.2万"]

    },
    {
        "title":"【1月】公主连结 与你重逢 第二季 11【独家正版】",
        "imgurl":require("@/assets/img/6.jpg.webp"),
        "num":["405.3万","2.2万"]

    },
    {
        "title":"【10月】国王排名 22【独家正版】",
        "imgurl":require("@/assets/img/7.jpg.webp"),
        "num":["405.3万","2.2万"]

    },
    {
        "title":"【10月】狂热深渊-迷失的孩子 08",
        "imgurl":require("@/assets/img/8.jpg.webp"),
        "num":["405.3万","2.2万"]

    }
]
Mock.mock("/api/recommand",obj)