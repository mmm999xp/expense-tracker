# expense-tracker

這是一個簡單的記帳程式

## 專案畫面

![MyImage](https://github.com/mmm999xp/expense-tracker/blob/main/%E4%B8%BB%E7%95%AB%E9%9D%A2.png)
![MyImage](https://github.com/mmm999xp/expense-tracker/blob/main/%E7%99%BB%E5%85%A5%E7%95%AB%E9%9D%A2.png)
![MyImage](https://github.com/mmm999xp/expense-tracker/blob/main/%E8%A8%BB%E5%86%8A%E7%95%AB%E9%9D%A2.png)

## 專案功能
* 使用者認證系統
  * 使用者可以登入自己的帳號
  * 使用者可以註冊自己的帳號
  * 使用者可以登出自己的帳號
* 基本功能
  * 使用者可以看到所有的支出項目
  * 使用者可以新增一筆支出
  * 使用者可以編輯一筆支出
  * 使用者可以刪除一筆支出
  * 使用者可以看到所有支出的總金額
  * 使用者可以依照類別排序自己的支出
  * 使用者可以看見篩選類別後的所有支出總金額

## 環境建置
* node.js
* mongoDB
  
## 若您是個使用者
專案已經部屬到heroku，您可以透過<a href="https://dry-spire-19895-b1841d61804a.herokuapp.com/" target="_blank">這個連結</a>直接使用網站的功能。
## 若您是個開發者
請依照以下流程進行操作

## 專案安裝流程
0.請先到mongoDB註冊登入並取得資料庫金鑰(key)

1.確保您的電腦安裝node.js之後開啟終端機輸入以下指令下載專案
```
git clone https://github.com/mmm999xp/expense-tracker.git
```
2.進入專案資料夾，建立.env檔案，並在其中替換<>中的內容
```
MONGODB_URI = mongodb+srv://<user_name>:<password>@cluster0.z4m2yov.mongodb.net/restaurant_list?retryWrites=true&w=majority
```
3.終端機輸入以下指令安裝npm
```
npm install
```
4.終端機輸入以下指令建立種子資料
```
npm run seed
```
5.終端機輸入以下指令開啟伺服器
```
nodemon app.js
```
6.開啟任意瀏覽器輸入網址就可以進入畫面囉
```
http://localhost:3000
```
7.第一次使用需要進行帳號註冊
```
請選擇register，如您有建立種子資料，請使用以下資訊進行測試
user1：
  email: root@example.com
  password: 12345678
```
8.登入完成後，就可以開始使用本專案的功能囉







