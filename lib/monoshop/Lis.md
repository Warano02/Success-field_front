Dans cette partie du projet qui est une  sorte d'impementation desite de e-comerce, tout les utilisateur du site peuvent y être eligible. Cependant,un condition mageur doit être respecter: L'email de l'utilisateur doit être deja confirmer dans la base de donnee. On comprend donc que pour cela il va faloir envoyer un code de confirmation a celui ci. le code doit être une suite de 6 chiffres. 

           🤔 Comment ca marche☹️ ? 

 Bonne question...

   A l'entrer du dossier principale, Nous allons effectuer une requête vers a base de donnee pour recuperer le la valeur du champ `confirm` de la table users principalement. cette valeur est codé en binaire cette a dire vaut `1` si l'email est confirmer et `0` dans le cas contraire.
 
Dans le cas où l'email est déjà verifier, alors l'utilisateur est directement dirriger vers la boutique soit 
`./data/` Dans le cas contraire, il est diriger vers le fichier de confirmation d'email soit `./data/pages/setting`.

La verification d'email effectuer,l'utilisateur devras alors pouvoir être eligible a la boutiue et commencer ces verifications.
