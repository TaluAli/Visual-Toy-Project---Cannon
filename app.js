const I18N = {
  en: {
    "top.facility": "FACILITY",
    "top.facilityName": "OUTPOST K-77 / REMOTE BATTERY CONTROL",
    "top.sector": "SECTOR",
    "top.sectorName": "GRID BLACK-04",
    "top.time": "SYS TIME",
    "top.comm": "COMM",
    "top.power": "POWER BUS",
    "top.turret": "TURRET",
    "top.language": "LANG",
    "panel.fireMission": "FIRE MISSION",
    "panel.paperLog": "FIELD SLIP",
    "panel.environment": "ENVIRONMENT FEED",
    "panel.metArray": "REMOTE MET ARRAY",
    "panel.tacticalCrt": "TACTICAL GRID CRT",
    "panel.solutionMonitor": "SOLUTION MONITOR",
    "panel.firingProcedure": "FIRING PROCEDURE",
    "panel.lampCheck": "LAMP CHECK REQUIRED",
    "panel.turretControl": "TURRET BALLISTIC CONTROL",
    "panel.noVisual": "NO DIRECT VISUAL FEED",
    "panel.systemLog": "SYSTEM LOG",
    "panel.teletype": "HARDLINE TELETYPE BUFFER",
    "label.targetPacket": "TARGET PACKET",
    "label.missionTimer": "MISSION TIMER",
    "label.windDir": "WIND DIR",
    "label.windSpeed": "WIND SPEED",
    "label.pressure": "PRESSURE",
    "label.temp": "TEMP",
    "label.visibility": "VISIBILITY",
    "label.weather": "WEATHER",
    "label.radarNoise": "RADAR NOISE",
    "label.radarNoiseShort": "NOISE",
    "label.servoTemp": "SERVO TEMP",
    "label.servoTempShort": "SERVO",
    "label.visualRange": "VISUAL RANGE",
    "note.fieldUnit": "FIELD UNIT 3B",
    "note.crtWarning": "DO NOT CLEAN CRT FACE WHILE ENERGIZED",
    "check.target": "TARGET DATA RECEIVED",
    "check.solution": "BALLISTIC SOLUTION COMPUTED",
    "check.charge": "CHARGE LOADED",
    "check.azimuth": "AZIMUTH WITHIN TOLERANCE",
    "check.elevation": "ELEVATION WITHIN TOLERANCE",
    "check.stabilizer": "STABILIZER ENGAGED",
    "check.safety": "SAFETY INTERLOCK RELEASED",
    "check.armed": "FIRE CIRCUIT ARMED",
    "control.azimuth": "AZIMUTH DRIVE",
    "control.elevation": "ELEVATION JACK",
    "control.charge": "CHARGE RAM LEVER",
    "control.shellMass": "SHELL MASS",
    "control.stabilizer": "STABILIZER",
    "control.safety": "SAFETY INTERLOCK",
    "control.fireBus": "FIRE BUS",
    "button.requestTarget": "REQUEST TARGET",
    "button.calc": "BALLISTIC CALC",
    "button.relay": "RELAY TEST",
    "button.fire": "FIRE",
    "scale.min": "MIN",
    "scale.load": "LOAD",
    "scale.max": "MAX",
    "unit.deg": "DEG",
    "unit.unit": "UNIT",
    "aria.azimuthDial": "Azimuth dial",
    "aria.elevationDial": "Elevation dial",
    "aria.charge": "Charge level",
    "aria.shellMass": "Shell mass selector",
    "status.linkStable": "LINK STABLE",
    "status.linkUnstable": "LINK UNSTABLE",
    "status.signalLoss": "SIGNAL LOSS",
    "status.tracking": "TRACKING",
    "status.fireBusHot": "FIRE BUS HOT",
    "status.aligning": "ALIGNING",
    "status.standby": "STANDBY",
    "status.attention": "ATTENTION",
    "status.noAlert": "NO ALERT",
    "readout.noTarget": "NO TARGET DATA",
    "readout.sectorLock": "SECTOR GRID // {id}",
    "readout.noLock": "SECTOR GRID // NO LOCK",
    "readout.solution": "SOLUTION: AZ {az} / EL {el} / CHG {charge}",
    "readout.solutionNone": "SOLUTION: --",
    "canvas.batteryOrigin": "BATTERY ORIGIN",
    "canvas.target": "TARGET",
    "canvas.predictedSplash": "PREDICTED SPLASH",
    "canvas.wind": "WIND",
    "canvas.radarNoise": "RADAR NOISE {value}%",
    "canvas.comm": "COMM {value}%",
    "canvas.terrain": "RELIEF CONTOUR",
    "canvas.ridgeLine": "RIDGE",
    "weather.clear": "CLEAR",
    "weather.fog": "FOG BANK",
    "weather.rain": "LIGHT RAIN",
    "weather.sand": "SAND HAZE",
    "weather.ash": "ASH WIND",
    "weather.cloud": "LOW CLOUD",
    "log.consolePowered": "REMOTE BATTERY CONSOLE POWERED",
    "log.crtWarmup": "CRT PHOSPHOR WARMUP",
    "log.awaitingMission": "AWAITING FIRE MISSION",
    "log.fireMissionReceived": "FIRE MISSION RECEIVED",
    "log.coordinatesLocked": "GRID COORDINATES LOCKED {x} / {y}",
    "log.calcDeniedNoTarget": "BALLISTIC CALC DENIED - NO TARGET DATA",
    "log.solutionComputed": "BALLISTIC SOLUTION COMPUTED",
    "log.recommend": "RECOMMEND AZ {az} EL {el} CHG {charge}",
    "log.shellRecommendation": "SHELL MASS RECOMMENDATION {weight}KG",
    "log.powerRoutingAz": "POWER ROUTING TO AZIMUTH DRIVE",
    "log.impactUnconfirmed": "IMPACT UNCONFIRMED",
    "log.impactConfirmed": "IMPACT CONFIRMED",
    "log.miss": "MISS",
    "log.short": "SHORT",
    "log.long": "LONG",
    "log.driftLeft": "DRIFT LEFT",
    "log.driftRight": "DRIFT RIGHT",
    "log.splashErrorDir": "SPLASH ERROR: {distance}M {dir}",
    "log.splashError": "SPLASH ERROR: {distance}M",
    "dir.east": "EAST",
    "dir.west": "WEST",
    "log.fireRejectedNoTarget": "FIRE COMMAND REJECTED - NO TARGET",
    "log.fireRejectedNoSolution": "FIRE COMMAND REJECTED - NO SOLUTION",
    "log.fireRejectedNoCharge": "FIRE COMMAND REJECTED - CHARGE NOT LOADED",
    "log.fireRejectedNoStabilizer": "FIRE COMMAND REJECTED - STABILIZER OFF",
    "log.fireRejectedSafety": "FIRE COMMAND REJECTED - SAFETY INTERLOCK CLOSED",
    "log.firingDeviation": "FIRING WITH ALIGNMENT DEVIATION",
    "log.chargeOut": "CHARGE LEVEL OUTSIDE RECOMMENDED BAND",
    "log.firing": "FIRING",
    "log.recoilShock": "RECOIL SHOCK THROUGH REMOTE BUS",
    "log.relayChatter": "MAIN RELAY CHATTER DETECTED",
    "log.shellTracking": "SHELL TRACKING",
    "log.radarPartial": "RADAR RETURN PARTIAL",
    "log.barrelCooling": "BARREL COOLING CYCLE STARTED",
    "log.awaitingNext": "AWAITING NEXT FIRE MISSION",
    "log.servoAligning": "SERVO ALIGNING",
    "log.massComp": "TURRET MASS COMPENSATION",
    "log.powerRouting": "POWER ROUTING",
    "log.windCorrection": "WIND CORRECTION UPDATED",
    "log.commUnstable": "COMM LINK UNSTABLE",
    "log.radarRising": "RADAR NOISE RISING",
    "log.servoTempRising": "SERVO TEMPERATURE RISING",
    "log.powerRedistribution": "POWER REDISTRIBUTION ACTIVE",
    "log.weatherShift": "WEATHER FRONT SHIFT DETECTED",
    "log.loaderDelay": "LOADER DELAY - HYDRAULIC PRESSURE LOW",
    "log.horizonReturn": "UNIDENTIFIED HORIZON RETURN",
    "log.relayTest": "RELAY TEST COMPLETE",
    "log.stabilizerEngaged": "STABILIZER ENGAGED",
    "log.stabilizerDisengaged": "STABILIZER DISENGAGED",
    "log.safetyReleased": "SAFETY INTERLOCK RELEASED",
    "log.safetyClosed": "SAFETY INTERLOCK CLOSED",
    "log.shellSelected": "SHELL MASS SELECTED {weight}KG"
  },
  ko: {
    "top.facility": "시설",
    "top.facilityName": "전초기지 K-77 / 원격 포대 관제",
    "top.sector": "섹터",
    "top.sectorName": "블랙-04 격자",
    "top.time": "시각",
    "top.comm": "통신",
    "top.power": "전력 버스",
    "top.turret": "포탑",
    "top.language": "언어",
    "panel.fireMission": "사격 임무",
    "panel.paperLog": "현장 전표",
    "panel.environment": "환경 피드",
    "panel.metArray": "원격 기상 배열",
    "panel.tacticalCrt": "전술 격자 CRT",
    "panel.solutionMonitor": "탄도 해 표시기",
    "panel.firingProcedure": "발사 절차",
    "panel.lampCheck": "램프 확인 필요",
    "panel.turretControl": "포탑 탄도 제어",
    "panel.noVisual": "직접 시야 없음",
    "panel.systemLog": "시스템 로그",
    "panel.teletype": "유선 전신 버퍼",
    "label.targetPacket": "표적 패킷",
    "label.missionTimer": "임무 타이머",
    "label.windDir": "풍향",
    "label.windSpeed": "풍속",
    "label.pressure": "기압",
    "label.temp": "온도",
    "label.visibility": "가시거리",
    "label.weather": "날씨",
    "label.radarNoise": "레이더 노이즈",
    "label.radarNoiseShort": "노이즈",
    "label.servoTemp": "서보 온도",
    "label.servoTempShort": "서보",
    "label.visualRange": "시야 거리",
    "note.fieldUnit": "현장 장비 3B",
    "note.crtWarning": "CRT 통전 중 화면을 닦지 말 것",
    "check.target": "표적 데이터 수신",
    "check.solution": "탄도 해 계산 완료",
    "check.charge": "장약 장전",
    "check.azimuth": "방위각 허용 범위",
    "check.elevation": "고각 허용 범위",
    "check.stabilizer": "안정화 장치 작동",
    "check.safety": "안전 인터록 해제",
    "check.armed": "발사 회로 준비",
    "control.azimuth": "방위각 구동",
    "control.elevation": "고각 잭",
    "control.charge": "장약 램 레버",
    "control.shellMass": "포탄 중량",
    "control.stabilizer": "안정화 장치",
    "control.safety": "안전 인터록",
    "control.fireBus": "발사 버스",
    "button.requestTarget": "표적 요청",
    "button.calc": "탄도 계산",
    "button.relay": "릴레이 시험",
    "button.fire": "발사",
    "scale.min": "최소",
    "scale.load": "장전",
    "scale.max": "최대",
    "unit.deg": "도",
    "unit.unit": "단위",
    "aria.azimuthDial": "방위각 다이얼",
    "aria.elevationDial": "고각 다이얼",
    "aria.charge": "장약량",
    "aria.shellMass": "포탄 중량 선택",
    "status.linkStable": "통신 안정",
    "status.linkUnstable": "통신 불안정",
    "status.signalLoss": "신호 단절",
    "status.tracking": "추적 중",
    "status.fireBusHot": "발사 버스 가열",
    "status.aligning": "정렬 중",
    "status.standby": "대기",
    "status.attention": "주의",
    "status.noAlert": "경고 없음",
    "readout.noTarget": "표적 데이터 없음",
    "readout.sectorLock": "섹터 격자 // {id}",
    "readout.noLock": "섹터 격자 // 고정 없음",
    "readout.solution": "해: 방위 {az} / 고각 {el} / 장약 {charge}",
    "readout.solutionNone": "해: --",
    "canvas.batteryOrigin": "포대 원점",
    "canvas.target": "표적",
    "canvas.predictedSplash": "예상 탄착",
    "canvas.wind": "풍향",
    "canvas.radarNoise": "레이더 노이즈 {value}%",
    "canvas.comm": "통신 {value}%",
    "canvas.terrain": "지형 등고",
    "canvas.ridgeLine": "능선",
    "weather.clear": "맑음",
    "weather.fog": "안개층",
    "weather.rain": "약한 비",
    "weather.sand": "모래 연무",
    "weather.ash": "재바람",
    "weather.cloud": "낮은 구름",
    "log.consolePowered": "원격 포대 콘솔 기동",
    "log.crtWarmup": "CRT 형광면 예열",
    "log.awaitingMission": "사격 임무 대기",
    "log.fireMissionReceived": "사격 임무 수신",
    "log.coordinatesLocked": "격자 좌표 고정 {x} / {y}",
    "log.calcDeniedNoTarget": "탄도 계산 거부 - 표적 데이터 없음",
    "log.solutionComputed": "탄도 해 계산 완료",
    "log.recommend": "권장 방위 {az} 고각 {el} 장약 {charge}",
    "log.shellRecommendation": "권장 포탄 중량 {weight}KG",
    "log.powerRoutingAz": "방위각 구동부로 전력 라우팅",
    "log.impactUnconfirmed": "탄착 미확인",
    "log.impactConfirmed": "탄착 확인",
    "log.miss": "빗나감",
    "log.short": "단탄",
    "log.long": "장탄",
    "log.driftLeft": "좌편류",
    "log.driftRight": "우편류",
    "log.splashErrorDir": "탄착 오차: {distance}M {dir}",
    "log.splashError": "탄착 오차: {distance}M",
    "dir.east": "동쪽",
    "dir.west": "서쪽",
    "log.fireRejectedNoTarget": "발사 명령 거부 - 표적 없음",
    "log.fireRejectedNoSolution": "발사 명령 거부 - 탄도 해 없음",
    "log.fireRejectedNoCharge": "발사 명령 거부 - 장약 미장전",
    "log.fireRejectedNoStabilizer": "발사 명령 거부 - 안정화 꺼짐",
    "log.fireRejectedSafety": "발사 명령 거부 - 안전 인터록 닫힘",
    "log.firingDeviation": "정렬 편차 상태로 발사",
    "log.chargeOut": "장약량 권장 범위 이탈",
    "log.firing": "발사",
    "log.recoilShock": "원격 버스에 반동 충격",
    "log.relayChatter": "주 릴레이 채터 감지",
    "log.shellTracking": "포탄 추적",
    "log.radarPartial": "레이더 반사 부분 수신",
    "log.barrelCooling": "포신 냉각 주기 시작",
    "log.awaitingNext": "다음 사격 임무 대기",
    "log.servoAligning": "서보 정렬 중",
    "log.massComp": "포탑 질량 보정",
    "log.powerRouting": "전력 라우팅",
    "log.windCorrection": "풍향 보정 갱신",
    "log.commUnstable": "통신 링크 불안정",
    "log.radarRising": "레이더 노이즈 상승",
    "log.servoTempRising": "서보 온도 상승",
    "log.powerRedistribution": "전력 재분배 작동",
    "log.weatherShift": "기상 전선 변화 감지",
    "log.loaderDelay": "장전 지연 - 유압 저하",
    "log.horizonReturn": "수평선 미확인 반사",
    "log.relayTest": "릴레이 시험 완료",
    "log.stabilizerEngaged": "안정화 장치 작동",
    "log.stabilizerDisengaged": "안정화 장치 해제",
    "log.safetyReleased": "안전 인터록 해제",
    "log.safetyClosed": "안전 인터록 닫힘",
    "log.shellSelected": "포탄 중량 선택 {weight}KG"
  }
};

Object.assign(I18N.en, {
  "audio.label": "AUDIO",
  "audio.enabled": "AUDIO ENABLED",
  "audio.muted": "MUTED",
  "button.mute": "MUTE",
  "panel.powerDistribution": "POWER DISTRIBUTION",
  "panel.signalMonitor": "SIGNAL MONITOR",
  "panel.weatherMonitor": "WEATHER MONITOR",
  "panel.sightLine": "SIGHT LINE",
  "panel.fireControl": "FIRE CONTROL",
  "panel.auxPower": "AUX BUS",
  "panel.audioAlerts": "AUDIO ALERTS",
  "panel.systemMode": "SYSTEM MODE",
  "panel.rangeScale": "RANGE SCALE",
  "label.mainBus": "MAIN BUS",
  "label.auxBus": "AUX BUS",
  "label.systems": "SYSTEMS",
  "label.power": "POWER",
  "label.backup": "BACKUP",
  "label.overload": "OVERLOAD",
  "label.warning": "WARNING",
  "label.weaponWillFire": "WEAPON WILL FIRE",
  "control.safeLocked": "SAFE LOCKED",
  "control.fireEnable": "FIRE ENABLE",
  "control.twoAction": "REQUIRES TWO-ACTION",
  "control.gyroAssist": "GYRO ASSIST",
  "panel.safetyBus": "SAFETY BUS",
  "panel.interlockPanel": "INTERLOCK PANEL",
  "label.loader": "LOADER RACK",
  "control.current": "CURRENT",
  "control.recommended": "RECOMMENDED",
  "control.delta": "DELTA",
  "control.matchSolution": "MATCH SOLUTION",
  "control.help": "DRAG / WHEEL / +/- / TYPE. SHIFT = FINE, CTRL = FAST.",
  "control.noSolution": "NO SOLUTION",
  "control.alignOk": "ALIGNMENT OK",
  "control.elevationOk": "ELEVATION OK",
  "control.chargeOk": "CHARGE OK",
  "control.withinTolerance": "WITHIN TOLERANCE",
  "control.outTolerance": "OUT OF TOLERANCE",
  "control.locked": "LOCKED",
  "control.armed": "ARMED",
  "log.audioMuted": "AUDIO MUTED",
  "log.audioEnabled": "AUDIO ENABLED",
  "log.noSolution": "NO BALLISTIC SOLUTION",
  "log.matchedSolution": "{control} MATCHED TO SOLUTION",
  "log.invalidInput": "{control} INPUT NORMALIZED",
  "log.fireSafetyCheck": "SAFETY CIRCUIT CHECK",
  "log.fireCircuitArmed": "FIRE CIRCUIT ARMED",
  "log.capacitorsCharging": "PRIMARY BUS CHARGING",
  "log.crtBloom": "CRT BLOOM / SIGNAL DISTORTION",
  "log.trackingStart": "BALLISTIC TRACKING STARTED"
});

Object.assign(I18N.ko, {
  "label.mainBus": "주 버스",
  "label.auxBus": "보조 버스",
  "label.systems": "시스템",
  "label.power": "전원",
  "label.backup": "예비",
  "label.overload": "과부하",
  "label.warning": "경고",
  "label.weaponWillFire": "무기 발사 주의",
  "control.safeLocked": "안전 잠금",
  "control.fireEnable": "발사 허가",
  "control.twoAction": "2단 동작 필요",
  "control.gyroAssist": "자이로 보조",
  "panel.powerDistribution": "전력 배전",
  "panel.signalMonitor": "신호 감시",
  "panel.weatherMonitor": "기상 감시",
  "panel.sightLine": "조준선",
  "panel.fireControl": "발사 제어",
  "panel.auxPower": "보조 버스",
  "panel.audioAlerts": "음향 경보",
  "panel.systemMode": "시스템 모드",
  "panel.rangeScale": "거리 스케일",
  "audio.label": "사운드",
  "audio.enabled": "사운드 활성",
  "audio.muted": "음소거",
  "button.mute": "음소거",
  "panel.safetyBus": "안전 버스",
  "panel.interlockPanel": "인터록 패널",
  "label.loader": "장전 랙",
  "control.current": "현재값",
  "control.recommended": "추천값",
  "control.delta": "오차",
  "control.matchSolution": "추천값 맞춤",
  "control.help": "드래그 / 휠 / +/- / 직접 입력. SHIFT=미세, CTRL=빠르게.",
  "control.noSolution": "해 없음",
  "control.alignOk": "방위 양호",
  "control.elevationOk": "고각 양호",
  "control.chargeOk": "장약 양호",
  "control.withinTolerance": "허용 범위",
  "control.outTolerance": "범위 이탈",
  "control.locked": "잠김",
  "control.armed": "회로 준비",
  "log.audioMuted": "사운드 음소거",
  "log.audioEnabled": "사운드 활성",
  "log.noSolution": "탄도 해 없음",
  "log.matchedSolution": "{control} 추천값 맞춤",
  "log.invalidInput": "{control} 입력값 보정",
  "log.fireSafetyCheck": "안전 회로 확인",
  "log.fireCircuitArmed": "발사 회로 준비",
  "log.capacitorsCharging": "주 전력 충전",
  "log.crtBloom": "CRT 과광 / 신호 왜곡",
  "log.trackingStart": "탄도 추적 시작"
});

const state = {
  language: "en",
  target: null,
  solution: null,
  calculated: false,
  controls: {
    azimuth: 0,
    elevation: 28,
    charge: 38,
    shellWeight: 180,
    stabilizer: false,
    safetyReleased: false
  },
  weather: {
    windDir: 32,
    windSpeed: 8.4,
    pressure: 1009,
    temperature: 9,
    visibility: 67,
    condition: "clear"
  },
  power: 96,
  commQuality: 94,
  servoTemp: 28,
  radarNoise: 18,
  logs: [],
  firing: null,
  lastImpact: null,
  servoUntil: 0,
  alertUntil: 0,
  audio: {
    manager: null,
    muted: false,
    masterVolume: 0.72,
    categoryVolumes: {
      ui: 0.78,
      mechanical: 0.82,
      data: 0.48,
      warning: 0.62,
      ambient: 0.22,
      impact: 1
    },
    last: {},
    armedCuePlayed: false
  },
  render: {
    width: 1,
    height: 1,
    dpr: 1
  }
};

const els = {};
const canvas = document.getElementById("tacticalMap");
const ctx = canvas.getContext("2d");

const WEATHER_STATES = ["clear", "fog", "rain", "sand", "ash", "cloud"];
const WORLD_LIMIT = 620;
const AZ_TOLERANCE = 4.5;
const EL_TOLERANCE = 2.8;
const CHARGE_TOLERANCE = 6;

function $(id) {
  return document.getElementById(id);
}

function cacheElements() {
  Object.assign(els, {
    shell: $("consoleShell"),
    time: $("systemTime"),
    comm: $("commState"),
    powerMeter: $("powerMeter"),
    powerText: $("powerText"),
    ready: $("readyState"),
    alert: $("alertState"),
    warning: $("topWarning"),
    target: $("targetReadout"),
    windDir: $("windDirReadout"),
    windSpeed: $("windSpeedReadout"),
    pressure: $("pressureReadout"),
    temperature: $("temperatureReadout"),
    visibility: $("visibilityReadout"),
    weather: $("weatherReadout"),
    radarNoiseBar: $("radarNoiseBar"),
    servoTempBar: $("servoTempBar"),
    visibilityBar: $("visibilityBar"),
    noiseNeedle: $("noiseNeedle"),
    servoNeedle: $("servoNeedle"),
    missionTimer: $("missionTimer"),
    gridLabel: $("gridLabel"),
    solutionReadout: $("solutionReadout"),
    crtBezel: $("crtBezel"),
    audioToggle: $("audioToggle"),
    audioState: $("audioState"),
    audioLed: $("audioLed"),
    audioVolume: $("audioVolume"),
    azimuthDial: $("azimuthDial"),
    elevationDial: $("elevationDial"),
    azimuthNeedle: $("azimuthNeedle"),
    elevationNeedle: $("elevationNeedle"),
    azimuthValue: $("azimuthValue"),
    elevationValue: $("elevationValue"),
    azimuthInput: $("azimuthInput"),
    elevationInput: $("elevationInput"),
    chargeInput: $("chargeInput"),
    azimuthRecommended: $("azimuthRecommended"),
    elevationRecommended: $("elevationRecommended"),
    chargeRecommended: $("chargeRecommended"),
    azimuthDelta: $("azimuthDelta"),
    elevationDelta: $("elevationDelta"),
    chargeDelta: $("chargeDelta"),
    azimuthStatus: $("azimuthStatus"),
    elevationStatus: $("elevationStatus"),
    chargeStatus: $("chargeStatus"),
    azimuthStatusText: $("azimuthStatusText"),
    elevationStatusText: $("elevationStatusText"),
    chargeStatusText: $("chargeStatusText"),
    azimuthMatch: $("azimuthMatchButton"),
    elevationMatch: $("elevationMatchButton"),
    chargeMatch: $("chargeMatchButton"),
    chargeSlider: $("chargeSlider"),
    chargeValue: $("chargeValue"),
    stabilizer: $("stabilizerSwitch"),
    safety: $("safetySwitch"),
    calc: $("calculateButton"),
    relay: $("relayButton"),
    fire: $("fireButton"),
    armedLamp: $("armedLamp"),
    newTarget: $("newTargetButton"),
    langEn: $("langEn"),
    langKo: $("langKo"),
    log: $("logWindow")
  });
}

function pad(num, length = 2) {
  return String(num).padStart(length, "0");
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function t(key, params = {}) {
  const dictionary = I18N[state.language] || I18N.en;
  const fallback = I18N.en[key] || key;
  const template = dictionary[key] || fallback;
  return template.replace(/\{(\w+)\}/g, (_, name) => {
    if (params[name] === undefined) return `{${name}}`;
    if (typeof params[name] === "string" && I18N.en[params[name]]) return t(params[name]);
    return String(params[name]);
  });
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.body.classList.toggle("lang-ko", state.language === "ko");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.language);
  });
  applyMuteState();
  renderLogs();
  updateUI();
}

function wrap360(value) {
  return (value % 360 + 360) % 360;
}

function angleDelta(a, b) {
  let delta = wrap360(a) - wrap360(b);
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return delta;
}

function formatCoord(value) {
  const sign = value >= 0 ? "+" : "-";
  return `${sign}${pad(Math.abs(Math.round(value)), 3)}`;
}

function addLog(key, type = "normal", params = {}) {
  const now = new Date();
  state.logs.unshift({
    time: `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`,
    key,
    params,
    type
  });
  state.logs = state.logs.slice(0, 80);
  renderLogs();
  if (state.audio.manager?.isReady()) {
    state.audio.manager.playLogPrint(type);
  }
}

function renderLogs() {
  els.log.innerHTML = state.logs.slice(0, 26).map((entry) => (
    `<div class="log-line ${entry.type}"><span class="log-time">${entry.time}</span><span>${t(entry.key, entry.params)}</span></div>`
  )).join("");
}

const AudioManager = {
  ctx: null,
  masterGain: null,
  compressor: null,
  buses: {},
  muted: false,
  masterVolume: 0.72,
  categoryVolumes: {},
  last: {},
  ambientNodes: [],
  ambientTimer: null,
  chargeLoop: null,

  init() {
    if (this.ctx) return this;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return this;

    const ctx = new AudioContext();
    this.ctx = ctx;
    this.muted = state.audio.muted;
    this.masterVolume = state.audio.masterVolume;
    this.categoryVolumes = { ...state.audio.categoryVolumes };

    const masterGain = ctx.createGain();
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -20;
    compressor.knee.value = 20;
    compressor.ratio.value = 7;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.22;
    masterGain.gain.value = this.muted ? 0 : this.masterVolume;
    compressor.connect(masterGain).connect(ctx.destination);
    this.masterGain = masterGain;
    this.compressor = compressor;

    Object.keys(this.categoryVolumes).forEach((category) => {
      const bus = ctx.createGain();
      bus.gain.value = this.categoryVolumes[category];
      bus.connect(compressor);
      this.buses[category] = bus;
    });

    state.audio.manager = this;
    this.applyUiState();
    return this;
  },

  isReady() {
    return Boolean(this.ctx);
  },

  resume() {
    this.init();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    this.applyUiState();
    return this.ctx;
  },

  setMasterVolume(value) {
    this.masterVolume = clamp(Number(value), 0, 1);
    state.audio.masterVolume = this.masterVolume;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.muted ? 0 : this.masterVolume, this.ctx.currentTime, 0.025);
    }
    if (els.audioVolume) els.audioVolume.value = String(this.masterVolume);
  },

  setMuted(muted) {
    this.muted = Boolean(muted);
    state.audio.muted = this.muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.muted ? 0 : this.masterVolume, this.ctx.currentTime, 0.025);
    }
    this.applyUiState();
  },

  setCategoryVolume(category, value) {
    this.categoryVolumes[category] = clamp(Number(value), 0, 1.4);
    state.audio.categoryVolumes[category] = this.categoryVolumes[category];
    if (this.buses[category]) this.buses[category].gain.value = this.categoryVolumes[category];
  },

  applyUiState() {
    if (els.audioToggle) {
      els.audioToggle.setAttribute("aria-pressed", String(this.muted));
      els.audioToggle.classList.toggle("muted", this.muted);
    }
    if (els.audioState) {
      els.audioState.textContent = this.muted ? t("audio.muted") : t("audio.enabled");
    }
    if (els.audioVolume) {
      els.audioVolume.value = String(this.masterVolume);
    }
  },

  destination(category = "ui") {
    return this.buses[category] || this.compressor || (this.ctx && this.ctx.destination);
  },

  randomize(value, amount = 0.06) {
    return value * rand(1 - amount, 1 + amount);
  },

  cooldown(name, ms) {
    const now = performance.now();
    if (this.last[name] && now - this.last[name] < ms) return true;
    this.last[name] = now;
    return false;
  },

  tone({ category = "ui", type = "sine", freq = 440, endFreq = null, duration = 0.08, gain = 0.05, delay = 0, attack = 0.006, filter = null, q = 0.8 }) {
    this.resume();
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(1, this.randomize(freq, 0.035)), now);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1, this.randomize(endFreq, 0.04)), now + duration);
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.linearRampToValueAtTime(this.randomize(gain, 0.08), now + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    if (filter) {
      const biquad = ctx.createBiquadFilter();
      biquad.type = filter.type;
      biquad.frequency.setValueAtTime(this.randomize(filter.frequency, 0.06), now);
      biquad.Q.value = q;
      osc.connect(biquad).connect(amp).connect(this.destination(category));
    } else {
      osc.connect(amp).connect(this.destination(category));
    }
    osc.start(now);
    osc.stop(now + duration + 0.03);
  },

  noise({ category = "ui", duration = 0.04, gain = 0.04, delay = 0, filterType = "bandpass", frequency = 1000, q = 1.1, decay = 1.8 }) {
    this.resume();
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime + delay;
    const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const amp = ctx.createGain();
    source.buffer = buffer;
    filter.type = filterType;
    filter.frequency.setValueAtTime(this.randomize(frequency, 0.08), now);
    filter.Q.value = q;
    amp.gain.setValueAtTime(this.randomize(gain, 0.08), now);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(filter).connect(amp).connect(this.destination(category));
    source.start(now);
  },

  relayClack(delay = 0, strength = 1) {
    this.noise({ category: "mechanical", duration: 0.018, gain: 0.08 * strength, delay, filterType: "highpass", frequency: 1500, q: 0.6, decay: 1.05 });
    this.tone({ category: "mechanical", type: "square", freq: 145, endFreq: 82, duration: 0.045, gain: 0.055 * strength, delay, filter: { type: "lowpass", frequency: 620 } });
  },

  initPowerOnCue() {
    this.relayClack(0.01, 0.8);
    this.relayClack(0.105, 0.62);
    this.playDataBlip();
  },

  startAmbient() {
    this.resume();
    if (!this.ctx || this.ambientNodes.length) return;
    const ctx = this.ctx;
    const hum = ctx.createOscillator();
    const humFilter = ctx.createBiquadFilter();
    const humGain = ctx.createGain();
    hum.type = "triangle";
    hum.frequency.value = 52;
    humFilter.type = "lowpass";
    humFilter.frequency.value = 145;
    humGain.gain.value = 0.04;
    hum.connect(humFilter).connect(humGain).connect(this.destination("ambient"));
    hum.start();

    const whine = ctx.createOscillator();
    const whineGain = ctx.createGain();
    whine.type = "sine";
    whine.frequency.value = 7350;
    whineGain.gain.value = 0.018;
    whine.connect(whineGain).connect(this.destination("ambient"));
    whine.start();

    const noiseLength = Math.floor(ctx.sampleRate * 1.7);
    const noiseBuffer = ctx.createBuffer(1, noiseLength, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    let drift = 0;
    for (let i = 0; i < noiseLength; i += 1) {
      drift = drift * 0.985 + (Math.random() * 2 - 1) * 0.015;
      noiseData[i] = drift;
    }
    const bedNoise = ctx.createBufferSource();
    const noiseFilter = ctx.createBiquadFilter();
    const noiseGain = ctx.createGain();
    bedNoise.buffer = noiseBuffer;
    bedNoise.loop = true;
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = 740;
    noiseGain.gain.value = 0.05;
    bedNoise.connect(noiseFilter).connect(noiseGain).connect(this.destination("ambient"));
    bedNoise.start();

    this.ambientTimer = window.setInterval(() => {
      if (!this.ctx || this.ctx.state !== "running" || this.muted) return;
      if (Math.random() < 0.42) {
        this.noise({ category: "ambient", duration: 0.016, gain: 0.008, filterType: "bandpass", frequency: rand(900, 2800), q: 3.2, decay: 1.4 });
      }
    }, 1800);

    this.ambientNodes.push(hum, whine, bedNoise);
  },

  stopAmbient() {
    this.ambientNodes.forEach((node) => {
      try { node.stop(); } catch { /* already stopped */ }
    });
    this.ambientNodes = [];
    if (this.ambientTimer) {
      window.clearInterval(this.ambientTimer);
      this.ambientTimer = null;
    }
  },

  playDialTick(intensity = 1) {
    if (this.cooldown("dialTick", 18)) return;
    const power = clamp(intensity, 0.35, 1.5);
    this.noise({ category: "mechanical", duration: 0.012, gain: 0.038 * power, filterType: "bandpass", frequency: 2350, q: 2.6, decay: 1.2 });
    this.tone({ category: "mechanical", type: "triangle", freq: 1120, endFreq: 820, duration: 0.024, gain: 0.015 * power, delay: 0.002, filter: { type: "bandpass", frequency: 1400 }, q: 2.2 });
  },

  playDialTurn(amount = 1) {
    const intensity = clamp(Math.abs(amount) / 2.5, 0.5, 1.4);
    this.playDialTick(intensity);
    if (!this.cooldown("dialScrape", 72)) {
      this.noise({ category: "mechanical", duration: 0.04, gain: 0.013 * intensity, filterType: "bandpass", frequency: 520, q: 0.8, decay: 1.3 });
    }
  },

  playLeverMove(amount = 1) {
    const intensity = clamp(Math.abs(amount) / 5, 0.45, 1.55);
    if (!this.cooldown("leverScrape", 34)) {
      this.noise({ category: "mechanical", duration: 0.075, gain: 0.025 * intensity, filterType: "bandpass", frequency: 280, q: 0.65, decay: 1.05 });
      this.tone({ category: "mechanical", type: "sawtooth", freq: 82, endFreq: 56, duration: 0.09, gain: 0.026 * intensity, filter: { type: "lowpass", frequency: 260 } });
    }
    if (!this.cooldown("leverDetent", 90)) {
      this.relayClack(0.012, 0.45 + intensity * 0.18);
    }
  },

  playToggleSwitch(on = true) {
    const baseDelay = on ? 0 : 0.012;
    this.noise({ category: "mechanical", duration: 0.016, gain: 0.05, delay: baseDelay, filterType: "highpass", frequency: on ? 1700 : 1200, q: 0.7, decay: 1.1 });
    this.tone({ category: "mechanical", type: "square", freq: on ? 128 : 92, endFreq: on ? 74 : 58, duration: on ? 0.07 : 0.095, gain: on ? 0.07 : 0.062, delay: baseDelay + 0.006, filter: { type: "lowpass", frequency: 520 } });
    this.relayClack(baseDelay + 0.052, on ? 0.42 : 0.3);
  },

  playButtonPress() {
    if (this.cooldown("buttonPress", 16)) return;
    this.noise({ category: "ui", duration: 0.012, gain: 0.048, filterType: "highpass", frequency: 1800, q: 0.7, decay: 1.2 });
    this.tone({ category: "ui", type: "square", freq: 180, endFreq: 96, duration: 0.038, gain: 0.048, delay: 0.004, filter: { type: "lowpass", frequency: 760 } });
    this.tone({ category: "mechanical", type: "triangle", freq: 72, duration: 0.052, gain: 0.024, delay: 0.012, filter: { type: "lowpass", frequency: 220 } });
  },

  playSafetyCoverOpen() {
    this.noise({ category: "mechanical", duration: 0.09, gain: 0.026, filterType: "bandpass", frequency: 1280, q: 4.2, decay: 0.85 });
    this.tone({ category: "mechanical", type: "sawtooth", freq: 310, endFreq: 430, duration: 0.11, gain: 0.016, filter: { type: "bandpass", frequency: 880 }, q: 3 });
    this.tone({ category: "mechanical", type: "triangle", freq: 88, endFreq: 54, duration: 0.11, gain: 0.06, delay: 0.085, filter: { type: "lowpass", frequency: 360 } });
  },

  playSafetyArm() {
    this.relayClack(0, 1.1);
    this.relayClack(0.075, 0.78);
    this.tone({ category: "warning", type: "square", freq: 224, endFreq: 188, duration: 0.16, gain: 0.034, delay: 0.065, filter: { type: "bandpass", frequency: 620 }, q: 1.7 });
  },

  playServoMove(amount = 1) {
    if (this.cooldown("servoMove", 180)) return;
    const power = clamp(Math.abs(amount), 0.35, 1.8);
    this.tone({ category: "mechanical", type: "sawtooth", freq: 56 + power * 16, endFreq: 45 + power * 10, duration: 0.28, gain: 0.035, filter: { type: "lowpass", frequency: 340 } });
    this.noise({ category: "mechanical", duration: 0.22, gain: 0.015, filterType: "bandpass", frequency: 390, q: 0.8, decay: 1.1 });
  },

  playDataBlip() {
    if (this.cooldown("dataBlip", 28)) return;
    this.tone({ category: "data", type: "square", freq: 920, endFreq: 1260, duration: 0.035, gain: 0.028, filter: { type: "bandpass", frequency: 1180 }, q: 2.6 });
    this.tone({ category: "data", type: "triangle", freq: 460, endFreq: 330, duration: 0.045, gain: 0.016, delay: 0.032, filter: { type: "bandpass", frequency: 520 }, q: 1.8 });
    this.noise({ category: "data", duration: 0.024, gain: 0.012, delay: 0.012, filterType: "bandpass", frequency: 2400, q: 2.4, decay: 1.4 });
  },

  playLogPrint(type = "normal") {
    if (this.cooldown("logPrint", 22)) return;
    const harsh = type === "bad" || type === "warn" ? 1.35 : 1;
    this.noise({ category: "data", duration: 0.018, gain: 0.012 * harsh, filterType: "bandpass", frequency: 1750, q: 1.7, decay: 1.1 });
    this.tone({ category: "data", type: "square", freq: 132, endFreq: 96, duration: 0.026, gain: 0.011 * harsh, delay: 0.004, filter: { type: "lowpass", frequency: 480 } });
  },

  playWarning(level = "error") {
    const high = level === "heat" || level === "fault";
    const base = high ? 470 : level === "comm" ? 360 : 410;
    this.relayClack(0, high ? 0.42 : 0.28);
    this.tone({ category: "warning", type: "square", freq: base, endFreq: base * 0.94, duration: high ? 0.19 : 0.14, gain: high ? 0.052 : 0.04, delay: 0.025, filter: { type: "bandpass", frequency: base * 1.2 }, q: 2.4 });
    this.noise({ category: "warning", duration: 0.07, gain: 0.013, delay: 0.03, filterType: "bandpass", frequency: 720, q: 1.3, decay: 1.2 });
  },

  playSystemFault() {
    for (let i = 0; i < 4; i += 1) this.relayClack(i * 0.045, 0.55);
    this.tone({ category: "warning", type: "sawtooth", freq: 118, endFreq: 72, duration: 0.32, gain: 0.06, filter: { type: "lowpass", frequency: 420 } });
    this.noise({ category: "warning", duration: 0.22, gain: 0.04, filterType: "bandpass", frequency: 900, q: 0.8, decay: 1 });
  },

  playChargeStart(power = 1) {
    const amount = clamp(power, 0.5, 1.6);
    this.relayClack(0, 0.7);
    this.tone({ category: "impact", type: "sawtooth", freq: 54, endFreq: 112, duration: 0.42, gain: 0.038 * amount, delay: 0.06, filter: { type: "lowpass", frequency: 360 } });
  },

  playChargeLoop(power = 1) {
    this.stopChargeLoop();
    this.resume();
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = "sawtooth";
    osc.frequency.value = 58 + clamp(power, 0, 2) * 18;
    filter.type = "lowpass";
    filter.frequency.value = 380;
    amp.gain.value = 0.022;
    osc.connect(filter).connect(amp).connect(this.destination("impact"));
    osc.start();
    this.chargeLoop = { osc, amp };
  },

  stopChargeLoop() {
    if (!this.chargeLoop) return;
    const { osc, amp } = this.chargeLoop;
    const now = this.ctx.currentTime;
    amp.gain.setTargetAtTime(0.0001, now, 0.035);
    try { osc.stop(now + 0.16); } catch { /* already stopped */ }
    this.chargeLoop = null;
  },

  playFireSequence(power = 1) {
    const amount = clamp(power, 0.65, 1.8);
    this.relayClack(0.03, 1.25);
    this.tone({ category: "impact", type: "sawtooth", freq: 72, endFreq: 148, duration: 0.14, gain: 0.065 * amount, delay: 0.08, filter: { type: "lowpass", frequency: 480 } });
    this.tone({ category: "impact", type: "sine", freq: 42, endFreq: 22, duration: 1.05, gain: 0.42 * amount, delay: 0.18, attack: 0.018, filter: { type: "lowpass", frequency: 180 } });
    this.noise({ category: "impact", duration: 0.42, gain: 0.18 * amount, delay: 0.23, filterType: "lowpass", frequency: 680, q: 0.65, decay: 1.1 });
    [290, 420, 615, 920].forEach((freq, i) => {
      this.tone({ category: "impact", type: "sine", freq, endFreq: freq * 0.96, duration: 0.42 + i * 0.05, gain: 0.032 / (i + 1), delay: 0.42 + i * 0.028, filter: { type: "bandpass", frequency: freq }, q: 5 });
    });
  },

  playImpact(distance = 500, power = 1) {
    const delay = clamp(distance / 1400, 0.05, 0.55);
    const cutoff = clamp(1600 - distance * 1.5, 220, 1500);
    const amount = clamp(power, 0.5, 1.6);
    this.noise({ category: "impact", duration: 0.08, gain: 0.045 * amount, delay, filterType: "bandpass", frequency: cutoff, q: 0.9, decay: 0.8 });
    this.tone({ category: "impact", type: "sine", freq: 52, endFreq: 28, duration: 0.62, gain: 0.13 * amount, delay: delay + 0.03, filter: { type: "lowpass", frequency: 210 } });
  },

  playDistantExplosion(size = 1) {
    const amount = clamp(size, 0.45, 1.8);
    this.noise({ category: "impact", duration: 1.1, gain: 0.07 * amount, delay: 0.16, filterType: "lowpass", frequency: 420, q: 0.5, decay: 2.5 });
  },

  playSuccess() {
    this.playDataBlip();
    this.tone({ category: "data", type: "triangle", freq: 580, endFreq: 725, duration: 0.11, gain: 0.025, delay: 0.05, filter: { type: "bandpass", frequency: 690 }, q: 2 });
  },

  playFailure() {
    this.playWarning("fault");
    this.tone({ category: "warning", type: "sawtooth", freq: 150, endFreq: 74, duration: 0.16, gain: 0.04, delay: 0.05, filter: { type: "lowpass", frequency: 420 } });
  },

  setServoActive(active, radarNoise = 20) {
    if (!this.ctx || !this.buses.ambient) return;
    const target = active ? 0.32 : 0.22;
    this.buses.ambient.gain.setTargetAtTime(target, this.ctx.currentTime, 0.08);
    this.setCategoryVolume("data", clamp(0.42 + radarNoise / 350, 0.42, 0.68));
  }
};

function getAudioManager() {
  return AudioManager.init();
}

function ensureAudio() {
  return getAudioManager().resume();
}

function applyMuteState() {
  getAudioManager().applyUiState();
}

function playButtonClick() {
  getAudioManager().playButtonPress();
}

function playToggle(on = true) {
  getAudioManager().playToggleSwitch(on);
}

function playLeverMove(amount = 1) {
  getAudioManager().playLeverMove(amount);
}

function playRelay(count = 2) {
  const audio = getAudioManager();
  for (let i = 0; i < count; i += 1) audio.relayClack(i * 0.055, 0.85);
}

function playWarning(pattern = "error") {
  getAudioManager().playWarning(pattern);
}

function playBeep() {
  getAudioManager().playSystemFault();
}

function playServoMove(amount = 1) {
  getAudioManager().playServoMove(amount);
}

function playFireCharge() {
  const power = clamp(state.controls.charge / 70, 0.45, 1.65);
  getAudioManager().playChargeStart(power);
  getAudioManager().playChargeLoop(power);
}

function playFireReady() {
  if (getAudioManager().cooldown("fireReady", 1400)) return;
  getAudioManager().playSafetyArm();
}

function playFireImpact() {
  const power = clamp(state.controls.charge / 70, 0.65, 1.8);
  getAudioManager().stopChargeLoop();
  getAudioManager().playFireSequence(power);
}

function playRadarPing(success = true) {
  if (success) getAudioManager().playDataBlip();
  else getAudioManager().playFailure();
}

function playImpactResult(errorDistance = 500, success = false) {
  const power = success ? 1.1 : 0.75;
  getAudioManager().playImpact(errorDistance, power);
  getAudioManager().playDistantExplosion(success ? 1.1 : 0.7);
  if (success) getAudioManager().playSuccess();
  else getAudioManager().playFailure();
}

function setAudioMuted(muted) {
  getAudioManager().setMuted(muted);
}

function setAudioMasterVolume(value) {
  getAudioManager().setMasterVolume(value);
}

function generateTarget() {
  const angle = rand(0, Math.PI * 2);
  const distance = rand(230, 560);
  state.target = {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    id: `TGT-${pad(Math.floor(rand(1, 99)))}${String.fromCharCode(65 + Math.floor(rand(0, 26)))}`,
    receivedAt: performance.now()
  };
  state.calculated = false;
  state.solution = null;
  state.lastImpact = null;
  state.firing = null;
  state.controls.safetyReleased = false;
  els.safety.setAttribute("aria-pressed", "false");
  state.controls.stabilizer = false;
  els.stabilizer.setAttribute("aria-pressed", "false");
  addLog("log.fireMissionReceived", "warn");
  addLog("log.coordinatesLocked", "normal", { x: formatCoord(state.target.x), y: formatCoord(state.target.y) });
  getAudioManager().playDataBlip();
  updateUI();
}

function computeSolution() {
  if (!state.target) {
    addLog("log.calcDeniedNoTarget", "bad");
    playBeep();
    return;
  }
  playRelay();
  const range = Math.hypot(state.target.x, state.target.y);
  const azimuth = wrap360(Math.atan2(state.target.x, state.target.y) * 180 / Math.PI);
  const recommendedWeight = range > 470 ? 220 : range < 310 ? 140 : 180;
  const weightBias = recommendedWeight === 220 ? -3 : recommendedWeight === 140 ? 4 : 0;
  const windPenalty = Math.cos((state.weather.windDir - azimuth) * Math.PI / 180) * state.weather.windSpeed * 0.28;
  const elevation = clamp(12 + range / 13.5 + state.weather.windSpeed * 0.16 + weightBias * 0.18, 9, 68);
  const charge = clamp(22 + range / 7.6 + windPenalty + weightBias, 12, 96);
  const errorRadius = clamp(36 + state.weather.windSpeed * 4 + state.radarNoise * 0.9, 35, 165);

  state.solution = {
    azimuth,
    elevation,
    charge,
    range,
    recommendedWeight,
    errorRadius
  };
  state.calculated = true;
  state.lastImpact = null;
  state.servoUntil = performance.now() + 2500;
  addLog("log.solutionComputed", "normal");
  addLog("log.recommend", "warn", { az: azimuth.toFixed(1), el: elevation.toFixed(1), charge: Math.round(charge) });
  addLog("log.shellRecommendation", "normal", { weight: recommendedWeight });
  addLog("log.powerRoutingAz", "normal");
  getAudioManager().playDataBlip();
  playServoMove();
  updateUI();
}

function getChargeLoaded() {
  return state.controls.charge >= 8 && Boolean(state.controls.shellWeight);
}

function getToleranceStatus() {
  if (!state.solution) {
    return {
      azimuth: false,
      elevation: false,
      charge: false,
      azErr: 999,
      elErr: 999,
      chargeErr: 999
    };
  }
  const azErr = angleDelta(state.controls.azimuth, state.solution.azimuth);
  const elErr = state.controls.elevation - state.solution.elevation;
  const chargeErr = state.controls.charge - state.solution.charge;
  return {
    azimuth: Math.abs(azErr) <= AZ_TOLERANCE,
    elevation: Math.abs(elErr) <= EL_TOLERANCE,
    charge: Math.abs(chargeErr) <= CHARGE_TOLERANCE,
    azErr,
    elErr,
    chargeErr
  };
}

function getCoreFireReady() {
  return Boolean(
    state.target &&
    state.calculated &&
    getChargeLoaded() &&
    state.controls.stabilizer &&
    state.controls.safetyReleased
  );
}

function getChecklist() {
  const tolerance = getToleranceStatus();
  const coreReady = getCoreFireReady();
  return {
    target: Boolean(state.target),
    solution: state.calculated,
    charge: getChargeLoaded(),
    azimuth: tolerance.azimuth,
    elevation: tolerance.elevation,
    stabilizer: state.controls.stabilizer,
    safety: state.controls.safetyReleased,
    armed: coreReady
  };
}

function computeImpactPoint() {
  if (!state.target || !state.solution) return null;
  const tolerance = getToleranceStatus();
  const range = Math.max(1, state.solution.range);
  const ux = state.target.x / range;
  const uy = state.target.y / range;
  const px = -uy;
  const py = ux;
  const windAngle = state.weather.windDir * Math.PI / 180;
  const windX = Math.sin(windAngle) * state.weather.windSpeed;
  const windY = Math.cos(windAngle) * state.weather.windSpeed;
  const windAlong = windX * ux + windY * uy;
  const windCross = windX * px + windY * py;
  const shellBias = (state.controls.shellWeight - state.solution.recommendedWeight) * 0.42;
  const rangeErr = tolerance.chargeErr * 10.5 + tolerance.elErr * 24 + windAlong * 2.8 - shellBias;
  const lateralErr = tolerance.azErr * 19 + windCross * 3.3 + shellBias * 0.7;
  return {
    x: clamp(state.target.x + ux * rangeErr + px * lateralErr, -WORLD_LIMIT, WORLD_LIMIT),
    y: clamp(state.target.y + uy * rangeErr + py * lateralErr, -WORLD_LIMIT, WORLD_LIMIT),
    rangeErr,
    lateralErr,
    totalErr: Math.hypot(rangeErr, lateralErr)
  };
}

function classifyImpact(impact) {
  if (!impact) return { key: "log.impactUnconfirmed", type: "bad" };
  const absRange = Math.abs(impact.rangeErr);
  const absLat = Math.abs(impact.lateralErr);
  const distance = impact.totalErr;

  if (state.commQuality < 28 || state.radarNoise > 78) {
    return { key: "log.impactUnconfirmed", type: "bad" };
  }
  if (distance < 58) {
    return { key: "log.impactConfirmed", type: "impact" };
  }
  if (distance > 250) {
    return { key: "log.miss", type: "bad" };
  }
  if (absRange > absLat * 1.2) {
    return { key: impact.rangeErr < 0 ? "log.short" : "log.long", type: "warn" };
  }
  if (absLat > absRange * 1.1) {
    return { key: impact.lateralErr < 0 ? "log.driftLeft" : "log.driftRight", type: "warn" };
  }
  const dir = impact.lateralErr >= 0 ? "dir.east" : "dir.west";
  return { key: "log.splashErrorDir", type: "warn", params: { distance: Math.round(distance), dir } };
}

function fire() {
  playButtonClick();
  if (!state.target) {
    addLog("log.fireRejectedNoTarget", "bad");
    playBeep();
    return;
  }
  if (!state.calculated) {
    addLog("log.fireRejectedNoSolution", "bad");
    playBeep();
    return;
  }
  if (!getChargeLoaded()) {
    addLog("log.fireRejectedNoCharge", "bad");
    playBeep();
    return;
  }
  if (!state.controls.stabilizer) {
    addLog("log.fireRejectedNoStabilizer", "bad");
    playBeep();
    return;
  }
  if (!state.controls.safetyReleased) {
    addLog("log.fireRejectedSafety", "bad");
    playBeep();
    return;
  }

  const tolerance = getToleranceStatus();
  if (!tolerance.azimuth || !tolerance.elevation) {
    addLog("log.firingDeviation", "warn");
  }
  if (!tolerance.charge) {
    addLog("log.chargeOut", "warn");
  }

  const commandTime = performance.now();
  const impactDelay = 420;
  playRelay(3);
  playFireCharge();
  els.shell.classList.add("charging");
  setTimeout(() => {
    playFireImpact();
    els.shell.classList.remove("charging");
    els.shell.classList.add("firing");
    els.crtBezel.classList.add("distorting");
    els.warning.classList.add("active");
  }, impactDelay);
  setTimeout(() => playRadarPing(true), 1500);
  setTimeout(() => playRadarPing(true), 3000);
  state.alertUntil = commandTime + 3800;
  state.firing = {
    start: commandTime + impactDelay,
    duration: 5200,
    impact: computeImpactPoint(),
    resultLogged: false,
    trail: []
  };
  state.lastImpact = null;
  state.power = clamp(state.power - rand(4, 9), 58, 100);
  state.servoTemp = clamp(state.servoTemp + rand(6, 13), 0, 100);
  state.radarNoise = clamp(state.radarNoise + rand(10, 22), 0, 100);

  const burst = [
    ["log.fireSafetyCheck", "normal", 0],
    ["log.fireCircuitArmed", "impact", 95],
    ["log.relayChatter", "warn", 180],
    ["log.capacitorsCharging", "warn", 260],
    ["log.firing", "impact", impactDelay + 15],
    ["log.crtBloom", "warn", impactDelay + 80],
    ["log.recoilShock", "warn", impactDelay + 150],
    ["log.trackingStart", "normal", impactDelay + 520],
    ["log.shellTracking", "normal", impactDelay + 720],
    ["log.radarPartial", "warn", impactDelay + 1500]
  ];
  burst.forEach(([message, type, delay]) => {
    setTimeout(() => addLog(message, type), delay);
  });

  setTimeout(() => {
    els.shell.classList.remove("firing");
    els.shell.classList.remove("charging");
    els.crtBezel.classList.remove("distorting");
  }, impactDelay + 900);

  updateUI();
}

function completeImpact() {
  if (!state.firing || state.firing.resultLogged) return;
  const finishedShot = state.firing;
  state.firing.resultLogged = true;
  state.lastImpact = finishedShot.impact;
  const result = classifyImpact(finishedShot.impact);
  addLog(result.key, result.type, result.params || {});
  playImpactResult(Math.round(finishedShot.impact.totalErr), result.type !== "bad");
  if (result.key !== "log.impactConfirmed" && result.key !== "log.splashErrorDir" && result.key !== "log.impactUnconfirmed") {
    addLog("log.splashError", result.type, { distance: Math.round(finishedShot.impact.totalErr) });
  }
  addLog("log.barrelCooling", "normal");
  state.firing = null;
  state.controls.safetyReleased = false;
  els.safety.setAttribute("aria-pressed", "false");
  state.controls.stabilizer = false;
  els.stabilizer.setAttribute("aria-pressed", "false");
  state.calculated = false;
  state.solution = null;
  setTimeout(() => {
    addLog("log.awaitingNext", "normal");
  }, 1250);
  updateUI();
}

function createDialTicks() {
  document.querySelectorAll(".dial-face").forEach((face) => {
    for (let i = 0; i < 40; i += 1) {
      const tick = document.createElement("span");
      tick.className = `dial-tick ${i % 5 === 0 ? "major" : ""}`;
      tick.style.transform = `rotate(${i * 9}deg) translateY(calc(var(--dial-radius) * -1))`;
      face.appendChild(tick);
    }
  });
}

function normalizeControlValue(control, value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return state.controls[control];
  if (control === "azimuth") {
    return wrap360(numeric);
  }
  if (control === "elevation") {
    return clamp(numeric, 0, 75);
  }
  if (control === "charge") {
    return clamp(numeric, 0, 100);
  }
  return numeric;
}

function setControlValue(control, value, options = {}) {
  const next = normalizeControlValue(control, value);
  const previous = state.controls[control];
  state.controls[control] = next;
  if (!options.quiet && Math.abs(next - previous) > 0.0001) {
    const delta = Math.abs(next - previous);
    pulseControl(control);
    if (control === "charge") playLeverMove(delta);
    else getAudioManager().playDialTurn(delta);
  }
  maybeServoFeedback();
  updateUI();
}

function setDialValue(control, value, quiet = false) {
  setControlValue(control, value, { quiet });
}

function getControlStep(control, event = {}) {
  const base = control === "charge" ? 1 : 0.2;
  if (event.ctrlKey) return control === "charge" ? 5 : 2;
  if (event.shiftKey) return control === "charge" ? 0.25 : 0.05;
  return base;
}

function getControlDragScale(control, event = {}) {
  const base = control === "charge" ? 0.42 : 0.16;
  if (event.ctrlKey) return base * 4.2;
  if (event.shiftKey) return base * 0.24;
  return base;
}

function getSolutionValue(control) {
  if (!state.solution) return null;
  if (control === "azimuth") return state.solution.azimuth;
  if (control === "elevation") return state.solution.elevation;
  if (control === "charge") return state.solution.charge;
  return null;
}

function getControlDelta(control) {
  const target = getSolutionValue(control);
  if (target === null) return null;
  if (control === "azimuth") return angleDelta(state.controls.azimuth, target);
  return state.controls[control] - target;
}

function isControlWithinTolerance(control) {
  const tolerance = getToleranceStatus();
  if (control === "azimuth") return tolerance.azimuth;
  if (control === "elevation") return tolerance.elevation;
  if (control === "charge") return tolerance.charge;
  return false;
}

function formatSigned(value, decimals = 1) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(decimals)}`;
}

function formatControlValue(control, value) {
  if (value === null || value === undefined || !Number.isFinite(Number(value))) return "--";
  if (control === "charge") return String(Math.round(value));
  return Number(value).toFixed(1);
}

function getControlModule(control) {
  return document.querySelector(`.mechanical-control[data-control="${control}"]`);
}

function pulseControl(control, className = "control-active", duration = 520) {
  const module = getControlModule(control);
  if (!module) return;
  if (className === "control-active" && module.dataset.activeHold === "true") return;
  module.classList.add(className);
  module._pulseTimers = module._pulseTimers || {};
  if (module._pulseTimers[className]) window.clearTimeout(module._pulseTimers[className]);
  module._pulseTimers[className] = window.setTimeout(() => {
    if (className === "control-active" && module.dataset.activeHold === "true") return;
    module.classList.remove(className);
  }, duration);
}

function setControlActive(control, active) {
  const module = getControlModule(control);
  if (!module) return;
  if (active) {
    module.dataset.activeHold = "true";
    module.classList.add("control-active");
    return;
  }
  delete module.dataset.activeHold;
  pulseControl(control, "control-active", 280);
}

function matchSolution(control) {
  const target = getSolutionValue(control);
  if (target === null) {
    playWarning("error");
    addLog("log.noSolution", "bad");
    return;
  }
  pulseControl(control);
  setControlValue(control, target);
  playServoMove();
  addLog("log.matchedSolution", "normal", { control: `control.${control}` });
}

function wirePrecisionControl(control, surface) {
  let drag = null;
  const endDrag = (event) => {
    if (!drag) return;
    drag = null;
    surface.classList.remove("dragging");
    setControlActive(control, false);
    try {
      surface.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture can already be released by the browser.
    }
  };

  surface.addEventListener("pointerdown", (event) => {
    ensureAudio();
    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      value: state.controls[control]
    };
    surface.setPointerCapture(event.pointerId);
    surface.classList.add("dragging");
    setControlActive(control, true);
  });

  surface.addEventListener("pointermove", (event) => {
    if (!drag) return;
    const movement = (event.clientX - drag.x) - (event.clientY - drag.y);
    setControlValue(control, drag.value + movement * getControlDragScale(control, event));
  });

  surface.addEventListener("pointerup", endDrag);
  surface.addEventListener("pointercancel", endDrag);
  surface.addEventListener("lostpointercapture", () => {
    drag = null;
    surface.classList.remove("dragging");
    setControlActive(control, false);
  });

  surface.addEventListener("wheel", (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? -1 : 1;
    pulseControl(control);
    setControlValue(control, state.controls[control] + direction * getControlStep(control, event));
  }, { passive: false });

  surface.addEventListener("dblclick", () => matchSolution(control));
}

function wireDial(element) {
  const control = element.dataset.control;
  wirePrecisionControl(control, element);
  element.addEventListener("keydown", (event) => {
    const step = getControlStep(control, event);
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      setControlValue(control, state.controls[control] + step);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      setControlValue(control, state.controls[control] - step);
    }
  });
}

function wireNumberInput(control, input) {
  if (!input) return;
  const commit = () => {
    const previous = state.controls[control];
    const raw = String(input.value).trim();
    const numeric = Number(raw);
    if (raw === "" || !Number.isFinite(numeric)) {
      addLog("log.invalidInput", "warn", { control: `control.${control}` });
      playWarning("error");
      pulseControl(control, "input-error", 760);
      input.value = formatControlValue(control, previous);
      updateUI();
      return;
    }
    const next = normalizeControlValue(control, numeric);
    if (Math.abs(next - numeric) > 0.0001) {
      addLog("log.invalidInput", "warn", { control: `control.${control}` });
      playWarning("error");
      pulseControl(control, "input-error", 760);
    }
    setControlValue(control, next, { quiet: next === previous });
  };
  input.addEventListener("focus", () => setControlActive(control, true));
  input.addEventListener("change", commit);
  input.addEventListener("blur", () => {
    commit();
    setControlActive(control, false);
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      input.blur();
    }
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      const direction = event.key === "ArrowUp" ? 1 : -1;
      pulseControl(control);
      setControlValue(control, state.controls[control] + direction * getControlStep(control, event));
    }
  });
}

function maybeServoFeedback() {
  if (!state.solution || !state.calculated) return;
  const tolerance = getToleranceStatus();
  const close = Math.abs(tolerance.azErr) < 18 || Math.abs(tolerance.elErr) < 8 || Math.abs(tolerance.chargeErr) < 12;
  if (!close) return;
  const now = performance.now();
  if (now < state.servoUntil - 1200) return;
  state.servoUntil = now + 1700;
  state.power = clamp(state.power - rand(0.2, 0.9), 55, 100);
  const roll = Math.random();
  if (roll < 0.34) addLog("log.servoAligning", "normal");
  else if (roll < 0.67) addLog("log.massComp", "normal");
  else addLog("log.powerRouting", "normal");
  playServoMove();
}

function randomEvent() {
  const roll = Math.random();
  if (roll < 0.14) {
    state.weather.windSpeed = clamp(state.weather.windSpeed + rand(5, 12), 0, 38);
    addLog("log.windCorrection", "warn");
    playWarning("comm");
    state.calculated = false;
    state.solution = null;
  } else if (roll < 0.27) {
    state.commQuality = clamp(state.commQuality - rand(10, 26), 0, 100);
    addLog("log.commUnstable", "warn");
    playWarning("comm");
  } else if (roll < 0.39) {
    state.radarNoise = clamp(state.radarNoise + rand(12, 28), 0, 100);
    addLog("log.radarRising", "warn");
    playWarning("comm");
  } else if (roll < 0.51) {
    state.servoTemp = clamp(state.servoTemp + rand(10, 22), 0, 100);
    addLog("log.servoTempRising", "warn");
    playWarning("heat");
  } else if (roll < 0.63) {
    state.power = clamp(state.power - rand(5, 13), 45, 100);
    addLog("log.powerRedistribution", "warn");
    playRelay(3);
  } else if (roll < 0.74) {
    state.weather.condition = WEATHER_STATES[Math.floor(rand(0, WEATHER_STATES.length))];
    state.weather.visibility = clamp(state.weather.visibility - rand(8, 25), 8, 100);
    addLog("log.weatherShift", "warn");
    playWarning("comm");
  } else if (roll < 0.86) {
    addLog("log.loaderDelay", "warn");
    playRelay(2);
  } else {
    addLog("log.horizonReturn", "warn");
    playRadarPing(false);
    state.radarNoise = clamp(state.radarNoise + rand(5, 14), 0, 100);
  }
  updateUI();
}

function slowDrift() {
  state.weather.windDir = wrap360(state.weather.windDir + rand(-2.2, 2.2));
  state.weather.windSpeed = clamp(state.weather.windSpeed + rand(-0.8, 0.8), 0, 40);
  state.weather.pressure = clamp(state.weather.pressure + rand(-0.8, 0.8), 970, 1042);
  state.weather.temperature = clamp(state.weather.temperature + rand(-0.25, 0.25), -18, 38);
  state.weather.visibility = clamp(state.weather.visibility + rand(-1.8, 1.3), 5, 100);
  state.power = clamp(state.power + rand(-0.4, 0.35), 42, 100);
  state.commQuality = clamp(state.commQuality + rand(-1.8, 1.4), 0, 100);
  state.radarNoise = clamp(state.radarNoise + rand(-1.6, 1.2), 5, 100);
  state.servoTemp = clamp(state.servoTemp - 0.16 + rand(-0.2, 0.3), 15, 100);
  updateUI();
}

function updateTopStatus() {
  const date = new Date();
  els.time.textContent = `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  if (state.target && els.missionTimer) {
    const seconds = Math.floor((performance.now() - state.target.receivedAt) / 1000);
    els.missionTimer.textContent = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`;
  }
  els.powerMeter.style.transform = `scaleX(${state.power / 100})`;
  els.powerText.textContent = `${Math.round(state.power)}%`;

  if (state.commQuality > 68) {
    els.comm.textContent = t("status.linkStable");
    els.comm.className = "status-good";
  } else if (state.commQuality > 34) {
    els.comm.textContent = t("status.linkUnstable");
    els.comm.className = "status-warn";
  } else {
    els.comm.textContent = t("status.signalLoss");
    els.comm.className = "status-bad";
  }

  const now = performance.now();
  const checklist = getChecklist();
  if (state.firing) {
    els.ready.textContent = t("status.tracking");
  } else if (checklist.armed) {
    els.ready.textContent = t("status.fireBusHot");
  } else if (state.calculated) {
    els.ready.textContent = t("status.aligning");
  } else {
    els.ready.textContent = t("status.standby");
  }

  const alerting = now < state.alertUntil || state.radarNoise > 74 || state.servoTemp > 82 || state.power < 55 || state.commQuality < 35;
  els.warning.classList.toggle("active", alerting);
  els.alert.textContent = alerting ? t("status.attention") : t("status.noAlert");
}

function updateReadouts() {
  if (state.target) {
    els.target.textContent = `${state.target.id} ${formatCoord(state.target.x)} / ${formatCoord(state.target.y)}`;
    els.gridLabel.textContent = t("readout.sectorLock", { id: state.target.id });
    const seconds = Math.floor((performance.now() - state.target.receivedAt) / 1000);
    els.missionTimer.textContent = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`;
  } else {
    els.target.textContent = t("readout.noTarget");
    els.gridLabel.textContent = t("readout.noLock");
    els.missionTimer.textContent = "00:00";
  }

  els.windDir.textContent = `${Math.round(state.weather.windDir)} ${t("unit.deg")}`;
  els.windSpeed.textContent = `${state.weather.windSpeed.toFixed(1)} M/S`;
  els.pressure.textContent = `${Math.round(state.weather.pressure)} HPA`;
  els.temperature.textContent = `${state.weather.temperature.toFixed(1)} C`;
  els.visibility.textContent = `${Math.round(state.weather.visibility)} KM`;
  els.weather.textContent = t(`weather.${state.weather.condition}`);
  els.radarNoiseBar.style.width = `${clamp(state.radarNoise, 0, 100)}%`;
  els.servoTempBar.style.width = `${clamp(state.servoTemp, 0, 100)}%`;
  els.visibilityBar.style.width = `${clamp(state.weather.visibility, 0, 100)}%`;
  if (els.noiseNeedle) els.noiseNeedle.style.transform = `rotate(${-72 + clamp(state.radarNoise, 0, 100) * 1.44}deg)`;
  if (els.servoNeedle) els.servoNeedle.style.transform = `rotate(${-72 + clamp(state.servoTemp, 0, 100) * 1.44}deg)`;

  if (state.solution) {
    els.solutionReadout.textContent = t("readout.solution", {
      az: state.solution.azimuth.toFixed(1),
      el: state.solution.elevation.toFixed(1),
      charge: Math.round(state.solution.charge)
    });
  } else {
    els.solutionReadout.textContent = t("readout.solutionNone");
  }
}

function updateControls() {
  els.azimuthNeedle.style.transform = `rotate(${state.controls.azimuth}deg)`;
  const elevationAngle = -135 + state.controls.elevation / 75 * 270;
  els.elevationNeedle.style.transform = `rotate(${elevationAngle}deg)`;
  els.azimuthValue.textContent = state.controls.azimuth.toFixed(1).padStart(5, "0");
  els.elevationValue.textContent = state.controls.elevation.toFixed(1).padStart(4, "0");
  els.chargeValue.textContent = pad(Math.round(state.controls.charge), 3);
  els.chargeSlider.value = state.controls.charge;
  els.chargeSlider.closest(".charge-assembly")?.style.setProperty("--charge-position", state.controls.charge.toFixed(1));
  updatePrecisionControl("azimuth");
  updatePrecisionControl("elevation");
  updatePrecisionControl("charge");

  els.azimuthDial.setAttribute("aria-valuenow", state.controls.azimuth.toFixed(1));
  els.elevationDial.setAttribute("aria-valuenow", state.controls.elevation.toFixed(1));
  els.azimuthDial.setAttribute("aria-valuemin", "0");
  els.azimuthDial.setAttribute("aria-valuemax", "360");
  els.elevationDial.setAttribute("aria-valuemin", "0");
  els.elevationDial.setAttribute("aria-valuemax", "75");

  const coreReady = getCoreFireReady();
  els.fire.disabled = Boolean(state.firing);
  els.fire.classList.toggle("not-ready", !coreReady);
  els.fire.setAttribute("aria-disabled", String(!coreReady));
  const armed = getChecklist().armed;
  els.armedLamp.classList.toggle("online", armed);
  if (armed && !state.audio.armedCuePlayed && !state.firing) {
    playFireReady();
  }
  state.audio.armedCuePlayed = armed;
}

function updatePrecisionControl(control) {
  const value = state.controls[control];
  const module = getControlModule(control);
  const input = els[`${control}Input`];
  const recommended = els[`${control}Recommended`];
  const delta = els[`${control}Delta`];
  const status = els[`${control}Status`];
  const statusText = els[`${control}StatusText`];
  const match = els[`${control}Match`];
  const target = getSolutionValue(control);
  const error = getControlDelta(control);
  const ok = isControlWithinTolerance(control);
  const decimals = control === "charge" ? 0 : 1;

  if (input && document.activeElement !== input) {
    input.value = formatControlValue(control, value);
  }
  if (recommended) recommended.textContent = target === null ? "--" : formatControlValue(control, target);
  if (delta) delta.textContent = error === null ? "--" : formatSigned(error, decimals);
  if (match) match.disabled = target === null;

  if (module) {
    module.classList.toggle("within-tolerance", Boolean(target !== null && ok));
    module.classList.toggle("needs-trim", Boolean(target !== null && !ok));
    module.classList.toggle("no-solution", target === null);
  }
  if (delta) {
    delta.classList.toggle("delta-ok", Boolean(target !== null && ok));
    delta.classList.toggle("delta-warn", Boolean(target !== null && !ok));
  }

  if (status) {
    status.classList.toggle("ok", Boolean(target !== null && ok));
    status.classList.toggle("warn", Boolean(target !== null && !ok));
    status.classList.toggle("offline", target === null);
  }
  if (statusText) {
    if (target === null) {
      statusText.textContent = t("control.noSolution");
    } else if (ok && control === "azimuth") {
      statusText.textContent = t("control.alignOk");
    } else if (ok && control === "elevation") {
      statusText.textContent = t("control.elevationOk");
    } else if (ok && control === "charge") {
      statusText.textContent = t("control.chargeOk");
    } else {
      statusText.textContent = t("control.outTolerance");
    }
  }
}

function updateChecklist() {
  const status = getChecklist();
  Object.entries(status).forEach(([step, online]) => {
    const row = document.querySelector(`.check-row[data-step="${step}"]`);
    if (row) row.classList.toggle("online", online);
  });
}

function updateServoState() {
  const active = performance.now() < state.servoUntil && !state.firing;
  els.shell.classList.toggle("servo-active", active);
  state.audio.manager?.setServoActive(active, state.radarNoise);
}

function updateUI() {
  updateTopStatus();
  updateReadouts();
  updateControls();
  updateChecklist();
  updateServoState();
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  state.render.width = Math.max(1, Math.floor(rect.width));
  state.render.height = Math.max(1, Math.floor(rect.height));
  state.render.dpr = dpr;
  canvas.width = Math.floor(state.render.width * dpr);
  canvas.height = Math.floor(state.render.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function worldToScreen(x, y) {
  const w = state.render.width;
  const h = state.render.height;
  const scale = Math.min(w, h) / (WORLD_LIMIT * 2.15);
  return {
    x: w / 2 + x * scale,
    y: h / 2 - y * scale
  };
}

function drawGrid(now) {
  const w = state.render.width;
  const h = state.render.height;
  ctx.fillStyle = "#041108";
  ctx.fillRect(0, 0, w, h);

  const pulse = 0.7 + Math.sin(now / 900) * 0.08;
  ctx.save();
  ctx.globalAlpha = pulse;
  for (let v = -600; v <= 600; v += 50) {
    const a = worldToScreen(v, -WORLD_LIMIT);
    const b = worldToScreen(v, WORLD_LIMIT);
    const major = v % 200 === 0;
    ctx.strokeStyle = major ? "rgba(119,255,150,0.32)" : "rgba(119,255,150,0.12)";
    ctx.lineWidth = major ? 1.2 : 0.65;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();

    const c = worldToScreen(-WORLD_LIMIT, v);
    const d = worldToScreen(WORLD_LIMIT, v);
    ctx.beginPath();
    ctx.moveTo(c.x, c.y);
    ctx.lineTo(d.x, d.y);
    ctx.stroke();
  }
  ctx.restore();

  ctx.strokeStyle = "rgba(255,191,90,0.52)";
  ctx.lineWidth = 1.3;
  const xAxisA = worldToScreen(-WORLD_LIMIT, 0);
  const xAxisB = worldToScreen(WORLD_LIMIT, 0);
  const yAxisA = worldToScreen(0, -WORLD_LIMIT);
  const yAxisB = worldToScreen(0, WORLD_LIMIT);
  ctx.beginPath();
  ctx.moveTo(xAxisA.x, xAxisA.y);
  ctx.lineTo(xAxisB.x, xAxisB.y);
  ctx.moveTo(yAxisA.x, yAxisA.y);
  ctx.lineTo(yAxisB.x, yAxisB.y);
  ctx.stroke();

  ctx.fillStyle = "rgba(119,255,150,0.68)";
  ctx.font = "11px Courier New";
  ctx.textBaseline = "middle";
  for (let v = -600; v <= 600; v += 200) {
    const top = worldToScreen(v, WORLD_LIMIT - 30);
    ctx.fillText(formatCoord(v), top.x + 3, top.y);
    const left = worldToScreen(-WORLD_LIMIT + 24, v);
    ctx.fillText(formatCoord(v), left.x, left.y - 4);
  }

  ctx.fillStyle = "rgba(255,191,90,0.72)";
  ctx.fillText(t("canvas.batteryOrigin"), worldToScreen(10, -18).x, worldToScreen(10, -18).y);
}

function terrainHeight(x, y, now = 0) {
  const slowDrift = Math.sin(now / 9200) * 0.08;
  const ridgeA = Math.sin((x * 0.010) + slowDrift) * 0.55 + Math.cos((y * 0.013) - 0.4) * 0.42;
  const ridgeB = Math.sin((x + y) * 0.006 + 1.7) * 0.35 + Math.cos((x - y) * 0.008 - 2.1) * 0.28;
  const massif =
    1.55 * Math.exp(-(((x + 310) ** 2) / 78000 + ((y - 205) ** 2) / 34000)) +
    1.28 * Math.exp(-(((x - 260) ** 2) / 90000 + ((y + 150) ** 2) / 52000)) +
    0.92 * Math.exp(-(((x + 45) ** 2) / 52000 + ((y + 265) ** 2) / 29000));
  const valley = 0.75 * Math.exp(-(((x - 60) ** 2) / 190000 + ((y - 20) ** 2) / 17000));
  return ridgeA + ridgeB + massif - valley;
}

function traceContour(level, yStart, now) {
  const points = [];
  let last = null;
  for (let xi = -WORLD_LIMIT; xi <= WORLD_LIMIT; xi += 18) {
    let bestY = yStart;
    let bestDelta = Infinity;
    for (let yi = yStart - 54; yi <= yStart + 54; yi += 9) {
      const delta = Math.abs(terrainHeight(xi, yi, now) - level);
      if (delta < bestDelta) {
        bestDelta = delta;
        bestY = yi;
      }
    }
    const relaxedY = last === null ? bestY : last * 0.72 + bestY * 0.28;
    points.push(worldToScreen(xi, relaxedY));
    last = relaxedY;
  }
  return points;
}

function drawTerrainContours(now) {
  const w = state.render.width;
  const h = state.render.height;
  ctx.save();
  ctx.globalCompositeOperation = "screen";

  const glow = ctx.createRadialGradient(w * 0.48, h * 0.48, 10, w * 0.48, h * 0.48, Math.max(w, h) * 0.72);
  glow.addColorStop(0, "rgba(83,255,109,0.075)");
  glow.addColorStop(0.55, "rgba(45,172,76,0.035)");
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  const mountainBands = [
    { base: 430, amp: 44, alpha: 0.115, phase: 0.2 },
    { base: 350, amp: 30, alpha: 0.082, phase: 1.7 },
    { base: 275, amp: 22, alpha: 0.052, phase: 3.1 }
  ];

  mountainBands.forEach((band, index) => {
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let i = 0; i <= 120; i += 1) {
      const x = (w * i) / 120;
      const y =
        h - band.base * (h / 620) +
        Math.sin(i * 0.19 + band.phase + now / 6800) * band.amp +
        Math.sin(i * 0.047 + index * 2.1) * band.amp * 0.72;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = `rgba(74,255,109,${band.alpha})`;
    ctx.fill();
  });

  for (let yBand = -520; yBand <= 520; yBand += 42) {
    const terrainLevel = -0.85 + ((yBand + 520) / 1040) * 2.7;
    const points = traceContour(terrainLevel, yBand, now);
    ctx.beginPath();
    points.forEach((p, index) => {
      if (index === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    const major = Math.round((terrainLevel + 1) * 10) % 4 === 0;
    ctx.strokeStyle = major ? "rgba(131,255,149,0.18)" : "rgba(111,255,142,0.095)";
    ctx.lineWidth = major ? 1.1 : 0.72;
    ctx.stroke();
  }

  const hillCenters = [
    { x: -330, y: 205, rx: 206, ry: 86, phase: 0.2 },
    { x: 252, y: -148, rx: 220, ry: 98, phase: 2.0 },
    { x: -38, y: 282, rx: 160, ry: 58, phase: 1.4 }
  ];

  hillCenters.forEach((hill, hillIndex) => {
    for (let level = 0; level < 10; level += 1) {
      const scale = 1 - level * 0.078;
      ctx.beginPath();
      for (let i = 0; i <= 150; i += 1) {
        const a = (Math.PI * 2 * i) / 150;
        const wobble = 1 + Math.sin(a * 3 + hill.phase + hillIndex) * 0.055 + Math.cos(a * 6.1 + hill.phase * 1.8) * 0.035;
        const x = hill.x + Math.cos(a) * hill.rx * scale * wobble;
        const y = hill.y + Math.sin(a) * hill.ry * scale * wobble + Math.sin(now / 2600) * 0.6 * level;
        const p = worldToScreen(x, y);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(119,255,150,${0.06 + level * 0.015})`;
      ctx.lineWidth = level % 3 === 0 ? 1.05 : 0.7;
      ctx.stroke();
    }
  });

  ctx.strokeStyle = "rgba(174,255,183,0.16)";
  ctx.lineWidth = 1.05;
  ctx.setLineDash([10, 8]);
  [-390, -120, 165, 410].forEach((ridgeOffset, ridgeIndex) => {
    ctx.beginPath();
    for (let i = 0; i <= 86; i += 1) {
      const x = -WORLD_LIMIT + (WORLD_LIMIT * 2 * i) / 86;
      const y = ridgeOffset + Math.sin(i * 0.16 + ridgeIndex * 1.9) * 24 + Math.sin(i * 0.055 + ridgeIndex) * 42;
      const p = worldToScreen(x, y);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
  });
  ctx.setLineDash([]);

  ctx.fillStyle = "rgba(119,255,150,0.7)";
  ctx.font = "10px Courier New";
  ctx.fillText(t("canvas.terrain"), 18, 22);
  ctx.fillText(`${t("canvas.ridgeLine")} 2470`, w - 118, 24);

  ctx.fillStyle = "rgba(119,255,150,0.05)";
  for (let i = 0; i < 34; i += 1) {
    const x = (i * 97 + 43) % w;
    const y = (i * 53 + 31) % h;
    ctx.fillRect(x, y, 2, 2);
  }
  ctx.restore();
}

function drawMarker(x, y, color, label, size = 12) {
  const p = worldToScreen(x, y);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.6;
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo(p.x, p.y - size);
  ctx.lineTo(p.x + size, p.y);
  ctx.lineTo(p.x, p.y + size);
  ctx.lineTo(p.x - size, p.y);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(p.x - size * 1.6, p.y);
  ctx.lineTo(p.x + size * 1.6, p.y);
  ctx.moveTo(p.x, p.y - size * 1.6);
  ctx.lineTo(p.x, p.y + size * 1.6);
  ctx.stroke();
  ctx.font = "12px Courier New";
  ctx.fillText(label, p.x + size + 7, p.y - size - 4);
  ctx.restore();
}

function drawErrorCircle() {
  if (!state.target || !state.solution) return;
  const p = worldToScreen(state.target.x, state.target.y);
  const edge = worldToScreen(state.target.x + state.solution.errorRadius, state.target.y);
  const radius = Math.abs(edge.x - p.x);
  ctx.save();
  ctx.strokeStyle = "rgba(255,191,90,0.36)";
  ctx.fillStyle = "rgba(255,191,90,0.035)";
  ctx.lineWidth = 1.2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}

function drawPredictedImpact() {
  if (!state.solution || !state.target) return;
  const impact = computeImpactPoint();
  drawErrorCircle();
  drawMarker(impact.x, impact.y, "rgba(255,191,90,0.92)", t("canvas.predictedSplash"), 9);
  const target = worldToScreen(state.target.x, state.target.y);
  const pred = worldToScreen(impact.x, impact.y);
  ctx.save();
  ctx.strokeStyle = "rgba(255,191,90,0.28)";
  ctx.setLineDash([6, 5]);
  ctx.beginPath();
  ctx.moveTo(target.x, target.y);
  ctx.lineTo(pred.x, pred.y);
  ctx.stroke();
  ctx.restore();
}

function drawBallisticArc(now) {
  if (!state.firing || !state.target) return;
  const elapsed = now - state.firing.start;
  const t = clamp(elapsed / state.firing.duration, 0, 1);
  const impact = state.firing.impact || computeImpactPoint();
  const start = { x: 0, y: 0 };
  const end = { x: impact.x, y: impact.y };
  const control = {
    x: (start.x + end.x) / 2 + Math.sin(now / 310) * 20,
    y: (start.y + end.y) / 2 + 130 + Math.cos(now / 420) * 26
  };

  ctx.save();
  ctx.strokeStyle = "rgba(119,255,150,0.45)";
  ctx.lineWidth = 1.4;
  ctx.setLineDash([7, 6]);
  ctx.beginPath();
  let previous = worldToScreen(start.x, start.y);
  ctx.moveTo(previous.x, previous.y);
  const segments = 80;
  for (let i = 1; i <= segments * t; i += 1) {
    const q = i / segments;
    const x = (1 - q) * (1 - q) * start.x + 2 * (1 - q) * q * control.x + q * q * end.x;
    const y = (1 - q) * (1 - q) * start.y + 2 * (1 - q) * q * control.y + q * q * end.y;
    const p = worldToScreen(x, y);
    ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  const q = t;
  const shellX = (1 - q) * (1 - q) * start.x + 2 * (1 - q) * q * control.x + q * q * end.x;
  const shellY = (1 - q) * (1 - q) * start.y + 2 * (1 - q) * q * control.y + q * q * end.y;
  const shell = worldToScreen(shellX, shellY);
  ctx.fillStyle = "#dfffd6";
  ctx.shadowColor = "#77ff96";
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(shell.x, shell.y, 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (t >= 1) {
    drawImpactBloom(impact.x, impact.y, now, true);
    completeImpact();
  }
}

function drawImpactBloom(x, y, now, active = false) {
  const p = worldToScreen(x, y);
  const pulse = active ? 1 + Math.sin(now / 62) * 0.25 : 0.65 + Math.sin(now / 260) * 0.1;
  ctx.save();
  ctx.strokeStyle = `rgba(255,191,90,${active ? 0.85 : 0.5})`;
  ctx.fillStyle = `rgba(255,61,46,${active ? 0.16 : 0.06})`;
  ctx.shadowColor = active ? "#ffbf5a" : "#77ff96";
  ctx.shadowBlur = active ? 25 : 10;
  for (let i = 0; i < 3; i += 1) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, (12 + i * 15) * pulse, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(p.x, p.y, 17 * pulse, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawNoise(now) {
  const w = state.render.width;
  const h = state.render.height;
  const intensity = clamp(0.04 + state.radarNoise / 800, 0.04, 0.18);
  ctx.save();
  ctx.globalAlpha = intensity;
  ctx.fillStyle = "#baffc7";
  const count = Math.floor(90 + state.radarNoise * 2.4);
  for (let i = 0; i < count; i += 1) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    ctx.fillRect(x, y, Math.random() * 2.2 + 0.5, 1);
  }
  ctx.globalAlpha = 0.16 + Math.sin(now / 70) * 0.08;
  for (let y = (now / 16) % 28; y < h; y += 28) {
    ctx.fillRect(0, y, w, 1);
  }
  ctx.restore();
}

function drawWeatherVector() {
  const w = state.render.width;
  const origin = { x: w - 105, y: 72 };
  const angle = state.weather.windDir * Math.PI / 180;
  const len = 36 + state.weather.windSpeed * 1.1;
  ctx.save();
  ctx.strokeStyle = "rgba(255,191,90,0.78)";
  ctx.fillStyle = "rgba(255,191,90,0.78)";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(origin.x + Math.sin(angle) * len, origin.y - Math.cos(angle) * len);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(origin.x, origin.y, 28, 0, Math.PI * 2);
  ctx.stroke();
  ctx.font = "11px Courier New";
  ctx.fillText(t("canvas.wind"), origin.x - 17, origin.y + 45);
  ctx.restore();
}

function drawCrt(now) {
  drawGrid(now);
  drawTerrainContours(now);
  drawWeatherVector();

  if (state.target) {
    drawMarker(state.target.x, state.target.y, "rgba(255,61,46,0.95)", t("canvas.target"), 11);
  }
  if (state.solution) {
    drawPredictedImpact();
  }
  if (state.lastImpact) {
    drawImpactBloom(state.lastImpact.x, state.lastImpact.y, now, false);
  }
  drawBallisticArc(now);

  ctx.save();
  ctx.fillStyle = "rgba(119,255,150,0.82)";
  ctx.font = "12px Courier New";
  ctx.fillText(t("canvas.radarNoise", { value: Math.round(state.radarNoise) }), 18, state.render.height - 42);
  ctx.fillText(t("canvas.comm", { value: Math.round(state.commQuality) }), 18, state.render.height - 24);
  ctx.restore();

  drawNoise(now);
}

function renderLoop(now) {
  updateServoState();
  drawCrt(now);
  requestAnimationFrame(renderLoop);
}

function bindEvents() {
  document.addEventListener("pointerdown", () => {
    const audio = getAudioManager();
    audio.resume();
    audio.startAmbient();
    audio.initPowerOnCue();
  }, { once: true });
  if (els.audioToggle) {
    els.audioToggle.addEventListener("click", () => {
      const nextMuted = !state.audio.muted;
      if (nextMuted) playButtonClick();
      setAudioMuted(nextMuted);
      addLog(state.audio.muted ? "log.audioMuted" : "log.audioEnabled", state.audio.muted ? "warn" : "normal");
      if (!nextMuted) playButtonClick();
    });
  }
  if (els.audioVolume) {
    els.audioVolume.addEventListener("input", () => {
      setAudioMasterVolume(Number(els.audioVolume.value));
    });
    els.audioVolume.addEventListener("change", () => {
      getAudioManager().playDataBlip();
    });
  }
  els.newTarget.addEventListener("click", () => {
    playButtonClick();
    generateTarget();
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.language === button.dataset.lang) return;
      state.language = button.dataset.lang;
      try {
        localStorage.setItem("turretConsoleLanguage", state.language);
      } catch {
        // Local files can run without storage permissions in some browser modes.
      }
      playButtonClick();
      applyTranslations();
    });
  });
  els.calc.addEventListener("click", computeSolution);
  els.relay.addEventListener("click", () => {
    playRelay();
    addLog("log.relayTest", "normal");
  });
  els.chargeSlider.addEventListener("input", () => {
    pulseControl("charge");
    setControlValue("charge", Number(els.chargeSlider.value));
    if (state.solution && Math.abs(getToleranceStatus().chargeErr) <= CHARGE_TOLERANCE) {
      state.servoUntil = performance.now() + 900;
    }
  });
  els.chargeSlider.addEventListener("pointerdown", () => setControlActive("charge", true));
  els.chargeSlider.addEventListener("pointerup", () => setControlActive("charge", false));
  els.chargeSlider.addEventListener("pointercancel", () => setControlActive("charge", false));
  els.chargeSlider.addEventListener("focus", () => setControlActive("charge", true));
  els.chargeSlider.addEventListener("blur", () => setControlActive("charge", false));
  els.chargeSlider.addEventListener("wheel", (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? -1 : 1;
    pulseControl("charge");
    setControlValue("charge", state.controls.charge + direction * getControlStep("charge", event));
  }, { passive: false });
  els.chargeSlider.addEventListener("dblclick", () => matchSolution("charge"));
  els.stabilizer.addEventListener("click", () => {
    state.controls.stabilizer = !state.controls.stabilizer;
    els.stabilizer.setAttribute("aria-pressed", String(state.controls.stabilizer));
    getAudioManager().playToggleSwitch(state.controls.stabilizer);
    addLog(state.controls.stabilizer ? "log.stabilizerEngaged" : "log.stabilizerDisengaged", state.controls.stabilizer ? "normal" : "warn");
    if (state.controls.stabilizer) state.servoUntil = performance.now() + 1400;
    updateUI();
  });
  els.safety.addEventListener("click", () => {
    state.controls.safetyReleased = !state.controls.safetyReleased;
    els.safety.setAttribute("aria-pressed", String(state.controls.safetyReleased));
    getAudioManager().playSafetyCoverOpen();
    getAudioManager().playSafetyArm();
    addLog(state.controls.safetyReleased ? "log.safetyReleased" : "log.safetyClosed", state.controls.safetyReleased ? "warn" : "normal");
    updateUI();
  });
  els.fire.addEventListener("click", fire);

  document.querySelectorAll(".shell-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".shell-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.controls.shellWeight = Number(button.dataset.weight);
      getAudioManager().playToggleSwitch(true);
      getAudioManager().playDataBlip();
      addLog("log.shellSelected", "normal", { weight: state.controls.shellWeight });
      updateUI();
    });
  });

  wireDial(els.azimuthDial);
  wireDial(els.elevationDial);
  wireNumberInput("azimuth", els.azimuthInput);
  wireNumberInput("elevation", els.elevationInput);
  wireNumberInput("charge", els.chargeInput);
  document.querySelectorAll(".trim-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const control = button.dataset.control;
      const direction = button.dataset.step === "up" ? 1 : -1;
      playButtonClick();
      pulseControl(control);
      setControlValue(control, state.controls[control] + direction * getControlStep(control, event));
    });
  });
  document.querySelectorAll(".match-button").forEach((button) => {
    button.addEventListener("click", () => {
      playButtonClick();
      matchSolution(button.dataset.control);
    });
  });
  window.addEventListener("resize", resizeCanvas);
  document.addEventListener("visibilitychange", () => {
    if (!state.audio.manager?.isReady()) return;
    if (document.hidden) state.audio.manager.stopAmbient();
    else if (!state.audio.muted) state.audio.manager.startAmbient();
  });
}

function init() {
  cacheElements();
  createDialTicks();
  bindEvents();
  resizeCanvas();
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  let storedLanguage = null;
  try {
    storedLanguage = localStorage.getItem("turretConsoleLanguage");
  } catch {
    storedLanguage = null;
  }
  if (requestedLanguage === "ko" || requestedLanguage === "en") {
    state.language = requestedLanguage;
  } else if (storedLanguage === "ko" || storedLanguage === "en") {
    state.language = storedLanguage;
  }
  applyTranslations();
  addLog("log.consolePowered", "normal");
  addLog("log.crtWarmup", "normal");
  addLog("log.awaitingMission", "warn");
  generateTarget();
  setInterval(updateTopStatus, 1000);
  setInterval(slowDrift, 2400);
  setInterval(randomEvent, 12500);
  requestAnimationFrame(renderLoop);
}

init();
