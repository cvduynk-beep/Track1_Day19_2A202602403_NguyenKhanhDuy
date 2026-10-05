# ĐƯỜNG DẪN PROTOTYPE CHUNG CỦA NHÓM (PROTOTYPE LINK)

* **Nhóm**: Nhóm Case B (Lê Thanh Tùng, Nguyễn Khánh Duy, Cao Đức Hiệp)
* **Học viên nộp bài**: Nguyễn Khánh Duy (2A202602403)
* **Chủ đề**: Case B — AI Notes: Personal Learning Notes

---

## 1. LIÊN KẾT TRUY CẬP PROTOTYPE

* **Bản 1 — Bản Master kết hợp cả 3 phương án của Nhóm (All-in-One Prototype Hub)**:
  * Cho phép Tester trải nghiệm và so sánh trực tiếp cả 3 Option (A, B, C) trên cùng một bài giảng 22 slide.
  * Đường dẫn file: [`prototype/index.html`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype/index.html)
  * Chạy qua Local Web Server: `http://localhost:8080/index.html`
  * Chế độ chống thiên vị thứ tự (Anti-bias Order theo Rule 5):
    * Thứ tự chuẩn A-B-C: `http://localhost:8080/index.html?order=ABC`
    * Thứ tự B-C-A: `http://localhost:8080/index.html?order=BCA`
    * Thứ tự C-A-B: `http://localhost:8080/index.html?order=CAB`

* **Bản 2 — Bản nguyên mẫu chuyên biệt Option A của Duy (Dedicated Standalone Option A)**:
  * Tích hợp hệ thống hướng dẫn tương tác bằng các icon `?` popover giải thích 3 phần (*Đây là gì - Cách dùng - Ý nghĩa bài Lab*) và ngăn kéo tiêu chí chấm điểm (*Criteria Drawer*).
  * Đường dẫn file: [`prototype-a/index.html`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype-a/index.html)

* **Bản 3 — Các bản Standalone độc lập của từng thành viên**:
  * Option A (Nguyễn Khánh Duy): [`prototype/standalone/option-a/index.html`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype/standalone/option-a/index.html)
  * Option B (Lê Thanh Tùng): [`prototype/standalone/option-b/index.html`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype/standalone/option-b/index.html)
  * Option C (Cao Đức Hiệp): [`prototype/standalone/option-c/index.html`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype/standalone/option-c/index.html)

---

## 2. CẤU TRÚC BỘ NGUYÊN MẪU (THREE MICRO-PROTOTYPES)

* **Bộ dữ liệu mẫu dùng chung (70% Common Context)**:
  * Khóa học: *Product Coach • Session 4: Stakeholder & Team* (Đầy đủ **22 slide bài giảng** trích xuất từ file PDF bài học thực tế).
  * Bộ điều khiển slide: Hỗ trợ chuyển đổi toàn diện cả 22 slide qua dropdown hoặc 2 nút **◀ Trước / Tiếp ▶** có cơ chế vòng lặp tuần tự.
  * Mỗi slide có đầy đủ: Hình ảnh slide chuẩn, timestamp phút học, câu thoại giáo viên đang giảng, bộ 3 nút thử nhanh riêng biệt, và kho từ điển AI tương ứng.
  * Slide mặc định khi mở: **Slide 06 — Ma trận RASIC (Xác định trách nhiệm)**.

* **Phân công 3 Options trong bộ nguyên mẫu**:
  * **Option A (Nguyễn Khánh Duy phụ trách)**: *In-line Smart Autocomplete & Expansion* — Học viên gõ tắt (`l`, `p`, `rasic`, `daily`, `disc`, v.v.), AI nhận diện ngữ cảnh slide đang học và hiển thị thẻ gợi ý nghĩa đầy đủ, nhấn phím `Tab` để bung thành câu hoàn chỉnh; có nút Hoàn tác (Undo 1-click) và Lưu ghi chú.
  * **Option B (Lê Thanh Tùng phụ trách)**: *Slide-Anchored Snapshot* — Học viên gõ từ viết tắt rồi bấm "Ghim", AI tự động chụp và khoanh vùng đoạn văn bản trên Slide gắn cạnh mẩu note.
  * **Option C (Cao Đức Hiệp phụ trách)**: *Post-lecture Cornell Structuring* — Học viên gõ nháp tự do, cuối giờ AI tự động quét toàn bộ bài học và dịch thành bản Cornell Note 3 phần.

---

## 3. HƯỚNG DẪN TESTER THAO TÁC OPTION A (TEST INSTRUCTIONS)

1. **Mở trang web nguyên mẫu**:
   * Nhấp đúp vào [`prototype/index.html`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype/index.html) hoặc truy cập `http://localhost:8080/index.html`.
2. **Khám phá các slide bài giảng (Đầy đủ 22 slide)**:
   * Bấm nút **◀ Trước** hoặc **Tiếp ▶** để duyệt tuần tự qua các slide từ 01 đến 22.
   * Hoặc chọn trực tiếp bất kỳ slide nào trên thanh menu xổ xuống (Dropdown).
   * Khi đổi slide, lời giảng viên, mốc thời gian và 3 nút gõ tắt mẫu sẽ tự động thay đổi theo đúng nội dung slide đó.
3. **Thao tác ghi chép thông minh (Option A)**:
   * **Cách 1 (Nhanh nhất)**: Nhấp vào 1 trong 3 nút bấm gợi ý màu xanh ở thanh "👉 Thử nhanh theo slide này".
   * **Cách 2 (Gõ phím thủ công)**: Gõ từ viết tắt vào ô nhập (Ví dụ ở Slide 06: gõ `l` hoặc `rasic`; ở Slide 04: gõ `daily` hoặc `retro`; ở Slide 14: gõ `d` hoặc `disc`).
   * Quan sát khung gợi ý màu tím hiện lên hiển thị nghĩa đầy đủ và nguồn trích dẫn slide.
   * Nhấn phím **`Tab`** (hoặc nhấp chuột vào nút xanh **Nhận gợi ý**) để câu bung ra hoàn chỉnh.
   * Nếu muốn phục hồi chữ gõ tắt ban đầu: bấm nút **↩ Hoàn tác (Undo)**.
   * Nhấn **`Enter`** (hoặc bấm nút xanh **💾 Lưu vào sổ tay**) để lưu mẩu ghi chú xuống danh sách bên dưới.
4. **Hệ thống trợ giúp trực quan (?)**:
   * Bấm vào các dấu chấm hỏi **`?`** nhỏ cạnh từng tính năng để xem thẻ popover giải thích rõ 3 phần: *Đây là gì - Cách dùng - Ý nghĩa với bài Lab*.
   * Bấm nút **"👁️ Ẩn (?) để test mù"** trên thanh tiêu đề khi muốn tester tự trải nghiệm mà không bị chi phối bởi hướng dẫn.
   * Bấm nút **"🔄 Làm lại từ đầu"** để xóa toàn bộ ghi chú và reset về trạng thái ban đầu cho người tiếp theo test.
