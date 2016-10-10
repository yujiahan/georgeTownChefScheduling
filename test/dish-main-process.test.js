require('mocha');
var expect = require('chai').expect;
var mainOperate = require('../mainOperate.js');
var orderOperate = require('../components/order/index.js');
var dishOperate = require('../components/dish/index.js');
var chef = require('../components/chef/index.js');


describe('菜品操作流程测试', function() {

    describe('#发送订单', function() {
        mainOperate.sendOrder({
            "orderNum":111,
            "table":"包1",
            "dish":[
                {'code':1,'name':"压锅焖牛腩",'count':1},
                {'code':2,'name':"荷塘小炒",'count':1},
            ]})
        it('可以查询到订单', function() {
            expect(orderOperate.searchOrder(111)).to.be.ok;
        });
    });

    describe('#确认订单', function() {
        it('订单状态为确认', function() {
            orderOperate.confirmOrder(111);
            expect(orderOperate.searchOrder(111).status).to.equal("CONFIRMED");
        });
    });
    describe('#分配厨师', function() {
        it('菜品为已分配', function() {
            dishOperate.arrangeDish(123);
            expect(orderOperate.searchOrder(111)['dish1111'].status).to.equal("ARRANGED");
        });
        it('获取当前分配厨师分配列表中包含这个菜', function(){
            var currentChef = orderOperate.searchOrder('order111').chef;
            expect(chef.getThisChefCurrentQueue(currentChef)).to.include('dish111');
        })
    });
    describe('#完成当前菜', function() {
        it('菜品已完成', function() {
            dishOperate.finishDish('dish111');
            expect(orderOperate.searchOrder(111)['dish111'].status).to.equal("FINISHED");
        });
    });
});