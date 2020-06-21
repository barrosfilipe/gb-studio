export const END = "END";
export const TEXT = "TEXT";
export const JUMP = "JUMP";
export const IF_TRUE = "IF_TRUE";
export const NOOP = "NOOP";
export const SET_TRUE = "SET_TRUE";
export const SET_FALSE = "SET_FALSE";
export const ACTOR_SET_DIRECTION = "ACTOR_SET_DIRECTION";
export const ACTOR_SET_ACTIVE = "ACTOR_SET_ACTIVE";
export const CAMERA_MOVE_TO = "CAMERA_MOVE_TO";
export const CAMERA_LOCK = "CAMERA_LOCK";
export const WAIT = "WAIT";
export const FADE_OUT = "FADE_OUT";
export const FADE_IN = "FADE_IN";
export const SWITCH_SCENE = "SWITCH_SCENE";
export const ACTOR_SET_POSITION = "ACTOR_SET_POSITION";
export const ACTOR_MOVE_TO = "ACTOR_MOVE_TO";
export const SHOW_SPRITES = "SHOW_SPRITES";
export const HIDE_SPRITES = "HIDE_SPRITES";
export const PLAYER_SET_SPRITE = "PLAYER_SET_SPRITE";
export const ACTOR_SHOW = "ACTOR_SHOW";
export const ACTOR_HIDE = "ACTOR_HIDE";
export const ACTOR_EMOTE = "ACTOR_EMOTE";
export const CAMERA_SHAKE = "CAMERA_SHAKE";
export const RETURN_TO_TITLE = "RETURN_TO_TITLE";
export const OVERLAY_SHOW = "OVERLAY_SHOW";
export const OVERLAY_HIDE = "OVERLAY_HIDE";
export const OVERLAY_SET_POSITION = "OVERLAY_SET_POSITION";
export const OVERLAY_MOVE_TO = "OVERLAY_MOVE_TO";
export const AWAIT_INPUT = "AWAIT_INPUT";
export const MUSIC_PLAY = "MUSIC_PLAY";
export const MUSIC_STOP = "MUSIC_STOP";
export const RESET_VARIABLES = "RESET_VARIABLES";
export const NEXT_FRAME = "NEXT_FRAME";
export const INC_VALUE = "INC_VALUE";
export const DEC_VALUE = "DEC_VALUE";
export const SET_VALUE = "SET_VALUE";
export const IF_VALUE = "IF_VALUE";
export const IF_INPUT = "IF_INPUT";
export const CHOICE = "CHOICE";
export const ACTOR_PUSH = "ACTOR_PUSH";
export const IF_ACTOR_AT_POSITION = "IF_ACTOR_AT_POSITION";
export const LOAD_DATA = "LOAD_DATA";
export const SAVE_DATA = "SAVE_DATA";
export const CLEAR_DATA = "CLEAR_DATA";
export const IF_SAVED_DATA = "IF_SAVED_DATA";
export const IF_ACTOR_DIRECTION = "IF_ACTOR_DIRECTION";
export const SET_RANDOM_VALUE = "SET_RANDOM_VALUE";
export const ACTOR_GET_POSITION = "ACTOR_GET_POSITION";
export const ACTOR_SET_POSITION_TO_VALUE = "ACTOR_SET_POSITION_TO_VALUE";
export const ACTOR_MOVE_TO_VALUE = "ACTOR_MOVE_TO_VALUE";
export const ACTOR_MOVE_RELATIVE = "ACTOR_MOVE_RELATIVE";
export const ACTOR_SET_POSITION_RELATIVE = "ACTOR_SET_POSITION_RELATIVE";
export const MATH_ADD = "MATH_ADD";
export const MATH_SUB = "MATH_SUB";
export const MATH_MUL = "MATH_MUL";
export const MATH_DIV = "MATH_DIV";
export const MATH_MOD = "MATH_MOD";
export const MATH_ADD_VALUE = "MATH_ADD_VALUE";
export const MATH_SUB_VALUE = "MATH_SUB_VALUE";
export const MATH_MUL_VALUE = "MATH_MUL_VALUE";
export const MATH_DIV_VALUE = "MATH_DIV_VALUE";
export const MATH_MOD_VALUE = "MATH_MOD_VALUE";
export const COPY_VALUE = "COPY_VALUE";
export const IF_VALUE_COMPARE = "IF_VALUE_COMPARE";
export const LOAD_VECTORS = "LOAD_VECTORS";
export const ACTOR_SET_MOVE_SPEED = "ACTOR_SET_MOVE_SPEED";
export const ACTOR_SET_ANIM_SPEED = "ACTOR_SET_ANIM_SPEED";
export const TEXT_SET_ANIM_SPEED = "TEXT_SET_ANIM_SPEED";
export const SCENE_PUSH_STATE = "SCENE_PUSH_STATE";
export const SCENE_POP_STATE = "SCENE_POP_STATE";
export const ACTOR_INVOKE = "ACTOR_INVOKE";
export const STACK_PUSH = "STACK_PUSH";
export const STACK_POP = "STACK_POP";
export const SCENE_STATE_RESET = "SCENE_STATE_RESET";
export const SCENE_POP_ALL_STATE = "SCENE_POP_ALL_STATE";
export const SET_INPUT_SCRIPT = "SET_INPUT_SCRIPT";
export const REMOVE_INPUT_SCRIPT = "REMOVE_INPUT_SCRIPT";
export const ACTOR_SET_FRAME = "ACTOR_SET_FRAME";
export const ACTOR_SET_FLIP = "ACTOR_SET_FLIP";
export const TEXT_MULTI = "TEXT_MULTI";
export const ACTOR_SET_FRAME_TO_VALUE = "ACTOR_SET_FRAME_TO_VALUE";
export const VARIABLE_ADD_FLAGS = "VARIABLE_ADD_FLAGS";
export const VARIABLE_CLEAR_FLAGS = "VARIABLE_CLEAR_FLAGS";
export const SOUND_START_TONE = "SOUND_START_TONE";
export const SOUND_STOP_TONE = "SOUND_STOP_TONE";
export const SOUND_PLAY_BEEP = "SOUND_PLAY_BEEP";
export const SOUND_PLAY_CRASH = "SOUND_PLAY_CRASH";
export const SET_TIMER_SCRIPT = "SET_TIMER_SCRIPT";
export const TIMER_RESTART = "TIMER_RESTART";
export const TIMER_DISABLE = "TIMER_DISABLE";
export const TEXT_WITH_AVATAR = "TEXT_WITH_AVATAR";
export const MENU = "MENU";
export const ACTOR_SET_COLLISIONS = "ACTOR_SET_COLLISIONS";
export const LAUNCH_PROJECTILE = "LAUNCH_PROJECTILE";
export const SET_PROPERTY = "SET_PROPERTY";
export const ACTOR_SET_SPRITE = "ACTOR_SET_SPRITE";
export const IF_ACTOR_RELATIVE_TO_ACTOR = "IF_ACTOR_RELATIVE_TO_ACTOR";

export const scriptCommands = [
  END,
  TEXT,
  JUMP,
  IF_TRUE,
  NOOP,
  SET_TRUE,
  SET_FALSE,
  ACTOR_SET_DIRECTION,
  ACTOR_SET_ACTIVE,
  CAMERA_MOVE_TO,
  CAMERA_LOCK,
  WAIT,
  FADE_OUT,
  FADE_IN,
  SWITCH_SCENE,
  ACTOR_SET_POSITION,
  ACTOR_MOVE_TO,
  SHOW_SPRITES,
  HIDE_SPRITES,
  PLAYER_SET_SPRITE,
  ACTOR_SHOW,
  ACTOR_HIDE,
  ACTOR_EMOTE,
  CAMERA_SHAKE,
  RETURN_TO_TITLE,
  OVERLAY_SHOW,
  OVERLAY_HIDE,
  OVERLAY_SET_POSITION,
  OVERLAY_MOVE_TO,
  AWAIT_INPUT,
  MUSIC_PLAY,
  MUSIC_STOP,
  RESET_VARIABLES,
  NEXT_FRAME,
  INC_VALUE,
  DEC_VALUE,
  SET_VALUE,
  IF_VALUE,
  IF_INPUT,
  CHOICE,
  ACTOR_PUSH,
  IF_ACTOR_AT_POSITION,
  LOAD_DATA,
  SAVE_DATA,
  CLEAR_DATA,
  IF_SAVED_DATA,
  IF_ACTOR_DIRECTION,
  SET_RANDOM_VALUE,
  ACTOR_GET_POSITION,
  ACTOR_SET_POSITION_TO_VALUE,
  ACTOR_MOVE_TO_VALUE,
  ACTOR_MOVE_RELATIVE,
  ACTOR_SET_POSITION_RELATIVE,
  MATH_ADD,
  MATH_SUB,
  MATH_MUL,
  MATH_DIV,
  MATH_MOD,
  MATH_ADD_VALUE,
  MATH_SUB_VALUE,
  MATH_MUL_VALUE,
  MATH_DIV_VALUE,
  MATH_MOD_VALUE,
  COPY_VALUE,
  IF_VALUE_COMPARE,
  LOAD_VECTORS,
  ACTOR_SET_MOVE_SPEED,
  ACTOR_SET_ANIM_SPEED,
  TEXT_SET_ANIM_SPEED,
  SCENE_PUSH_STATE,
  SCENE_POP_STATE,
  ACTOR_INVOKE,
  STACK_PUSH,
  STACK_POP,
  SCENE_STATE_RESET,
  SCENE_POP_ALL_STATE,
  SET_INPUT_SCRIPT,
  REMOVE_INPUT_SCRIPT,
  ACTOR_SET_FRAME,
  ACTOR_SET_FLIP,
  TEXT_MULTI,
  ACTOR_SET_FRAME_TO_VALUE,
  VARIABLE_ADD_FLAGS,
  VARIABLE_CLEAR_FLAGS,
  SOUND_START_TONE,
  SOUND_STOP_TONE,
  SOUND_PLAY_BEEP,
  SOUND_PLAY_CRASH,
  SET_TIMER_SCRIPT,
  TIMER_RESTART,
  TIMER_DISABLE,
  TEXT_WITH_AVATAR,
  MENU,
  ACTOR_SET_COLLISIONS,
  LAUNCH_PROJECTILE,
  SET_PROPERTY,
  ACTOR_SET_SPRITE,
  IF_ACTOR_RELATIVE_TO_ACTOR
];

export const commandIndex = key => {
  const index = scriptCommands.indexOf(key);
  if (index < 0) {
    throw new Error(`Invalid command ${key}.`);
  }
  return index;
};
