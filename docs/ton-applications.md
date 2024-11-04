---
id: tonApplications
title: TON applications
sidebar_label: TON applications
---

## I. Telegram Mini Apps

We have built a [Telegram Mini Apps](https://core.telegram.org/bots/webapps) for users to directly upload and store files to CrustBags (and optionally to Crust Network, for free) in telegram.

1. In telegram, search and add CrustBagsBot(Test)

   ![Pic](assets/build/crustbags-miniapp-addbot.png)

2. Use '/start' command to select storage mode

   ![Pic](assets/build/crustbags-miniapp-mode.png)

3. Select 'Ton Storage' and use '/connect' command to connect to your TON wallet

   ![Pic](assets/build/crustbags-miniapp-connect.png)

4. Select and upload some files. Confirm the transaction on the connected TON wallet.

   ![Pic](assets/build/crustbags-miniapp-add-file.png)

5. Uploading files in 'Ton Storage' mode requires to pay some $TON as storage fee. Optionally, you could use '/swith_mode' command to switch the mode to Crust Network and upload files for free.

   ![Pic](assets/build/crustbags-miniapp-switch-mode.png)

6. Use '/my_files' command to launch the Mini Apps to view file list.

   ![Pic](assets/build/crustbags-miniapp-my-files.png)