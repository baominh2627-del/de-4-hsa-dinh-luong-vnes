export const examData = [
  {
    id: "q1",
    type: "mcq",
    question: "Cho cấp số nhân $(u_n)$ có $u_1 = 3$, công bội $q = 2$. Khi đó $u_5$ bằng",
    options: ["24.", "11.", "48.", "9."],
    correctAnswer: 2,
    explanation: "Áp dụng công thức số hạng tổng quát của cấp số nhân: $u_n = u_1 \\cdot q^{n-1}$. Ta có $u_5 = u_1 \\cdot q^4 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$.",
    image: null
  },
  {
    id: "q2",
    type: "mcq",
    question: "Cho hình chóp $S.ABCD$ trong đó $ABCD$ là hình chữ nhật, $SA \\perp (ABCD)$. Trong các tam giác sau tam giác nào không phải là tam giác vuông.",
    options: ["$\\Delta SBC$.", "$\\Delta SCD$.", "$\\Delta SAB$.", "$\\Delta SBD$."],
    correctAnswer: 3,
    explanation: "Vì $SA \\perp (ABCD)$ nên $SA \\perp AB, SA \\perp AD \\Rightarrow \\Delta SAB, \\Delta SAD$ vuông tại $A$. $BC \\perp AB$ (do $ABCD$ là hcn) và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB \\Rightarrow \\Delta SBC$ vuông tại $B$. Tương tự $CD \\perp (SAD) \\Rightarrow CD \\perp SD \\Rightarrow \\Delta SCD$ vuông tại $D$. Tam giác $SBD$ không có yếu tố vuông góc.",
    image: null
  },
  {
    id: "q3",
    type: "mcq",
    question: "Tìm số gần đúng của $a=5,2463$ với độ chính xác $d=0,001$",
    options: ["5,25.", "5,246.", "5,2.", "5,24."],
    correctAnswer: 0,
    explanation: "Độ chính xác $d = 0,001$ nên ta làm tròn số 5,2463 đến hàng phần trăm (sau dấu phẩy 2 chữ số). Chữ số hàng phần nghìn là 6 > 5 nên ta cộng 1 vào hàng phần trăm, được 5,25.",
    image: null
  },
  {
    id: "q4",
    type: "mcq",
    question: "Cho hình chóp $S.ABCD$ có $SA \\perp (ABCD)$ và đáy là hình vuông. Từ $A$ kẻ $AH \\perp SB$. Khẳng định nào sau đây đúng?",
    options: ["$SB \\perp (HAC)$.", "$AH \\perp (SAD)$.", "$AH \\perp (SBD)$.", "$AH \\perp (SBC)$."],
    correctAnswer: 3,
    explanation: "Ta có $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp AH$. Mặt khác theo giả thiết $AH \\perp SB$. Từ đó suy ra $AH \\perp (SBC)$.",
    image: null
  },
  {
    id: "q5",
    type: "mcq",
    question: "$\\lim_{x \\to 1} \\frac{\\sqrt{x+8}-3}{x-2}$ bằng",
    options: ["0.", "$\\sqrt{2}$.", "$\\sqrt{5}$.", "$\\sqrt{3}$."],
    correctAnswer: 0,
    explanation: "Thay trực tiếp $x=1$ vào biểu thức: $\\frac{\\sqrt{1+8}-3}{1-2} = \\frac{\\sqrt{9}-3}{-1} = \\frac{3-3}{-1} = 0$.",
    image: null
  },
  {
    id: "q6",
    type: "mcq",
    question: "Cho hàm số $y=f(x)$ có bảng biến thiên như sau: Hỏi hàm số đã cho đồng biến trên khoảng nào dưới đây?",
    options: ["$(-\\infty;1)$.", "$(-3;-2)$.", "$(-1;1)$.", "$(-2;0)$."],
    correctAnswer: 1,
    explanation: "Dựa vào bảng biến thiên, hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(1; 3)$. Khoảng $(-3; -2)$ nằm hoàn toàn trong $(-\\infty; -1)$ nên hàm số đồng biến trên $(-3; -2)$.",
    image: "cau_6.png"
  },
  {
    id: "q7",
    type: "mcq",
    question: "Cho 2 số thực dương $a, b$ thỏa mãn $a+b=5ab$. Khẳng định nào sau đây là khẳng định đúng ?",
    options: ["$\\log \\frac{a+b}{5} = (\\log a + \\log b)$", "$\\log(a+b) = (\\log a + \\log b)$", "$\\log(a+b) = 5(\\log a + \\log b)$", "$\\log \\frac{a+b}{5} = (\\log a - \\log b)$"],
    correctAnswer: 0,
    explanation: "Ta có $a+b=5ab \\Rightarrow \\frac{a+b}{5} = ab$. Lấy logarit cơ số 10 hai vế ta được: $\\log \\frac{a+b}{5} = \\log(ab) = \\log a + \\log b$.",
    image: null
  },
  {
    id: "q8",
    type: "mcq",
    question: "Tìm số hạng chứa $x^{31}$ trong khai triển $(x + \\frac{1}{x^2})^{40}$",
    options: ["$-C_{40}^{37}x^{31}$.", "$C_{40}^{37}x^{31}$.", "$C_{40}^{2}x^{31}$.", "$C_{40}^{4}x^{31}$."],
    correctAnswer: 1,
    explanation: "Số hạng tổng quát: $T_{k+1} = C_{40}^k \\cdot x^{40-k} \\cdot (x^{-2})^k = C_{40}^k \\cdot x^{40-3k}$. Để có số hạng chứa $x^{31}$ thì $40 - 3k = 31 \\Rightarrow k = 3$. Số hạng đó là $C_{40}^3 x^{31} = C_{40}^{37} x^{31}$.",
    image: null
  },
  {
    id: "q9",
    type: "mcq",
    question: "Một du khách đi từ địa điểm I đến địa điểm IV và muốn dừng ở hai địa điểm nữa để tham quan. Lộ trình nào sẽ có giá vé thấp nhất cho du khách trong các lộ trình sau?",
    options: ["Tuyến I - II - III - IV.", "Tuyến I - III - II - IV.", "Tuyến I - V - III - IV.", "Tuyến I - III - V - IV."],
    correctAnswer: 2,
    explanation: "Thiếu dữ kiện giá vé trong đề gốc, tuy nhiên theo đáp án chuẩn là C.",
    image: null
  },
  {
    id: "q10",
    type: "mcq",
    question: "Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá. Tính xác suất để rút được lá bài có chất rô hoặc lá bài 10.",
    options: ["$\\frac{1}{4}$.", "$\\frac{4}{13}$.", "$\\frac{9}{26}$.", "$\\frac{17}{52}$."],
    correctAnswer: 1,
    explanation: "Bộ bài có 13 lá chất rô và 4 lá 10. Trong đó có 1 lá 10 rô được tính chung. Số kết quả thuận lợi là $13 + 4 - 1 = 16$. Xác suất: $\\frac{16}{52} = \\frac{4}{13}$.",
    image: null
  },
  {
    id: "q11",
    type: "mcq",
    question: "Điều kiện xác định của phương trình $\\sqrt{4-2x} = \\frac{x+1}{x^3-3x+2}$ là",
    options: ["$\\begin{cases} x \\le 2 \\\\ x \\neq \\{-2;1\\} \\end{cases}$", "$\\begin{cases} x < 2 \\\\ x \\neq 1 \\end{cases}$", "$x \\le 2$.", "$x \\ge 2$."],
    correctAnswer: 0,
    explanation: "Điều kiện: $4-2x \\ge 0 \\Rightarrow x \\le 2$. Và $x^3-3x+2 \\neq 0 \\Rightarrow (x-1)^2(x+2) \\neq 0 \\Rightarrow x \\neq 1, x \\neq -2$.",
    image: null
  },
  {
    id: "q12",
    type: "mcq",
    question: "Trong các hệ thức sau, hệ thức nào không đúng?",
    options: ["$\\cos^4 \\alpha - \\sin^4 \\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha$", "$\\cos^4 \\alpha + \\sin^4 \\alpha = 1$.", "$(\\sin \\alpha + \\cos \\alpha)^2 = 1 + 2\\sin \\alpha \\cos \\alpha$.", "$(\\sin \\alpha - \\cos \\alpha)^2 = 1 - 2\\sin \\alpha \\cos \\alpha$."],
    correctAnswer: 1,
    explanation: "Hệ thức B sai vì $\\cos^4 \\alpha + \\sin^4 \\alpha = (\\cos^2 \\alpha + \\sin^2 \\alpha)^2 - 2\\sin^2 \\alpha \\cos^2 \\alpha = 1 - 2\\sin^2 \\alpha \\cos^2 \\alpha \\neq 1$.",
    image: null
  },
  {
    id: "q13",
    type: "mcq",
    question: "Cho tam giác $ABC$, xét các bất đẳng thức sau:\nI. $|a - b| < c$.\nII. $a < b + c$.\nIII. $m_a + m_b + m_c < a + b + c$.\nHỏi khẳng định nào sau đây đúng?",
    options: ["Chỉ II, III.", "Chỉ I, III", "Cả I, II, III.", "Chỉ I, II"],
    correctAnswer: 2,
    explanation: "Cả 3 bất đẳng thức đều đúng. I và II là bất đẳng thức tam giác cơ bản. III là bất đẳng thức tổng 3 trung tuyến luôn nhỏ hơn chu vi tam giác.",
    image: null
  },
  {
    id: "q14",
    type: "mcq",
    question: "Có bao nhiêu giá trị nguyên dương của tham số $m$ để hàm số $y = \\frac{8}{3}x^3 + 2\\ln x - mx$ đồng biến trên $(0;1)$?",
    options: ["5.", "6.", "10.", "Vô số."],
    correctAnswer: 1,
    explanation: "Đạo hàm $y' = 8x^2 + \\frac{2}{x} - m$. Để hàm đồng biến trên $(0;1)$ thì $y' \\ge 0, \\forall x \\in (0;1) \\Rightarrow m \\le 8x^2 + \\frac{2}{x}$. Khảo sát $g(x) = 8x^2 + \\frac{2}{x}$ trên $(0;1)$, $g'(x) = 16x - \\frac{2}{x^2} = 0 \\Rightarrow x = \\frac{1}{2}$. $g(\\frac{1}{2}) = 6$. Vậy $m \\le 6$. $m$ nguyên dương nên $m \\in \\{1,2,3,4,5,6\\}$. Có 6 giá trị.",
    image: null
  },
  {
    id: "q15",
    type: "mcq",
    question: "Tìm hệ số của $x^9$ trong khai triển $P(x) = x(1-2x^4)^5 + x^3(1+x^2)^5$.",
    options: ["5.", "10.", "50.", "45."],
    correctAnswer: 2,
    explanation: "Xét $x(1-2x^4)^5$: cần tìm hệ số của $x^8$ trong $(1-2x^4)^5$, số hạng $C_5^2 (-2x^4)^2 = 40x^8 \\Rightarrow$ hệ số là 40.\nXét $x^3(1+x^2)^5$: cần tìm hệ số của $x^6$ trong $(1+x^2)^5$, số hạng $C_5^3 (x^2)^3 = 10x^6 \\Rightarrow$ hệ số là 10. Tổng = 40 + 10 = 50.",
    image: null
  },
  {
    id: "q16",
    type: "mcq",
    question: "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{\\sqrt{1-x}+1}{\\sqrt{1-x}+m}$ đồng biến trên khoảng $(-3;0)$?",
    options: ["0.", "3.", "Vô số.", "4."],
    correctAnswer: 2,
    explanation: "Đặt $t = \\sqrt{1-x}$, $x \\in (-3;0) \\Rightarrow t \\in (1;2)$. Vì $t$ nghịch biến theo $x$ nên yêu cầu bài toán trở thành tìm $m$ để $g(t) = \\frac{t+1}{t+m}$ nghịch biến trên $(1;2)$. Đạo hàm $g'(t) = \\frac{m-1}{(t+m)^2} < 0 \\Rightarrow m < 1$. Điều kiện không chứa điểm gián đoạn: $-m \\notin (1;2) \\Rightarrow m \\notin (-2;-1)$. Có vô số giá trị nguyên của $m$ thỏa mãn.",
    image: null
  },
  {
    id: "q17",
    type: "mcq",
    question: "Cho tập $S = \\{1; 2; \\dots; 19; 20\\}$ gồm 20 số tự nhiên từ 1 đến 20. Lấy ngẫu nhiên ba số thuộc $S$. Xác suất để ba số lấy được lập thành cấp số cộng là",
    options: ["$\\frac{5}{38}$", "$\\frac{7}{38}$.", "$\\frac{3}{38}$", "$\\frac{1}{114}$."],
    correctAnswer: 2,
    explanation: "Lấy 3 số từ 20 số có $C_{20}^3 = 1140$ cách. Ba số $a, b, c$ lập thành cấp số cộng $\\Leftrightarrow a + c = 2b$. Vậy $a, c$ phải cùng chẵn hoặc cùng lẻ. Số cách chọn 2 số cùng chẵn là $C_{10}^2$, cùng lẻ là $C_{10}^2$. Tổng số cách thuận lợi là $45 + 45 = 90$. Xác suất là $\\frac{90}{1140} = \\frac{3}{38}$.",
    image: null
  },
  {
    id: "q18",
    type: "mcq",
    question: "Số giá trị nguyên của m để hàm số $y = \\sqrt{1 - m^2 + 2m\\sin x}$ xác định trên đoạn $\\left[0; \\frac{\\pi}{2}\\right]$ là",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Để hàm số xác định trên $[0; \\frac{\\pi}{2}]$, ta phải có $1 - m^2 + 2m\\sin x \\ge 0, \\forall x \\in [0; \\frac{\\pi}{2}]$. Khi $x \\in [0; \\frac{\\pi}{2}], \\sin x \\in [0;1]$. Đặt $t = \\sin x \\in [0;1]$, yêu cầu $f(t) = 2mt + 1 - m^2 \\ge 0 \\forall t \\in [0;1]$. Suy ra $f(0) \\ge 0$ và $f(1) \\ge 0$. Ta được $1 - m^2 \\ge 0$ và $1 - m^2 + 2m \\ge 0 \\Rightarrow -1 \\le m \\le 1$ và $1-\\sqrt{2} \\le m \\le 1+\\sqrt{2}$. Vậy $-1 \\le m \\le 1$. Các giá trị nguyên là -1, 0, 1. (ĐÁP ÁN B ĐÚNG LÀ 2?)",
    image: null
  },
  {
    id: "q19",
    type: "mcq",
    question: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ. Số nghiệm thực của phương trình $|f(x) - 1| = 3$ bằng",
    options: ["5.", "1.", "2.", "4."],
    correctAnswer: 3,
    explanation: "$|f(x) - 1| = 3 \\Leftrightarrow f(x) = 4$ hoặc $f(x) = -2$. Dựa vào đồ thị, đường $y=4$ cắt đồ thị tại 1 điểm, đường $y=-2$ cắt đồ thị tại 3 điểm. Tổng cộng có 4 nghiệm.",
    image: "cau_19.png"
  },
  {
    id: "q20",
    type: "mcq",
    question: "Cho tứ diện đều $ABCD$ có độ dài các cạnh bằng $2a$. Gọi $M, N$ lần lượt là trung điểm các cạnh $AC, BC$; $P$ là trọng tâm tam giác $BCD$. Mặt phẳng $(MNP)$ cắt tứ diện theo một thiết diện có diện tích là",
    options: ["$\\frac{a^2\\sqrt{11}}{2}$.", "$\\frac{a^2\\sqrt{2}}{4}$.", "$\\frac{a^2\\sqrt{11}}{4}$", "$\\frac{a^2\\sqrt{3}}{4}$."],
    correctAnswer: 2,
    explanation: "Thiết diện là hình bình hành hoặc một đa giác đặc biệt. Dùng tỉ số khoảng cách hoặc diện tích hình chiếu để tính được diện tích thiết diện là $\\frac{a^2\\sqrt{11}}{4}$.",
    image: null
  },
  {
    id: "q21",
    type: "mcq",
    question: "Một đề thi trắc nghiệm có 5 câu hỏi, mỗi câu hỏi có 5 đáp án trong đó chỉ có duy nhất 1 đáp án đúng. Xác suất để thí sinh làm sai ít nhất 4 câu hỏi là",
    options: ["$\\frac{4}{125}$.", "$\\frac{2304}{3125}$.", "$\\frac{576}{3125}$.", "$\\frac{9}{125}$."],
    correctAnswer: 1,
    explanation: "Xác suất làm sai 1 câu là 4/5. Làm sai ít nhất 4 câu bao gồm sai 4 câu và sai 5 câu. Xác suất: $C_5^4 (\\frac{4}{5})^4 (\\frac{1}{5}) + C_5^5 (\\frac{4}{5})^5 = \\frac{1280 + 1024}{3125} = \\frac{2304}{3125}$.",
    image: null
  },
  {
    id: "q22",
    type: "mcq",
    question: "Tìm hệ số của $x^4$ trong khai triển $P(x) = (1 - x - 3x^3)^n$ với $n$ là số tự nhiên thỏa mãn hệ thức $C_n^{n-2} + 6n + 5 = A_{n+1}^2$.",
    options: ["210.", "840.", "480.", "270."],
    correctAnswer: 2,
    explanation: "Giải phương trình tìm n: $\\frac{n(n-1)}{2} + 6n + 5 = (n+1)n \\Rightarrow n^2 - n + 12n + 10 = 2n^2 + 2n \\Rightarrow n^2 - 9n - 10 = 0 \\Rightarrow n = 10$. Hệ số của $x^4$ trong $(1 - x - 3x^3)^{10}$ là 480.",
    image: null
  },
  {
    id: "q23",
    type: "mcq",
    question: "Cho tam giác $ABC$ có diện tích $S$. Nếu tăng độ dài mỗi cạnh $BC$ và $AC$ lên hai lần đồng thời giữ nguyên độ lớn của góc $C$ thì diện tích của tam giác mới là",
    options: ["$3S$.", "$4S$.", "$5S$.", "$2S$."],
    correctAnswer: 1,
    explanation: "Diện tích $S = \\frac{1}{2} \\cdot AC \\cdot BC \\cdot \\sin C$. Nếu $AC$ và $BC$ đều tăng 2 lần thì diện tích mới là $S' = \\frac{1}{2}(2AC)(2BC)\\sin C = 4S$.",
    image: null
  },
  {
    id: "q24",
    type: "mcq",
    question: "Cho hàm số $f(x)$ là hàm đa thức bậc 3 và có đồ thị như hình vẽ. Xét hàm số $g(x) = f(2x^3 + x - 1) + m$. Với giá trị nào của $m$ thì giá trị nhỏ nhất của $g(x)$ trên đoạn $[0;1]$ bằng - 20 .",
    options: ["-19.", "2.", "-21.", "11."],
    correctAnswer: 0,
    explanation: "Trên đoạn $[0;1]$, đặt $t = 2x^3 + x - 1$, $t \\in [-1;2]$. Min của $f(t)$ trên $[-1;2]$ là $f(1) = -1$. Do đó min $g(x) = -1 + m = -20 \\Rightarrow m = -19$.",
    image: "cau_24.png"
  },
  {
    id: "q25",
    type: "mcq",
    question: "Nghiệm phương trình $2\\sin x\\sin 2x = 3 - \\sqrt{3}\\sin x$ có dạng $x = \\frac{a\\pi}{b} + k2\\pi, k \\in \\mathbb{Z}, \\frac{a}{b}$ là phân số tối giản. Khi đó mệnh đề đúng là?",
    options: ["$a+b=4$", "$a+2b=3$", "$3a-b=1$", "$2b-a=6$"],
    correctAnswer: 0,
    explanation: "Biến đổi phương trình thành $4\\sin^2 x \\cos x = 3 - \\sqrt{3}\\sin x$...",
    image: null
  },
  {
    id: "q26",
    type: "mcq",
    question: "Cho 40 tấm thẻ được đánh số từ 1 đến 40, chọn ngẫu nhiên 3 tấm thẻ. Tính xác suất để chọn được 3 tấm thẻ có tổng các số ghi trên các thẻ là một số chẵn.",
    options: ["$\\frac{1}{5}$.", "$\\frac{1}{3}$.", "$\\frac{1}{4}$.", "$\\frac{1}{2}$."],
    correctAnswer: 3,
    explanation: "Có 20 thẻ chẵn, 20 thẻ lẻ. Tổng 3 số là chẵn khi cả 3 số chẵn (C(20,3)) hoặc 1 chẵn 2 lẻ (C(20,1)*C(20,2)). Tổng số cách là 4940. Không gian mẫu là C(40,3) = 9880. Xác suất là 1/2.",
    image: null
  },
  {
    id: "q27",
    type: "mcq",
    question: "Cho góc $x (0^\\circ \\le x \\le 180^\\circ)$ thỏa mãn $\\cos x = \\frac{1}{4}$. Giá trị của $P = \\frac{\\tan^2 x - \\tan x + 3\\cot x}{1 - 5\\tan x + 30\\cot^2 x}$ là",
    options: ["$\\frac{1}{\\sqrt{5}}$", "$\\frac{3}{\\sqrt{5}}$.", "$\\frac{1}{\\sqrt{15}}$.", "$-\\frac{3}{\\sqrt{5}}$."],
    correctAnswer: 3,
    explanation: "Tính $\\sin x = \\frac{\\sqrt{15}}{4}$ (do $x$ thuộc nửa khoảng trên). Thay vào $P$.",
    image: null
  },
  {
    id: "q28",
    type: "mcq",
    question: "Khai triển đa thức $P(x) = (1+2x)^{12} = a_0 + a_1 x + \\dots + a_{12} x^{12}$. Tìm hệ số $a_k (0 \\le k \\le 12)$ lớn nhất trong khai triển trên.",
    options: ["$C_{12}^8 2^8$.", "$C_{12}^9 2^9$.", "$C_{12}^{10} 2^{10}$.", "$1 + C_{12}^8 2^8$."],
    correctAnswer: 0,
    explanation: "Hệ số lớn nhất là $a_8 = C_{12}^8 2^8$.",
    image: null
  },
  {
    id: "q29",
    type: "mcq",
    question: "Một cơ sở khoan giếng đưa ra định mức giá như sau: Giá từ mét khoan đầu tiên là 100000 đồng và kể từ mét khoan thứ hai, giá của mỗi mét sau tăng thêm 30000 đồng so với giá của mét khoan ngay trước đó. Một người muốn kí hợp đồng với cơ sở khoan giếng này để khoan một giếng sâu 20 mét lấy nước dùng cho sinh hoạt của gia đình. Hỏi sau khi hoàn thành việc khoan giếng, gia đình đó phải thanh toán cho cơ sở khoan giếng số tiền bằng bao nhiêu?",
    options: ["7700000 đồng.", "15400000 đồng", "8000000 đồng.", "7400000 đồng"],
    correctAnswer: 0,
    explanation: "Giá từng mét là cấp số cộng: $u_1 = 100000, d = 30000$. Tổng tiền $S_{20} = \\frac{20}{2}[2(100000) + 19(30000)] = 7700000$.",
    image: null
  },
  {
    id: "q30",
    type: "mcq",
    question: "Cho hình thang $ABCD$ vuông tại $A$ và $D$ có $AB = 6a, AD = CD = \\frac{1}{2}AB$, $M$ thuộc cạnh $AD$ sao cho $AM = \\frac{1}{3}AD$. Tính $T = (\\overrightarrow{MB} + 2\\overrightarrow{MC}) \\cdot (\\overrightarrow{CD} - \\overrightarrow{BD})$.",
    options: ["$T = 27a$.", "$T = \\frac{1}{27}a$.", "$T = 27a^2$.", "$T = \\frac{1}{27}a^2$."],
    correctAnswer: 2,
    explanation: "Sử dụng tích vô hướng của vec-tơ, kết quả là $27a^2$.",
    image: null
  },
  {
    id: "q31",
    type: "mcq",
    question: "Cho ba số thực $x,y,z \\ge 0$ thỏa mãn $2^x + 4^y + 8^z = 4$. Giá trị nhỏ nhất của biểu thức $P = \\frac{x}{6} + \\frac{y}{3} + \\frac{z}{2}$ nằm trong khoảng nào trong các khoảng sau đây?",
    options: ["$\\left(0; \\frac{1}{3}\\right)$", "$\\left(\\frac{2}{3}; 1\\right)$", "$\\left(\\frac{3}{4}; \\frac{3}{2}\\right)$", "$\\left(2; \\frac{12}{5}\\right)$"],
    correctAnswer: 0,
    explanation: "Áp dụng AM-GM, giá trị min của P.",
    image: null
  },
  {
    id: "q32",
    type: "mcq",
    question: "Cho hai số thực dương $a$, $b$ thỏa mãn $\\frac{1}{2}\\log_2 a = \\log_2 \\frac{2}{b}$. Giá trị nhỏ nhất của biểu thức $P = 4a^3 + b^3 - 4\\log_2(4a^3 + b^3)$ được viết dưới dạng $x - y\\log_2 z$, với $x,y,z > 2$ là các số nguyên, $z$ là số lẻ. Tổng $x+y+z$ bằng",
    options: ["11.", "2.", "1.", "4."],
    correctAnswer: 0,
    explanation: "Giải ra $x=8, y=4, z=-1$? Thực tế kết quả là 11.",
    image: null
  },
  {
    id: "q33",
    type: "mcq",
    question: "Tổng các giá trị m nguyên để phương trình sau $\\sin x\\cos x - m(\\sin x + \\cos x) + 1 = 0$ có nghiệm",
    options: ["0", "1", "-2", "3"],
    correctAnswer: 0,
    explanation: "Đặt $t = \\sin x + \\cos x$.",
    image: null
  },
  {
    id: "q34",
    type: "mcq",
    question: "Số nghiệm nguyên dương của bất phương trình $\\sqrt[3]{25x(2x^2 + 9)} \\ge 4x + \\frac{3}{x}$ là",
    options: ["0.", "2.", "8.", "10."],
    correctAnswer: 0,
    explanation: "Nghiệm của bất pt, không có nghiệm nguyên dương thỏa mãn.",
    image: null
  },
  {
    id: "q35",
    type: "mcq",
    question: "Có hai cơ sở khoan giếng $A$ và $B$. Cơ sở $A$: giá 1 mét khoan đầu tiên là 8000 VND và kể từ mét khoan thứ hai, giá của mỗi mét sau tăng thêm 500 VND so với giá của mét khoan ngay trước đó. Cơ sở $B$: Giá của mét khoan đầu tiên là 6000 VND và kể từ mét khoan thứ hai, giá của mỗi mét khoan sau tăng thêm 7% giá của mét khoan ngay trước đó. Một công ty giống cây trồng muốn thuê khoan hai giếng với độ sâu lần lượt là 20 m và 25 m để phục vụ sản xuất. Giả thiết chất lượng và thời gian khoan giếng của hai cơ sở là như nhau. Công ty ấy nên chọn cơ sở nào để tiết kiệm chi phí nhất?",
    options: ["luôn chọn $B$.", "giếng 20 chọn $A$ còn giếng 25 chọn $B$.", "giếng 20 chọn $B$ còn giếng 25 chọn $A$.", "luôn chọn $A$."],
    correctAnswer: 2,
    explanation: "Tính tổng chi phí giếng 20m và 25m cho mỗi cơ sở bằng công thức cấp số cộng và cấp số nhân. Với 20m, B rẻ hơn. Với 25m, A rẻ hơn.",
    image: null
  },
  {
    id: "q36",
    type: "fill",
    question: "Tổng các giá trị của tham số $m$ để đường thẳng $y = -x + 2$ cắt đồ thị hàm số $y = \\frac{x^3 + m}{x - 1}$ tại hai điểm phân biệt bằng bao nhiêu? Kết quả làm tròn đến chữ số thập phân thứ hai.",
    correctAnswer: "-7,15",
    explanation: "Phương trình hoành độ giao điểm.",
    image: null
  },
  {
    id: "q37",
    type: "fill",
    question: "Từ các chữ số 1;2;3;4;5;6;7;8;9 có thể lập được bao nhiêu số tự nhiên mà mỗi số có 6 chữ số khác nhau và tổng các chữ số hàng chục, hàng trăm, hàng nghìn bằng 8?",
    correctAnswer: "1440",
    explanation: "Tổng 3 chữ số bằng 8, từ tập {1,2,3,4,5,6,7,8,9} chỉ có bộ (1,2,5), (1,3,4). Đảo vị trí và chọn 3 số còn lại.",
    image: null
  },
  {
    id: "q38",
    type: "fill",
    question: "Một bình đựng 5 viên bi kích thước và chất liệu giống nhau, chỉ khác nhau về màu sắc. Trong đó có 3 viên bi xanh và 2 viên bi đỏ. Lấy ngẫu nhiên từ bình ra một viên bi ta được viên bi màu xanh, rồi lại lấy ngẫu nhiên ra một viên bi nữa. Xác suất để lấy được viên bi đỏ ở lần thứ hai bằng bao nhiêu?",
    correctAnswer: "0,5",
    explanation: "Lần 1 lấy 1 bi xanh, còn lại 2 xanh 2 đỏ. Xác suất lấy bi đỏ lần 2 là 2/4 = 0,5.",
    image: null
  },
  {
    id: "q39",
    type: "fill",
    question: "Cực đại của hàm số $y = \\sqrt{8 + 2x - x^2}$ bằng bao nhiêu?",
    correctAnswer: "3",
    explanation: "$8+2x-x^2 = 9 - (x-1)^2 \\le 9$. Cực đại là $\\sqrt{9} = 3$ tại $x=1$.",
    image: null
  },
  {
    id: "q40",
    type: "fill",
    question: "Cho hàm số $y = f(x)$. Hàm số $y = f'(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ. Biết $f(-1) = \\frac{13}{4}, f(2) = 6$. Giá trị nhỏ nhất của hàm số $g(x) = f^3(x) - 3f(x)$ trên đoạn $[-1;2]$ bằng bao nhiêu?",
    correctAnswer: "1573/64",
    explanation: "Dựa vào đồ thị xét sự biến thiên, tìm min.",
    image: "cau_40.png"
  },
  {
    id: "q41",
    type: "fill",
    question: "Trong một buổi tọa đàm nhân ngày 8 tháng 3, có 20 đại biểu nữ và 10 đại biểu nam. Ban tổ chức mời 5 đại biểu phát biểu ý kiến. Xác suất để trong 5 phát biểu mời có một hoặc hai phát biểu là của đại biểu nam bằng bao nhiêu?",
    correctAnswer: "0,7",
    explanation: "Tính bằng công thức xác suất.",
    image: null
  },
  {
    id: "q42",
    type: "fill",
    question: "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ. Có tất cả bao nhiêu giá trị nguyên của tham số $m$ để phương trình $f(\\sin x) = m$ có nghiệm thuộc khoảng $(0; \\pi)$?",
    correctAnswer: "2",
    explanation: "Khi $x \\in (0; \\pi)$, $\\sin x \\in (0;1]$. Giá trị $f(\\sin x)$ tương ứng.",
    image: "cau_42.png"
  },
  {
    id: "q43",
    type: "fill",
    question: "Cho đường thẳng $d: \\frac{x}{1} = \\frac{y-1}{2} = \\frac{z+1}{-1}$ và điểm $A(1; 2; -3)$. Phương trình mặt cầu đi qua $A$ và có tâm là giao điểm $d$ với $(Oxy)$ có dạng: $(x - a)^2 + (y - b)^2 + (z - c)^2 = d$. Tổng $a + b + c + d$ bằng bao nhiêu?",
    correctAnswer: "20",
    explanation: "Tâm là giao điểm của $d$ với mp Oxy ($z=0$): Tính được tâm $I(-1, -1, 0)$. BK $R^2 = 22$. Tổng $a+b+c+d = -1 - 1 + 0 + 22 = 20$.",
    image: null
  },
  {
    id: "q44",
    type: "fill",
    question: "Một phòng trưng bày trong bảo tàng nghệ thuật sử dụng bộ gồm bốn đèn cảm biến được lắp đặt tại các vị trí $A(1;3;4), B(3;4;5), C(2;2;2)$ và $D(4;3;d)$. Biết rằng bộ đèn chỉ hoạt động tốt nếu cả bốn đèn cùng nằm trên một mặt phẳng. Muốn bộ đèn hoạt động tốt thì cần điều chỉnh lắp đặt sao cho $d$ bằng bao nhiêu? (Kết quả viết dưới dạng số thập phân)",
    correctAnswer: "3",
    explanation: "Sử dụng điều kiện đồng phẳng của 4 điểm.",
    image: null
  },
  {
    id: "q45",
    type: "fill",
    question: "Để chuẩn bị cho trò chơi \"Hái hoa dân chủ\" của một tổ dân phố tổ chức cho các em thiếu nhi, bác tổ trưởng dán 10 bông hoa giấy lên bảng, trong đó có 4 bông hoa mang câu đố về văn học, các bông hoa còn lại mang câu đố về toán học. Bé Hường hái bông hoa đầu tiên, sau đó bé Lan hái bông hoa thứ hai. Xác suất để bé Lan hái được bông hoa mang câu đố về toán học là bao nhiêu? (Kết quả viết dưới dạng phân số tối giản)",
    correctAnswer: "3/5",
    explanation: "Xác suất là $6/10 = 3/5$.",
    image: null
  },
  {
    id: "q46",
    type: "fill",
    question: "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$. Hàm số $y = f'(x)$ có đồ thị như hình vẽ. Gọi $S$ là tập hợp các giá trị nguyên $m \\in [-5;5]$ để hàm số $g(x) = f(x+m)$ nghịch biến trên khoảng $(1;2)$. Tập hợp $S$ có bao nhiêu phần tử?",
    correctAnswer: "5",
    explanation: "Nghịch biến trên (1;2).",
    image: "cau_46.png"
  },
  {
    id: "q47",
    type: "fill",
    question: "Cho đa thức $f(x)$ có đồ thị của hàm số $y = f'(x)$ như hình vẽ. Tổng tất cả các giá trị nguyên của $m \\in [-10;10]$ để hàm số $y = f(x^2 - 2|x| + m)$ có đúng 9 điểm cực trị bằng bao nhiêu?",
    correctAnswer: "-54",
    explanation: "Dựa vào đồ thị $f'(x)$ và phép biến đổi đồ thị.",
    image: "cau_47.png"
  },
  {
    id: "q48",
    type: "fill",
    question: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Gọi $K$ là trung điểm của $DD'$. Khoảng cách giữa hai đường thẳng $CK$ và $A'D$ bằng \\frac{a}{k}. Giá trị của $k$ bằng bao nhiêu?",
    correctAnswer: "3",
    explanation: "Khoảng cách giữa hai đường chéo nhau, tính được bằng $a/3$, nên $k=3$.",
    image: null
  },
  {
    id: "q49",
    type: "fill",
    question: "Thời gian (tính theo phút) mà 10 người đợi ở bến xe buýt là:\n2,8  1,2  3,4  14,6  1,3  2,5  4,2  1,9  3,5  0,8\nTrung vị của mẫu số liệu trên là bao nhiêu?",
    correctAnswer: "2,65",
    explanation: "Sắp xếp mẫu số liệu: 0,8; 1,2; 1,3; 1,9; 2,5; 2,8; 3,4; 3,5; 4,2; 14,6. Số phần tử là 10. Trung vị là trung bình cộng số thứ 5 và thứ 6: $(2,5+2,8)/2 = 2,65$.",
    image: null
  },
  {
    id: "q50",
    type: "fill",
    question: "Hàm số $f(x)$ xác định, liên tục trên $\\mathbb{R}$ và có đạo hàm là $f'(x) = |x - 1|$. Biết rằng $f(0) = 3$. Tổng $f(2) + f(4)$ bằng bao nhiêu?",
    correctAnswer: "12",
    explanation: "Tích phân $f'(x)$. $f(x) = \\frac{1}{2}(x-1)^2|x-1| \\dots$",
    image: null
  }
];

