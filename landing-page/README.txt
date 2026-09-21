= HƯỚNG DẪN DỰ ÁN LANDING PAGE ĐIỆN LẠNH HK =

1. CÁCH MỞ WEBSITE:
   - Mở trực tiếp file `landing-page/index.html` bằng trình duyệt web.

2. CÁCH ĐỔI SỐ ĐIỆN THOẠI & THÔNG TIN:
   - Tìm và thay thế `0355 904 325` hoặc `0355904325` trong file `index.html`.

3. CÁCH TÍCH HỢP FORM LƯU VÀO GOOGLE SHEETS:
   - Bước 1: Tạo một file Google Sheets mới trên Google Drive của bạn.
   - Bước 2: Vào Tiện ích mở rộng -> Apps Script.
   - Bước 3: Dán đoạn mã Apps Script sau:
     ```javascript
     function doPost(e) {
       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       var data = JSON.parse(e.postData.contents);
       sheet.appendRow([data.timestamp, data.phone, data.service, data.area]);
       return ContentService.createTextOutput("Success");
     }
     ```
   - Bước 4: Triển khai dưới dạng Web App (Quyền truy cập: "Anyone / Bất kỳ ai").
   - Bước 5: Copy URL Web App thu được và dán vào biến `GOOGLE_SHEETS_SCRIPT_URL` trong file `landing-page/assets/js/main.js`.

4. CÁCH THAY LOGO & HÌNH ẢNH:
   - Logo: Ghi đè file `landing-page/assets/images/logo.png`.
   - Ảnh thật: Thay thế các khối `<div class="gallery-card">` trong `index.html` bằng ảnh thực tế khi thợ đi làm ca tại nhà khách hàng.
