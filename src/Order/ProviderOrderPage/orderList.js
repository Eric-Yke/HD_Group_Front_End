$(document).ready(function () {
  // 从json文件中获取订单数据
  $.getJSON('/Users/cei/Desktop/HD_Group_Front_End/src/Order/ProviderOrderPage/orderInfo.json', function (data) {
    // 遍历订单数据，生成订单列表
    $.each(data, function (index, order) {
      var row = $('<tr>');
      row.append($('<td>').text(order.orderNumber));
      row.append($('<td>').text(order.address));
      row.append($('<td>').text(order.name));
      row.append($('<td>').text(order.phone));
      row.append($('<td>').text(order.notes));
      row.append($('<td>').text(order.time));
      var actionBtn = $('<button>').addClass('actionBtn').text('Accept');
      actionBtn.click(function () {
        // 点击接受按钮后弹出确认框
        if (confirm('Are you sure you want to accept this order?')) {
          // 确认接受后跳转到订单详情页面
          window.location.href = 'orderDetail.html?orderNumber=' + order.orderNumber;
        }
      });
      row.append($('<td>').append(actionBtn));
      $('#orderListBody').append(row);
    });
  });

  // 给接受订单按钮添加click事件处理函数
  $('.actionBtn').click(function () {
    // 获取选中订单的信息
    var orderNumber = $(this).closest('tr').find('.order-number').text();
    var address = $(this).closest('tr').find('.address').text();
    var name = $(this).closest('tr').find('.name').text();
    var phone = $(this).closest('tr').find('.phone').text();
    var notes = $(this).closest('tr').find('.notes').text();

    // 将信息存储在一个对象中
    var order = {
      orderNumber: orderNumber,
      address: address,
      name: name,
      phone: phone,
      notes: notes
    };

    // 将订单信息转换为JSON格式并存储在本地存储中
    localStorage.setItem('currentOrder', JSON.stringify(order));

    // 跳转到订单详情页面
    window.location.href = 'orderDetail.html';
  });

});
