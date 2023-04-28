$(document).ready(function () {

  //导入json数据
  $.ajax({
    url: 'orderhistory.json',
    dataType: 'json',
    success: function (data) {
      // 将 JSON 数据填充到页面中
      const table = document.getElementById("myTable");
      const tbody = table.getElementsByTagName("tbody")[0];
      data.forEach(function (item) {
        const row = tbody.insertRow();

        const date_cell = row.insertCell();
        const serviceType_cell = row.insertCell();
        const orderNo_cell = row.insertCell();
        const professional_cell = row.insertCell();

        date_cell.innerHTML = item.date;
        serviceType_cell.innerHTML = item.serviceType;
        orderNo_cell.innerHTML = item.orderNo;
        professional_cell.innerHTML = item.professional;
      });
    },
    error: function () {
      console.log('Oops, Something going wrong...');
    }
  });
});
