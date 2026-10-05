# BÀI LAB DAY 18: MULTIPLE PROTOTYPES - EXPERIMENT DESIGN
*(Thiết kế thử nghiệm đa nguyên mẫu và kiểm chứng tương tác Human - AI)*

* **Học viên**: Nguyễn Khánh Duy  
* **Mã học viên (MHV)**: 2A202602403 (Mã ngắn: 02403)  
* **Tên thư mục repo**: `Track1_Day18_2A202602403_NguyenKhanhDuy`  
* **Ngày thực hiện**: 05/10/2026  

---

## 1. THÔNG TIN CÁ NHÂN VÀ NHÓM

* **Mã học viên (MHV)**: 2A202602403
* **Họ và tên**: Nguyễn Khánh Duy
* **Tên nhóm**: Nhóm Case B (Lê Thanh Tùng, Nguyễn Khánh Duy, Cao Đức Hiệp)
* **Danh sách thành viên**:
  1. Nguyễn Khánh Duy — 2A202602403 (Phụ trách Option A)
  2. Lê Thanh Tùng — 2A202602499 (Phụ trách Option B)
  3. Cao Đức Hiệp — 2A202602550 (Phụ trách Option C)
* **Case đã chọn**: **Case B — AI Notes: Personal Learning Notes** (Ghi chú học tập cá nhân bằng trí tuệ nhân tạo).

---

## 2. HYPOTHESIS PROBLEM (BẢN CHỐT NHÓM DÙNG TRONG DAY 18 - GATE 1)

### 2.1. Câu Hypothesis Problem chuẩn hóa (Đủ 5 thành phần theo cú pháp bắt buộc)
* **Ý tưởng gốc của nhóm**:
  > *"Khi giảng viên giảng nhanh, học viên khó ghi đủ ý ở dạng đọc lại được vì chỉ kịp viết tắt/tốc ký → mở lại sau vài ngày không hiểu chính mình đã ghi gì."*

* **Câu chuẩn hóa cú pháp Gate 1**:
  > **"Khi giảng viên giảng nhanh** *(situation)*, **học viên** *(user)* **gặp khó khăn trong việc ghi chép đầy đủ ý ở dạng có thể đọc lại được** *(job)* **vì chỉ kịp viết tắt hoặc tốc ký các mẩu từ khóa rời rạc** *(barrier)*, **dẫn đến khi mở lại sau vài ngày thì không hiểu chính mình đã ghi gì và phải tốn thời gian tra cứu, học lại từ đầu** *(consequence)*.**"**

### 2.2. Evidence ban đầu hỗ trợ giả thuyết (Kế thừa từ Day 17)
* **Thực tế hành vi:** 
  * Phỏng vấn của Duy (P01_SV_FPT): Người học chia sẻ: *"Nhiều lúc thầy đang giảng mà mình không để ý, có những thuật ngữ khó phải tra lại nên mình bị phân tâm... em chưa kịp hiểu khái niệm đấy em note lại và chưa hiểu thì thầy đã lướt qua rồi."*
  * Người học không kịp ghi chép tử tế mà chỉ gõ dồn từ khóa cụt lủn vào Zalo.
  * Phỏng vấn học viên tự học (Cao Đức Hiệp): Vừa nghe vừa gõ tắt trên Notion, sau vài ngày mở lại không giải mã được chữ viết tắt của chính mình, phải tua lại video để nghe lại từ đầu.
* **Hao phí có thật:** Mất 5–10 phút/khái niệm và 30–40 phút sau buổi học để tự mò mẫm giải mã hoặc tìm lại tài liệu.

### 2.3. Điều vẫn chưa được chứng minh (Still Unproven)
1. Chưa chứng minh được liệu việc AI tự động mở rộng/diễn giải các mẩu tốc ký có thực sự giúp người học nhớ lại chính xác bài giảng hay không, hay họ vẫn phải nghe lại bài giảng.
2. Chưa chứng minh được cơ chế nào (Tự động mở rộng từ viết tắt vs. Đồng bộ mốc thời gian âm thanh bài giảng vs. Tự động liên kết với trang slide tương ứng) mang lại cảm giác an tâm và độ chính xác cao nhất cho người học.

---

## 3. THREE SOLUTION OPTIONS (MÔ TẢ NGẮN VÀ CƠ CHẾ KHÔNG ÂM THANH)

| Phương án | Cơ chế tương tác chính (Mechanism) | Vai trò Người - AI (Agency) | Đánh đổi chính (Trade-off) |
| :--- | :--- | :--- | :--- |
| **Option A**<br>*(Duy phụ trách)* | **In-line Smart Autocomplete**: Học viên gõ 1–2 từ viết tắt (`cd cr`), AI nhận diện slide hiện tại và hiển thị gợi ý mờ (*ghost text*). Nhấn **Tab** để bung thành câu hoàn chỉnh. | **User-Initiated**: Người học làm chủ 100%, AI chỉ gợi ý thụ động, không tự ý can thiệp. | **Được:** Rõ nghĩa ngay tức thì.<br>**Mất:** Mất 0.5s chú ý liếc xem AI gợi ý đúng không. |
| **Option B**<br>*(Tùng phụ trách)* | **Slide-Anchored Snapshot**: Học viên gõ từ viết tắt rồi bấm "Ghim". AI tự động chụp ảnh slide hiện tại, tự động khoanh vùng đoạn văn bản liên quan và dán cạnh mẩu note. | **User + AI Co-create**: Người học chọn thời điểm ghim, AI chịu trách nhiệm trích xuất hình ảnh ngữ cảnh. | **Được:** Giữ nguyên 100% tài liệu gốc của giảng viên.<br>**Mất:** Giao diện có nhiều ảnh, tốn diện tích hơn chữ. |
| **Option C**<br>*(Hiệp phụ trách)* | **Post-lecture Cornell Structuring**: Trong giờ học tự do gõ nháp tốc ký. Hết buổi học, AI đối chiếu danh sách từ viết tắt với toàn bộ slide để tự động dịch và chia 3 cột chuẩn Cornell. | **AI-Initiated / User Reviews**: AI tự động xây dựng bản tổng hợp, Người học giữ vai trò duyệt và chỉnh sửa. | **Được:** 0% phân tâm trong buổi học.<br>**Mất:** Xử lý sau giờ; nếu AI hiểu sai ngữ cảnh thì phải sửa lại. |

* **Liên kết Prototype**:
  * Xem tài liệu điều phối đầy đủ: [`prototype-link.md`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype-link.md)
  * **Bản Master kết hợp của nhóm (All-in-One ABC)**: [`prototype/index.html`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype/index.html) (hoặc `http://localhost:8080/index.html`)
  * **Bản chuyên biệt Option A của Duy**: [`prototype-a/index.html`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype-a/index.html)

---

## 4. ĐÓNG GÓP CỦA TÔI TRONG NHÓM (MY INDIVIDUAL CONTRIBUTION)

* **Xây dựng giải pháp độc lập (Option A)**:
  * Đề xuất và đặc tả chi tiết cơ chế tương tác cho **Option A: In-line Smart Autocomplete & Expansion** (User-Initiated, cơ chế bung từ khóa bằng phím `Tab`, nút `Hoàn tác / Undo 1-click`).
  * Trích xuất và chuẩn hóa toàn bộ dữ liệu mẫu gồm **22 slide bài giảng** từ file `slide mẫu.pdf` (Session 4: Stakeholder & Team) để làm bối cảnh thử nghiệm thực tế (70% Common Context).
* **Trực tiếp lập trình Micro-prototype**:
  * Hiện thực hóa nguyên mẫu tương tác độc lập bằng bộ ba công nghệ Web chuẩn (HTML5, Vanilla CSS3, JavaScript ES6) tại thư mục [`prototype-a/`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype-a/index.html) và đóng góp module vào bản Master Hub chung [`prototype/`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype/index.html).
  * Phát triển bộ điều hướng chuyển đổi linh hoạt qua toàn bộ 22 slide, hỗ trợ cả menu xổ xuống (Dropdown) và 2 nút tuần tự xoay vòng `◀ Trước / Tiếp ▶`.
  * Tích hợp hệ thống hỗ trợ trực quan với các icon chấm hỏi `?` giải thích rõ ràng 3 phần (*Tính năng này là gì - Cách dùng - Ý nghĩa với bài Lab*) cùng chế độ "Ẩn (?) để test mù".
* **Thực hiện kiểm nghiệm với người dùng thật**:
  * Trực tiếp tham gia điều phối phiên kiểm thử thực tế trên bản Master Hub với Tester độc lập **Đoàn Quang Thanh (2A202602841)**, quan sát và ghi nhận dữ liệu theo giao thức 4 tầng (*Observed, Interpreted, Decided, Still Unproven*).
  * Đóng góp dữ liệu phản hồi cá nhân và phân tích nguyên nhân vào bảng tổng hợp đối chiếu chung của cả nhóm.

---

## 5. PROTOTYPE FEEDBACK (KẾT QUẢ TEST & TỔNG HỢP NHÓM)

* **Ghi chú chi tiết phiên thử nghiệm thực tế (Tester: Đoàn Quang Thanh — 2A202602841)**:
  * Xem tài liệu: [`prototype-feedback-note.md`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/prototype-feedback-note.md)
  * **Tóm tắt phát hiện chính từ Tester Thanh**:
    * **Option A**: Khi gõ nhanh không có từ mồi dễ bị lướt qua gợi ý; nhưng khi có từ khóa mẫu và nắm được phím `Tab`, tester đánh giá *"tính năng rất hay, giúp ghi chú nhanh hơn và chuẩn hóa đúng thuật ngữ bài giảng"*.
    * **Option B**: Nhận xét thẳng thắn *"UI bắt buộc phải chọn/ghim ảnh, chưa đáp ứng được nhu cầu chính là ghi chép nội dung bài học"*.
    * **Option C**: Tóm tắt tốt qua nhiều slide; đề xuất ứng dụng mạnh hơn cho các bài giảng có nhiều câu hỏi / thảo luận sâu.
* **Bản tổng hợp phản hồi của cả nhóm (Master Synthesis Matrix)**:
  * Xem tài liệu: [`group-feedback-synthesis.md`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/group-feedback-synthesis.md)
  * **Đồng thuận nhóm**: Chuyển việc ghim ảnh của Option B từ "bắt buộc" thành "tùy chọn đính kèm phụ", bổ sung *inline ghost text* cho Option A, và hoàn thiện mô hình lai 2 pha (*Two-Phase Note-taking*).

---

## 6. AI SUPPORT LOG (NHẬT KÝ SỬ DỤNG AI CỦA HỌC VIÊN)

* Xem tài liệu: [`ai-support-log.md`](file:///Users/duy/Desktop/b%C3%A0i%20lab%2019/Track1_Day18_2A202602403_NguyenKhanhDuy/ai-support-log.md)
* **Tuyên bố liêm chính học thuật**:
  * AI đóng vai trò trợ lý hỗ trợ kỹ thuật (Co-pilot) trong việc bóc tách hình ảnh PDF, gợi ý khung HTML/CSS/JS và kiểm tra cú pháp mã nguồn.
  * Toàn bộ định hướng bài toán (Hypothesis Problem), phân tích sự khác biệt giữa 3 Options (Distance Check) và các quyết định can thiệp thủ công (yêu cầu làm trọn vẹn 22 slide, thêm cơ chế Undo, thiết kế icon chấm hỏi `?`) đều do học viên Nguyễn Khánh Duy trực tiếp chỉ đạo và kiểm soát.
