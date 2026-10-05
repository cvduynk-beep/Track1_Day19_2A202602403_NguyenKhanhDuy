# BẢN TỔNG HỢP PHẢN HỒI THỰC NGHIỆM CỦA NHÓM (GROUP FEEDBACK SYNTHESIS)

* **Nhóm thực hiện**: Nhóm Case B (Lê Thanh Tùng, Nguyễn Khánh Duy, Cao Đức Hiệp)
* **Học viên đại diện nộp bài**: Nguyễn Khánh Duy (Mã học viên: `2A202602403`)
* **Chủ đề**: Case B — AI Notes: Personal Learning Notes
* **Thời gian thực hiện**: Ngày 05/10/2026

---

## 1. THÔNG TIN THỬ NGHIỆM TRÊN BẢN NGUYÊN MẪU TÍCH HỢP (MASTER PROTOTYPE)

Nhóm đã hoàn thành việc tích hợp cả 3 phương án vào một bản Hub chung (`prototype/index.html`) và tiến hành kiểm thử thực nghiệm trực tiếp với người dùng thật:

| Đối tượng thử nghiệm | Thông tin & Chuyên ngành | Thiết bị & Môi trường | Hình thức kiểm thử |
| :--- | :--- | :--- | :--- |
| **Đoàn Quang Thanh**<br>*(Mã HV: 2A202602841)* | Học viên Track 1, thường xuyên học trực tuyến, có thói quen ghi chú tốc ký trong giờ học. | Laptop cá nhân (Chrome), màn hình 14 inch, bàn phím gõ nhanh. | Trải nghiệm tuần tự cả 3 phương án (A, B, C) trên cùng bản Master Hub với bài giảng 22 slide. |

---

## 2. MA TRẬN PHÂN TÍCH ĐỐI CHIẾU 3 PHƯƠNG ÁN (CROSS-OPTION SYNTHESIS MATRIX)

| Tiêu chí đối chiếu | Option A: In-line Autocomplete (Duy phụ trách) | Option B: Slide Snapshot (Tùng phụ trách) | Option C: Cornell Structuring (Hiệp phụ trách) |
| :--- | :--- | :--- | :--- |
| **Khả năng tiếp cận ban đầu (Discoverability)** | **Cần tín hiệu thị giác mồi**: Khi test mù (không có từ khóa mẫu), tester gõ nhanh nên lướt qua mà không nhận biết AI. Khi có gợi ý mẫu, tester nắm bắt ngay lập tức. | **Gây bối rối lúc đầu**: Hướng dẫn ghi từ viết tắt nhưng gõ từ lạ thì không hiện gì. Phải nhập đúng từ khóa mẫu mới kích hoạt được vùng khoanh. | **Rất tự nhiên**: Ô textarea quen thuộc như các ứng dụng ghi chú thông thường, người học không mất thời gian làm quen. |
| **Mức độ giải quyết nhu cầu cốt lõi (Core Job: Note nội dung)** | **Rất cao (⭐⭐⭐⭐⭐)**: Giúp ghi chú cực nhanh trong lúc thầy giảng lướt, đồng thời chuẩn hóa thuật ngữ chính xác của bài giảng. | **Thấp (⭐⭐)**: Tester nhận xét thẳng thắn: *"Chưa đáp ứng được phần chính là note nội dung bài học"*, do UI bắt buộc phải chọn và ghim ảnh. | **Tốt (⭐⭐⭐⭐)**: Giải quyết xuất sắc việc gom và tổng hợp ghi chú từ nhiều slide khác nhau sau buổi học. |
| **Mức độ làm chủ của người học (User Agency)** | **Tuyệt đối**: AI chỉ gợi ý, học viên chủ động nhấn `Tab` để nhận câu hoặc bấm `↩ Hoàn tác (Undo)` nếu đổi ý. | **Trung bình**: Người học có quyền chỉnh sửa ô khoanh đỏ, nhưng luồng thao tác bị phụ thuộc vào việc chọn ảnh. | **Cao sau giờ học**: Người học được cấp quyền chỉnh sửa trực tiếp (`contentEditable`) trên bảng Cornell trước khi tải file về. |
| **Bối cảnh phát huy hiệu quả cao nhất** | Các bài giảng lý thuyết nhanh, nhiều thuật ngữ chuyên môn cần giải nghĩa tức thì. | Các slide chứa biểu đồ phức tạp, quy trình dạng sơ đồ khối cần lưu hình trực quan. | Các bài giảng có nhiều câu hỏi mở, tình huống thảo luận, case study cần đào sâu sau giờ học. |

---

## 3. CÁC QUYẾT ĐỊNH THAY ĐỔI THIẾT KẾ ĐÃ THỐNG NHẤT (DECIDED NEXT CHANGES)

Từ những phản hồi sắc bén của bạn Đoàn Quang Thanh (2A202602841), nhóm thống nhất 3 thay đổi chiến lược cho chu kỳ phát triển tiếp theo:

1. **Giải quyết triệt để rào cản nhận diện của Option A**:
   * Không để gợi ý nằm ẩn dưới dạng popup chờ đợi; triển khai cơ chế **Inline Ghost Text** (chữ xám mờ xuất hiện ngay sau con trỏ phím khi đang gõ) để học viên gõ nhanh vẫn kịp nhận biết mà không bị lỡ nhịp.
   * Duy trì thanh **Quick-try Chip Bar** theo từng slide để người học luôn biết trước những từ khóa viết tắt có thể tận dụng trong slide đó.
2. **Thiết kế lại Option B: Chuyển "Ghim ảnh" từ Bắt buộc thành Tùy chọn**:
   * Trả lại vai trò chính cho việc ghi chép nội dung văn bản. Tính năng ghim ảnh slide chỉ là nút đính kèm bổ trợ (`[+ Ghim ảnh slide này]`), người học chỉ kích hoạt khi thực sự cần lưu lại sơ đồ.
   * Cải thiện trạng thái phản hồi: nếu từ khóa chưa có tọa độ khoanh vùng cụ thể, AI sẽ chụp toàn slide và hiển thị ghi chú bình thường thay vì để màn hình trống không phản hồi.
3. **Nâng cấp Option C thành Mô hình Lai 2 Pha (Two-Phase Note-taking)**:
   * Tester Thanh nhận xét rất đúng: *"Option C giúp tổng hợp nhiều slide nhưng slide ví dụ hơi ít câu hỏi thắc mắc"*.
   * **Pha 1 (Trong giờ học)**: Tích hợp Option A làm công cụ gõ tốc ký chính trong lúc nghe giảng.
   * **Pha 2 (Sau giờ học)**: Áp dụng Option C để tự động gom toàn bộ các câu chữ đã bung ở Pha 1, đồng thời **AI chủ động gợi ý thêm 1–2 câu hỏi tư duy (Prompt Cues)** nếu người học chưa kịp ghi câu hỏi thắc mắc, giúp bảng Cornell luôn có giá trị ôn tập cao nhất.

---

## 4. CÁC GIẢ THUYẾT VẪN CHƯA ĐƯỢC CHỨNG MINH (STILL UNPROVEN)

1. **Tương tác khi học bài giảng dài trên 90 phút**:
   * Khi số lượng slide và ghi chú tăng lên gấp nhiều lần, liệu người học có duy trì được nhịp độ bấm Tab nhận câu hay sẽ bỏ qua và tự gõ tắt theo ý mình?
2. **Cơ chế xử lý câu hỏi tu từ của Giảng viên trong Option C**:
   * Liệu bộ lọc của Option C có phân biệt được đâu là "thắc mắc thật của học viên" và đâu là "câu hỏi gợi mở của giảng viên" trong lời thoại để đưa vào cột Cues một cách chính xác hay không?
3. **Hiệu quả ghi nhớ dài hạn**:
   * Cần kiểm chứng lại sau 7 ngày xem học viên ôn tập bằng ghi chú do AI mở rộng (Option A) có ghi nhớ kiến thức tốt hơn so với việc tự viết tay truyền thống hay không.
