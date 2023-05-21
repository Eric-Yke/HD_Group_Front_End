$(document).ready(function () {

  //导入json数据
  $.ajax({
    url: 'pro_order_history_new.json',
    dataType: 'json',
    success: function (data) {
      // 将 JSON 数据填充到页面中
      const table = document.getElementById("myTable");
      const tbody = table.getElementsByTagName("tbody")[0];
      data.forEach(function (item) {
        const row = tbody.insertRow();

        const id_cell = row.insertCell();
        const date_cell = row.insertCell();
        const serviceType_cell = row.insertCell();
        const revenue_cell = row.insertCell();
        const ostatus_cell = row.insertCell();

        id_cell.innerHTML = item.order_id;
        date_cell.innerHTML = item.order_date;
        serviceType_cell.innerHTML = item.service_requested;
        revenue_cell.innerHTML = item.revenue;
        ostatus_cell.innerHTML = item.order_status;
      });
    },
    error: function () {
      console.log('Oops, Something going wrong...');
    }
  });
});
