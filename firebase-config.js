// =====================================================
// firebase-config.js
// Firebase 설정 및 슬롯 데이터 정의
// =====================================================

const FIREBASE_CONFIG = {
apiKey: “AIzaSyALT7z8g230zPpQn0YASa2yIcfDYz2_2jc”,
authDomain: “hic-major-office-hour.firebaseapp.com”,
projectId: “hic-major-office-hour”,
storageBucket: “hic-major-office-hour.firebasestorage.app”,
messagingSenderId: “729620945777”,
appId: “1:729620945777:web:35945173b689b4382cf4d0”
};

// =====================================================
// ★ 신청 기간 설정 (이 부분만 수정하세요)
// =====================================================
// 날짜 형식: “YYYY-MM-DD HH:MM”
// 예) 5월 13일 오전 9시 시작 → “2026-05-13 09:00”
//     5월 16일 오후 6시 마감 → “2026-05-16 18:00”
const REGISTRATION_START = “2026-05-13 09:00”;  // 신청 시작 일시
const REGISTRATION_END   = “2026-05-16 18:00”;  // 신청 마감 일시
// =====================================================
const SLOT_DATA = [
// 5/18(월) 오전
{ date: “2026-05-18”, dateLabel: “5월 18일(월)”, time: “09:00~09:30”, professors: [“정승준”, “이현주”, “김진수”] },
{ date: “2026-05-18”, dateLabel: “5월 18일(월)”, time: “09:30~10:00”, professors: [“정승준”, “이현주”, “김진수”] },
{ date: “2026-05-18”, dateLabel: “5월 18일(월)”, time: “10:00~10:30”, professors: [“정승준”, “이현주”, “권규현”, “김진수”] },
{ date: “2026-05-18”, dateLabel: “5월 18일(월)”, time: “10:30~11:00”, professors: [“정승준”, “이현주”, “권규현”, “김진수”] },
{ date: “2026-05-18”, dateLabel: “5월 18일(월)”, time: “11:00~11:30”, professors: [“정승준”, “이현주”, “권규현”, “김진수”] },
{ date: “2026-05-18”, dateLabel: “5월 18일(월)”, time: “11:30~12:00”, professors: [“정승준”, “이현주”, “권규현”, “김진수”] },
// 5/20(수) 오후
{ date: “2026-05-20”, dateLabel: “5월 20일(수)”, time: “16:00~16:30”, professors: [“정승준”] },
{ date: “2026-05-20”, dateLabel: “5월 20일(수)”, time: “16:30~17:00”, professors: [“정승준”] },
{ date: “2026-05-20”, dateLabel: “5월 20일(수)”, time: “17:00~17:30”, professors: [“정승준”] },
{ date: “2026-05-20”, dateLabel: “5월 20일(수)”, time: “17:30~18:00”, professors: [“정승준”] },
// 5/22(금) 오전
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “09:00~09:30”, professors: [“정승준”] },
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “09:30~10:00”, professors: [“정승준”] },
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “10:00~10:30”, professors: [“정승준”] },
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “10:30~11:00”, professors: [“정승준”] },
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “11:00~11:30”, professors: [“정승준”] },
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “11:30~12:00”, professors: [“정승준”] },
// 5/22(금) 오후
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “16:00~16:30”, professors: [“정문석”, “정승준”, “이현주”] },
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “16:30~17:00”, professors: [“정문석”, “정승준”, “이현주”] },
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “17:00~17:30”, professors: [“정문석”, “정승준”, “이현주”] },
{ date: “2026-05-22”, dateLabel: “5월 22일(금)”, time: “17:30~18:00”, professors: [“정문석”, “정승준”, “이현주”] },
];

// 교수별 상담 장소
const PROFESSOR_LOCATIONS = {
“정문석”: “자연과학관 423호”,
“정승준”: “FTC 1202-7”,
“이현주”: “의과대학 413호”,
“김진수”: “경제금융관 510-1호 학장실”,
“권규현”: “융합교육관 709호 원장실”
};

// 전체 교수 목록 (자동 추출)
const ALL_PROFESSORS = […new Set(SLOT_DATA.flatMap(s => s.professors))].sort();

// 슬롯 ID 생성 함수: “교수명_날짜_시간” 형식
function makeSlotId(professor, date, time) {
return `${professor}_${date}_${time.replace(/[~:]/g, "")}`;
}
