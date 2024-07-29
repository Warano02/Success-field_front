
 /*  v-1.1.1  */
## Description

Ce sous-dossier est celui qui va permettre la verification de l'email de l'utilisateur. 
On accède a celui ci ssi l'email de l'utilisateur n'est pas confirmé.

## comment ça  marche
A l'entrer du dossier cette a dire lorsque l'utilisateur est dans le fichier ``index.php``, un code de confirmation de son email lui ai envoyer via son email actuellement en session. A  la fin du decompte, il est diriger vers  le fichier `confirm.php` où il devras alors entrer le mot de passe qu'il as reçus qui est de 5 chiffres.
Lorsque le code entrer match déjà avec celui envoyer, il seras alors diriger vers le dashbord qui est tout juste hors de ce dossier cet a dire `../index.php` où il pouras alors aisément pavaner dans ces produit ou alors aller vers la boutique
