/**
 * Created by Daniel on 15-11-29.
 */

function HelloController($scope)
{
    $scope.greeting={text:"Hello"};
}

//购物车测试
var myCartModule=angular.module("myCart",[]);
myCartModule.controller("CartController",function($scope){
    $scope.items=[{
        title:"商品1",
        quantity:1,
        price:3.94
    },{
        title:"商品2",
        quantity:1,
        price:5.23
    },{
        title:"商品3",
        quantity:1,
        price:8.13
    }];

    $scope.remove=function(index)
    {
        $scope.items.splice(index,1);
    };
});

//表格测试
function restaurantTableController($scope)
{
    $scope.directory=[
        {
            name:"数据1",
            cuisine:"BBQ"
        },{
            name:"数据2",
            cuisine:"Salads"
        },{
            name:"数据3",
            cuisine:"Seafood"
        }];
    $scope.selectRestaurant=function(row)
    {
        $scope.selectRowId=row;
    };
}