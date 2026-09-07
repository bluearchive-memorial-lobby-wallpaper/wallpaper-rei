import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-rei",
  slug: "rei",
  title: "Rei",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 14.000000953674316,
    "lines": [
      {
        "id": "ch0245_memoriallobby_1_1",
        "text": {
          "zh-cn": "这是，我第一次",
          "ja": "これは私が初めて捕った……",
          "ko": "이건, 제가\n처음 잡아 본……",
          "en": "This is the first..."
        }
      },
      {
        "id": "ch0245_memoriallobby_1_2",
        "text": {
          "zh-cn": "接到的本垒打球。",
          "ja": "思い出の、\nホームランボールです。",
          "ko": "그때의, 홈런공이에요.",
          "en": "...homerun ball I ever caught."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 10.166666984558105,
    "lines": [
      {
        "id": "ch0245_memoriallobby_2",
        "text": {
          "zh-cn": "正式开始打棒球后，我一直随身带着。",
          "ja": "野球を始めたての頃、\nよく持ち歩いてました。",
          "ko": "야구를 제대로 시작한 뒤로,\n늘 가지고 다녔죠.",
          "en": "Ever since I started playing, I've always kept it with me."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 14.666666984558105,
    "lines": [
      {
        "id": "ch0245_memoriallobby_3_1",
        "text": {
          "zh-cn": "因为想着",
          "ja": "あの日みたホームランを――",
          "ko": "그때 본 홈런을……",
          "en": "When I witnessed that first home run..."
        }
      },
      {
        "id": "ch0245_memoriallobby_3_2",
        "text": {
          "zh-cn": "总有一天，自己也要打出本垒打。",
          "ja": "いつか、自分でも同じように\n打ちたいと思って。",
          "ko": "언젠가, 저도 쳐 보고\n싶다고 생각해서요.",
          "en": "I told myself I'd hit one too, someday."
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 11.666666984558105,
    "lines": [
      {
        "id": "ch0245_memoriallobby_4",
        "text": {
          "zh-cn": "现在，我把它珍藏在储物柜里。",
          "ja": "今はボロボロに\nなってしまったので\nロッカーに保管しています。",
          "ko": "지금은 사물함에\n소중히 보관하고 있어요.",
          "en": "Right now...I have it enshrined in my cabinet."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 25.166667938232422,
    "lines": [
      {
        "id": "ch0245_memoriallobby_5_1",
        "text": {
          "zh-cn": "每当心灰意冷的时候，只要看到这颗球",
          "ja": "くじけそうな時は、\nこのボールを見ると",
          "ko": "마음이 꺾일 것 같을 때,\n이 공을 보면.",
          "en": "Whenever I feel like I want to give up, I look at it."
        }
      },
      {
        "id": "ch0245_memoriallobby_5_2",
        "text": {
          "zh-cn": "就会让我找回初心，重新获得力量。",
          "ja": "初心に戻れるような気がして…\n元気をもらえる。",
          "ko": "초심을 찾게\n해 주는 것 같아서……\n힘이 나곤 해요.",
          "en": "It reminds me of when I first started. It always lifts my spirits up."
        }
      },
      {
        "id": "ch0245_memoriallobby_5_3",
        "text": {
          "zh-cn": "它就像是，我的护身符一样。",
          "ja": "……大切な、お守りなんです。",
          "ko": "……소중한,\n부적 같은 공이랍니다.",
          "en": "...To me, it's both a memento and a good luck charm."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
