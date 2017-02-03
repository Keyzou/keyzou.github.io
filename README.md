# keyzou.github.io

Liste update :
    Updated 03/02/2017 by Matthieu Lanvert
    Updated
    Updated
    ...
    
Bienvenue sur le site de Matthieu Lanvert et Dean Chérif pour la majeure IF.

https://mubizinc.github.io/3a/

Niveau du projet actuellement: TP 1



Arborescence du tp et avancement :

Pré-requis - Installations
    Plateforme de développement et éditeur de texte :
        -> Choix pour le binôme WebStorm
    Versionning
        -> 2 comptes github : keyzou.github.io & huntal.github.io. Pour l'avancement du projet
           on travaillera sur keyzou.github.io qui est le github de Dean Chérif
    Hébergement
        -> keyzou.github.io
    Test en local
        -> ok
    Rédaction de la home page
        -> Rappel
               LANVERT Matthieu
               CHERIF Dean
               keyzou.github.io
               albin@mubiz.com  ->Objet : [ESILV][TP][3A]_________
        -> ok
    Qualité de code
        -> Rappel :
             * - Mettre des commentaires au fur et à mesure de vos développements
             JS - Faciliter la génération d'un documentation, par exemple en respectant le format APIDOC
             JS - Commencer les paramètres par "_"
             JS - Commencer les variables par une minuscule et les nommer en chameau
             JS - Commencer chaque fonction par un contrôle des paramètres fournis et des retours logiques.
             HTML SEO - Ajouter de méta-données dans les pages HTML, dans le respect de schema.org
             Performance - Vérifier la conformité W3C (HTML et CSS)
             Performance - Ne pas appeler des fichiers inutiles (JS, CSS, ...)
             UX - Ajouter d'icônes et d'images
             UX - Intégrer un minimum d'ergonomie "standard" des pages (Bootstrap ou autre)
             Organisation - Mettre la mise en page dans des fichiers CSS (rien en HTML)
             Organisation - Mettre les scripts dans des fichiers JS (rien en HTML)
        -> ok

TP 1 - Appel JSON et page d'informations
    Appel JSON depuis un navigateur
        API Bitcoin choisie : Mubiz
        Faire les appels JSON des fonctions sans paramètres depuis un navigateur (mining par ex)
        Appeler les données depuis la page créée + les afficher
        -> no
    Creation d'une page d'informations
        -> Rappel
            Créer une page /bitcoin + Créer un lien depuis la home page
            Afficher les données du WS /info
            Afficher les données du WS /blockchaininfo
            Afficher les données du WS /mininginfo
            Afficher les données du WS /peerinfo
            Créer une page /bitcoin/currency/ + Créer un lien depuis la home page
            Afficher les données de /currency
        -> no

TP 2 - Navigation Blocks, Address, Transactions, ...
    Navigation par block
        -> Rappel :
            Dans /bitcoin, créer un formulaire de saisie d'un numéro
            Permettre la saisie d'une address
            Afficher le résultat pour l'address
            Idem, dans un autre champs pour les hash de transactions
            Idem, dans un autre champ pour le hash d'une bloc
            Idem, dans un autre champs pour l'index de bloc
            Fusionner les champs en un seul
            Ajouter des contrôles de vérification des données fournies
            L'ajout de contrôle est nécessaire pour protéger le serveur
            Validité de l'adresse
            Validité du hash de la transaction
            ...
            L'ajout d'un message d'erreur est nécessaire (UX)
        -> no
    Navigation
        -> Rappel :
            Permettre la navigation d'un block au suivant / précédent via les numéros d'index
            Permettre les passages :
            --- Block -> Transactions --- Transaction -> Block --- Transaction -> Address --- Address
            -> Transaction - Commit, push et modification du ReadMe
        -> no

TP 3 - Générateur de QR Code et Proof of Existence
    Générateur de QR Code
        -> Rappel :
            A l'aide de la librairie QR Code for JS (MIT Licence), générer un QR Code respectant le BIP ...
            Tester le QR Code généré à l'aide d'une application mobile.
        -> no
    Proof of Existence
        -> Rappel :
            Signature d'un document => Génération d'un hash
            Vérification d'un document => Recevoir hash + document ET répondre si matching
        -> no

TP 4 - Ethereum
    ->no

Aller plus loin
    Blockchain et Data Mining
        -> Rappel :
            Installer WAMP/LAMP
            Créer une BdD par crypto-monnaie avec 3 tables : block, address et transaction
            Réaliser un "moteur" PHP parcourant une blockchain par block
            Ajouter l'insertion en BdD (MySQL) lors du parcours
            Analyser la densité temporelle des transactions, la variation des montants, ...
        -> no
    Blockchain et Bots
        -> Rappel :
            Regarder : https://github.com/python-telegram-bot/python-telegram-bot
            Créer une 1ère règle : Si réception d'une adresse bitcoin valide, retourner son solde.
            Créer une 2e règle : Si réception d'une adresse bitcoin valide avec /historic, retourner
            l'historique des transactions, en commençeant par les dernières transactions reçues.
    HD Wallet et Audit financier
        -> no


