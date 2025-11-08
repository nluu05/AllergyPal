<?php include("Data/dbConnect.php") ?>
<!-- TODO: Add all pages to link to this registration page on the navbar -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AllergyPal</title> 
  <link rel="stylesheet" type="text/css" href="css/shared.css">
  <link rel="stylesheet" type="text/css" href="css/nav.css">
  <link rel="stylesheet" type="text/css" href="css/register.css">
</head>

<script src="js/main.js" defer></script>

<body>
  <div id="navbar"></div>
  <main>
    <div class="register-container font">
      <h1>Create an Account</h1>
      <h2> Welcome to AllergyPal! </h2>
      <form class="register-form" action="php/registerprocess.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit" class="register-button">Register</button>
      </form>
    </div>
  </main>
</body>

</html>