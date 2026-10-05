# BẢN GHI PHẢN HỒI THỰC NGHIỆM PROTOTYPE (PROTOTYPE FEEDBACK NOTE)

* **Học viên thực hiện**: Nguyễn Khánh Duy (Mã học viên: `2A202602403`)
* **Nhóm**: Nhóm Case B (Lê Thanh Tùng, Nguyễn Khánh Duy, Cao Đức Hiệp)
* **Chủ đề**: Case B — AI Notes: Personal Learning Notes
* **Thời gian test**: Ngày 05/10/2026
* **Người dùng thử nghiệm (Tester thực tế)**: **Đoàn Quang Thanh** (Mã học viên: `2A202602841`)
* **Môi trường thử nghiệm**: Bản nguyên mẫu tích hợp Master Hub (`prototype/index.html`) chạy trên máy tính cá nhân qua trình duyệt Chrome.

---

## 1. THIẾT KẾ PHIÊN THỬ NGHIỆM (TEST SETUP)

* **Bối cảnh giao việc (User Task)**:
  > *"Giả sử bạn đang tham gia buổi học trực tuyến về Quản trị Stakeholder & Đội ngũ đa chức năng (Session 4). Giảng viên giảng lướt slide rất nhanh và sử dụng nhiều thuật ngữ viết tắt (như RASIC, Scrum, DISC). Bạn hãy sử dụng các công cụ trên màn hình để ghi chép và lần lượt trải nghiệm cả 3 giải pháp A, B, C."*
* **Trình tự kiểm thử (Tuân thủ Rule 5 — Không thiên vị)**:
  1. Trải nghiệm **Option A** (In-line Smart Autocomplete & Expansion)
  2. Trải nghiệm **Option B** (Slide-Anchored Snapshot)
  3. Trải nghiệm **Option C** (Post-lecture Cornell Structuring)

---

## 2. KẾT QUẢ GHI NHẬN 4 TẦNG (FOUR-LAYER FEEDBACK PROTOCOL)

### TẦNG 1: QUAN SÁT THỰC TẾ (OBSERVED — Hành vi & Lời nói khách quan của Tester)

* **Đối với Option A (In-line Smart Autocomplete)**:
  * **Hành vi khi test mù**: Khi thử nghiệm ở chế độ không có danh sách từ khóa mẫu, tester gõ phím rất nhanh theo thói quen tốc ký và bấm phím lướt qua nên **không phát hiện ra tính năng gợi ý của AI**.
  * **Hành vi sau khi được giải thích & có từ khóa mẫu**: Khi được người điều phối hướng dẫn thử gõ các từ tắt cụ thể (như `l`, `p`, `rasic` ở Slide 06 hoặc `daily` ở Slide 04), khung tím hiển thị nghĩa đầy đủ xuất hiện. Tester nhấn phím `Tab`, câu bung ra hoàn chỉnh ngay lập tức.
  * **Nhận xét nguyên văn của Tester**:
    > *"Khi test bản bị mất đoạn gợi ý từ khóa sẽ bị không phát hiện ra tính năng do gõ nhanh và không hiện được gợi ý. Nhưng khi được giải thích và thử bản có gợi ý thì thấy tính năng rất hay, giúp ghi chú nhanh hơn và biết được thuật ngữ chính xác của bài giảng."*
  * Tester có thử nút **↩ Hoàn tác (Undo)** và xác nhận việc quay lại chữ viết tắt ban đầu hoạt động trơn tru.

* **Đối với Option B (Slide-Anchored Snapshot)**:
  * **Hành vi quan sát**: Phần giao diện (UI) ban đầu gây bối rối cho tester. Tester đọc hướng dẫn ghi từ viết tắt nhưng khi gõ một từ bất kỳ vào ô nhập thì màn hình không hiển thị phản hồi gì.
  * Sau đó, khi được hướng dẫn nhập đúng từ khóa có sẵn trong slide (như `rasic`, `daily`), hệ thống mới chụp được thumbnail và đóng khung đỏ trên slide.
  * **Nhận xét nguyên văn của Tester**:
    > *"Phần UI gây khó hiểu khi hướng dẫn ghi từ viết tắt nhưng viết lên không hiện gì, sau đó thử nhập đúng từ thì dùng được. Tuy nhiên UI đang bắt chọn, không phải lúc nào cũng cần ghim ảnh. Chưa đáp ứng được phần chính là note nội dung bài học."*

* **Đối với Option C (Post-lecture Cornell Structuring)**:
  * **Hành vi quan sát**: Tester chuyển qua lại giữa các slide (Slide 04, Slide 06, Slide 14) và gõ các dòng ghi chú ngắn vào ô văn bản. Sau đó, tester bấm nút **"✨ Tổng hợp note bài học"**.
  * Bảng Cornell 3 phần hiện ra: các câu hỏi có dấu `?` được gom sang cột Cues, các nội dung kiến thức được phân nhóm theo từng slide ở cột Notes, và đoạn tóm tắt xuất hiện ở Summary.
  * **Nhận xét nguyên văn của Tester**:
    > *"Tính năng có giúp được tóm tắt note ở nhiều slide khác nhau. Tuy nhiên slide ví dụ hơi ít phần thắc mắc, nếu có bài có nhiều câu hỏi hơn sẽ giúp nhiều hơn."*

---

### TẦNG 2: PHÂN TÍCH NGUYÊN NHÂN (INTERPRETED — Động cơ, Rào cản & Tâm lý người học)

1. **Rào cản khám phá (Discoverability Barrier ở Option A)**:
   * Khi giảng viên nói nhanh, phản xạ tự nhiên của học viên là nhìn chằm chằm vào bài giảng và gõ liên tục không dừng. Nếu AI chỉ gợi ý thụ động ở dạng popup mà không có chữ mờ đi trước (*ghost text inline*) hoặc thanh chip từ khóa mồi, người gõ nhanh sẽ "vượt qua" thời điểm kích hoạt của AI mà không hề hay biết.
   * Tuy nhiên, một khi đã nắm được cơ chế, **giá trị nhận thức (Perceived Value) của Option A là cao nhất**: vừa giải phóng sức ép tốc ký, vừa đóng vai trò như một cuốn từ điển thuật ngữ sống giúp học viên hiểu bài chuẩn xác.
2. **Sự lệch pha giữa tính năng và bài toán cốt lõi (Mismatched Job ở Option B)**:
   * Nhu cầu cốt lõi số 1 của học viên trong lúc nghe giảng là **ghi lại được nội dung ý nghĩa của bài học (Text Note)** để sau này đọc lại.
   * Option B đang "ép" người học phải gắn kèm một tấm ảnh chụp slide. Việc ghim ảnh chỉ có ý nghĩa như một tài liệu đính kèm phụ trợ, không thể thay thế cho câu chữ ghi chú. Hơn nữa, việc gõ từ lạ mà hệ thống không phản hồi tạo ra cảm giác hệ thống bị lỗi (Broken Affordance).
3. **Bối cảnh sử dụng của Option C (Contextual Dependency)**:
   * Giá trị của mô hình Cornell phụ thuộc trực tiếp vào tính chất của buổi học. Ở các slide thuần lý thuyết truyền tải 1 chiều, học viên chủ yếu tiếp nhận thông tin nên ít tự đặt câu hỏi nghi vấn, khiến cột Cues bị đơn điệu.
   * Option C sẽ bộc lộ giá trị tối đa ở các buổi học phản biện, thảo luận tình huống (Case study) hoặc các bài giảng phức tạp có nhiều thắc mắc cần đào sâu.

---

### TẦNG 3: QUYẾT ĐỊNH ĐIỀU CHỈNH THIẾT KẾ (DECIDED — Thay đổi cụ thể cho vòng lặp tiếp theo)

Dựa trên phản hồi thực tế của bạn Đoàn Quang Thanh, nhóm quyết định các thay đổi thiết kế:

1. **Đối với Option A (Cải thiện khả năng nhận diện tính năng)**:
   * **Bổ sung Inline Ghost Text**: Hiển thị chữ gợi ý màu xám mờ nằm ngay sau con trỏ nhập liệu trong ô input (tương tự GitHub Copilot) để người dùng gõ nhanh vẫn nhìn thấy gợi ý lướt qua mắt mà không cần phải nhìn xuống khung popup.
   * **Giữ nguyên thanh Chip gợi ý nhanh (Dynamic Quick-try Bar)**: Đưa các từ khóa viết tắt nổi bật của slide hiện tại lên thành các nút bấm mồi để người học vừa vào là biết ngay slide này có thể gõ tắt những chữ gì.
2. **Đối với Option B (Đổi từ bắt buộc sang tùy chọn)**:
   * **Bỏ cơ chế ép buộc ghim ảnh**: Ưu tiên hiển thị khung ghi chép văn bản thông thường. Thêm một nút tùy chọn nhỏ `[+ Đính kèm ảnh slide]` để người học chỉ bấm khi gặp sơ đồ quá phức tạp cần lưu hình ảnh.
   * **Cải thiện phản hồi tìm kiếm**: Khi người học gõ một từ không khớp với tọa độ slide, AI vẫn lưu mẩu note bình thường và chụp toàn bộ slide kèm thông báo thay vì "không hiện gì" gây khó hiểu.
3. **Đối với Option C (Nâng cấp bộ gợi ý câu hỏi Cues)**:
   * **Chủ động gợi ý câu hỏi kích thích tư duy (AI-Generated Cues)**: Khi slide ít câu hỏi thắc mắc từ phía học viên, AI sẽ tự động đề xuất 1–2 câu hỏi trọng tâm của slide đó vào cột Cues (ví dụ: *"Slide 06: Tại sao vai trò L chỉ nên giao cho 1 người?"*) để khơi gợi sự suy ngẫm cho học viên khi ôn bài.

---

### TẦNG 4: GIẢ THUYẾT CHƯA ĐƯỢC CHỨNG MINH (STILL UNPROVEN — Rủi ro & Bỏ ngỏ cần kiểm chứng)

1. **Ngưỡng tốc độ gõ máy (Typing Speed Threshold)**:
   * Với những học viên có tốc độ gõ trên 80 từ/phút, liệu việc hiển thị ghost text có làm họ bị khựng lại hay không? Cần đo lường thời gian gián đoạn (Latency Interruption) trong môi trường gõ máy cường độ cao.
2. **Mức độ phụ thuộc vào từ điển có sẵn**:
   * Nếu giảng viên sử dụng một thuật ngữ mới phát sinh ngoài tài liệu slide, cơ chế bung từ của Option A sẽ xử lý thế nào để người học không bị hẫng?
3. **Hiệu quả tổng hợp Cornell trên bài giảng dài 90–120 phút**:
   * Khi số lượng slide lên tới 50–70 trang với hàng trăm dòng ghi chép, liệu thuật toán tổng hợp của Option C có giữ được sự cô đọng súc tích hay sẽ bị quá tải thông tin?

---

## 3. BẢNG TỔNG KẾT ĐÁNH GIÁ CỦA TESTER ĐOÀN QUANG THANH

| Tiêu chí | Option A (Autocomplete) | Option B (Slide Snapshot) | Option C (Cornell Note) |
| :--- | :--- | :--- | :--- |
| **Độ thân thiện & Dễ hiểu ban đầu** | ⭐⭐⭐⭐ (Cần có từ khóa mồi, khi biết dùng thì rất mượt) | ⭐⭐ (UI khó hiểu, gõ không hiện gì nếu sai từ) | ⭐⭐⭐⭐ (Gõ text tự nhiên, nút tổng hợp rõ ràng) |
| **Khả năng giải quyết việc chính (Note nội dung)** | ⭐⭐⭐⭐⭐ (Xuất sắc: gõ cực nhanh, chuẩn hóa thuật ngữ) | ⭐⭐ (Chưa đạt: bắt ghim ảnh, thiếu tập trung vào text) | ⭐⭐⭐⭐ (Tốt: gom được note ở nhiều slide) |
| **Giá trị hỗ trợ học tập** | ⭐⭐⭐⭐⭐ (Giúp hiểu đúng thuật ngữ bài giảng) | ⭐⭐⭐ (Hữu ích khi cần lưu ảnh sơ đồ) | ⭐⭐⭐⭐⭐ (Cực tốt nếu bài học có nhiều thắc mắc) |
| **Đánh giá tổng thể từ Tester** | **8.5 / 10** (Thực tế và hữu ích nhất trong giờ học) | **5.5 / 10** (Cần thiết kế lại luồng tương tác) | **8.0 / 10** (Rất tiềm năng cho bài học thảo luận sâu) |
