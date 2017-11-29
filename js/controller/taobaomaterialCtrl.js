/**
 * Created by yely.hu on 2017/11/28.
 */
'use strict';

app.controller('taobaomaterialCtrl', ['$scope', '$state', '$http', '$rootScope', '$sce', 'qbhttp', function ($scope, $state, $http, $rootScope, $sce, qbhttp) {
    var dom = $('#taobao-table');
    dom.bootstrapTable("destroy");
    dom.bootstrapTable("hideLoading");
    dom.bootstrapTable({
        url:'json/taobaoconfig.json',
        onAll: function () {  //加载失败时执行
            $(dom).find('.no-records-found').each(function () {
                $(this).children().remove();
                $(this).append($('<td colspan="8">').css('vertical-align', 'inherit')
                    .append($('<span>').addClass('no-records-found-span').text('未搜索出结果')));
            });
        },
        columns: [{
            field: 'store',
            title: '所属门店',
            valign: 'middle'
        },{
            field: 'name',
            title: '商品名称',
            valign: 'middle'
        }, {
            field: 'merchantCode',
            title: '商家编码',
            valign: 'middle'
        }, {
            field: 'specificationCode',
            title: '规格代码',
            valign: 'middle'
        }, {
            field: 'specificationName',
            title: '规格名称',
            valign: 'middle',
            width:'270px'
        }, {
            field: 'barCode',
            title: '条形码',
            valign: 'middle',
        }, {
            field: 'mappingGoods',
            title: '映射商品',
            valign: 'middle',
            formatter:function (value, row, index) {
                return '<div class="select"><select style="width: 170px;height: 30px"><option>11111</option></select></div>';
            }
        }, {
            field: 'confirmStatus',
            title: '物料确认',
            valign: 'middle',
            formatter: function (value, row, index) {
                if(row.confirmStatus =="确定绑定"){
                    return '<span class="option-span">确定绑定</span>';
                }else {
                    return '<span class="option-default-span">已确定</span>';
                }
            },
        }

        ]
    });

}])