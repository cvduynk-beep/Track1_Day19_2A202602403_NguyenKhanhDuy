# NHẬT KÝ SỬ DỤNG TRỢ LÝ TRÍ TUỆ NHÂN TẠO (AI SUPPORT LOG)

* **Học viên**: Nguyễn Khánh Duy (Mã học viên: `2A202602403`)
* **Nhóm thực hiện**: Nhóm Case B (Lê Thanh Tùng, Nguyễn Khánh Duy, Cao Đức Hiệp)
* **Khóa học**: Track 1 — Day 18: Multiple Prototypes - Experiment Design
* **Ngày lập**: 05/10/2026

---

## 1. MỤC ĐÍCH SỬ DỤNG AI TRONG BÀI LAB

Trong bài Lab này, AI được sử dụng làm công cụ trợ lực (Co-pilot) cho các mục đích:
1. Trích xuất hình ảnh và phân tích ngữ cảnh từ tài liệu bài giảng mẫu (`slide mẫu.pdf` gồm 22 slide).
2. Xây dựng cấu trúc mã nguồn HTML/CSS/JavaScript cho Micro-prototype của Option A (*In-line Smart Autocomplete*).
3. Đề xuất bảng từ khóa viết tắt và câu diễn giải tương ứng cho 22 trang slide bài giảng.
4. Rà soát lỗi cú pháp và tối ưu hóa tính tiện dụng (Usability & Ergonomics) của giao diện theo phản hồi của Tester.

---

## 2. NHẬT KÝ CHI TIẾT CÁC LẦN TƯƠNG TÁC VỚI AI

| STT | Nhiệm vụ yêu cầu AI | Đề xuất ban đầu của AI | Quyết định điều chỉnh của Học viên (Human Override) | Lý do điều chỉnh |
| :---: | :--- | :--- | :--- | :--- |
| **01** | Trích xuất nội dung từ PDF bài giảng | AI đề xuất chỉ lấy 4 slide đại diện (Slide 04, 06, 14, 15) để làm prototype nhanh. | **Từ chối & yêu cầu làm đầy đủ cả 22 slide**: Trích xuất toàn bộ 22 ảnh slide và xây dựng đủ từ điển cho 22 trang bài giảng. | Để nguyên mẫu phản ánh 100% bối cảnh thực tế bài học, tester có thể chuyển qua bất kỳ slide nào mà không bị gián đoạn. |
| **02** | Cơ chế chuyển đổi slide | AI dùng danh sách select tĩnh và nút Next dừng lại ở slide cuối cùng. | **Yêu cầu sửa lại**: Thêm thuật toán sắp xếp chỉ mục số học (`sort`) và cơ chế vòng lặp xoay vòng (modulo loop) cho 2 nút ◀ Trước / Tiếp ▶. | Ngăn ngừa lỗi nhảy slide do thứ tự chuỗi của JavaScript và giúp tester duyệt bài mượt mà không lo bị kẹt. |
| **03** | Thiết kế giao diện trợ giúp người dùng | AI thiết kế một trang hướng dẫn dài và nhiều chữ ở đầu trang web. | **Học viên yêu cầu thu nhỏ**: Chuyển thành các icon chấm hỏi `?` nhỏ gọn gắn cạnh từng nút chức năng và có nút bật/tắt để "test mù". | Giúp giao diện sạch sẽ, trực quan, không làm rối mắt tester trong lúc thực hiện tác vụ ghi chép. |
| **04** | Cơ chế gợi ý từ viết tắt (Autocomplete) | AI đề xuất hệ thống tự động chèn chữ vào ô nhập ngay khi người học gõ xong 1 từ. | **Học viên từ chối phương án tự động**: Bắt buộc phải hiện thẻ gợi ý và chỉ bung chữ khi người học nhấn phím `Tab` hoặc click nút chấp nhận. Thêm nút `Hoàn tác (Undo)`. | Đảm bảo nguyên tắc cốt lõi về Quyền làm chủ (User Agency) và Khả năng phục hồi (Error Recovery) theo tiêu chí chấm điểm của Gate 3 & Gate 4. |
| **05** | Tìm kiếm từ viết tắt liên slide (Cross-slide matching) | AI chỉ tìm từ khóa trong slide đang hiển thị. Nếu sang slide khác gõ từ khóa cũ thì không ra kết quả. | **Học viên yêu cầu bổ sung tầng Fallback**: Ưu tiên tìm trong slide hiện tại, nếu không thấy thì tự động quét tiếp trong 21 slide còn lại và ghi rõ nguồn gốc slide. | Giúp trải nghiệm của học viên linh hoạt, tự nhiên như một trợ lý ghi chép thực thụ. |

---

## 3. CAM KẾT TÍNH TRUNG THỰC VÀ BẢN QUYỀN HỌC THUẬT

1. Toàn bộ các quyết định về bài toán cốt lõi (Agreed Hypothesis Problem), việc lựa chọn 3 giải pháp độc lập (Options A, B, C) và thiết kế thực nghiệm đều do học viên cùng các thành viên trong nhóm thảo luận và thống nhất.
2. Mã nguồn và cấu trúc tài liệu được học viên kiểm tra, biên tập, chạy thử nghiệm thực tế với người dùng thật và chịu trách nhiệm toàn bộ về chất lượng sản phẩm nộp.
