<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     // Récupérer les données du formulaire 
     $nom = $_POST['nom']; 
     $email = $_POST['email']; 
     $tel = $_POST['tel']; // Récupérer le numéro de téléphone 
     $message = $_POST['message']; 
     // Adresse e-mail de destination 
     
     $to = "Yousseffaras75020@gmail.com"; 
     // Sujet de l'e-mail 
     $subject = "Nouveau message du formulaire"; 
     
     // Corps de l'e-mail 
     $body = "Nom: $nom\nEmail: $email\nTéléphone: $tel\nMessage:\n$message"; 
     
     // En-têtes de l'e-mail 
     $headers = "From: $email"; 
     
     // Envoyer l'e-mail 
     if (mail($to, $subject, $body, $headers)) { 
        echo "E-mail envoyé avec succès!"; 
     
    } else { 
        echo "Erreur lors de l'envoi de l'e-mail."; 
    } 
    
    } else {
         echo "Méthode de requête invalide."; 
        
        }

?>