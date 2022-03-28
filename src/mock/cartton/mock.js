let Mock = require("mockjs")
let obj = [
    {
        "title":"【1月】天才王子的赤字国家振兴术11",
        "imgurl":require("@/assets/img/9.jpg.webp"),
        "num":["205.3万","2.4万"]

    },
    {
        "title":"【1月】天才王子的赤字国家振兴术11",
        "imgurl":require("@/assets/img/10.jpg.webp"),
        "num":["305.3万","2.2万"]

    },
    {
        "title":"【1月】天才王子的赤字国家振兴术11",
        "imgurl":require("@/assets/img/11.jpg.webp"),
        "num":["405.3万","2.1万"]

    },
    {
        "title":"【1月/完结】里亚德录大地 12【独家正版】",
        "imgurl":require("@/assets/img/12.jpg.webp"),
        "num":["505.3万","2.2万"]

    },
    {
        "title":"【1月】与变成了异世界美少女的好友一起冒险 11【独家正版】",
        "imgurl":require("@/assets/img/13.jpg.webp"),
        "num":["405.3万","2.6万"]

    },
    {
        "title":"【1月】公主连结 与你重逢 第二季 11【独家正版】",
        "imgurl":require("@/assets/img/14.jpg.webp"),
        "num":["408.3万","3.2万"]

    },
    {
        "title":"【10月】国王排名 22【独家正版】",
        "imgurl":require("@/assets/img/15.jpg.webp"),
        "num":["405.3万","2.21万"]

    },
    {
        "title":"【10月】狂热深渊-迷失的孩子 08",
        "imgurl":require("@/assets/img/16.jpg.webp"),
        "num":["406.3万","2.2万"]

    }
]
Mock.mock("/api/cartton",obj)