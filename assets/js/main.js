document.addEventListener('DOMContentLoaded', function () {
    // Mobile Drawer Toggle
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileDrawer');

    if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', function () {
            drawer.classList.toggle('active');
        });

        const drawerLinks = drawer.querySelectorAll('a');
        drawerLinks.forEach(link => {
            link.addEventListener('click', function () {
                drawer.classList.remove('active');
            });
        });
    }

    // Google Sheets Form Submit Handler
    const heroForm = document.getElementById('heroBookingForm');
    if (heroForm) {
        heroForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Cấu hình URL Web App Google Apps Script của bạn tại đây
            const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';

            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const area = document.getElementById('area').value;

            const submitBtn = heroForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'ĐANG GỬI DỮ LIỆU...';
            submitBtn.disabled = true;

            // Nếu đã cấu hình URL Google Sheets real
            if (GOOGLE_SHEETS_SCRIPT_URL && !GOOGLE_SHEETS_SCRIPT_URL.includes('YOUR_SCRIPT_ID_HERE')) {
                fetch(GOOGLE_SHEETS_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        phone: phone,
                        service: service,
                        area: area,
                        timestamp: new Date().toLocaleString('vi-VN')
                    })
                }).then(() => {
                    alert('Gửi yêu cầu thành công! Trung tâm Điện Lạnh HK sẽ liên hệ tư vấn bạn ngay.');
                    heroForm.reset();
                }).catch(err => {
                    alert('Có lỗi xảy ra, vui lòng gọi trực tiếp Hotline 0355 904 325.');
                }).finally(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
            } else {
                // Giả lập thông báo nếu chưa gắn URL Google Sheet
                setTimeout(() => {
                    alert('Dữ liệu đã sẵn sàng! (Vui lòng dán URL Google Apps Script Web App vào file assets/js/main.js để lưu trực tiếp vào Google Sheet của bạn).');
                    heroForm.reset();
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }, 500);
            }
        });
    }
});
