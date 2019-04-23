<?php
     $name = $_post['name'];
     $visitor_email = $_post['email'];
     $message = $_post['message'];


     $email_from = 'kadaoussama11@gmail.com';

     $email_subject = "New Porfolio Message";

     $email_body = "User Name: $name.\n".
                     "User Email: $visitor_email.\n".
                           "User Message: $message.\n";


     $to = "adamadak11@gmail.com";

     $headers = "Form: $email_from \r\n";

     $headers .= "Replay-to: $visitor_email \r\n";

     mail($to,$email_subject,$email_body,$headers);

     header("Location: index.html");
?>
