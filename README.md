# Todo-sequelize1.0
此專案提供使用者紀錄待辦事項

## 功能列表
* 可以`註冊帳號`及使用`Facebook第三方登入方式`及`登出`
* 可以`新增紀錄`(包含項目...)
* 可以`修改`已建立之紀錄(項目名稱,完成狀態...)
* 可以`刪除`已建立之紀錄

## 安裝流程
* 利用終端機(Terminal)，Clone專案至目標位置

  ```
  git clone https://github.com/TimZXJ/todo-sequelize.git
  ```

* 進入專案資料夾

  ```
  cd todo-sequelize
  ```

* 安裝 npm packages

  ```
  npm install
  ```

* 載入種子資料

  ```
  npm run seed
  ```

* 開啟伺服器

  ```
  npm run dev
  ```
  * 當終端機(Terminal)出現`App is running on http://localhost:3000`表示伺服器已成功開啟。

* 在瀏覽器中入輸入網址:http://localhost:3000

## 種子資料
```
name: root
email: root@example.com
password: 12345678
```