## Synchronisation des courriels

Pour consulter vos courriels, vous pouvez soit utiliser l'interface web d'OpenPaaS soit un client de messagerie. Ici, la seconde option sera illustrée, à savoir comment associer votre compte courriel à un client de messagerie sur mobile, ceci en passant par le protocol IMAP. Cette synchronisation vous permettra notamment de consulter les courriels déjà reçus en mode hors-ligne.

### Configurer un nouveau compte

> Attention: ces étapes peuvent varier d'un constructeur à l'autre.

1. Ouvrez l'application **Paramètres** de votre appareil, symbolisée par l'icône *engrenage* et notamment présent dans la barre de notifications.

    ![icône Paramètres](/account/images/fr/android_settings_icon.png)

2. En fonction de votre téléphone, appuyez sur `Comptes` ou `Comptes et synchronisation`.

    ![menu Paramètres|Comptes](/account/images/fr/android_settings_accounts.png)

3. Ensuite, appuyez sur `Ajouter un compte`.

    ![ajouter un compte](/account/images/fr/android_add_account.png)

4. Une page affichant les types de comptes disponibles va apparaître.
Choisissez `Personnel (IMAP)`.

    ![Personnel IMAP](/account/images/fr/android_add_imap_account.png)

5. Saisissez votre **adresse email** *OpenPaaS*: `<%= user.preferredEmail %>`.

    ![configurer login imap](/account/images/fr/android_add_imap_account_1.png)

6. Appuyez sur `Config. Manuelle`. (*Si l'option est cachée, veillez à réduire le clavier virtuelle*)
    - Appuyez sur `Personnel (IMAP)`.

        ![choisir imap](/account/images/fr/android_add_imap_account_2.png)

    - Saisissez votre mot de passe *OpenPaaS*.

        ![saisie du mot de passe imap](/account/images/fr/android_add_imap_account_3_password.png)

    - Utilisez les **paramètres de réception** suivants:
        - __Nom d'utilisateur__: `<%= user.preferredEmail %>`
        - __Mot de passe__: votre mot de passe *OpenPaaS*
        - __Serveur__: `<%= config.accounts[0].imap.hostName %>`
        - __Port__: `<%= config.accounts[0].imap.port %>`
        - __Type de sécurité__: STARTTLS

        ![serveur de réception](/account/images/fr/android_add_imap_account_4_incoming.png)

    - Appuyez sur `Suivant`.
    - Utilisez les **paramètres d'envoi** suivants :
        - __Exiger une connexion__: *Activé*
        - __Nom d'utilisateur__: `<%= user.preferredEmail %>`
        - __Serveur SMTP__: `<%= config.accounts[0].smtp.hostname %>`
        - __Port__: `<%= config.accounts[0].smtp.port %>`
        - __Type de sécurité__: STARTTLS

        ![serveur d'envoi](/account/images/fr/android_add_imap_account_5_outgoing.png)

    - Appuyez sur `Suivant`.
    - Choisissez vos préférences de synchronisation

        ![préf de synchro](/account/images/fr/android_add_imap_account_6.png)

    - Renseignez votre nom complet, qui sera utilisé pour les messages envoyés, et appuyez sur `Suivant`.

        ![saisir nom](/account/images/fr/android_add_imap_account_7.png)

7. **Votre configuration est terminée!** Vous pouvez désormais accéder à vos messages via votre client de messagerie préférée.

## Synchronisation de vos carnets d'adresses et de vos calendriers

### Prérequis

Les appareils Android ne gèrent pas nativement les protocoles CalDAV et CardDAV. Par conséquent, ils ne peuvent pas afficher des calendriers distants localement. Afin d'accéder à vos évènements ou contacts sur votre téléphone sans passer par le navigateur web, nous allons installer `DAVdroid`, une application qui se chargera de gérer cette synchronisation.

> Attention: `DAVdroid` requiert `Android 4.4` ou plus récent. Si votre téléphone a moins de cinq ans, ce critère devrait être rempli.

1. Par défaut, Android permet uniquement l'installation d'applications depuis le marché de Google. Pour installer DAVdroid, vous devrez dans un premier temps autoriser votre téléphone à ajouter une application depuis des `Sources inconnues`. Pour ce faire, naviguer dans le menu `Paramètres > Sécurité`, puis activez l'option correspondante.

    ![menu Paramètres|Sécurité](/account/images/fr/android_davdroid_settings_security.png)
    ![autoriser sources_inconnues](/account/images/fr/android_davdroid_unknown_src.png)

2. Téléchargez le fichier [DAVdroid apk](/account/downloads/davdroid/at.bitfire.davdroid_245.apk).
3. Ouvrez l'application `Téléchargements` ou si absente, `L'explorateur de fichier`.
4. Dans le dossier *Téléchargement*, faites défiler le texte jusqu'en bas.
5. Localisez puis appuyez sur le dernier fichier téléchargé pour lancer l'installation.
6. Appuyez sur `Install`

    ![install DAVdroid](/account/images/fr/android_davdroid_installed.png).

7. Appuyez sur `Ouvrir`.
8. Accédez à l'écran d'accueil après avoir passé les avertissements de licence, soit en cliquant sur `Plus tard` et `Ne plus afficher`.

    ![avertissement DAVdroid 1](/account/images/fr/android_davdroid_1strun_1.png)
    ![avertissement DAVdroid 2](/account/images/fr/android_davdroid_1strun_2.png)

9. Une fois que vous avez installé DAVdroid, retournez dans le menu `Paramètres > Sécurité`, puis **désactivez** l'option permettant à votre téléphone d'ajouter des applications depuis des `Sources inconnues`.

    ![autoriser sources_inconnues](/account/images/fr/android_davdroid_unknown_src.png)

### Régler la synchronisation des calendriers et des carnets d'adresses

1. Une fois DAVdroid ouvert, appuyez sur le bouton `+`.

    ![DAVdroid vide](/account/images/fr/android_davdroid_empty.png)

2. Dans la section `Connexion avec une votre addresse email`, saisissez votre adresse email `<%= user.preferredEmail %>` ainsi que votre mot de passe

    ![DAV domain credentials](/account/images/fr/android_davdroid_add_account.png)

3. Appuyez sur `Se connecter`
4. Appuyez sur `Créer un compte`, ce qui va ajouter une fiche. Appuyez sur cette fiche.

    ![DAV yellow button](/account/images/fr/android_davdroid_accounts_list.png)

5. A ce moment, il est possible que DAVdroid exige des permissions supplémentaires, notamment pour accéder à votre calendrier et à vos contacts. Veuillez accorder à DAVdroid ces permissions.
6. Pour activer la synchronisation automatique, veuillez cochez les boutons situés à gauche des fiches CardDAV et CalDAV.

    ![DAV enable automated sync](/account/images/fr/android_davdroid_enable_autosync.png)

7. Il est possible d'ajuster les paramètres de synchronisation en naviguant dans le menu propriété symbolisé par l'icône engrenage.
