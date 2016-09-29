/**
 *  菜品属性
 *     名称:     name
 *     状态:     status
 *     生成时间:  initTime
 *     备注:     remark
 *     制作时间:  timeConsume
 *     数量 :     num
 *     可做厨师列表:  chefList
 *     紧急程度:   emergency
 *     绑定订单号:  bindOrderNum
 *     是否支持合并: canMerge
 *     修改日志:     log
 *
 *  菜品状态机:
 *
 *
 *
 *  影响菜品状态的action:   新单  催菜  退菜  厨师开始做某个菜
 */

var DISHSTATUS = {
    "new": "待安排",
    "arranged": "已排序",
    "making": "制作中",
    "timeOut": "超时",
    "complete": "完成",
    "canceled": "被取消"
}

function  init (){
    return "aaa";
}

function arrangeDish(){

}

function finishDish(){

}


exports.init = init;
exports.arrangeDish = arrangeDish;
exports.finishDish = finishDish;