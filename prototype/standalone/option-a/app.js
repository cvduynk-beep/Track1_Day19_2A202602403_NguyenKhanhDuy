// ============================================================
// MICRO-PROTOTYPE OPTION A: Tự Động Mở Rộng Viết Tắt Đa Slide
// Học viên: Nguyễn Khánh Duy (2A202602403)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  
  // Multi-Slide Data Repository from slide mẫu.pdf (Full 22 slides)
  const slidesData = {
    "01": {
        "slideId": "01",
        "title": "Slide 01 / 22: Giới thiệu Session 4 - Stakeholder",
        "time": "Phút 01:10",
        "image": "assets/slide_01.png",
        "topic": "Giảng viên mở đầu bài giảng:",
        "quote": "\"...Chào mừng các bạn đến với Session 4 về <strong>Stakeholder & Cross-Functional Team</strong>. Hôm nay chúng ta sẽ tìm hiểu cách phối hợp đa chức năng và gắn kết các bên liên quan hiệu quả...\"",
        "samples": [
            {
                "label": "1. Thử \"pc\"",
                "word": "pc"
            },
            {
                "label": "2. Thử \"s4\"",
                "word": "s4"
            },
            {
                "label": "3. Thử \"sh\"",
                "word": "sh"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "pc",
                    "product coach"
                ],
                "fullText": "ProductCoach.vn: Nền tảng huấn luyện đào tạo Product Manager & Agile chuyên nghiệp",
                "source": "Slide 01 • Logo & Slogan"
            },
            {
                "keywords": [
                    "s4",
                    "session 4"
                ],
                "fullText": "Session 4: Chuyên đề về Quản trị Stakeholder và Đội ngũ đa chức năng (Cross-Functional Team)",
                "source": "Slide 01 • Tiêu đề Session"
            },
            {
                "keywords": [
                    "sh",
                    "stakeholder"
                ],
                "fullText": "Stakeholder: Các bên liên quan có ảnh hưởng hoặc chịu ảnh hưởng bởi kết quả của dự án",
                "source": "Slide 01 • Chủ đề chính"
            }
        ]
    },
    "02": {
        "slideId": "02",
        "title": "Slide 02 / 22: Mục lục Topic buổi học",
        "time": "Phút 03:45",
        "image": "assets/slide_02.png",
        "topic": "Giảng viên trình bày lộ trình 2 nội dung chính:",
        "quote": "\"...Trong buổi hôm nay, chúng ta có 2 phần cốt lõi: phần 1 là <strong>Cross-Functional Team</strong> (Đội ngũ đa chức năng) và phần 2 là <strong>Stakeholder Engagement</strong> (Gắn kết các bên liên quan)...\"",
        "samples": [
            {
                "label": "1. Thử \"cft\"",
                "word": "cft"
            },
            {
                "label": "2. Thử \"se\"",
                "word": "se"
            },
            {
                "label": "3. Thử \"topic\"",
                "word": "topic"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "cft",
                    "cross functional team"
                ],
                "fullText": "Cross-Functional Team: Nhóm đa chức năng kết hợp nhiều chuyên môn (Tech, Design, Business) để tạo ra giá trị sản phẩm hoàn chỉnh",
                "source": "Slide 02 • Mục 1: Cross Functional Team"
            },
            {
                "keywords": [
                    "se",
                    "stakeholder engagement"
                ],
                "fullText": "Stakeholder Engagement: Quy trình xây dựng mối quan hệ và thu hút sự đồng thuận từ các bên liên quan",
                "source": "Slide 02 • Mục 2: Stakeholder Engagement"
            },
            {
                "keywords": [
                    "topic",
                    "noi dung"
                ],
                "fullText": "2 Trọng tâm Session 4: 1. Đội ngũ đa chức năng (CFT) & 2. Quản trị gắn kết Stakeholder",
                "source": "Slide 02 • Agenda"
            }
        ]
    },
    "03": {
        "slideId": "03",
        "title": "Slide 03 / 22: Khái niệm Đội ngũ Đa chức năng",
        "time": "Phút 06:20",
        "image": "assets/slide_03.png",
        "topic": "Giảng viên phân tích mô hình làm việc nhóm đa chức năng:",
        "quote": "\"...Một <strong>Cross-Functional Team</strong> chuẩn không chia theo phòng ban tách biệt, mà gom đủ Dev, Design, QA, Product cùng ngồi lại để giải quyết trọn vẹn một bài toán người dùng...\"",
        "samples": [
            {
                "label": "1. Thử \"cft\"",
                "word": "cft"
            },
            {
                "label": "2. Thử \"silo\"",
                "word": "silo"
            },
            {
                "label": "3. Thử \"t-shape\"",
                "word": "t-shape"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "cft",
                    "cross functional"
                ],
                "fullText": "Cross-Functional Team: Nhóm tự quản, đa chuyên môn, loại bỏ rào cản phòng ban và tối ưu tốc độ bàn giao giá trị",
                "source": "Slide 03 • Khái niệm CFT"
            },
            {
                "keywords": [
                    "silo",
                    "phong ban"
                ],
                "fullText": "Tư duy Silo: Tình trạng các phòng ban làm việc cô lập, gây đứt gãy thông tin và xung đột quyền lợi",
                "source": "Slide 03 • Thách thức tổ chức truyền thống"
            },
            {
                "keywords": [
                    "t-shape",
                    "t shape"
                ],
                "fullText": "Kỹ năng T-shaped: Chuyên sâu một lĩnh vực cốt lõi (trục đứng) nhưng có hiểu biết rộng để phối hợp đa ngành (trục ngang)",
                "source": "Slide 03 • Năng lực thành viên CFT"
            }
        ]
    },
    "04": {
        "slideId": "04",
        "title": "Slide 04 / 22: Agile Scrum Events",
        "time": "Phút 09:30",
        "image": "assets/slide_04.png",
        "topic": "Giảng viên đang nói nhanh (Quy trình Agile Scrum):",
        "quote": "\"...Các bạn lưu ý trong Scrum có các sự kiện cố định: <strong>Sprint Planning</strong> để lập kế hoạch, <strong>Daily Scrum</strong> 15 phút mỗi ngày, <strong>Sprint Review</strong> để demo sản phẩm và <strong>Retro (Retrospective)</strong> để cải tiến quy trình nhé...\"",
        "samples": [
            {
                "label": "1. Thử \"daily\"",
                "word": "daily"
            },
            {
                "label": "2. Thử \"retro\"",
                "word": "retro"
            },
            {
                "label": "3. Thử \"sprint\"",
                "word": "sprint"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "daily",
                    "daily scrum",
                    "ds"
                ],
                "fullText": "Daily Scrum: Cuộc họp 15 phút hàng ngày để đội ngũ đồng bộ tiến độ và tháo gỡ trở ngại",
                "source": "Slide 04 • Events: Daily Scrum"
            },
            {
                "keywords": [
                    "retro",
                    "retrospective",
                    "sprint retro"
                ],
                "fullText": "Sprint Retrospective: Buổi họp cải tiến quy trình làm việc sau mỗi Sprint của Scrum Team",
                "source": "Slide 04 • Events: Retrospective"
            },
            {
                "keywords": [
                    "sprint",
                    "sp"
                ],
                "fullText": "Sprint: Khung thời gian cố định (thường từ 1-4 tuần) để phát triển và hoàn thành phần mềm",
                "source": "Slide 04 • Core Concept: Sprint"
            },
            {
                "keywords": [
                    "planning",
                    "sp plan"
                ],
                "fullText": "Sprint Planning: Buổi họp đầu Sprint để chọn tính năng từ Product Backlog đưa vào làm",
                "source": "Slide 04 • Events: Sprint Planning"
            }
        ]
    },
    "05": {
        "slideId": "05",
        "title": "Slide 05 / 22: Mô hình phát triển nhóm Tuckman",
        "time": "Phút 12:15",
        "image": "assets/slide_05.png",
        "topic": "Giảng viên giảng về các giai đoạn phát triển nhóm:",
        "quote": "\"...Nhóm nào mới lập cũng phải qua 4 giai đoạn: <strong>Forming</strong> (Hình thành), <strong>Storming</strong> (Sóng gió/Xung đột), <strong>Norming</strong> (Ổn định/Chuẩn hóa) rồi mới tới <strong>Performing</strong> (Hiệu suất đỉnh cao)...\"",
        "samples": [
            {
                "label": "1. Thử \"forming\"",
                "word": "forming"
            },
            {
                "label": "2. Thử \"storming\"",
                "word": "storming"
            },
            {
                "label": "3. Thử \"tuckman\"",
                "word": "tuckman"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "forming",
                    "hinh thanh"
                ],
                "fullText": "Forming (Hình thành): Giai đoạn các thành viên mới làm quen, còn giữ kẽ và thăm dò mục tiêu chung",
                "source": "Slide 05 • Giai đoạn 1 Tuckman"
            },
            {
                "keywords": [
                    "storming",
                    "song gio",
                    "xung dot"
                ],
                "fullText": "Storming (Sóng gió): Xuất hiện bất đồng quan điểm, xung đột phong cách làm việc và tranh chấp quyền kiểm soát",
                "source": "Slide 05 • Giai đoạn 2 Tuckman"
            },
            {
                "keywords": [
                    "norming",
                    "on dinh"
                ],
                "fullText": "Norming (Chuẩn hóa): Đội ngũ thống nhất nguyên tắc ứng xử, thấu hiểu vai trò và bắt đầu hợp tác ăn ý",
                "source": "Slide 05 • Giai đoạn 3 Tuckman"
            },
            {
                "keywords": [
                    "performing",
                    "hieu suat"
                ],
                "fullText": "Performing (Đỉnh cao): Nhóm tự hành tự giác cao, năng suất vượt bậc và phối hợp mượt mà",
                "source": "Slide 05 • Giai đoạn 4 Tuckman"
            },
            {
                "keywords": [
                    "tuckman"
                ],
                "fullText": "Mô hình Tuckman: 4 giai đoạn tiến hóa tâm lý đội nhóm: Forming → Storming → Norming → Performing",
                "source": "Slide 05 • Tuckman Model"
            }
        ]
    },
    "06": {
        "slideId": "06",
        "title": "Slide 06 / 22: Ma trận RASIC (Mặc định)",
        "time": "Phút 14:20",
        "image": "assets/slide_06.png",
        "topic": "Giảng viên đang nói nhanh (Ma trận RASIC):",
        "quote": "\"...Các bạn chú ý chữ <strong>L</strong> ở đây là <strong>Làm trực tiếp</strong>, người chịu trách nhiệm hoàn thành. Còn chữ <strong>P</strong> là <strong>Phê duyệt</strong> kết quả nhé...\"",
        "samples": [
            {
                "label": "1. Thử \"rasic\"",
                "word": "rasic"
            },
            {
                "label": "2. Thử \"l\"",
                "word": "l"
            },
            {
                "label": "3. Thử \"p\"",
                "word": "p"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "rasic",
                    "ra sic"
                ],
                "fullText": "RASIC: Khung phân định trách nhiệm (Làm trực tiếp, Phê duyệt, Hỗ trợ, Cố vấn, Thông báo)",
                "source": "Slide 06 • Tiêu đề ma trận RASIC"
            },
            {
                "keywords": [
                    "l",
                    "ltt",
                    "lam"
                ],
                "fullText": "L - Làm trực tiếp: Trách nhiệm chính hoàn thành công việc theo phân công",
                "source": "Slide 06 • Dòng 1: Làm trực tiếp (L)"
            },
            {
                "keywords": [
                    "p",
                    "pd",
                    "phe duyet"
                ],
                "fullText": "P - Phê duyệt: Xác nhận và chịu trách nhiệm về kết quả hoàn thành của (L)",
                "source": "Slide 06 • Dòng 3: Phê duyệt (P)"
            },
            {
                "keywords": [
                    "h",
                    "ht",
                    "ho tro"
                ],
                "fullText": "H - Hỗ trợ: Làm hoặc gửi thông tin cần thiết giúp cho (L)",
                "source": "Slide 06 • Dòng 2: Hỗ trợ (H)"
            },
            {
                "keywords": [
                    "c",
                    "co van"
                ],
                "fullText": "C - Cố vấn: Cung cấp phản hồi chuyên môn giúp (L) hoàn thành nhiệm vụ",
                "source": "Slide 06 • Dòng 4: Cố vấn (C)"
            },
            {
                "keywords": [
                    "t",
                    "thong bao"
                ],
                "fullText": "T - Thông báo: Được cập nhật tiến độ và kết quả từ (L)",
                "source": "Slide 06 • Dòng 5: Thông báo (T)"
            }
        ]
    },
    "07": {
        "slideId": "07",
        "title": "Slide 07 / 22: Bộ công cụ làm việc nhóm (Tools for Work)",
        "time": "Phút 17:05",
        "image": "assets/slide_07.png",
        "topic": "Giảng viên giới thiệu các công cụ quản lý dự án:",
        "quote": "\"...Để quản lý tiến độ minh bạch, các bạn cần sử dụng các bộ công cụ phối hợp như <strong>Jira/Trello</strong> cho Kanban board, <strong>Notion/Confluence</strong> cho tài liệu và <strong>Slack</strong> để trao đổi tức thì...\"",
        "samples": [
            {
                "label": "1. Thử \"jira\"",
                "word": "jira"
            },
            {
                "label": "2. Thử \"kanban\"",
                "word": "kanban"
            },
            {
                "label": "3. Thử \"notion\"",
                "word": "notion"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "jira",
                    "jira board"
                ],
                "fullText": "Jira: Phần mềm theo dõi tiến độ công việc, quản lý User Story, Sprint Backlog và Bug cho đội Agile",
                "source": "Slide 07 • Công cụ: Jira"
            },
            {
                "keywords": [
                    "kanban",
                    "kb"
                ],
                "fullText": "Kanban: Bảng trực quan hóa quy trình làm việc gồm các cột: To Do → In Progress → Done",
                "source": "Slide 07 • Phương pháp Kanban"
            },
            {
                "keywords": [
                    "notion",
                    "wiki"
                ],
                "fullText": "Notion/Confluence: Không gian quản lý tài liệu, Product Requirement Document (PRD) và quy định nội bộ",
                "source": "Slide 07 • Công cụ: Notion"
            }
        ]
    },
    "08": {
        "slideId": "08",
        "title": "Slide 08 / 22: Giải lao & Hỏi đáp nhanh",
        "time": "Phút 19:40",
        "image": "assets/slide_08.png",
        "topic": "Giảng viên thông báo nghỉ giải lao ngắn 5 phút:",
        "quote": "\"...Chúng ta vừa xong phần 1 về Đội ngũ đa chức năng. Các bạn nghỉ giải lao 5 phút và chuẩn bị vào phần thực hành nhé...\"",
        "samples": [
            {
                "label": "1. Thử \"break\"",
                "word": "break"
            },
            {
                "label": "2. Thử \"qa\"",
                "word": "qa"
            },
            {
                "label": "3. Thử \"recap\"",
                "word": "recap"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "break",
                    "giai lao"
                ],
                "fullText": "Giải lao 5 phút: Chuẩn bị giấy bút và tài liệu để chuyển sang phần bài tập tình huống thực tế",
                "source": "Slide 08 • Break Time"
            },
            {
                "keywords": [
                    "qa",
                    "q&a"
                ],
                "fullText": "Q&A: Phiên đặt câu hỏi thắc mắc và giải đáp cùng giảng viên sau phần lý thuyết",
                "source": "Slide 08 • Q&A Session"
            },
            {
                "keywords": [
                    "recap",
                    "tong ket 1"
                ],
                "fullText": "Tóm tắt phần 1: Hiểu bản chất Cross-Functional Team, 4 nhịp Scrum và ma trận phân vai RASIC",
                "source": "Slide 08 • Recap Part 1"
            }
        ]
    },
    "09": {
        "slideId": "09",
        "title": "Slide 09 / 22: Bắt đầu phần Workshop nhóm (Let's Start)",
        "time": "Phút 21:10",
        "image": "assets/slide_09.png",
        "topic": "Giảng viên khởi động phiên thực hành tương tác:",
        "quote": "\"...Nào các bạn, bây giờ chúng ta cùng mở bài tập và bắt tay vào áp dụng khung phân vai RASIC cho chính lớp học của mình nhé...\"",
        "samples": [
            {
                "label": "1. Thử \"start\"",
                "word": "start"
            },
            {
                "label": "2. Thử \"ws\"",
                "word": "ws"
            },
            {
                "label": "3. Thử \"team\"",
                "word": "team"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "start",
                    "bat dau"
                ],
                "fullText": "Let's Start Workshop: Phân chia nhóm thực hành và chọn đề tài bài tập quản trị lớp học",
                "source": "Slide 09 • Khởi động Workshop"
            },
            {
                "keywords": [
                    "ws",
                    "workshop"
                ],
                "fullText": "Workshop nhóm: Thảo luận cộng tác thời gian thực áp dụng các framework đã học vào case thực tế",
                "source": "Slide 09 • Hoạt động tương tác"
            },
            {
                "keywords": [
                    "team",
                    "doi nhom"
                ],
                "fullText": "Quy định nhóm: Mỗi nhóm gồm 3-4 thành viên, chỉ định 1 Leader (Làm trực tiếp) và các vai trò hỗ trợ",
                "source": "Slide 09 • Quy định đội ngũ"
            }
        ]
    },
    "10": {
        "slideId": "10",
        "title": "Slide 10 / 22: Bài tập 1 - Xây dựng ma trận RASIC",
        "time": "Phút 23:30",
        "image": "assets/slide_10.png",
        "topic": "Giảng viên giao bài tập tình huống RASIC:",
        "quote": "\"...Hãy liệt kê các đầu việc của lớp: điểm danh, tài liệu, nộp bài tập... sau đó gán chữ L, P, H, C, T cho từng bạn trong ban cán sự...\"",
        "samples": [
            {
                "label": "1. Thử \"hw1\"",
                "word": "hw1"
            },
            {
                "label": "2. Thử \"bcs\"",
                "word": "bcs"
            },
            {
                "label": "3. Thử \"rasic\"",
                "word": "rasic"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "hw1",
                    "bai tap 1"
                ],
                "fullText": "Bài tập 1: Xây dựng ma trận phân định trách nhiệm RASIC cho ban cán sự và các thành viên trong lớp",
                "source": "Slide 10 • Homework 1: RASIC in Class"
            },
            {
                "keywords": [
                    "bcs",
                    "ban can su"
                ],
                "fullText": "Ban cán sự lớp: Lớp trưởng (Phê duyệt/Quản lý chung), Lớp phó học tập (Làm trực tiếp về bài giảng), Thành viên (Hỗ trợ)",
                "source": "Slide 10 • Phân vai ban cán sự"
            },
            {
                "keywords": [
                    "rasic"
                ],
                "fullText": "Áp dụng RASIC: Mỗi đầu việc chỉ có duy nhất 1 người giữ vai trò L (Làm trực tiếp) để tránh đùn đẩy trách nhiệm",
                "source": "Slide 10 • Nguyên tắc thực thi RASIC"
            }
        ]
    },
    "11": {
        "slideId": "11",
        "title": "Slide 11 / 22: Chuyển tiếp Part 2 - Stakeholder Engagement",
        "time": "Phút 25:00",
        "image": "assets/slide_11.png",
        "topic": "Giảng viên chuyển sang phần 2 của buổi học:",
        "quote": "\"...Bây giờ chúng ta bước sang chủ đề cốt lõi tiếp theo: <strong>Stakeholder Engagement</strong> - Nghệ thuật quản trị và làm việc với các bên liên quan...\"",
        "samples": [
            {
                "label": "1. Thử \"se\"",
                "word": "se"
            },
            {
                "label": "2. Thử \"sh\"",
                "word": "sh"
            },
            {
                "label": "3. Thử \"part2\"",
                "word": "part2"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "se",
                    "engagement"
                ],
                "fullText": "Stakeholder Engagement: Chiến lược tương tác liên tục để duy trì sự ủng hộ và giảm thiểu rủi ro từ các bên liên quan",
                "source": "Slide 11 • Giới thiệu Part 2"
            },
            {
                "keywords": [
                    "sh",
                    "stakeholder"
                ],
                "fullText": "Stakeholder (Bên liên quan): Bất kỳ ai có tiếng nói, quyền lực hoặc sự quan tâm ảnh hưởng tới thành bại của sản phẩm",
                "source": "Slide 11 • Khái niệm trọng tâm"
            },
            {
                "keywords": [
                    "part2"
                ],
                "fullText": "Nội dung Part 2: Định nghĩa Stakeholder, Mô hình DISC và Ma trận Quyền lực/Quan tâm (Power/Interest)",
                "source": "Slide 11 • Khung chương trình Part 2"
            }
        ]
    },
    "12": {
        "slideId": "12",
        "title": "Slide 12 / 22: Quy trình Quản trị Stakeholder (4 bước)",
        "time": "Phút 26:40",
        "image": "assets/slide_12.png",
        "topic": "Giảng viên hướng dẫn 4 bước tương tác bên liên quan:",
        "quote": "\"...Quy trình quản trị Stakeholder gồm 4 bước liên hoàn: <strong>Identification</strong> (Nhận diện), <strong>Definition</strong> (Định nghĩa kỳ vọng), <strong>Analysis</strong> (Phân tích mức độ ảnh hưởng) và <strong>Strategy</strong> (Chiến lược tiếp cận)...\"",
        "samples": [
            {
                "label": "1. Thử \"proc\"",
                "word": "proc"
            },
            {
                "label": "2. Thử \"iden\"",
                "word": "iden"
            },
            {
                "label": "3. Thử \"strat\"",
                "word": "strat"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "proc",
                    "quy trinh"
                ],
                "fullText": "Quy trình Stakeholder 4 bước: 1. Identification (Nhận diện) → 2. Definition (Định nghĩa) → 3. Analysis (Phân tích) → 4. Strategy (Chiến lược)",
                "source": "Slide 12 • 4-Step Process"
            },
            {
                "keywords": [
                    "iden",
                    "identification"
                ],
                "fullText": "Bước 1 - Identification: Lập danh sách đầy đủ tất cả các bên có liên quan bên trong và bên ngoài tổ chức",
                "source": "Slide 12 • Bước 1: Identification"
            },
            {
                "keywords": [
                    "strat",
                    "strategy"
                ],
                "fullText": "Bước 4 - Strategy: Xây dựng kế hoạch giao tiếp phù hợp với từng nhóm (Quản lý chặt, Giữ hài lòng, Cập nhật thông tin)",
                "source": "Slide 12 • Bước 4: Strategy"
            }
        ]
    },
    "13": {
        "slideId": "13",
        "title": "Slide 13 / 22: Định nghĩa Bên liên quan (Stakeholder Definition)",
        "time": "Phút 27:30",
        "image": "assets/slide_13.png",
        "topic": "Giảng viên định nghĩa rõ ràng về Stakeholder:",
        "quote": "\"...Nhớ rằng Stakeholder có thể là <strong>Cá nhân (Individuals)</strong> hoặc <strong>Nhóm (Groups)</strong>, bao gồm cả Khách hàng, Sếp trực tiếp, Dev Team và Đối tác bên ngoài...\"",
        "samples": [
            {
                "label": "1. Thử \"def\"",
                "word": "def"
            },
            {
                "label": "2. Thử \"internal\"",
                "word": "internal"
            },
            {
                "label": "3. Thử \"external\"",
                "word": "external"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "def",
                    "dinh nghia"
                ],
                "fullText": "Định nghĩa Stakeholder: Cá nhân, nhóm người hoặc tổ chức có quyền lợi, bị ảnh hưởng hoặc có khả năng tác động đến dự án",
                "source": "Slide 13 • Định nghĩa Stakeholder"
            },
            {
                "keywords": [
                    "internal",
                    "noi bo"
                ],
                "fullText": "Stakeholder Nội bộ (Internal): Ban giám đốc, nhóm phát triển, đội sales, marketing, chăm sóc khách hàng",
                "source": "Slide 13 • Phân loại: Internal"
            },
            {
                "keywords": [
                    "external",
                    "ngoai vi"
                ],
                "fullText": "Stakeholder Bên ngoài (External): Khách hàng, đối tác cung cấp dịch vụ, cơ quan quản lý nhà nước",
                "source": "Slide 13 • Phân loại: External"
            }
        ]
    },
    "14": {
        "slideId": "14",
        "title": "Slide 14 / 22: Mô hình phong cách giao tiếp DISC",
        "time": "Phút 28:15",
        "image": "assets/slide_14.png",
        "topic": "Giảng viên đang nói nhanh (Mô hình DISC):",
        "quote": "\"...Nhóm <strong>D - Dominance</strong> thì thích quyền lực và chỉ quan tâm đến kết quả nhanh gọn. Còn nhóm <strong>I - Influence</strong> thì thích sự hòa đồng, cởi mở nhé...\"",
        "samples": [
            {
                "label": "1. Thử \"disc\"",
                "word": "disc"
            },
            {
                "label": "2. Thử \"d\"",
                "word": "d"
            },
            {
                "label": "3. Thử \"i\"",
                "word": "i"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "disc"
                ],
                "fullText": "Mô hình DISC: 4 nhóm tính cách và phong cách giao tiếp (Dominance, Influence, Steadiness, Conscientiousness)",
                "source": "Slide 14 • DISC Framework"
            },
            {
                "keywords": [
                    "d",
                    "dominance",
                    "thong tri"
                ],
                "fullText": "Nhóm D (Dominance - Thích quyền lực): Quyết đoán, hướng đến kết quả công việc, thích sự ngắn gọn",
                "source": "Slide 14 • Ô 1: Nhóm D"
            },
            {
                "keywords": [
                    "i",
                    "influence",
                    "anh huong"
                ],
                "fullText": "Nhóm I (Influence - Thích tương tác): Cởi mở, nhiệt tình, quan tâm đến mối quan hệ con người",
                "source": "Slide 14 • Ô 2: Nhóm I"
            },
            {
                "keywords": [
                    "s",
                    "steadiness",
                    "kien dinh"
                ],
                "fullText": "Nhóm S (Steadiness - Kiên định): Điềm tĩnh, kiên nhẫn, cần sự an toàn và kế hoạch rõ ràng",
                "source": "Slide 14 • Ô 3: Nhóm S"
            },
            {
                "keywords": [
                    "c",
                    "conscientiousness",
                    "tuan thu"
                ],
                "fullText": "Nhóm C (Conscientiousness - Tuân thủ): Cẩn trọng, phân tích logic dựa trên số liệu và chi tiết",
                "source": "Slide 14 • Ô 4: Nhóm C"
            }
        ]
    },
    "15": {
        "slideId": "15",
        "title": "Slide 15 / 22: Phân tích Stakeholder (Ma trận Power vs Interest)",
        "time": "Phút 33:40",
        "image": "assets/slide_15.png",
        "topic": "Giảng viên đang nói nhanh (Ma trận Power vs Interest):",
        "quote": "\"...Ở ô <strong>High Power & High Interest</strong>, đây là các bên liên quan then chốt, chiến lược bắt buộc là phải <strong>Quản lý chặt chẽ (Manage Closely)</strong>...\"",
        "samples": [
            {
                "label": "1. Thử \"hphi\"",
                "word": "hphi"
            },
            {
                "label": "2. Thử \"manage\"",
                "word": "manage"
            },
            {
                "label": "3. Thử \"keep\"",
                "word": "keep"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "hphi",
                    "high power high interest",
                    "o 2"
                ],
                "fullText": "High Power / High Interest: Nhóm quyền lực cao & quan tâm lớn → Chiến lược: Quản lý chặt chẽ (Manage Closely)",
                "source": "Slide 15 • Ô 2: High Power & High Interest"
            },
            {
                "keywords": [
                    "manage",
                    "manage closely"
                ],
                "fullText": "Chiến lược Manage Closely: Phối hợp thường xuyên và tham vấn ý kiến trước khi ra quyết định lớn",
                "source": "Slide 15 • Chiến lược cho Ô 2"
            },
            {
                "keywords": [
                    "keep",
                    "keep satisfied",
                    "hpli"
                ],
                "fullText": "Keep Satisfied (High Power / Low Interest): Giữ cho họ hài lòng, báo cáo ngắn gọn đúng hạn",
                "source": "Slide 15 • Ô 4: High Power & Low Interest"
            },
            {
                "keywords": [
                    "inform",
                    "keep informed"
                ],
                "fullText": "Keep Informed (Low Power / High Interest): Cập nhật tiến độ liên tục, lắng nghe đóng góp ý kiến",
                "source": "Slide 15 • Ô 1: Low Power & High Interest"
            },
            {
                "keywords": [
                    "monitor",
                    "giam sat"
                ],
                "fullText": "Monitor (Low Power / Low Interest): Giám sát với mức độ nỗ lực tối thiểu, thông báo định kỳ",
                "source": "Slide 15 • Ô 3: Low Power & Low Interest"
            }
        ]
    },
    "16": {
        "slideId": "16",
        "title": "Slide 16 / 22: Mẫu bảng chiến lược Stakeholder (Strategy Table)",
        "time": "Phút 35:20",
        "image": "assets/slide_16.png",
        "topic": "Giảng viên hướng dẫn điền bảng ma trận Stakeholder:",
        "quote": "\"...Bảng này có các cột then chốt: <strong>Tên bên liên quan, Phòng ban, Nhiệm vụ chính, Mục tiêu chung, Kênh liên hệ và Phong cách DISC</strong> để giao tiếp hiệu quả...\"",
        "samples": [
            {
                "label": "1. Thử \"name\"",
                "word": "name"
            },
            {
                "label": "2. Thử \"dept\"",
                "word": "dept"
            },
            {
                "label": "3. Thử \"goal\"",
                "word": "goal"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "name",
                    "ten stakeholder"
                ],
                "fullText": "Cột Name: Xác định danh tính cụ thể của cá nhân hoặc chức danh người đại diện nhóm liên quan",
                "source": "Slide 16 • Cột 1: Tên bên liên quan"
            },
            {
                "keywords": [
                    "dept",
                    "phong ban"
                ],
                "fullText": "Cột Dept (Bộ phận): Đơn vị công tác, thể hiện bối cảnh chuyên môn và thẩm quyền trong dự án",
                "source": "Slide 16 • Cột 2: Phòng ban"
            },
            {
                "keywords": [
                    "goal",
                    "muc tieu chung"
                ],
                "fullText": "Cột Common Goal: Điểm giao nhau giữa mục tiêu sản phẩm và lợi ích của bên liên quan đó",
                "source": "Slide 16 • Cột 5: Mục tiêu chung"
            },
            {
                "keywords": [
                    "contact",
                    "kenh lien he"
                ],
                "fullText": "Cột Contact & Personality: Kênh liên lạc ưa thích (Email, Slack, Họp 1:1) và nhóm phong cách DISC",
                "source": "Slide 16 • Cột 6: Kênh liên hệ & Tính cách"
            }
        ]
    },
    "17": {
        "slideId": "17",
        "title": "Slide 17 / 22: Tình huống thực tế: Ứng xử với Stakeholder",
        "time": "Phút 37:10",
        "image": "assets/slide_17.png",
        "topic": "Giảng viên thảo luận về các va chạm tâm lý trong dự án:",
        "quote": "\"...Trong doanh nghiệp các bạn sẽ gặp những câu hỏi hóc búa hay câu nói kiểu cửa quyền. Để xử lý khéo léo, không được đôi co cảm tính mà phải dựa vào dữ liệu và mục tiêu chung...\"",
        "samples": [
            {
                "label": "1. Thử \"eq\"",
                "word": "eq"
            },
            {
                "label": "2. Thử \"conflict\"",
                "word": "conflict"
            },
            {
                "label": "3. Thử \"win-win\"",
                "word": "win-win"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "eq",
                    "tri tue cam xuc"
                ],
                "fullText": "Trí tuệ cảm xúc (EQ) trong đàm phán: Lắng nghe đồng cảm, kiểm soát cảm xúc cá nhân khi gặp đối tác khó tính",
                "source": "Slide 17 • Kỹ năng kiểm soát cảm xúc"
            },
            {
                "keywords": [
                    "conflict",
                    "xung dot"
                ],
                "fullText": "Xử lý xung đột: Tách con người ra khỏi vấn đề, tập trung vào dữ liệu thực tế và lợi ích chung của tổ chức",
                "source": "Slide 17 • Giải quyết xung đột"
            },
            {
                "keywords": [
                    "win-win",
                    "cung thang"
                ],
                "fullText": "Tư duy Win-Win: Tìm kiếm giải pháp mà cả phía sản phẩm và bên liên quan đều đạt được mục tiêu cốt lõi",
                "source": "Slide 17 • Nguyên tắc cùng thắng"
            }
        ]
    },
    "18": {
        "slideId": "18",
        "title": "Slide 18 / 22: Các yếu tố quan hệ trong tổ chức (4T)",
        "time": "Phút 39:00",
        "image": "assets/slide_18.png",
        "topic": "Giảng viên chia sẻ về văn hóa tổ chức và mạng lưới ngầm:",
        "quote": "\"...Người ta hay đùa: Tiền tệ, Hậu duệ, Quan hệ... Nhưng trong môi trường chuyên nghiệp, yếu tố bền vững nhất giúp bạn đứng vững chính là <strong>Trí tuệ và Năng lực thực chiến</strong>...\"",
        "samples": [
            {
                "label": "1. Thử \"4t\"",
                "word": "4t"
            },
            {
                "label": "2. Thử \"network\"",
                "word": "network"
            },
            {
                "label": "3. Thử \"trust\"",
                "word": "trust"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "4t",
                    "cac yeu to"
                ],
                "fullText": "4 Yếu tố ảnh hưởng trong môi trường công sở: Tiền tệ - Hậu duệ - Quan hệ - Trí tuệ (Năng lực)",
                "source": "Slide 18 • Mô hình văn hóa doanh nghiệp"
            },
            {
                "keywords": [
                    "network",
                    "mang luoi"
                ],
                "fullText": "Mạng lưới quan hệ (Networking): Xây dựng mối quan hệ chân thành dựa trên sự hỗ trợ và trao giá trị cho nhau",
                "source": "Slide 18 • Xây dựng Networking"
            },
            {
                "keywords": [
                    "trust",
                    "long tin"
                ],
                "fullText": "Niềm tin (Trust): Được xây dựng từ sự nhất quán giữa lời nói và kết quả bàn giao công việc chất lượng",
                "source": "Slide 18 • Yếu tố niềm tin"
            }
        ]
    },
    "19": {
        "slideId": "19",
        "title": "Slide 19 / 22: Nguyên tắc giao tiếp với Stakeholder",
        "time": "Phút 40:45",
        "image": "assets/slide_19.png",
        "topic": "Giảng viên tổng hợp nguyên tắc tương tác:",
        "quote": "\"...3 nguyên tắc vàng khi làm việc với Stakeholder: <strong>Minh bạch thông tin, Giao tiếp định kỳ đúng hạn</strong> và <strong>Không bao giờ hứa điều mình không làm được</strong>...\"",
        "samples": [
            {
                "label": "1. Thử \"rule\"",
                "word": "rule"
            },
            {
                "label": "2. Thử \"sync\"",
                "word": "sync"
            },
            {
                "label": "3. Thử \"trans\"",
                "word": "trans"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "rule",
                    "nguyen tac"
                ],
                "fullText": "3 Nguyên tắc vàng: 1. Minh bạch (Transparency) • 2. Kịp thời (Timeliness) • 3. Đồng thuận (Alignment)",
                "source": "Slide 19 • Bộ 3 nguyên tắc giao tiếp"
            },
            {
                "keywords": [
                    "sync",
                    "dong bo"
                ],
                "fullText": "Đồng bộ thông tin: Thiết lập kênh cập nhật tiến độ định kỳ (Weekly Sync, Dashboard) để các bên chủ động theo dõi",
                "source": "Slide 19 • Cơ chế Sync định kỳ"
            },
            {
                "keywords": [
                    "trans",
                    "minh bach"
                ],
                "fullText": "Minh bạch hóa rủi ro: Khi có sự cố, thông báo sớm kèm theo các phương án giải quyết thay vì giấu giếm",
                "source": "Slide 19 • Xử lý sự cố minh bạch"
            }
        ]
    },
    "20": {
        "slideId": "20",
        "title": "Slide 20 / 22: Thực hành đóng vai xử lý tình huống (Role-play)",
        "time": "Phút 42:20",
        "image": "assets/slide_20.png",
        "topic": "Giảng viên tổ chức phiên nhập vai tương tác:",
        "quote": "\"...Bây giờ 1 bạn đóng vai Giám đốc khó tính nhóm D đòi tính năng gấp, 1 bạn đóng vai Product Manager phải thuyết phục dựa trên Roadmap và nguồn lực thực tế...\"",
        "samples": [
            {
                "label": "1. Thử \"role\"",
                "word": "role"
            },
            {
                "label": "2. Thử \"pitch\"",
                "word": "pitch"
            },
            {
                "label": "3. Thử \"roadmap\"",
                "word": "roadmap"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "role",
                    "nhap vai"
                ],
                "fullText": "Thực hành đóng vai (Role-play): Rèn luyện phản xạ ứng xử và thương lượng trực tiếp với các kiểu tính cách DISC",
                "source": "Slide 20 • Bài tập nhập vai"
            },
            {
                "keywords": [
                    "pitch",
                    "thuyet phuc"
                ],
                "fullText": "Kỹ năng thuyết phục: Dẫn chứng bằng User Data, phân tích Trade-off giữa thời gian hoàn thành và chất lượng sản phẩm",
                "source": "Slide 20 • Kỹ năng thương lượng"
            },
            {
                "keywords": [
                    "roadmap",
                    "ke hoach"
                ],
                "fullText": "Product Roadmap: Bản đồ lộ trình tính năng chiến lược giúp bảo vệ đội ngũ khỏi các yêu cầu đột xuất không ưu tiên",
                "source": "Slide 20 • Công cụ Roadmap"
            }
        ]
    },
    "21": {
        "slideId": "21",
        "title": "Slide 21 / 22: Bài tập 2: Chiến lược Stakeholder nghề nghiệp",
        "time": "Phút 44:00",
        "image": "assets/slide_21.png",
        "topic": "Giảng viên hướng dẫn bài tập về nhà số 2:",
        "quote": "\"...Bài tập 2: Hãy xây dựng chiến lược Stakeholder để đạt được mục tiêu nghề nghiệp (Graduate Employability) sau khi tốt nghiệp...\"",
        "samples": [
            {
                "label": "1. Thử \"hw2\"",
                "word": "hw2"
            },
            {
                "label": "2. Thử \"career\"",
                "word": "career"
            },
            {
                "label": "3. Thử \"mentor\"",
                "word": "mentor"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "hw2",
                    "bai tap 2"
                ],
                "fullText": "Bài tập 2: Lập kế hoạch quản trị Stakeholder để gia tăng tỷ lệ có việc làm chất lượng cao (Employability)",
                "source": "Slide 21 • Homework 2: Graduate Employability"
            },
            {
                "keywords": [
                    "career",
                    "su nghiep"
                ],
                "fullText": "Stakeholder nghề nghiệp: Giảng viên, Mentor, Nhà tuyển dụng (HR), Bạn học và Mạng lưới cựu sinh viên (Alumni)",
                "source": "Slide 21 • Đối tượng quan tâm sự nghiệp"
            },
            {
                "keywords": [
                    "mentor",
                    "co van"
                ],
                "fullText": "Chiến lược với Mentor: Chủ động chuẩn bị câu hỏi cụ thể, báo cáo tiến độ học tập và xin lời khuyên định hướng",
                "source": "Slide 21 • Kế hoạch tương tác Mentor"
            }
        ]
    },
    "22": {
        "slideId": "22",
        "title": "Slide 22 / 22: Q&A - Hỏi đáp và Tổng kết buổi học",
        "time": "Phút 45:30",
        "image": "assets/slide_22.png",
        "topic": "Giảng viên tổng kết và giải đáp thắc mắc cuối giờ:",
        "quote": "\"...Chúng ta đã hoàn thành trọn vẹn Session 4. Các bạn có câu hỏi nào về mô hình RASIC, DISC hay ma trận Stakeholder thì đặt ngay nhé...\"",
        "samples": [
            {
                "label": "1. Thử \"qa\"",
                "word": "qa"
            },
            {
                "label": "2. Thử \"summary\"",
                "word": "summary"
            },
            {
                "label": "3. Thử \"next\"",
                "word": "next"
            }
        ],
        "knowledgeBase": [
            {
                "keywords": [
                    "qa",
                    "q&a",
                    "hoi dap"
                ],
                "fullText": "Q&A cuối buổi: Thảo luận sâu các khúc mắc khi áp dụng thực tế và giải đáp bài tập về nhà",
                "source": "Slide 22 • Phiên hỏi đáp mở"
            },
            {
                "keywords": [
                    "summary",
                    "tong ket"
                ],
                "fullText": "Tổng kết Session 4: Nắm vững mô hình Scrum Events, ma trận RASIC, 4 nhóm tính cách DISC và quản trị Stakeholder",
                "source": "Slide 22 • Tóm tắt toàn bài"
            },
            {
                "keywords": [
                    "next",
                    "buoi tiep theo"
                ],
                "fullText": "Chuẩn bị Session 5: Hoàn thành 2 bài tập thực hành trên Canvas trước buổi học tiếp theo",
                "source": "Slide 22 • Hướng dẫn buổi kế tiếp"
            }
        ]
    }
};

  // State
  // Tham số URL (dùng khi chạy trong trang hub): ?slide=04 chọn slide khởi đầu, ?test=1 ẩn hướng dẫn và tiêu chí chấm
  const urlParams = new URLSearchParams(location.search);
  const START_SLIDE = (urlParams.get('slide') || '04').padStart(2, '0');
  if (urlParams.get('test') === '1') document.body.classList.add('test-mode');
  let currentSlideId = START_SLIDE; // Default slide
  let currentMatch = null;
  let rawShorthand = '';
  let acceptedFullText = '';

  // Slide DOM Elements
  const slideSelect = document.getElementById('slideSelect');
  const btnPrevSlide = document.getElementById('btnPrevSlide');
  const btnNextSlide = document.getElementById('btnNextSlide');
  const slideImg = document.getElementById('slideImg');
  const slideIndicator = document.getElementById('slideIndicator');
  const lectureTime = document.getElementById('lectureTime');
  const speakerTopic = document.getElementById('speakerTopic');
  const speakerQuote = document.getElementById('speakerQuote');
  const syncBadge = document.getElementById('syncBadge');
  const dynamicSampleBtns = document.getElementById('dynamicSampleBtns');

  // Input DOM Elements
  const mainInput = document.getElementById('mainInput');
  const suggestionCard = document.getElementById('suggestionCard');
  const suggestionText = document.getElementById('suggestionText');
  const btnAccept = document.getElementById('btnAccept');
  const btnDismiss = document.getElementById('btnDismiss');
  const undoBanner = document.getElementById('undoBanner');
  const btnUndo = document.getElementById('btnUndo');
  const btnSave = document.getElementById('btnSave');
  const notesFeed = document.getElementById('notesFeed');
  const noteCount = document.getElementById('noteCount');
  const btnResetAll = document.getElementById('btnResetAll');
  const btnToggleAnnotation = document.getElementById('btnToggleAnnotation');
  const criteriaDrawer = document.getElementById('criteriaDrawer');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');
  const btnToggleGuide = document.getElementById('btnToggleGuide');

  // Help Modal Elements
  const helpOverlay = document.getElementById('helpOverlay');
  const helpTitle = document.getElementById('helpTitle');
  const helpPurpose = document.getElementById('helpPurpose');
  const helpUsage = document.getElementById('helpUsage');
  const helpMetric = document.getElementById('helpMetric');
  const btnCloseHelp = document.getElementById('btnCloseHelp');
  const btnUnderstand = document.getElementById('btnUnderstand');
  const helpButtons = document.querySelectorAll('.help-btn');

  // Function to switch slide
  function setSlide(slideId) {
    const data = slidesData[slideId];
    if (!data) return;

    currentSlideId = slideId;
    slideSelect.value = slideId;
    slideImg.src = data.image;
    slideIndicator.textContent = data.title;
    lectureTime.textContent = data.time;
    speakerTopic.textContent = data.topic;
    speakerQuote.innerHTML = data.quote;
    syncBadge.textContent = `✓ Đã kết nối Slide ${slideId}`;

    // Render dynamic sample buttons
    dynamicSampleBtns.innerHTML = '';
    data.samples.forEach(sample => {
      const btn = document.createElement('button');
      btn.className = 'btn-sample';
      btn.setAttribute('data-word', sample.word);
      btn.textContent = sample.label;
      btn.addEventListener('click', () => {
        mainInput.value = sample.word;
        mainInput.focus();
        mainInput.dispatchEvent(new Event('input'));
      });
      dynamicSampleBtns.appendChild(btn);
    });

    // Reset current typing & suggestions for new slide
    mainInput.value = '';
    suggestionCard.classList.add('hidden');
    undoBanner.classList.add('hidden');
    mainInput.placeholder = `Đang ở Slide ${slideId}: Hãy thử gõ tắt (vd: ${data.samples.map(s => s.word).join(', ')})...`;
  }

  // Prev / Next Slide Controls (Loop through all 22 slides in strict numerical order)
  const slideKeys = Object.keys(slidesData).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  btnPrevSlide.addEventListener('click', () => {
    const idx = slideKeys.indexOf(currentSlideId);
    const prevIdx = (idx - 1 + slideKeys.length) % slideKeys.length;
    setSlide(slideKeys[prevIdx]);
  });

  btnNextSlide.addEventListener('click', () => {
    const idx = slideKeys.indexOf(currentSlideId);
    const nextIdx = (idx + 1) % slideKeys.length;
    setSlide(slideKeys[nextIdx]);
  });

  slideSelect.addEventListener('change', (e) => {
    setSlide(e.target.value);
  });

  // Check matching shorthand against active slide's knowledge base
  function checkMatch(text) {
    const val = text.trim().toLowerCase();
    if (!val) return null;
    const activeData = slidesData[currentSlideId];
    if (activeData) {
      for (const item of activeData.knowledgeBase) {
        if (item.keywords.includes(val)) {
          return item;
        }
      }
    }
    // Fallback: If not found in current slide, search other slides
    for (const key of Object.keys(slidesData)) {
      if (key === currentSlideId) continue;
      for (const item of slidesData[key].knowledgeBase) {
        if (item.keywords.includes(val)) {
          return item;
        }
      }
    }
    return null;
  }

  // Handle typing in input
  mainInput.addEventListener('input', () => {
    const text = mainInput.value;
    undoBanner.classList.add('hidden'); // Hide undo banner when typing new stuff

    currentMatch = checkMatch(text);
    if (currentMatch) {
      suggestionText.textContent = currentMatch.fullText;
      suggestionCard.querySelector('.sugg-source').textContent = `Căn cứ: ${currentMatch.source}`;
      suggestionCard.classList.remove('hidden');
    } else {
      suggestionCard.classList.add('hidden');
    }
  });

  // Accept Suggestion (Tab key or Click Button)
  function acceptSuggestion() {
    if (!currentMatch) return;
    rawShorthand = mainInput.value; // Save raw for Undo
    acceptedFullText = currentMatch.fullText;

    mainInput.value = currentMatch.fullText;
    suggestionCard.classList.add('hidden');
    undoBanner.classList.remove('hidden'); // Show undo banner
    mainInput.focus();
  }

  // Dismiss Suggestion (Esc key or Click Button)
  function dismissSuggestion() {
    currentMatch = null;
    suggestionCard.classList.add('hidden');
    mainInput.focus();
  }

  // Undo (Revert back to raw shorthand)
  function revertUndo() {
    if (!rawShorthand) return;
    mainInput.value = rawShorthand;
    undoBanner.classList.add('hidden');
    mainInput.focus();
    mainInput.dispatchEvent(new Event('input'));
  }

  // Save Note
  function saveNote() {
    const text = mainInput.value.trim();
    if (!text) return;

    const item = document.createElement('div');
    item.className = 'feed-item';
    const isAI = acceptedFullText && text === acceptedFullText;
    const timeText = slidesData[currentSlideId].time.replace('Phút ', '');

    item.innerHTML = `
      <span class="feed-time">${timeText}</span>
      <p class="feed-text"><strong>[Slide ${currentSlideId}]</strong> ${escapeHTML(text)}</p>
      ${isAI ? '<span class="feed-tag">AI Mở rộng</span>' : ''}
    `;

    notesFeed.appendChild(item);
    notesFeed.scrollTop = notesFeed.scrollHeight;

    // Reset input
    mainInput.value = '';
    currentMatch = null;
    rawShorthand = '';
    acceptedFullText = '';
    suggestionCard.classList.add('hidden');
    undoBanner.classList.add('hidden');
    updateCount();
    mainInput.focus();
  }

  function updateCount() {
    const total = notesFeed.querySelectorAll('.feed-item').length;
    noteCount.textContent = `${total} ghi chú`;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // Keyboard Shortcuts: Tab (Accept), Escape (Dismiss), Enter (Save)
  mainInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && currentMatch) {
      e.preventDefault();
      acceptSuggestion();
    } else if (e.key === 'Escape' && currentMatch) {
      e.preventDefault();
      dismissSuggestion();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      saveNote();
    }
  });

  // Click Actions
  btnAccept.addEventListener('click', acceptSuggestion);
  btnDismiss.addEventListener('click', dismissSuggestion);
  btnUndo.addEventListener('click', revertUndo);
  btnSave.addEventListener('click', saveNote);

  // Criteria Drawer Toggle
  btnToggleAnnotation.addEventListener('click', () => {
    criteriaDrawer.classList.toggle('hidden');
  });

  btnCloseDrawer.addEventListener('click', () => {
    criteriaDrawer.classList.add('hidden');
  });

  // Reset All Button
  btnResetAll.addEventListener('click', () => {
    setSlide(START_SLIDE); // Reset to default slide
    mainInput.value = '';
    currentMatch = null;
    rawShorthand = '';
    acceptedFullText = '';
    suggestionCard.classList.add('hidden');
    undoBanner.classList.add('hidden');
    
    // Clear dynamic notes
    const dynamicItems = notesFeed.querySelectorAll('.feed-item:not(:first-child)');
    dynamicItems.forEach(el => el.remove());
    updateCount();
    mainInput.focus();
  });

  // ============================================================
  // HELP MODAL (?) DATA
  // ============================================================
  const helpData = {
    overview: {
      title: "⚡ Tổng quan bài Lab",
      purpose: "Giải quyết bài toán: Người học nghe giảng nhanh chỉ kịp gõ tắt vài từ, sau vài ngày mở lại không hiểu mình đã ghi gì.",
      usage: "Bạn chỉ cần gõ thử từ viết tắt bên phải, AI sẽ tự đối chiếu với slide bên trái để gợi ý câu đầy đủ.",
      metric: "Option A: Người học chủ động gõ, AI chỉ gợi ý thụ động, người học bấm Tab mới nhận (User-Initiated)."
    },
    context: {
      title: "👨‍🏫 Tính năng Đổi Slide & Ngữ cảnh Bài giảng",
      purpose: "Cho phép bạn và tester chuyển đổi qua lại giữa các trang slide thực tế (Slide 04, 06, 14, 15).",
      usage: "Dùng nút ◀ / ▶ hoặc bấm vào danh sách chọn slide. AI sẽ tự động đồng bộ từ điển thuật ngữ tương ứng với slide đó.",
      metric: "Chứng minh AI thực sự hiểu ngữ cảnh theo thời gian thực (Context-Aware), không phụ thuộc vào 1 dữ liệu cố định."
    },
    scenarios: {
      title: "🧪 Nút bấm thử nhanh theo Slide",
      purpose: "Hệ thống tự động đổi các nút từ khóa mẫu mỗi khi bạn chuyển sang slide mới.",
      usage: "Nhấp chuột vào bất kỳ nút thử nhanh nào để AI tự động kích hoạt gợi ý.",
      metric: "Giúp tester trải nghiệm nhanh nhiều tình huống khác nhau chỉ trong 4 phút."
    },
    autocomplete: {
      title: "✨ Cơ chế Tự động mở rộng (Option A)",
      purpose: "Biến các từ viết tắt cụt ngủn thành câu văn hoàn chỉnh, có ý nghĩa để ôn tập sau này.",
      usage: "Gõ chữ tắt $\rightarrow$ Thẻ màu tím sẽ hiện lên câu văn trích từ chính trang slide bạn đang mở.",
      metric: "Gate 3: AI chỉ gợi ý, không tự ý thay đổi chữ của bạn cho đến khi bạn đồng ý."
    },
    tabKey: {
      title: "⇥ Phím Tab hoặc Nút nhận gợi ý",
      purpose: "Thao tác siêu tốc: Chỉ tốn 1 lần bấm phím là có ngay câu ghi chú chuẩn mà không bị mất tập trung nghe giảng.",
      usage: "Nhấn phím Tab trên bàn phím (hoặc bấm nút màu tím) để nhận gợi ý.",
      metric: "Quyền kiểm soát (Agency) thuộc về người học 100%."
    },
    recovery: {
      title: "↩ Nút Hoàn tác (Undo)",
      purpose: "Phục hồi an toàn: Nếu bạn lỡ tay bấm Tab hoặc AI hiểu sai ý, bạn có thể quay lại chữ viết tắt ban đầu.",
      usage: "Nhấp chuột vào nút 'Hoàn tác' $\rightarrow$ Câu ghi chú sẽ quay lại chữ tắt ban đầu bạn đã gõ.",
      metric: "Gate 3: Bắt buộc phải có đường lui (Recovery Path) khi AI sai sót."
    },
    agency: {
      title: "🛡️ Tiêu chuẩn chấm điểm Lab (Agency)",
      purpose: "Minh bạch nguyên tắc thiết kế cho thầy cô chấm bài.",
      usage: "Option A đạt chuẩn vì người học tự bấm phím duyệt, căn cứ từ Slide thật và có nút Hoàn tác 1 chạm.",
      metric: "Đạt chuẩn Gate 2, Gate 3 và Gate 4 của bài học."
    }
  };

  function openHelp(key) {
    const item = helpData[key];
    if (!item) return;

    helpTitle.textContent = item.title;
    helpPurpose.textContent = item.purpose;
    helpUsage.textContent = item.usage;
    helpMetric.textContent = item.metric;
    helpOverlay.classList.remove('hidden');
  }

  function closeHelp() {
    helpOverlay.classList.add('hidden');
  }

  helpButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.getAttribute('data-help');
      openHelp(key);
    });
  });

  btnCloseHelp.addEventListener('click', closeHelp);
  btnUnderstand.addEventListener('click', closeHelp);
  helpOverlay.addEventListener('click', (e) => {
    if (e.target === helpOverlay) closeHelp();
  });

  // Toggle guide mode (Hide/Show all ? buttons)
  let isGuideActive = true;
  btnToggleGuide.addEventListener('click', () => {
    isGuideActive = !isGuideActive;
    if (isGuideActive) {
      document.body.classList.remove('hide-help');
      btnToggleGuide.classList.remove('btn-reset');
      btnToggleGuide.innerHTML = '<span class="icon">💡</span> Hướng dẫn (?)';
    } else {
      document.body.classList.add('hide-help');
      btnToggleGuide.classList.add('btn-reset');
      btnToggleGuide.innerHTML = '<span class="icon">👁️</span> Ẩn (?) để test mù';
    }
  });

  // Initialize with Default Slide
  setSlide(START_SLIDE);
});
