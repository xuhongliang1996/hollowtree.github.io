﻿var arr = new Array();
arr = [
    ['单页面制作',
        //['demo/ife/task_1_01_1.html', 'HTML页面'],
        ['demo/ife/task_1_03_1.html', '三栏式布局'],
        ['demo/ife/task_1_04_1.html', '定位及居中'],
        ['demo/ife/task_1_08_1.html', '响应式网格布局'],
        ['demo/ife/task_1_10_1.html', 'Flexbox布局'],
        ['demo/ife/task_1_12_1.html', '一些CSS3新特性'],
        ['demo/component/301/svg.html', 'SVG 初试'],
        ['demo/ife/task_1_02_1.html', 'HTML+CSS页面Ⅰ'],
        ['demo/ife/task_1_05_1.html', 'HTML+CSS页面Ⅱ'],
        ['demo/pages/bootstrap/index.html', 'Bootstrap 初试'],
        ['demo/ife/task_1_11_1.html', '自适应移动Web页面'],
        ['demo/ife/task_1_06_1.html', '模拟报纸排版'],
        ['demo/ife/task_1_09_1.html', '一个复杂页面']
    ],
    ['网页小部件',
        ['demo/component/101/index.html', '简易电子时钟'],
        ['demo/component/201/index.html', '绘制七巧板'],
        ['demo/ife/task_3_37_1.html', '浮出层'],
        ['demo/ife/task_3_38_1.html', '排序表格'],
        ['demo/ife/task_3_39_1.html', '首行冻结的表格'],
        ['demo/algorithms/sort-bubble.html', '冒泡排序可视化'],
        ['demo/ife/task_3_40_1.html', '日历组件Ⅰ'],
        ['demo/ife/task_3_41_1.html', '日历组件Ⅱ'],
        ['demo/ife/task_3_42_1.html', '日历组件Ⅲ']


        //['',''],
        //['#', '谷歌'],
    ]
];
var list = "";
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (j == 0) {
            list += '<div class="myMenu"><dt class="fMenu">' + arr[i][0] + '</dt><div class="sMenu">';
        } else {
            list += '<dd><a href="' + arr[i][j][0] + '" target="_blank">' + j + ")  " + arr[i][j][1] + '</a></dd>';
        }
    }
    list += '</div></div>';
}
list = '<div class="menu"><dl>' + list + '</dl></div>';
document.write(list);
