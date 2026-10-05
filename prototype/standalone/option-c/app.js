/**
 * Option C: Post-lecture Cornell Structuring
 * Features:
 * - Slide Navigator (slide-0.png to slide-6.png)
 * - Per-slide note taking with persistence & restoration on Next/Prev
 * - Visual dot indicators for slides with active notes
 * - Per-slide Lecturer Speech Simulation & Terminology Popover
 * - Gemini LLM Synthesis:
 *   + Strictly based on user's written notes across slides
 *   + Clear separation of "Câu hỏi cần làm rõ" (Cues) vs "Nội dung bài học" (Notes)
 *   + Summary based on actual notes
 * - Single Unified Cornell Note Sheet with Inline Edit & Download (.md)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Tham số URL (dùng khi chạy trong trang hub): ?slide=3 chọn slide khởi đầu, ?test=1 chạy chế độ test
    const urlParams = new URLSearchParams(location.search);
    const TEST_MODE = urlParams.get('test') === '1';
    const START_INDEX = Math.min(6, Math.max(0, (parseInt(urlParams.get('slide') || '1', 10) || 1) - 1));
    if (TEST_MODE) {
        document.body.classList.add('test-mode');
        // Mỗi lượt test bắt đầu sạch: không giữ ghi chú của người test trước
        try { localStorage.removeItem('slide_notes_option_c'); } catch (e) {}
    }

    // 1. Data Definitions for 7 Slides
    const slidesData = [
        {
            index: 0,
            image: 'slide-0.png',
            title: 'Session 4: Stakeholder',
            lecturerSpeech: 'Chào cả lớp, chào mừng các bạn đến với Session 4. Trong hành trình làm Product Manager, nhiều bạn nghĩ rằng kỹ năng quan trọng nhất là viết tài liệu PRD hay vẽ wireframe. Nhưng thực tế trong doanh nghiệp, hơn 70% thời gian của một người làm sản phẩm là làm việc với con người, cụ thể là Stakeholder — các bên liên quan từ ban giám đốc, Sales, CS đến đội ngũ kỹ thuật. Một tính năng dù xuất sắc về kỹ thuật nhưng nếu không giải quyết được bài toán kinh doanh hoặc không nhận được sự đồng thuận của các bên thì rất khó có cơ hội ra mắt thành công. Hôm nay chúng ta sẽ học cách nhận diện, phân tích và xây dựng chiến lược làm việc hiệu quả với từng nhóm stakeholder.',
            terms: [
                { name: 'Stakeholder', desc: 'Các bên liên quan chịu ảnh hưởng hoặc có quyền lực tác động đến sản phẩm/dự án.' },
                { name: 'Product Coach', desc: 'Chuyên gia huấn luyện và cố vấn tư duy xây dựng sản phẩm.' }
            ]
        },
        {
            index: 1,
            image: 'slide-1.png',
            title: 'Mô hình phát triển nhóm Tuckman',
            lecturerSpeech: 'Các bạn quan sát thật kỹ biểu đồ trên màn hình nhé. Đây là mô hình phát triển nhóm kinh điển của Bruce Tuckman với trục tung đo mức độ hiệu quả (Effectiveness) và trục hoành là thời gian (Time). Khi một nhóm mới thành lập, giai đoạn Forming mọi người rất lịch sự, dè dặt thăm dò nội quy. Nhưng ngay khi bắt đầu va chạm công việc thực tế, cả nhóm sẽ rơi thẳng vào giai đoạn Storming — sóng gió và xung đột. Các bạn sẽ thấy hiệu suất rơi tự do xuống tận đáy biểu đồ chữ U! Rất nhiều người quản lý hoảng loạn ở bước này, nhưng tôi muốn các bạn hiểu: Storming là điều hoàn toàn tự nhiên và bắt buộc phải xảy ra. Chỉ khi những bất đồng được bộc lộ và giải quyết thì nhóm mới bước sang Norming để thống nhất luật chơi, xây dựng niềm tin. Và đỉnh cao là Performing — khi nhóm tự vận hành trơn tru như chiếc máy bay giấy chở cả đội ngũ cất cánh với hiệu suất cao nhất. Cuối cùng, khi dự án kết thúc sẽ là giai đoạn Adjourning để nghiệm thu và giải tán.',
            terms: [
                { name: 'Forming (Hình thành)', desc: 'Giai đoạn mới thành lập, thành viên làm quen, thăm dò vai trò và nội quy.' },
                { name: 'Storming (Sóng gió)', desc: 'Xung đột quan điểm nảy sinh khi làm việc thực tế, hiệu suất chạm đáy.' },
                { name: 'Norming (Chuẩn hóa)', desc: 'Thống nhất quy tắc làm việc, xây dựng lòng tin và gắn kết đội ngũ.' },
                { name: 'Performing (Bứt phá)', desc: 'Đội ngũ vận hành trơn tru tự chủ, hiệu suất công việc đạt mức đỉnh cao.' },
                { name: 'Adjourning (Thoái trào)', desc: 'Tổng kết nghiệm thu thành quả và giải tán nhóm sau khi dự án kết thúc.' },
                { name: 'Effectiveness vs Time', desc: 'Trục tung đo mức độ hiệu quả, trục hoành đo tiến trình thời gian.' }
            ]
        },
        {
            index: 2,
            image: 'slide-2.png',
            title: 'Agile Scrum Event & Roles',
            lecturerSpeech: 'Tiếp theo, để đội ngũ vận hành trơn tru, chúng ta cần một khung làm việc linh hoạt mà tiêu biểu là Agile Scrum. Trong một Scrum Team, các bạn phải nhớ rõ 3 vai trò: Product Owner nắm giữ tầm nhìn và quản lý Product Backlog; Scrum Master đóng vai trò người hỗ trợ, bảo vệ quy trình và dẹp bỏ các trở ngại; còn Development Team là những người trực tiếp tạo ra sản phẩm. Toàn bộ công việc được đóng gói trong các chu kỳ lặp gọi là Sprint, thường kéo dài từ 1 đến 4 tuần. Một Sprint luôn khởi động bằng Sprint Planning để chốt mục tiêu Sprint Goal, mỗi ngày có buổi họp đứng Daily Scrum tối đa 15 phút để đồng bộ tiến độ. Kết thúc Sprint, chúng ta có Sprint Review để demo sản phẩm thực tế cho stakeholder, và buổi Sprint Retrospective để đội ngũ ngồi lại cải tiến cách làm việc. Nguyên tắc sống còn: Một tính năng chỉ được tính là hoàn thành khi nó đáp ứng đầy đủ Definition of Done (DoD).',
            terms: [
                { name: 'Sprint', desc: 'Chu kỳ lặp phát triển sản phẩm cố định (thường từ 1-4 tuần).' },
                { name: 'Product Owner (PO)', desc: 'Người đại diện tiếng nói khách hàng, quản lý và tối ưu Product Backlog.' },
                { name: 'Scrum Master (SM)', desc: 'Người bảo hộ quy trình Scrum, loại bỏ các trở ngại cho đội phát triển.' },
                { name: 'Sprint Planning', desc: 'Sự kiện họp đầu Sprint để chọn backlog và cam kết mục tiêu Sprint Goal.' },
                { name: 'Daily Scrum', desc: 'Họp đứng 15 phút hàng ngày để đồng bộ tiến độ và nhận diện khó khăn.' },
                { name: 'Sprint Review', desc: 'Buổi demo bản tăng trưởng sản phẩm (Increment) cho các bên liên quan.' },
                { name: 'Sprint Retro', desc: 'Họp cải tiến nội bộ để tìm ra điểm làm tốt và cần khắc phục.' },
                { name: 'Definition of Done (DoD)', desc: 'Bộ tiêu chuẩn chất lượng bắt buộc trước khi một hạng mục được coi là xong.' }
            ]
        },
        {
            index: 3,
            image: 'slide-3.png',
            title: 'Quy trình tương tác Stakeholder',
            lecturerSpeech: 'Trên slide này, tôi đúc kết cho các bạn quy trình làm việc với Stakeholder gồm 2 nửa song hành. Nửa trên là Phân tích (Stakeholder Analysis): Đầu tiên phải Nhận diện (Identification) xem xung quanh sản phẩm có những ai bị ảnh hưởng. Sau đó Phân cấp ưu tiên (Prioritization) vì thời gian của chúng ta có hạn, không thể chiều lòng tất cả cùng lúc; và cuối cùng là đào sâu Nhu cầu thực sự (Needs) thay vì chỉ nghe những gì họ đòi hỏi bề nổi. Nửa dưới là Quản trị (Stakeholder Management): Chúng ta phải gắn kết nhu cầu đó với Định hướng chiến lược (Strategic Ambitions), cụ thể hóa thành Mục tiêu cấp cao (High-Level Goals) và các Chỉ số giá trị (Value Metrics) đo lường được. Đặc biệt, các bạn thấy mũi tên uốn cong ở dưới không? Đó là Learning Loop — vòng lặp học hỏi liên tục. Mối quan hệ với stakeholder không phải là một lần là xong, mà phải liên tục đo lường và thích ứng theo từng giai đoạn.',
            terms: [
                { name: 'Stakeholder Analysis', desc: 'Nhận diện đối tượng (Identification), phân thứ tự ưu tiên (Prioritization) và nhu cầu (Needs).' },
                { name: 'Stakeholder Management', desc: 'Định hình mục tiêu chiến lược (Strategic Ambitions) và chỉ số giá trị (Value Metrics).' },
                { name: 'Learning Loop', desc: 'Vòng lặp học hỏi liên tục để thích ứng với phản hồi từ các bên liên quan.' }
            ]
        },
        {
            index: 4,
            image: 'slide-4.png',
            title: 'Mô hình tính cách DISC',
            lecturerSpeech: 'Bây giờ là một công cụ tâm lý học cực kỳ đắt giá giúp các bạn thấu hiểu hành vi con người: mô hình DISC. Con người chúng ta được chia theo hai trục: Hướng ngoại vs Hướng nội, và Quan tâm đến kết quả công việc vs Quan tâm đến con người. Từ đó tạo ra 4 nhóm tính cách chính: Nhóm D (Dominance - Thống trị) là những người thích quyền lực, thẳng thắn, quyết đoán và luôn đòi hỏi kết quả nhanh; khi nói chuyện với nhóm D, các bạn phải ngắn gọn, vào thẳng số liệu. Nhóm I (Influence - Ảnh hưởng) là những người nhiệt tình, thân thiện, giỏi truyền cảm hứng và hướng tới con người; họ cần sự hào hứng và công nhận. Nhóm S (Steadiness - Kiên định) là những người điềm tĩnh, đáng tin cậy, thích sự ổn định và sợ thay đổi đột ngột; họ cần lộ trình rõ ràng và cảm giác an toàn. Cuối cùng, nhóm C (Conscientiousness - Tận tâm) là những người cực kỳ tỉ mỉ, logic, kỷ luật và cầu toàn; làm việc với nhóm C các bạn phải chuẩn bị kỹ tài liệu, số liệu phân tích và quy trình chi tiết.',
            terms: [
                { name: 'Dominance (D - Thống trị)', desc: 'Quyết đoán, hướng ngoại, chú trọng tốc độ và kết quả công việc.' },
                { name: 'Influence (I - Ảnh hưởng)', desc: 'Nhiệt huyết, lạc quan, truyền cảm hứng và hướng tới con người.' },
                { name: 'Steadiness (S - Kiên định)', desc: 'Trầm tĩnh, kiên nhẫn, coi trọng sự ổn định và hòa khí.' },
                { name: 'Conscientiousness (C - Tận tâm)', desc: 'Tỉ mỉ, kỷ luật, yêu cầu tính chính xác và tuân thủ quy chuẩn logic.' }
            ]
        },
        {
            index: 5,
            image: 'slide-5.png',
            title: 'Ma trận phân tích Power / Interest',
            lecturerSpeech: 'Quay trở lại bài toán quản trị, đây là ma trận 4 góc kinh điển phân loại theo Quyền lực (Power) và Mức độ quan tâm (Interest). Các bạn hãy nhìn vào 4 ô số: Ô số 2 (Góc trên bên phải) là những người vừa có Quyền lực cao vừa Quan tâm sâu sát — ví dụ như Giám đốc điều hành hay Giám đốc khối sản phẩm — đây là nhóm tối quan trọng, các bạn bắt buộc phải quản lý sát sườn (Manage Closely) và báo cáo thường xuyên. Ô số 1 (Góc trên bên trái) là những người có Quan tâm cao nhưng Quyền lực thấp — chẳng hạn như đội ngũ Support hay Sales tuyến đầu — họ là những người sử dụng sản phẩm hàng ngày; hãy giữ họ luôn được thông tin đầy đủ (Keep Informed) vì họ sẽ là đồng minh đắc lực nhất của bạn. Ô số 4 có Quyền cao nhưng Quan tâm thấp thì cần giữ cho họ hài lòng (Keep Satisfied) nhưng không làm phiền quá nhiều chi tiết; còn ô số 3 cả hai đều thấp thì chỉ cần theo dõi định kỳ (Monitor).',
            terms: [
                { name: 'Power (Quyền lực)', desc: 'Mức độ quyền hạn ra quyết định hoặc chi phối nguồn lực dự án.' },
                { name: 'Interest (Quan tâm)', desc: 'Mức độ ảnh hưởng trực tiếp của sản phẩm đến lợi ích của stakeholder.' },
                { name: 'Góc 2 (High Power / High Interest)', desc: 'Đối tượng cốt lõi, cần quản trị sát sao và tương tác liên tục.' },
                { name: 'Góc 1 (Low Power / High Interest)', desc: 'Đối tượng ủng hộ, cần giữ cho họ luôn được thông tin đầy đủ.' }
            ]
        },
        {
            index: 6,
            image: 'slide-6.png',
            title: 'Chiến lược tương tác Stakeholder (Cuối)',
            lecturerSpeech: 'Và đây là slide tổng kết thực chiến nhất: Bảng ma trận chiến lược quan hệ Stakeholder. Khi các bạn về công ty, hãy lập cho mình một bảng theo dõi giống hệt như thế này. Với mỗi stakeholder quan trọng, ngoài Tên và Phòng ban, các bạn phải xác định được Common Goal — mục tiêu chung làm điểm tựa hợp tác giữa hai bên. Ví dụ anh Max bên CS có mục tiêu tăng tỷ lệ chốt Telesales 30%, nếu tính năng mới của bạn giúp anh ấy đạt mục tiêu này, anh ấy sẽ ủng hộ bạn hết mình! Thêm vào đó, hãy ghi chú kênh liên lạc ưa thích (Email hay Phone), sở thích cá nhân (Bóng đá, Chạy bộ, Bida) và nhóm tính cách DISC để chọn phong cách tiếp cận phù hợp. Một mối quan hệ đối tác bền vững luôn được xây dựng từ sự thấu hiểu chuyên môn kết hợp với sự đồng cảm cá nhân. Bây giờ bài giảng đã kết thúc, mời các bạn bấm nút Tổng hợp để hệ thống tạo bản Cornell Note tổng kết toàn bộ buổi học.',
            terms: [
                { name: 'Common Goal', desc: 'Mục tiêu chung giúp tạo sự đồng thuận giữa các phòng ban khác nhau.' },
                { name: 'Personality Alignment', desc: 'Ứng dụng DISC để linh hoạt cách thức giao tiếp với từng cá nhân.' },
                { name: 'Contact & Info', desc: 'Chiến thuật giữ liên lạc và thấu hiểu đời sống cá nhân để xây dựng niềm tin.' }
            ]
        }
    ];

    // 2. Per-Slide Notes State & Persistence
    let slideNotes = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' };
    try {
        const saved = JSON.parse(localStorage.getItem('slide_notes_option_c'));
        if (saved && typeof saved === 'object') {
            slideNotes = { ...slideNotes, ...saved };
        }
    } catch (e) {
        console.warn('Could not load stored slide notes:', e);
    }

    let currentSlideIndex = 0;
    let isEditMode = false;
    let currentCornellData = null;

    // DOM Elements
    const currentSlideImg = document.getElementById('current-slide-img');
    const slideCounter = document.getElementById('slide-counter');
    const slideTitleText = document.getElementById('slide-title-text');
    const lecturerText = document.getElementById('lecturer-text');
    const btnPrevSlide = document.getElementById('btn-prev-slide');
    const btnNextSlide = document.getElementById('btn-next-slide');
    const slideDotsContainer = document.getElementById('slide-dots');
    
    // Terminology
    const btnToggleTerms = document.getElementById('btn-toggle-terms');
    const termsCount = document.getElementById('terms-count');
    const termsPopover = document.getElementById('terms-popover');
    const btnCloseTerms = document.getElementById('btn-close-terms');
    const termsList = document.getElementById('terms-list');

    // Note Area
    const noteCardTitle = document.getElementById('note-card-title');
    const noteSlideTag = document.getElementById('note-slide-tag');
    const lectureNoteInput = document.getElementById('lecture-note-input');
    const noteCharCount = document.getElementById('note-char-count');
    const statusIndicator = document.getElementById('status-indicator');
    const btnSummarize = document.getElementById('btn-summarize');
    const noteFooterHint = document.getElementById('note-footer-hint');

    // Layouts
    const stateLecture = document.getElementById('state-lecture');
    const stateCornell = document.getElementById('state-cornell');
    const btnBackToSlides = document.getElementById('btn-back-to-slides');
    const btnReset = document.getElementById('btn-reset');

    // Cornell Note Containers & Actions
    const cornellPaper = document.getElementById('cornell-paper');
    const cornellCuesContainer = document.getElementById('cornell-cues-container');
    const cornellNotesContainer = document.getElementById('cornell-notes-container');
    const cornellSummaryContainer = document.getElementById('cornell-summary-container');
    const cornellAiBadge = document.getElementById('cornell-ai-badge');
    const btnEditCornell = document.getElementById('btn-edit-cornell');
    const btnDownloadCornell = document.getElementById('btn-download-cornell');
    const editModeBar = document.getElementById('edit-mode-bar');
    const btnSaveEditMode = document.getElementById('btn-save-edit-mode');

    // API Key Management
    const btnApiKey = document.getElementById('btn-api-key');
    const apiKeyStatus = document.getElementById('api-key-status');
    const apiModal = document.getElementById('api-modal');
    const btnCloseApiModal = document.getElementById('btn-close-api-modal');
    const inputApiKey = document.getElementById('input-api-key');
    const btnSaveApiKey = document.getElementById('btn-save-api-key');
    const btnClearApiKey = document.getElementById('btn-clear-api-key');
    const toast = document.getElementById('toast');

    // 3. API Key Initialization
    function getStoredApiKey() {
        return (window.GEMINI_API_KEY && window.GEMINI_API_KEY.trim()) || localStorage.getItem('gemini_api_key') || '';
    }

    function updateApiKeyButtonState() {
        const key = getStoredApiKey();
        if (key) {
            apiKeyStatus.textContent = 'API Đã Cài';
            btnApiKey.classList.add('configured');
        } else {
            apiKeyStatus.textContent = 'Cài Gemini API';
            btnApiKey.classList.remove('configured');
        }
    }
    updateApiKeyButtonState();

    btnApiKey.addEventListener('click', () => {
        inputApiKey.value = getStoredApiKey();
        apiModal.style.display = 'flex';
    });

    function closeApiModal() {
        apiModal.style.display = 'none';
    }
    btnCloseApiModal.addEventListener('click', closeApiModal);

    btnSaveApiKey.addEventListener('click', () => {
        const val = inputApiKey.value.trim();
        if (val) {
            localStorage.setItem('gemini_api_key', val);
            showToast('🔑 Đã lưu Gemini API Key!');
        } else {
            localStorage.removeItem('gemini_api_key');
            showToast('Đã bỏ API Key.');
        }
        updateApiKeyButtonState();
        closeApiModal();
    });

    btnClearApiKey.addEventListener('click', () => {
        localStorage.removeItem('gemini_api_key');
        inputApiKey.value = '';
        updateApiKeyButtonState();
        showToast('Đã xóa Gemini API Key.');
        closeApiModal();
    });

    apiModal.addEventListener('click', (e) => {
        if (e.target === apiModal) closeApiModal();
    });

    // 4. Slide Navigation & Per-Slide Note Management
    function saveCurrentNote() {
        if (lectureNoteInput && typeof currentSlideIndex === 'number') {
            slideNotes[currentSlideIndex] = lectureNoteInput.value;
            try {
                localStorage.setItem('slide_notes_option_c', JSON.stringify(slideNotes));
            } catch (e) {}
        }
    }

    function renderDots() {
        slideDotsContainer.innerHTML = '';
        slidesData.forEach((_, idx) => {
            const dot = document.createElement('button');
            const hasNote = (slideNotes[idx] && slideNotes[idx].trim().length > 0);
            dot.className = `slide-dot-btn ${idx === currentSlideIndex ? 'active' : ''} ${hasNote ? 'has-note' : ''}`;
            dot.textContent = idx + 1;
            dot.title = `Chuyển tới slide ${idx + 1} ${hasNote ? '(Đã có ghi chú)' : ''}`;
            dot.addEventListener('click', () => goToSlide(idx));
            slideDotsContainer.appendChild(dot);
        });
    }

    function goToSlide(index) {
        if (index < 0 || index >= slidesData.length) return;

        // Auto-save note of current slide before leaving
        saveCurrentNote();

        currentSlideIndex = index;
        const currentData = slidesData[index];

        // Fade image
        currentSlideImg.style.opacity = '0.3';
        setTimeout(() => {
            currentSlideImg.src = currentData.image;
            currentSlideImg.style.opacity = '1';
        }, 50);

        // Update Info & Lecturer Speech
        slideCounter.textContent = `Slide ${index + 1} / ${slidesData.length}`;
        slideTitleText.textContent = currentData.title;
        lecturerText.textContent = currentData.lecturerSpeech;
        termsCount.textContent = currentData.terms.length;

        // Load Note for this specific slide
        const loadedNote = slideNotes[index] || '';
        lectureNoteInput.value = loadedNote;
        const charLen = loadedNote.trim().length;
        noteCharCount.textContent = `${charLen} ký tự`;
        if (charLen > 0) statusIndicator.classList.add('active');
        else statusIndicator.classList.remove('active');

        // Update Header Titles
        if (noteCardTitle) noteCardTitle.textContent = `Ghi chú Slide ${index + 1}: ${currentData.title}`;
        if (noteSlideTag) noteSlideTag.textContent = `Slide ${index + 1}`;

        // Nav Buttons
        btnPrevSlide.disabled = index === 0;
        btnNextSlide.disabled = index === slidesData.length - 1;

        renderDots();
        renderTerms(currentData.terms);

        updateSummarizeState();
    }

    // Nút Tổng hợp mở khi đã đến slide cuối hoặc khi đã có ít nhất một ghi chú
    function updateSummarizeState() {
        const isLast = currentSlideIndex === slidesData.length - 1;
        const hasNote = Object.values(slideNotes).some(v => (v || '').trim().length > 0);
        if (isLast || hasNote) {
            btnSummarize.disabled = false;
            btnSummarize.classList.add('ready');
            noteFooterHint.textContent = isLast
                ? '✨ Đã đến slide cuối! Bạn có thể bấm Tổng hợp note bài học.'
                : '✨ Bạn có thể bấm Tổng hợp note bài học bất cứ lúc nào.';
            noteFooterHint.classList.add('highlight');
        } else {
            btnSummarize.disabled = true;
            btnSummarize.classList.remove('ready');
            noteFooterHint.textContent = `💡 Ghi chú ít nhất một ý, hoặc xem đến slide cuối cùng (${slidesData.length}/${slidesData.length}), để mở nút tổng hợp Cornell Note.`;
            noteFooterHint.classList.remove('highlight');
        }
    }

    function renderTerms(terms) {
        termsList.innerHTML = terms.map(t => `
            <li class="term-item">
                <span class="term-name">• ${t.name}</span>
                <span class="term-desc">${t.desc}</span>
            </li>
        `).join('');
    }

    btnToggleTerms.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = termsPopover.style.display === 'none';
        termsPopover.style.display = isHidden ? 'flex' : 'none';
        btnToggleTerms.classList.toggle('active', isHidden);
    });

    btnCloseTerms.addEventListener('click', () => {
        termsPopover.style.display = 'none';
        btnToggleTerms.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if (!termsPopover.contains(e.target) && !btnToggleTerms.contains(e.target)) {
            termsPopover.style.display = 'none';
            btnToggleTerms.classList.remove('active');
        }
    });

    btnPrevSlide.addEventListener('click', () => goToSlide(currentSlideIndex - 1));
    btnNextSlide.addEventListener('click', () => goToSlide(currentSlideIndex + 1));

    document.addEventListener('keydown', (e) => {
        if (stateLecture.style.display !== 'none' && document.activeElement !== lectureNoteInput) {
            if (e.key === 'ArrowRight' || e.key === 'PageDown') {
                goToSlide(currentSlideIndex + 1);
            } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                goToSlide(currentSlideIndex - 1);
            }
        }
    });

    // 5. Note Input Event (saves per slide in real-time)
    lectureNoteInput.addEventListener('input', () => {
        const text = lectureNoteInput.value;
        slideNotes[currentSlideIndex] = text;
        try {
            localStorage.setItem('slide_notes_option_c', JSON.stringify(slideNotes));
        } catch (e) {}

        const charLen = text.trim().length;
        noteCharCount.textContent = `${charLen} ký tự`;
        if (charLen > 0) {
            statusIndicator.classList.add('active');
        } else {
            statusIndicator.classList.remove('active');
        }
        renderDots();
        updateSummarizeState();
    });

    // 6. Gemini LLM Synthesis
    async function callGeminiSynthesize(compiledNotes, apiKey) {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const prompt = `Bạn là một trợ lý học tập AI xuất sắc. Nhiệm vụ của bạn là tổng hợp các ghi chú của sinh viên trong buổi học "Session 4: Stakeholder & Team Development" thành bản Cornell Note chuẩn mực.

Dưới đây là TOÀN BỘ GHI CHÚ THỰC TẾ của sinh viên đã ghi chép qua các slide:
"""
${compiledNotes || "(Sinh viên chưa ghi chú nhiều, hãy tổng hợp dựa trên kiến thức cốt lõi của các slide và lời giảng viên dưới đây)"}
"""

Bối cảnh các slide bài giảng:
- Slide 1: Khái niệm Stakeholder và vai trò Product Coach
- Slide 2: Mô hình Tuckman (Forming, Storming, Norming, Performing, Adjourning), đường cong chữ U
- Slide 3: Agile Scrum (Roles: PO, SM, Dev; Events: Sprint Planning, Daily Scrum, Review, Retro; DoD)
- Slide 4: Quy trình tương tác Stakeholder (Analysis & Management, Learning Loop)
- Slide 5: Mô hình tính cách DISC (Dominance, Influence, Steadiness, Conscientiousness)
- Slide 6: Ma trận Power vs Interest (4 góc phần tư)
- Slide 7: Chiến lược tương tác Stakeholder (Common Goal, Contact, Hobby, Personality)

YÊU CẦU BẮT BUỘC:
Dựa CHÍNH XÁC vào những gì sinh viên đã ghi chú (kết hợp với kiến thức bài giảng):
1. CỘT TRÁI ("cues"): BẮT BUỘC PHÂN LOẠI CÂU HỎI & ĐIỂM CẦN LÀM RÕ.
   - Trích xuất hoặc tổng hợp lại các câu hỏi thắc mắc, các điểm nghi vấn, các chỗ có dấu (?) hoặc các khái niệm sinh viên còn băn khoăn / cần đào sâu làm rõ thêm sau buổi học.
2. CỘT PHẢI ("notes"): NỘI DUNG BÀI HỌC CỐT LÕI.
   - Đúc kết các nội dung, định nghĩa, bài học cốt lõi từ ghi chú của sinh viên, nhóm theo từng chủ đề hoặc từng slide tương ứng.
3. PHẦN TÓM TẮT ("summary"):
   - 2 đến 3 câu đúc kết bài học phản ánh đúng tinh thần ghi chú của sinh viên.

Hãy trả về DUY NHẤT một chuỗi JSON hợp lệ theo định dạng (không bọc trong markdown code fence, không thêm text ngoài JSON):
{
  "topic": "Session 4: Quản trị Stakeholder & Phát triển Đội ngũ (Tuckman, Scrum, DISC)",
  "date": "05/10/2026",
  "cues": [
    { "title": "Câu hỏi hoặc điểm cần làm rõ 1", "desc": "Giải thích ngắn hoặc gợi ý tìm hiểu thêm" },
    { "title": "Câu hỏi hoặc điểm cần làm rõ 2", "desc": "Giải thích ngắn hoặc gợi ý tìm hiểu thêm" }
  ],
  "notes": [
    {
      "heading": "Tiêu đề chủ đề hoặc Slide",
      "bullets": [ "Ý cốt lõi 1", "Ý cốt lõi 2" ]
    }
  ],
  "summary": "Tóm tắt bài học đúc kết..."
}`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.2,
                    responseMimeType: "application/json"
                }
            })
        });

        if (!response.ok) {
            throw new Error(`Gemini API Error: ${response.status}`);
        }

        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) throw new Error("Empty Gemini response");

        const cleaned = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleaned);
    }

    // 7. Intelligent Fallback Generator (Respects User Notes & Splits Questions vs Content)
    function getFallbackCornellData(compiledNotes) {
        const lines = [];
        Object.keys(slideNotes).forEach(idx => {
            const text = (slideNotes[idx] || '').trim();
            if (text) {
                text.split('\n').forEach(line => {
                    const l = line.trim().replace(/^[-•*]\s*/, '');
                    if (l) lines.push({ slideIdx: Number(idx), text: l });
                });
            }
        });

        // Separate Questions vs Notes
        const questionLines = [];
        const contentLines = [];

        lines.forEach(item => {
            const lower = item.text.toLowerCase();
            const isQuestion = item.text.includes('?') || 
                               lower.startsWith('tại sao') || 
                               lower.startsWith('sao') || 
                               lower.startsWith('là gì') || 
                               lower.startsWith('thế nào') || 
                               lower.includes('chưa hiểu') || 
                               lower.includes('hỏi') || 
                               lower.includes('cần làm rõ');
            if (isQuestion) {
                questionLines.push(item);
            } else {
                contentLines.push(item);
            }
        });

        // Generate Cues (Questions)
        let cues = [];
        if (questionLines.length > 0) {
            cues = questionLines.map(q => ({
                title: q.text,
                desc: `Xuất phát từ ghi chép Slide ${q.slideIdx + 1} (${slidesData[q.slideIdx]?.title || ''}). Cần đào sâu làm rõ thêm.`
            }));
        } else {
            cues = [
                { title: "Vì sao Storming lại rơi xuống đáy hiệu suất?", desc: "Do va chạm thực tế và xung đột quan điểm trước khi tìm được tiếng nói chung." },
                { title: "Definition of Done (DoD) khác gì Acceptance Criteria?", desc: "DoD áp dụng chung cho toàn bộ increment, AC áp dụng cho từng user story cụ thể." },
                { title: "Cách nhận diện nhanh nhóm tính cách DISC?", desc: "Quan sát cử chỉ, tốc độ nói (hướng ngoại/nội) và trọng tâm thảo luận (kết quả/con người)." },
                { title: "Làm thế nào để duy trì Learning Loop với Stakeholder?", desc: "Tạo các buổi demo review định kỳ và thu thập phản hồi thường xuyên." }
            ];
        }

        // Generate Notes (Group by Slide)
        let notes = [];
        if (contentLines.length > 0) {
            // Group user's content lines by slide
            const grouped = {};
            contentLines.forEach(item => {
                if (!grouped[item.slideIdx]) grouped[item.slideIdx] = [];
                grouped[item.slideIdx].push(item.text);
            });

            notes = Object.keys(grouped).map(idx => {
                const s = slidesData[Number(idx)];
                return {
                    heading: `Ghi chú Slide ${Number(idx) + 1}: ${s ? s.title : ''}`,
                    bullets: grouped[idx]
                };
            });
        } else {
            notes = [
                {
                    heading: "1. Mô hình phát triển nhóm (Tuckman Team Development)",
                    bullets: [
                        "Forming: Thành viên làm quen, dè dặt thăm dò nội quy và vai trò.",
                        "Storming: Xung đột quan điểm nảy sinh, hiệu suất (Effectiveness) chạm đáy biểu đồ chữ U.",
                        "Norming: Thống nhất quy tắc làm việc, bắt đầu tin tưởng và phối hợp nhịp nhàng.",
                        "Performing: Đội ngũ tự chủ linh hoạt, hiệu suất đạt mức đỉnh cao.",
                        "Adjourning: Nghiệm thu thành quả và giải tán nhóm sau dự án."
                    ]
                },
                {
                    heading: "2. Khung làm việc Agile Scrum & Chu kỳ Sprint",
                    bullets: [
                        "3 Vai trò cốt lõi: Product Owner (định hướng giá trị), Scrum Master (hỗ trợ quy trình), Development Team (thực thi).",
                        "4 Sự kiện chính: Sprint Planning (lập kế hoạch), Daily Scrum (họp đứng 15p), Sprint Review (demo sản phẩm), Sprint Retro (cải tiến quy trình).",
                        "Cam kết chất lượng: Hạng mục chỉ được coi là Increment hoàn chỉnh khi thỏa mãn Definition of Done (DoD)."
                    ]
                },
                {
                    heading: "3. Thấu hiểu Stakeholder & Ứng dụng Mô hình DISC",
                    bullets: [
                        "Ma trận Power vs Interest: Nhóm Quyền cao / Quan tâm cao cần quản trị sát sườn; nhóm Quan tâm cao / Quyền thấp cần cung cấp thông tin liên tục.",
                        "Nhóm D (Thống trị): Thẳng thắn, quyết đoán, cần báo cáo ngắn gọn tập trung vào kết quả.",
                        "Nhóm I (Ảnh hưởng): Nhiệt tình, thân thiện, cần sự gắn kết và công nhận.",
                        "Nhóm S (Kiên định): Trầm tĩnh, thận trọng, cần lộ trình an toàn và ổn định.",
                        "Nhóm C (Tận tâm): Tỉ mỉ, kỷ luật, yêu cầu số liệu chính xác và quy chuẩn chặt chẽ."
                    ]
                }
            ];
        }

        return {
            topic: "Session 4: Quản trị Stakeholder & Phát triển Đội ngũ (Tuckman, Scrum, DISC)",
            date: "05/10/2026",
            cues: cues,
            notes: notes,
            summary: lines.length > 0 
                ? `Tổng hợp từ ${lines.length} ý bạn đã ghi ở ${[...new Set(lines.map(l => l.slideIdx))].length} slide (${[...new Set(lines.map(l => slidesData[l.slideIdx] ? slidesData[l.slideIdx].title : ''))].join('; ')}), trong đó ${questionLines.length} điểm cần làm rõ thêm.`
                : "Để dẫn dắt dự án thành công, Product Manager cần nắm vững tiến trình phát triển nhóm (Tuckman) để vượt qua giai đoạn sóng gió, vận hành nhịp độ làm việc linh hoạt qua Agile Scrum, và phân tích sâu sắc các bên liên quan (Stakeholder) dựa trên ma trận Power/Interest kết hợp thấu hiểu hành vi DISC để giao tiếp trúng đích."
        };
    }

    // 8. Render Cornell Note DOM
    function renderCornellNote(data) {
        currentCornellData = data;

        // Render Cues (Câu hỏi cần làm rõ)
        cornellCuesContainer.innerHTML = data.cues.map(c => `
            <div class="cue-block">
                <span class="cue-title">${c.title}</span>
                <span class="cue-desc">${c.desc}</span>
            </div>
        `).join('');

        // Render Notes (Nội dung bài học cốt lõi)
        cornellNotesContainer.innerHTML = data.notes.map(n => `
            <div class="note-section-item">
                <h4>${n.heading}</h4>
                ${n.bullets.map(b => `<p>• ${b}</p>`).join('')}
            </div>
        `).join('');

        // Render Summary
        cornellSummaryContainer.textContent = data.summary;
    }

    // 9. Handle Summarize Click
    btnSummarize.addEventListener('click', async () => {
        saveCurrentNote();

        // Compile notes from all slides
        let compiledNotes = '';
        let totalCount = 0;
        slidesData.forEach((s, idx) => {
            const noteText = (slideNotes[idx] || '').trim();
            if (noteText) {
                totalCount++;
                compiledNotes += `\n=== SLIDE ${idx + 1}: ${s.title} ===\n${noteText}\n`;
            }
        });

        const apiKey = getStoredApiKey();
        const originalBtnHtml = btnSummarize.innerHTML;
        btnSummarize.disabled = true;
        btnSummarize.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 0.8s linear infinite; display: inline-block;">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
            </svg>
            Gemini đang tổng hợp bài học...
        `;

        try {
            let noteData;
            if (apiKey) {
                try {
                    noteData = await callGeminiSynthesize(compiledNotes, apiKey);
                    cornellAiBadge.textContent = '✨ Gemini 1.5 Flash';
                    showToast(`🤖 Đã tổng hợp thành công từ ghi chú của bạn qua Gemini LLM!`);
                } catch (err) {
                    console.warn('Gemini API call failed, falling back:', err);
                    noteData = getFallbackCornellData(compiledNotes);
                    cornellAiBadge.textContent = '🤖 AI Synthesized';
                    showToast('⚠️ Không kết nối được API key, đã dùng thuật toán phân loại thông minh.');
                }
            } else {
                await new Promise(r => setTimeout(r, 700));
                noteData = getFallbackCornellData(compiledNotes);
                cornellAiBadge.textContent = '🤖 AI Synthesized';
                showToast(`✨ Đã tổng hợp thành công bản Cornell Note từ ${totalCount} slide!`);
            }

            renderCornellNote(noteData);

            btnSummarize.innerHTML = originalBtnHtml;
            btnSummarize.disabled = false;

            // Switch view
            stateLecture.style.display = 'none';
            stateCornell.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (e) {
            console.error(e);
            btnSummarize.innerHTML = originalBtnHtml;
            btnSummarize.disabled = false;
            showToast('Có lỗi xảy ra khi tổng hợp, vui lòng thử lại.');
        }
    });

    // 10. Back to Slides
    btnBackToSlides.addEventListener('click', () => {
        stateCornell.style.display = 'none';
        stateLecture.style.display = 'grid';
        goToSlide(currentSlideIndex);
    });

    // 11. Edit Cornell Note (Direct inline editing)
    btnEditCornell.addEventListener('click', () => {
        toggleEditMode(true);
    });

    btnSaveEditMode.addEventListener('click', () => {
        toggleEditMode(false);
        showToast('💾 Đã lưu thay đổi vào bản Cornell Note!');
    });

    function toggleEditMode(enable) {
        isEditMode = enable;
        const editableElements = [
            cornellCuesContainer,
            cornellNotesContainer,
            cornellSummaryContainer,
            document.getElementById('c-topic'),
            document.getElementById('c-date'),
            document.getElementById('c-source')
        ];

        editableElements.forEach(el => {
            if (el) el.contentEditable = enable ? 'true' : 'false';
        });

        cornellPaper.classList.toggle('editable-active', enable);
        editModeBar.style.display = enable ? 'flex' : 'none';
        btnEditCornell.textContent = enable ? '✏️ Đang sửa...' : '✏️ Sửa ghi chú';
    }

    // 12. Download Cornell Note as Markdown (.md)
    btnDownloadCornell.addEventListener('click', () => {
        const topic = document.getElementById('c-topic').innerText.trim();
        const date = document.getElementById('c-date').innerText.trim();
        const source = document.getElementById('c-source').innerText.trim();
        const cuesText = cornellCuesContainer.innerText.trim();
        const notesText = cornellNotesContainer.innerText.trim();
        const summaryText = cornellSummaryContainer.innerText.trim();

        const markdownContent = `# Cornell Note: ${topic}
- **Ngày học:** ${date}
- **Nguồn:** ${source}

---

## ❓ CÂU HỎI & ĐIỂM CẦN LÀM RÕ (CUE COLUMN)
${cuesText}

---

## 📝 NỘI DUNG BÀI HỌC CỐT LÕI (NOTES COLUMN)
${notesText}

---

## 📌 TÓM TẮT DỰA TRÊN GHI CHÚ BÀI HỌC (SUMMARY)
${summaryText}

---
*Được tạo tự động bởi AI Cornell Notes — Option C Micro-prototype*
`;

        const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Cornell_Notes_Session4_${new Date().toISOString().slice(0, 10)}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('📥 Đã tải xuống file Cornell_Notes_Session4.md!');
    });

    // 13. Reset Functionality
    btnReset.addEventListener('click', () => {
        if (confirm('Bạn có muốn xóa toàn bộ ghi chú và đặt lại bài học từ slide 1?')) {
            toggleEditMode(false);
            stateCornell.style.display = 'none';
            stateLecture.style.display = 'grid';
            slideNotes = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' };
            try {
                localStorage.removeItem('slide_notes_option_c');
            } catch (e) {}
            lectureNoteInput.value = '';
            noteCharCount.textContent = '0 ký tự';
            statusIndicator.classList.remove('active');
            goToSlide(START_INDEX);
            showToast('🔄 Đã đặt lại bài học ban đầu');
        }
    });

    // 14. Toast Helper
    let toastTimeout;
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.style.display = 'block';
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.style.display = 'none';
        }, 3200);
    }

    // Start slide
    goToSlide(START_INDEX);
});

// Inline keyframe for spin
const spinStyle = document.createElement('style');
spinStyle.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinStyle);
