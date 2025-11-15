<?php include("Data/dbConnect.php") ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AllergyPal</title>
  <link rel="icon" href="images/peanut.png" />
  <link rel="stylesheet" type="text/css" href="css/shared.css">
  <link rel="stylesheet" type="text/css" href="css/nav.css">
  <link rel="stylesheet" type="text/css" href="css/profile.css">
</head>

<script src="js/main.js" defer></script>

<body>
  <div id="navbar"></div>

  <main>
    <div class="profile-container">
      <div class="profile-main">
        <h1>My Profile</h1>
        <img src="images/cookie.gif" alt="Profile picture" class="profile-icon">
      </div>
      <div class="profile-allergens-container">
        <div class="saved-allergens">
          <h1>Saved Allergens</h1>
          <div class="button-row">
            <button class="allergen-config">(+) Add Allergen</button>
            <button class="allergen-config">(-) Remove Allergen</button>
          </div>
        </div>

        <ul class="allergens-display">
          <?php if (!empty($allergens)): ?>
            <?php foreach ($allergens as $item): ?>
              <li><?php echo htmlspecialchars($item); ?></li>
            <?php endforeach; ?>
          <?php else: ?>
            <li>No allergens saved yet.</li>
          <?php endif; ?>
        </ul>
      </div>
    </div>
  </main>

  <div id="footer"></div>
</body>
</html>
