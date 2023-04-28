<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Order status</title>
  <link rel="stylesheet" type="text/css" href="ClientStyle.css">

  <style>
  p {
    text-align: center;
  }



  div {
    position: absolute;
    /* top: 50%; */
    left: 40%;
    /* transform: translate(-50%, -50%); */
  }
  </style>
  <script>
  // 定时刷新功能
  setInterval(function() {
    location.reload();
  }, 3000);
  </script>
</head>

<body>
  <div class="phpIn">
    <h1>Check order status</h1>

    <!-- 根据订单状态显示不同的内容 -->
    <?php
    $status = "waiting for Service";
    if ($status == "waiting for Professionals") {
      echo "<p>Waiting for Professionals respond, usually respond in 2 hours...</p>";
    } elseif ($status == "choose a professional") {
      echo "<a href='choose-professional.html'>choose a professional</a>";
    } elseif ($status == "waiting for Service") {
      echo "<p>Order Status: waiting for Service</p>";
      echo "<p>Contact Professionals</p>";
      echo "<p>Phone Number: 123456789</p>";
      echo "<p>Email: professional@example.com</p>";
    } elseif ($status == "Servicing") {
      echo "<p>Order Status: Servicing</p>";
      echo "<p>in service...</p>";
    } elseif ($status == "Write a review") {
      echo "<p>Order Status: Write a review</p>";
      echo "<p>Please rate this service</p>";
    } elseif ($status == "Finished") {
      echo "<p>Order Status: Finished</p>";
      echo "<p>service completed</p>";
    }
    ?>
    <!-- 添加刷新功能 -->
    <div><button onclick="location.reload()">Reload</button></div>
  </div>
</body>

</html>