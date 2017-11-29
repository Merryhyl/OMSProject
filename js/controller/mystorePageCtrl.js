/**
 * Created by yely.hu on 2017/11/28.
 */
app.controller('mystorePageCtrl', ['$scope', '$state', '$http', '$rootScope', '$sce', 'qbhttp', function ($scope, $state, $http, $rootScope, $sce, qbhttp) {
    var dom = $('#myStore-table');
    dom.bootstrapTable("destroy");
    dom.bootstrapTable("hideLoading");
    dom.bootstrapTable({
        url:'json/tsconfig.json',
        onAll: function () {  //加载失败时执行
            $(dom).find('.no-records-found').each(function () {
                $(this).children().remove();
                $(this).append($('<td colspan="8">').css('vertical-align', 'inherit')
                    .append($('<span>').addClass('no-records-found-span').text('未搜索出结果')));
            });
        },
        columns: [{
            field: 'name',
            title: '店铺名称',
        },{
            field: 'id',
            title: '店铺ID'
        }, {
            field: 'platform',
            title: '来源平台'
        }, {
            field: 'status',
            title: '状态'
        }, {
            field: '',
            title: '操作',
            formatter: function (value, row, index) {
                if(row.status =="已绑定"){
                    return '<span class="option-span">编辑</span>';
                }else {
                    return '<span class="option-span">编辑</span><span class="option-span" style="margin-left: 14px">绑定</span>';
                }
            },
        }
        ]
    });


}])