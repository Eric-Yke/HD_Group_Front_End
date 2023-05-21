$(document).ready(function () {
  // 页面加载完成后，发送 AJAX 请求获取 JSON 数据
  $.ajax({
    url: 'professionals.json',
    dataType: 'json',
    success: function (data) {
      // 将 JSON 数据填充到页面中
      var container = $('#professionalList');
      var html = '';
      html += '<form>';
      $.each(data, function (index, item) {
        html += '<div id="divContainer">';
        //头像 div：avatar
        html += '<div id="avatar"><label for="selectButton"><img src="' + item.avatar + '" style="width: 100px;"></label></div>';
        //专业人士个人信息 div：professionalsInfo
        html += '<div id="professionalsInfo"><p>Name: ' + item.name + '</p>';
        html += '<p>Service rating score: ' + item.score + '</p>';
        html += '<p>Phone number: ' + item.phone_number + '</p></div>';
        //选中按钮 div：selectButton
        html += '<div id="selectButton"><input type="radio" name="pinkAProfessional value="select"> <b>Select this professional</b></div>';
        html += '<br />';
        html += '</div>';
      });
      html += '</form>';
      container.html(html);
    },
    error: function () {
      console.log('Oops, Something going wrong...');
    }
  });
});
