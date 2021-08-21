include_once("index.js");

echo '<?xml version="1.0" encoding="utf-8"?>';?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>

<head>
<title>Votre panier</title>
</head>

<body>

  <form method="post" action="panier.php">
      <table style="width: 300px">
        <tr>
          <td colspan="3">Your cart</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
        </tr>
      </table>
   </form>
</body>

 </html>
