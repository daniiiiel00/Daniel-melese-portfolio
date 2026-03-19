
// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     $name    = htmlspecialchars($_POST['name']);
//     $email   = htmlspecialchars($_POST['email']);
//     $subject = htmlspecialchars($_POST['subject']);
//     $message = htmlspecialchars($_POST['message']);

//     $to = "danielmelese240@gmail.com";
//     $headers  = "From: $name <$email>\r\n";
//     $headers .= "Reply-To: $email\r\n";
//     $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

//     $body  = "You have received a new message from your website contact form:\n\n";
//     $body .= "Name: $name\n";
//     $body .= "Email: $email\n";
//     $body .= "Subject: $subject\n";
//     $body .= "Message:\n$message\n";

//     if (mail($to, $subject, $body, $headers)) {
//         echo "OK"; // same output the JS expects for success
//     } else {
//         echo "Error: Message could not be sent.";
//     }
// } else {
//     echo "Error: Invalid request.";
// }

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit("Invalid request");
}

// Sanitize inputs
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($_POST['subject'] ?? 'Contact Form'));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// Validate
if (empty($name) || empty($email) || empty($message)) {
    die("❌ Please fill all required fields.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("❌ Invalid email address.");
}

// Email config
$to = "danielmelese240@gmail.com";
$email_subject = "New Message: " . $subject;

// Email body
$body = "📩 New Contact Message\n\n";
$body .= "👤 Name: $name\n";
$body .= "📧 Email: $email\n";
$body .= "📝 Message:\n$message\n";

// Headers
$headers = "From: Portfolio Contact <noreply@danielmelese.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send
if (mail($to, $email_subject, $body, $headers)) {
    header("Location: https://daniiiiel00.github.io/Daniel-melese-portfolio/?status=success#contact");
    exit;
} else {
    header("Location: https://daniiiiel00.github.io/Daniel-melese-portfolio/?status=error#contact");
    exit;
}
?>

