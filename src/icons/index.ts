// Ré-export ciblé des icônes RemixIcon utilisées dans Logbook, pour garder
// une liste explicite et éviter d'importer tout le catalogue par erreur.
// Catalogue complet : https://remixicon.com
//
// Uniquement des icônes "Line" (outline) dans ce projet, jamais de "Fill" —
// sauf demande explicite et ponctuelle pour un cas précis.
//
// Ajouter une icône : l'importer ici depuis '@remixicon/react', puis
// l'utiliser via `import { RiMicLine } from '@/icons'` (ou chemin relatif).

export {
  RiMicLine,
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiVolumeUpLine,
  RiPlayCircleLine,
  RiFileTextLine,
  RiBarChartLine,
  RiUserLine,
  RiCloseLine,
  RiArrowRightLine,
  RiArrowLeftLine,

  // Flèches & chevrons
  RiArrowUpLine,
  RiArrowDownLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowDropUpLine,
  RiArrowDropDownLine,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiArrowLeftUpLine,
  RiArrowRightUpLine,
  RiArrowLeftDownLine,
  RiArrowRightDownLine,
  RiArrowUpLongLine,
  RiArrowDownLongLine,
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
  RiArrowLeftUpLongLine,
  RiArrowRightUpLongLine,
  RiArrowLeftDownLongLine,
  RiArrowRightDownLongLine,
  RiArrowLeftRightLine,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,

  // Actions & saisie
  RiAddLine,
  RiAddLargeLine,
  RiCheckLine,
  RiCloseLargeLine,
  RiPencilLine,
  RiEdit2Line,
  RiBallPenLine,
  RiBardLine,
  RiDeleteBinLine,
  RiUploadLine,
  RiUpload2Line,
  RiUploadCloudLine,
  RiDownload2Line,
  RiRefreshLine,
  RiLoopLeftLine,
  RiLoopRightLine,
  RiRestartLine,
  RiAnticlockwiseLine,
  RiForward30Line,
  RiReplay30Line,
  RiPlayLine,
  // Exception explicite au principe "outline only" (demandée pour le bouton
  // play de LogbookVoicePlayer précisément, cf. RiMoreFill plus bas pour le
  // même type d'exception) : RiPlayFill plutôt que RiPlayLine.
  RiPlayFill,
  RiPlayLargeLine,
  RiPauseLine,
  RiPauseLargeLine,
  RiPauseCircleLine,
  RiStopCircleLine,
  RiSquareLine,
  RiSearchLine,
  RiSendPlaneLine,
  RiThumbUpLine,

  // Statuts, alertes & feedback
  RiAlarmLine,
  RiSparklingLine,
  RiEmotionLine,
  RiEmotionNormalLine,
  RiEmotionLaughLine,
  RiEmotionSadLine,
  RiEmotionUnhappyLine,
  RiEmotion2Line,
  RiStarLine,
  RiVerifiedBadgeLine,
  RiShieldCheckLine,
  RiFocusLine,
  RiTrophyLine,

  // Communication & notifications
  RiMailLine,
  RiChat3Line,
  RiFeedbackLine,
  RiQuestionLine,
  RiQuestionAnswerLine,
  RiNotificationLine,
  RiNotificationOffLine,
  RiNotificationSnoozeLine,
  RiMegaphoneLine,
  RiMicAiLine,
  RiHeadphoneLine,
  RiCustomerServiceLine,
  RiEqualizerLine,

  // Personnes & compte
  RiUserAddLine,
  RiUserSmileLine,
  RiAccountCircleLine,
  RiGroupLine,
  RiTeamLine,
  RiHeartLine,

  // Navigation & structure
  RiHomeLine,
  RiInformationLine,
  RiDashboardLine,
  RiMenuLine,
  // Exception explicite au principe "outline only" (demandée pour ce cas
  // précis, cf. CorrectionsTable) : RiMoreFill plutôt que RiMoreLine.
  RiMoreFill,
  RiMapPinLine,
  RiTimeLine,
  RiCalendarLine,
  RiLightbulbLine,
  RiLineChartLine,
  RiPriceTagLine,
  RiStickyNoteAddLine,
  RiFileCopyLine,
  RiFileCheckLine,
  RiBookletLine,
  RiQrCodeLine,
  RiKeyLine,
  RiLockLine,
  RiLogoutBoxLine,
  RiSettingsLine,
  RiSettings3Line,
  RiEyeLine,
  RiEyeOffLine,
  RiEyeCloseLine,

  // Partage & réseaux
  RiShareLine,
  RiLinksLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiYoutubeLine,

  // Texte & IA
  RiText,
  RiAiGenerateText,

  // Design & tokens
  RiPaletteLine,
} from '@remixicon/react';
