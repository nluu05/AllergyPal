<?php include("../Data/dbConnect.php");

// Used this as ressource: https://www.php.net/manual/en/class.mysqli-stmt.php
# Check server connection first with user
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    # Check if user completed both fields
    if (empty($username)|| empty($password)){
        die("Please complete required fields.");
    }

    # After verifying both fields are complete, start user query to see if user is in database
    // To maybe change: Test to select all fields for now
    $stmt = $conn->prepare("SELECT * FROM profile WHERE username=? or email=?");

    # Check if it matches
    $stmt->bind_param("ss", $username, $username);
    $stmt->execute();

    $query_result = $stmt->get_result();

    # Check if user exists in database after initializing

    if ($query_result->num_rows===1){
        $row = $query_result->fetch_assoc();

        # Check password functionnality
        if (password_verify( $password, $row["password"])){
            session_start();
            $_SESSION["username"] = $row["username"];
            $_SESSION["email"] = $row["email"];

            header( "Location: ../profile.html");
            exit();
        } else {
            echo("Wrong password");
        }
    } else{
        echo("User not found");
    }

    # Close the connection for secured queries
    $stmt->close();
    $conn->close();
} else {
    echo("Issue with server connection. Please try again later.");
}
?>