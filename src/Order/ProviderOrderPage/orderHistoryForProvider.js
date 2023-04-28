$(document).ready(function () {
  $.getJSON("orderInfo.json", function (data) {
    var orders = "";
    $.each(data, function (key, value) {
      orders += "<tr>";
      orders += "<td>" + value.orderNumber + "</td>";
      orders += "<td>" + value.time + "</td>";
      orders += "<td>" + value.address + "</td>";
      orders += "</tr>";
    });
    $("#orderTable").append(orders);
  });
});























/** // 从json文件中获取历史订单信息
var orders = [];
$.getJSON("orderInfo.json", function (data) {
  orders = data;
  showOrders(1); // 显示第一页的订单
});

// 根据页码显示历史订单列表
function showOrders(page) {
  var itemsPerPage = 10;
  var startIndex = (page - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  var html = "";
  for (var i = startIndex; i < endIndex && i < orders.length; i++) {
    var order = orders[i];
    html += "<tr><td>" + order.orderNumber + "</td><td>" + order.time + "</td><td>" + order.service + "</td><td><button onclick='showOrderDetails(\"" + order.orderNumber + "\", \"" + order.time + "\")'>详情</button></td></tr>";
  }
  $("#orderList").html(html);
}
// 显示指定订单的详细信息
function showOrderDetails(orderNumber, time) {
  var order = orders.find(function (element) {
    return element.orderNumber === orderNumber && element.time === time;
  });
  var html = "<p>订单号：" + order.orderNumber + "</p>" +
    "<p>服务时间：" + order.time + "</p>" +
    "<p>客户姓名：" + order.name + "</p>" +
    "<p>联系电话：" + order.phone + "</p>" +
    "<p>送货地址：" + order.address + "</p>" +
    "<p>备注信息：" + order.notes + "</p>";
  $("#orderDetails").html(html);
}
**/