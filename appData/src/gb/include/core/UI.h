#ifndef UI_H
#define UI_H

#include <gb/gb.h>
#include <gbdkjs.h>

#define UI_BANK 3
#define MENU_OPEN_Y 112
#define MENU_CLOSED_Y (MAXWNDPOSY + 1)
#define TEXT_BUFFER_START 0xCC
#define MENU_LAYOUT_INITIAL_X 88
#define MENU_CANCEL_ON_LAST_OPTION 0x01U
#define MENU_CANCEL_ON_B_PRESSED 0x02U

extern unsigned char text_lines[80];
extern unsigned char tmp_text_lines[80];
extern UBYTE hide_sprites_under_win;
extern UBYTE win_pos_x;
extern UBYTE win_pos_y;
extern UBYTE win_dest_pos_x;
extern UBYTE win_dest_pos_y;
extern UBYTE win_speed;
extern UBYTE text_in_speed;
extern UBYTE text_out_speed;
extern UBYTE text_draw_speed;
extern UBYTE tmp_text_in_speed;
extern UBYTE tmp_text_out_speed;
extern UBYTE menu_layout;
extern UBYTE text_num_lines;
extern UBYTE text_x;
extern UBYTE text_y;
extern UBYTE text_drawn;
extern UBYTE text_count;
extern UBYTE text_tile_count;
extern UBYTE text_wait;
extern UBYTE tmp_text_draw_speed;
extern UBYTE avatar_enabled;
extern UBYTE menu_enabled;
extern UBYTE menu_cancel_on_last_option;
extern BYTE menu_index;
extern UBYTE menu_num_options;
extern UWORD menu_flag;
extern UBYTE menu_cancel_on_b;

void UIInit();
void UIDebugLog(UBYTE val, UBYTE x, UBYTE y);

void UIUpdate();
void UIDrawFrame(UBYTE x, UBYTE y, UBYTE width, UBYTE height);
void UIDrawDialogueFrame(UBYTE h);
void UIShowText(UWORD line);
void UIShowChoice(UWORD flag_index, UWORD line);
void UISetTextBuffer(unsigned char *text);
void UIDrawTextBuffer();
void UISetPos(UBYTE x, UBYTE y);
void UIMoveTo(UBYTE x, UBYTE y, UBYTE speed);
UBYTE UIIsClosed();
void UIOnInteract();
UBYTE UIAtDest();
void UISetColor(UBYTE color);
void UISetTextSpeed(UBYTE in, UBYTE out);
void UIShowAvatar(UBYTE avatar_index);
void UIShowMenu(UWORD flag_index, UWORD line, UBYTE layout, UBYTE cancel_config);
void UIDrawMenuCursor();

#endif
