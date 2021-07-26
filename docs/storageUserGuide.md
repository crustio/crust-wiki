---
id: storageUserGuide
title: User Guidance
sidebar_label: User Guidance
---
Users can store files with Crust Network in three ways:
* Users are able to store files by directly using [Crust Apps](https://apps.crust.network/#/storage);
* Users are able to store files by adapting the standard IPFS to [Crust Apps](https://apps.crust.network/#/storage);
* Developers are able to develop storage features based on Crust SDK;

## 1. File storage via Crust Apps

### 1.1 Installing, configuring and launching IPFS
If the following prompt appears after you entering [Crust Apps/IPFS](https://apps.crust.network/#/storage), you need to install and launch IPFS.
![Install IPFS](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/installIPFS)
For this, you have two options:

#### Option 1. Install Crust-specific version of IPFS
You can click on the link to install and launch the Crust-specific version of IPFS. The specific version of IPFS differs from the standard IPFS in that it has been adapted to Crust Apps, so it can be used on Crust Apps upon installation with no more additional configuration.

#### Option 2. Install standard version of IPFS
If you have already installed the [Standard IPFS](https://ipfs.io/#install), you need to follow a few configuration steps to adapt it to Crust Apps.
You can click on the "Fold" on the page and follow the prompts to configure accordingly.

![config IPFS](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/configIPFS.png)

### 1.2 Uploading files to IPFS Network

You can upload a file or folder to IPFS following the steps of launching IPFS, unfolding the "Files" column, clicking on "Import" in the upper right corner, and choosing "File" or "Folder".
![upload](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/upload.png)

You will find the file or folder you just uploaded appear in your file list.

**Note: The uploaded file/folder is still on your local IPFS, and currently no node is there to help you store it.**

### 1.3 Generating storage orders
Then go to the file list to pick the file or folder you want to store on Crust Network, click on "..." to the right of the file/folder, and click on "Order" to open the order page.
![order1](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/order_1.png)

![order2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/order_2.png)

Select the account for payment on the order page and ensure that the account balance is larger than the file price (at the bottom), and click on "Confirm".
Then enter the account password to authorize the transaction and generate the storage order.
![submit_order](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/submit_order.png)

### 1.4 Checking order status

You can find the order you just generated in the list below after opening the storage order page. The initial state "Pending" means that the file is being pulled by Crust nodes.
![orders](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/orders.png)

The order statuses displayed in Crust Apps are detailed as follows:

* "Pending" indicates that the file is being pulled by Crust nodes. Oftentimes, the status will be updated within 30 minutes. But you can improve storage fees to attract more nodes to prioritize the pulling.
![renew_pending](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_pending.png)

    > **_Note 1:_** Please do not close IPFS or delete the file in IPFS during the "Pending" period. Otherwise, storage nodes may fail to pull the file.

    > **_Note 2:_** If the "Pending" status is there for more than 30 minutes, please refer to [solutions]().

* "Success" shows that the file has been stored by Crust nodes. You can click on "Renew" to renew the order (to postpone the expired date).
![renew_success](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_success.png)

* "Failed" suggests that an error has occurred to this order. The most typical error occurs when you initiate an order but submit an improper order size, thus resulting in an insufficient payment. If this happens, you can click on "Retry" to re-generate an order. Remember to fill in the file size and prize correctly.
![renew_failed](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_failed.png)

* "Expired" means that the order has expired. Under this circumstance, you will need to make sure that the file has a copy in IPFS Network and then click on "Renew" to re-generate the order.
![renew_expired](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_expired.png)

### 1.5 Viewing all user orders
The order information in [Crust Apps](https://apps.crust.network/#/storage) -> "IPFS" -> "Storage Order page"/"Storage Orders" is locally cached. Users can view all orders of a given account through "Pulling"/"Fetching".
1. Click on "Fetch My Orders";
   ![order2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/fetch1.png)

2. Choose the account and data source (Developers can develop their own data sources and [submit applications](https://github.com/crustio/crust-apps/issues/new) for review. Data sources that are approved will be displayed in the data source list for users to access.);
   ![pich_source](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/pick_source1.png)

3. Click "Confirm". The orders of the selected account will appear in the order list.

   

### 1.6  Renewing pool balance
The pool balance renewal mechanism is designed by [Crust DSM](DSM.md) to regularly renew files. After placing an order for a file, users can deposit an additional amount of any size into the file renewal pool. When the expiration of the file storage order is due (currently each file order expires 180 days after it is placed), and the balance of the file renewal pool is sufficient, users can initiate a [order settlement transaction](orderSettlement.md) for the file to renew the file order (regain a 180-day period of validity). Meanwhile, all settlement initiators will also receive a reward from the file renewal pool. The renewal steps include:
   1. Enter [Crust Apps](https://apps.crust.network/#/storage) -> "IPFS" -> "Storage Order page"/"Storage Orders" to choose the file in the file list;
   2. Click on "Renew"/"Add Balance"；
    ![Renew Pool](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_pool1.png)
   3. Choose the account, fill in the renewal amount and click on "Confirm" in the box that pops up.
![Renew Pool](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/add_balance1.png)

### 1.7 Retrieving files
Once you know the CID of a file, you can retrieve the file in [Crust Apps](https://apps.crust.network/#/storage/files) or in the standard IPFS Network (provided this file has been stored by nodes).

To retrieve files, please go back to the "Files" page, click on "Import" and select "From IPFS" as the import path, enter the CID of the file you want to retrieve in the page that pops up, and click on "Import".

![retrieval1](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/retrieval1.png)

![retrieval2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/retrieval2.png)

The file will be displayed in your file list when the retrieval is complete.

![retrieval2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/retrieved.png)

## 2. File storage via adapting standard IPFS to Crust Apps 
### 2.1 Uploading files using the standard IPFS
You can use IPFS desktop, IPFS Companion (website plug-in) or IPFS command line to import a file to IPFS Network and in return obtain the CID of the file. Additionally, you need to copy this CID, which will be used in the next step to generate Crust storage orders.

* The steps for importing files through IPFS desktop and IPFS Companion are largely the same.
    ![add_file_desktop](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/add_file1.png)

* You can also import files to IPFS Network through IPFS command lines, such as:
    ```shell
    ipfs add readme.md
    ```
    ![add_file_cli](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/add_file2.png)

The next step is for you to obtain the CID and file size of the newly uploaded file. The CID can be directly copied from the returned value of the command line or as shown below copied in the IPFS desktop.
    ![copy_cid](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/copy_cid.png)
The file size needs to be obtained through the command line below:

```shell
ipfs object stat QmXXXXX
```
The "QmXXXXX" in the command is the CID of your newly uploaded file. The value of "CumulativeSize" boxed with red in the figure below is the file size, which will be used together with CID in next steps.
    ![size](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/size.png)



### 2.2 Generating storage orders with Crust Apps
Enter [Crust](https://apps.crust.network/#/storage/market) and click on "Place an order".
    ![place_order](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/place_order.png)
Fill in the CID and Size obtained from the previous step in the order generation page and click on "Confirm". Then you can place an order on Crust Network.
    ![order_independent](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/order_independent.png)

For order status, please go back to [1.4 Checking order status](#14-Checking order status). 

### 2.3 Retrieving files
As long as you know the CID of a file, you can retrieve files through [Crust Apps](https://apps.crust.network/#/storage/files). For details, please refer to [1.5 Retrieving files](#15-Retrieving files). You may also use [IPFS file retrieval](https://dweb-primer.ipfs.io/avenues-for-access/retrieve-from-peer).

## 3. Developing storage features based on Crust SDK
Coming soon.
