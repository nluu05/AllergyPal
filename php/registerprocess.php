<?php include("../Data/dbConnect.php");


$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];

if (empty($username) || empty($password)){
    die("Please complete the missing fields.");
}

# Save password as hash to prevent attacks
$secured_password = password_hash($password, PASSWORD_DEFAULT);

$result =  "INSERT INTO profile(username, email, password) VALUES ('$username','$email', '$secured_password')";

// Check if anything gets sent to the database
if ($conn-> query($result)===true) {
    echo"";
} else {
    echo "Error processing data: ";
}

//close connection
$conn->close();
?>

<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css'>
	<style>
		@import url(//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css);
		@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
	</style>
	<link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css">
	<script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
	<script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>
</head>
<body>
	<header class="site-header" id="header">
		<h1 class="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
	</header>

	<div class="main-content">
		<i class="fa fa-check main-content__checkmark" id="checkmark"></i>
		<p class="main-content__body" data-lead-id="main-content-body">Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p>
	</div>
    
    <div class='center-home' style="text-align: center; margin: 20px;">
        <a href="../usermain.html" style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            margin: 10px;">
            Back To Home Page
        </a>
    </div>
</body>
</html>
