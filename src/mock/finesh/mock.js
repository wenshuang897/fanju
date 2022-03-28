let Mock = require("mockjs")
let obj = [
    {
        "title":"【10月】狂热深渊-迷失的孩子 01",
        "imgurl":require("@/assets/img/17.jpg.webp"),
        "num":["9.3万","6.4万"]

    },
    {
        "title":"【10月】狂热深渊-迷失的孩子 08",
        "imgurl":require("@/assets/img/18.jpg.webp"),
        "num":["8.3万","7.2万"]

    },
    {
        "title":"赛罗奥特曼 英雄传（中配版）11",
        "imgurl":require("@/assets/img/19.jpg.webp"),
        "num":["5.3万","1万"]

    },
    {
        "title":"【1月/完结】里亚德录大地 12【独家正版】",
        "imgurl":require("@/assets/img/20.jpg.webp"),
        "num":["5.3万","5.2万"]

    },
    {
        "title":"梦比优斯奥特曼 11",
        "imgurl":require("@/assets/img/21.jpg.webp"),
        "num":["45.3万","6.6万"]

    },
    {
        "title":"奥特银河格斗 巨大阴谋 10",
        "imgurl":require("@/assets/img/14.jpg.webp"),
        "num":["8.3万","3.2万"]

    },
    {
        "title":"鲁邦三世 雾之谜",
        "imgurl":require("@/assets/img/15.jpg.webp"),
        "num":["42.3万","3.21万"]

    },
    {
        "title":"海绵宝宝 中文配音 137",
        "imgurl":require("@/assets/img/16.jpg.webp"),
        "num":["14.3万","2.1万"]

    }
]
Mock.mock("/api/finish",obj)