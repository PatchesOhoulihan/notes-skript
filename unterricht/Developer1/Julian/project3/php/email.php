<?php

	mb_internal_encoding('UTF-8');
	
	$name = $_REQUEST['name'];
	$surname = $_REQUEST['surname'];
	$gender = $_REQUEST['gender'];
	$mail = $_REQUEST['mail'];
	
	$email_to = mb_encode_mimeheader( "Max Mustermann", "UTF-8" ) . " <test@test.com>";
	$email_from = mb_encode_mimeheader( "Max Mustermann", "UTF-8" ) . " <no-reply@max-mustermann.de>";
	$email_subject = mb_encode_mimeheader( "Neue Kontaktanfrage", "UTF-8" );
	$email_body = 	"Name: " . $name . " " . $surname . "\r\n" .
					"Geschlecht: " . $gender . "\r\n\r\n" .
					"Mail: " . $mail . "\r\n\r\n";

	mail( $email_to, $email_subject, $email_body, "From: $email_from\nContent-Type: text/plain; charset=UTF-8\nContent-Transfer-Encoding: 8bit");

?>
