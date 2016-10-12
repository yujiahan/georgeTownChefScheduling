
var chefMap = {
    "zhou":['0020250','0020230','0020260','0020460','0020470','0020252','0020300','0020320','0020390','0020510','0020251','0020500','0020340','0020253','0020520','0020321','0020350','0020540','0020530','0020490','0020550'],
    "luo":['0020420','0020240','0020220','0020310','0020380','0020360','0020010','0020400','0020070','0020080','0060030','0020290'],
    "fu":['0020060','0020410','0050040','0050060','0020210','0050080','0020270','0020480','0020200','0020330','0060020'],
    "meng":['0020040','0020120','0020162','0020110','0050030','0050020','0020130','0020370','0050012','0020180','0020430','0020172','0010010'],
    "li":['0030021','0030052','0010020','0030022','0010060','0010030','0010080','0010070','0010090']
};

var tableData = {
    "zhou":[],
    "luo":[],
    "fu":[],
    "meng":[],
    "li":[],
    "else": []
};

var TODAY =   new Date().getFullYear() + "-" +
              (new Date().getMonth()+1) + '-' +
              (new Date().getDate())  //示例'2016-10-09';

$(document.body).html(
    '<style>'+
    '    table { text-align: center; font-size: 12px;} '+
    '    .content td, th, .sum td {'+
    '        border-bottom: 1px solid #e5e5e5;'+
    '        padding: 2px; text-align: center;'+
    '    }'+
    '</style>'+
    '<table cellspacing=0 cellpadding=0>                    '+
    '    <thead>                                            '+
    '    <tr>                                               '+
    '        <th width="100">厨师名称</th>                      '+
    '        <th width="100">商品名称</th>                      '+
    '        <th width="100">销售量</th>                      '+
    '        <th width="100">销售量占比</th>                      '+
    '        <th width="100">销售额</th>                      '+
    '        <th width="100">销售额占比</th>                      '+
    '    </tr>                                              '+
    '    </thead>                                           '+
    '    <tbody id="main">                                  '+
    '    <tr id="zhou">                                     '+
    '        <td>周乐开</td>                                    '+
    '        <td colspan=5>                                 '+
    '            <table cellspacing=0 cellpadding=0>        '+
    '                <tbody class="content js-content">     '+
    '                </tbody>                               '+
    '            </table>                                   '+
    '        </td>                                          '+
    '    </tr>                                              '+
    '    <tr class="sum" id="zhouSum">                             '+
    '        <td>合计</td>                                    '+
    '        <td></td>                                      '+
    '        <td class="js-numSum"></td>                                    '+
    '        <td class="js-numRateSum"></td>'+
    '        <td class="js-amountSum"></td>                                    '+
    '        <td class="js-rateSum"></td>                                    '+
    '    </tr>                                              '+
    '    <tr id="luo">                                     '+
    '        <td>罗红金</td>                                    '+
    '        <td colspan=5>                                 '+
    '            <table cellspacing=0 cellpadding=0>        '+
    '                <tbody class="content js-content">     '+
    '                </tbody>                               '+
    '            </table>                                   '+
    '        </td>                                          '+
    '    </tr>                                              '+
    '    <tr class="sum" id="luoSum">                             '+
    '        <td>合计</td>                                    '+
    '        <td></td>                                      '+
    '        <td class="js-numSum"></td>                                    '+
    '        <td class="js-numRateSum"></td>'+
    '        <td class="js-amountSum"></td>                                    '+
    '        <td class="js-rateSum"></td>                                    '+
    '    </tr>                                              '+
    '    <tr id="fu">                                     '+
    '        <td>符本德</td>                                    '+
    '        <td colspan=5>                                 '+
    '            <table cellspacing=0 cellpadding=0>        '+
    '                <tbody class="content js-content">     '+
    '                </tbody>                               '+
    '            </table>                                   '+
    '        </td>                                          '+
    '    </tr>                                              '+
    '    <tr class="sum" id="fuSum">                             '+
    '        <td>合计</td>                                    '+
    '        <td></td>                                      '+
    '        <td class="js-numSum"></td>                                    '+
    '        <td class="js-numRateSum"></td>'+
    '        <td class="js-amountSum"></td>                                    '+
    '        <td class="js-rateSum"></td>                                    '+
    '    </tr>                                              '+
    '    <tr id="meng">                                     '+
    '        <td>蒙禄彪</td>                                    '+
    '        <td colspan=5>                                 '+
    '            <table cellspacing=0 cellpadding=0>        '+
    '                <tbody class="content js-content">     '+
    '                </tbody>                               '+
    '            </table>                                   '+
    '        </td>                                          '+
    '    </tr>                                              '+
    '    <tr class="sum" id="mengSum">                             '+
    '        <td>合计</td>                                    '+
    '        <td></td>                                      '+
    '        <td class="js-numSum"></td>                                    '+
    '        <td class="js-numRateSum"></td>'+
    '        <td class="js-amountSum"></td>                                    '+
    '        <td class="js-rateSum"></td>                                    '+
    '    </tr>                                              '+
    '    <tr id="li">                                     '+
    '        <td>李贵林</td>                                    '+
    '        <td colspan=5>                                 '+
    '            <table cellspacing=0 cellpadding=0>        '+
    '                <tbody class="content js-content">     '+
    '                </tbody>                               '+
    '            </table>                                   '+
    '        </td>                                          '+
    '    </tr>                                              '+
    '    <tr class="sum" id="liSum">                             '+
    '        <td>合计</td>                                    '+
    '        <td></td>                                      '+
    '        <td class="js-numSum"></td>                                    '+
    '        <td class="js-numRateSum"></td>'+
    '        <td class="js-amountSum"></td>                                    '+
    '        <td class="js-rateSum"></td>                                    '+
    '    </tr>                                              '+
    '    <tr id="else">                                     '+
    '        <td>其他</td>                                    '+
    '        <td colspan=5>                                 '+
    '            <table cellspacing=0 cellpadding=0>        '+
    '                <tbody class="content js-content">     '+
    '                </tbody>                               '+
    '            </table>                                   '+
    '        </td>                                          '+
    '    </tr>                                              '+
    '    <tr class="sum" id="elseSum">                             '+
    '        <td>合计</td>                                    '+
    '        <td></td>                                      '+
    '        <td class="js-numSum"></td>                                    '+
    '        <td class="js-numRateSum"></td>'+
    '        <td class="js-amountSum"></td>                                    '+
    '        <td class="js-rateSum"></td>                                    '+
    '    </tr>                                              '+
    '    </tbody>                                           '+
    '</table>                                               ');


$(document).off("mouseover");
var postData = JSON.stringify( {
    "shopIds":["810006136"],
    "dateType":"day",
    "dateStart":TODAY,
    "dateEnd":TODAY,
    "saleType":0,
    "deliveryTypes":["4","1","2","3"],
    "selectedSources":["10","3","9","-1"],
    "unselectedSources":[]
});

$.ajax({
    url:"/mind/report/salesort/query",
    data: postData,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json'
}).done(function(result){
    $.each(result.dishList||[], function(idx, dishItem){

        if(codeFindTheChef(dishItem.dishCode)){
            var chefName = codeFindTheChef(dishItem.dishCode);
            tableData[chefName].push(dishItem);
        } else {
            tableData.else.push(dishItem);
        }

    });
    drawTable();
    window.print();
});

function drawTable(){
    $.each(tableData, function(key, dishArray){
        var chefID = key;
        var numSum = 0;
        var numRateSum = 0;
        var amountSum = 0;
        var rateSum = 0;

        $.each(dishArray, function(idx, item){
            numSum += item.qty;
            numRateSum += item.qtyRate;
            amountSum += item.amount;
            rateSum += item.amountRate;

            $('#'+chefID).find('.js-content')
                .append('<tr><td width=200>'+ item.dishName +'</td><td width=200>'+ item.qty+'</td>'+'<td width=200>'+ item.qtyRate+'</td>'+
                    '<td width=200>'+ item.amount+'</td><td width=200>'+ item.amountRate+'%</td></tr>');
        });
        $('#'+chefID +"Sum").find(".js-numSum").text(numSum.toFixed(2));
        $('#'+chefID +"Sum").find(".js-numRateSum").text(numRateSum.toFixed(2) + "%");
        $('#'+chefID +"Sum").find(".js-amountSum").text(amountSum.toFixed(2));
        $('#'+chefID +"Sum").find(".js-rateSum").text(rateSum.toFixed(2) + "%");
    });
}

function codeFindTheChef(dishCode){
    var theChefName;
    $.each(chefMap, function(chefName, chefCodeList){
        if(chefCodeList.indexOf(dishCode)> -1){
            theChefName = chefName;
            return true;
        }
    });
    return theChefName;
}
