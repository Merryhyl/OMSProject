/**
 * Created by yely.hu on 2017/11/28.
 */

$(function () {
    $(".sidebar-menu").on('click','li',function () {
        $(".sidebar-menu li").removeClass('active');
        $(this).addClass('active');
    })
})