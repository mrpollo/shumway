function Keyboard() {
}

Object.defineProperties(Keyboard, {
  capsLock: describeAccessor(function () {
    return false; // TODO Stage.instance.$keyboard.capsLock;
  }),
  hasVirtualKeyboard: describeAccessor(function () {
    return false; // TODO Stage.instance.$keyboard.hasVirtualKeyboard;
  }),
  numLock: describeAccessor(function () {
    return false; // TODO Stage.instance.$keyboard.numLock;
  }),
  physicalKeyboardType: describeAccessor(function () {
    return 'alphanumeric'; // TODO Stage.instance.$keyboard.physicalKeyboardType;
  }),

  isAccessible: describeMethod(function () {
    return true; // TODO
  }),

  A:                    describeConst(65),
  ALTERNATE:            describeConst(18),
  AUDIO:                describeConst(0x01000017),
  B:                    describeConst(66),
  BACK:                 describeConst(0x01000016),
  BACKQUOTE:            describeConst(192),
  BACKSLASH:            describeConst(220),
  BACKSPACE:            describeConst(8),
  BLUE:                 describeConst(0x01000003),
  C:                    describeConst(67),
  CAPS_LOCK:            describeConst(20),
  CHANNEL_DOWN:         describeConst(0x01000005),
  CHANNEL_UP:           describeConst(0x01000004),
  COMMA:                describeConst(188),
  COMMAND:              describeConst(15),
  CONTROL:              describeConst(17),
  D:                    describeConst(68),
  DELETE:               describeConst(46),
  DOWN:                 describeConst(40),
  DVR:                  describeConst(0x01000019),
  E:                    describeConst(69),
  END:                  describeConst(35),
  ENTER:                describeConst(13),
  EQUAL:                describeConst(187),
  ESCAPE:               describeConst(27),
  EXIT:                 describeConst(0x01000015),
  F:                    describeConst(70),
  F1:                   describeConst(112),
  F10:                  describeConst(121),
  F11:                  describeConst(122),
  F12:                  describeConst(123),
  F13:                  describeConst(124),
  F14:                  describeConst(125),
  F15:                  describeConst(126),
  F2:                   describeConst(113),
  F3:                   describeConst(114),
  F4:                   describeConst(115),
  F5:                   describeConst(116),
  F6:                   describeConst(117),
  F7:                   describeConst(118),
  F8:                   describeConst(119),
  F9:                   describeConst(120),
  FAST_FORWARD:         describeConst(0x0100000A),
  G:                    describeConst(71),
  GREEN:                describeConst(0x01000001),
  GUIDE:                describeConst(0x01000014),
  H:                    describeConst(72),
  HELP:                 describeConst(0x0100001D),
  HOME:                 describeConst(36),
  I:                    describeConst(73),
  INFO:                 describeConst(0x01000013),
  INPUT:                describeConst(0x0100001B),
  INSERT:               describeConst(45),
  J:                    describeConst(74),
  K:                    describeConst(75),
  KEYNAME_BEGIN:        describeConst('Begin'),
  KEYNAME_BREAK:        describeConst('Break'),
  KEYNAME_CLEARDISPLAY: describeConst('ClrDsp'),
  KEYNAME_CLEARLINE:    describeConst('ClrLn'),
  KEYNAME_DELETE:       describeConst('Delete'),
  KEYNAME_DELETECHAR:   describeConst('DelChr'),
  KEYNAME_DELETELINE:   describeConst('DelLn'),
  KEYNAME_DOWNARROW:    describeConst('Down'),
  KEYNAME_END:          describeConst('End'),
  KEYNAME_EXECUTE:      describeConst('Exec'),
  KEYNAME_F1:           describeConst('F1'),
  KEYNAME_F10:          describeConst('F10'),
  KEYNAME_F11:          describeConst('F11'),
  KEYNAME_F12:          describeConst('F12'),
  KEYNAME_F13:          describeConst('F13'),
  KEYNAME_F14:          describeConst('F14'),
  KEYNAME_F15:          describeConst('F15'),
  KEYNAME_F16:          describeConst('F16'),
  KEYNAME_F17:          describeConst('F17'),
  KEYNAME_F18:          describeConst('F18'),
  KEYNAME_F19:          describeConst('F19'),
  KEYNAME_F2:           describeConst('F2'),
  KEYNAME_F20:          describeConst('F20'),
  KEYNAME_F21:          describeConst('F21'),
  KEYNAME_F22:          describeConst('F22'),
  KEYNAME_F23:          describeConst('F23'),
  KEYNAME_F24:          describeConst('F24'),
  KEYNAME_F25:          describeConst('F25'),
  KEYNAME_F26:          describeConst('F26'),
  KEYNAME_F27:          describeConst('F27'),
  KEYNAME_F28:          describeConst('F28'),
  KEYNAME_F29:          describeConst('F29'),
  KEYNAME_F3:           describeConst('F3'),
  KEYNAME_F30:          describeConst('F30'),
  KEYNAME_F31:          describeConst('F31'),
  KEYNAME_F32:          describeConst('F32'),
  KEYNAME_F33:          describeConst('F33'),
  KEYNAME_F34:          describeConst('F34'),
  KEYNAME_F35:          describeConst('F35'),
  KEYNAME_F4:           describeConst('F4'),
  KEYNAME_F5:           describeConst('F5'),
  KEYNAME_F6:           describeConst('F6'),
  KEYNAME_F7:           describeConst('F7'),
  KEYNAME_F8:           describeConst('F8'),
  KEYNAME_F9:           describeConst('F9'),
  KEYNAME_FIND:         describeConst('Find'),
  KEYNAME_HELP:         describeConst('Help'),
  KEYNAME_HOME:         describeConst('Home'),
  KEYNAME_INSERT:       describeConst('Insert'),
  KEYNAME_INSERTCHAR:   describeConst('InsChr'),
  KEYNAME_INSERTLINE:   describeConst('InsLn'),
  KEYNAME_LEFTARROW:    describeConst('Left'),
  KEYNAME_MENU:         describeConst('Menu'),
  KEYNAME_MODESWITCH:   describeConst('ModeSw'),
  KEYNAME_NEXT:         describeConst('Next'),
  KEYNAME_PAGEDOWN:     describeConst('PgDn'),
  KEYNAME_PAGEUP:       describeConst('PgUp'),
  KEYNAME_PAUSE:        describeConst('Pause'),
  KEYNAME_PREV:         describeConst('Prev'),
  KEYNAME_PRINT:        describeConst('Print'),
  KEYNAME_PRINTSCREEN:  describeConst('PrntScrn'),
  KEYNAME_REDO:         describeConst('Redo'),
  KEYNAME_RESET:        describeConst('Reset'),
  KEYNAME_RIGHTARROW:   describeConst('Right'),
  KEYNAME_SCROLLLOCK:   describeConst('ScrlLck'),
  KEYNAME_SELECT:       describeConst('Select'),
  KEYNAME_STOP:         describeConst('Stop'),
  KEYNAME_SYSREQ:       describeConst('SysReq'),
  KEYNAME_SYSTEM:       describeConst('Sys'),
  KEYNAME_UNDO:         describeConst('Undo'),
  KEYNAME_UPARROW:      describeConst('Up'),
  KEYNAME_USER:         describeConst('User'),
  L:                    describeConst(76),
  LAST:                 describeConst(0x01000011),
  LEFT:                 describeConst(37),
  LEFTBRACKET:          describeConst(219),
  LIVE:                 describeConst(0x01000010),
  M:                    describeConst(77),
  MASTER_SHELL:         describeConst(0x0100001E),
  MENU:                 describeConst(0x01000012),
  MINUS:                describeConst(189),
  N:                    describeConst(78),
  NEXT:                 describeConst(0x0100000E),
  NUMBER_0:             describeConst(48),
  NUMBER_1:             describeConst(49),
  NUMBER_2:             describeConst(50),
  NUMBER_3:             describeConst(51),
  NUMBER_4:             describeConst(52),
  NUMBER_5:             describeConst(53),
  NUMBER_6:             describeConst(54),
  NUMBER_7:             describeConst(55),
  NUMBER_8:             describeConst(56),
  NUMBER_9:             describeConst(57),
  NUMPAD:               describeConst(21),
  NUMPAD_0:             describeConst(96),
  NUMPAD_1:             describeConst(97),
  NUMPAD_2:             describeConst(98),
  NUMPAD_3:             describeConst(99),
  NUMPAD_4:             describeConst(100),
  NUMPAD_5:             describeConst(101),
  NUMPAD_6:             describeConst(102),
  NUMPAD_7:             describeConst(103),
  NUMPAD_8:             describeConst(104),
  NUMPAD_9:             describeConst(105),
  NUMPAD_ADD:           describeConst(107),
  NUMPAD_DECIMAL:       describeConst(110),
  NUMPAD_DIVIDE:        describeConst(111),
  NUMPAD_ENTER:         describeConst(108),
  NUMPAD_MULTIPLY:      describeConst(106),
  NUMPAD_SUBTRACT:      describeConst(109),
  O:                    describeConst(79),
  P:                    describeConst(80),
  PAGE_DOWN:            describeConst(34),
  PAGE_UP:              describeConst(33),
  PAUSE:                describeConst(0x01000008),
  PERIOD:               describeConst(190),
  PLAY:                 describeConst(0x01000007),
  PREVIOUS:             describeConst(0x0100000F),
  Q:                    describeConst(81),
  QUOTE:                describeConst(222),
  R:                    describeConst(82),
  RECORD:               describeConst(0x01000006),
  RED:                  describeConst(0x01000000),
  REWIND:               describeConst(0x0100000B),
  RIGHT:                describeConst(39),
  RIGHTBRACKET:         describeConst(221),
  S:                    describeConst(83),
  SEARCH:               describeConst(0x0100001F),
  SEMICOLON:            describeConst(186),
  SETUP:                describeConst(0x0100001C),
  SHIFT:                describeConst(16),
  SKIP_BACKWARD:        describeConst(0x0100000D),
  SKIP_FORWARD:         describeConst(0x0100000C),
  SLASH:                describeConst(191),
  SPACE:                describeConst(32),
  STOP:                 describeConst(0x01000009),
  STRING_BEGIN:         describeConst('\uF72A'),
  STRING_BREAK:         describeConst('\uF732'),
  STRING_CLEARDISPLAY:  describeConst('\uF73A'),
  STRING_CLEARLINE:     describeConst('\uF739'),
  STRING_DELETE:        describeConst('\uF728'),
  STRING_DELETECHAR:    describeConst('\uF73E'),
  STRING_DELETELINE:    describeConst('\uF73C'),
  STRING_DOWNARROW:     describeConst('\uF701'),
  STRING_END:           describeConst('\uF72B'),
  STRING_EXECUTE:       describeConst('\uF742'),
  STRING_F1:            describeConst('\uF704'),
  STRING_F10:           describeConst('\uF70D'),
  STRING_F11:           describeConst('\uF70E'),
  STRING_F12:           describeConst('\uF70F'),
  STRING_F13:           describeConst('\uF710'),
  STRING_F14:           describeConst('\uF711'),
  STRING_F15:           describeConst('\uF712'),
  STRING_F16:           describeConst('\uF713'),
  STRING_F17:           describeConst('\uF714'),
  STRING_F18:           describeConst('\uF715'),
  STRING_F19:           describeConst('\uF716'),
  STRING_F2:            describeConst('\uF705'),
  STRING_F20:           describeConst('\uF717'),
  STRING_F21:           describeConst('\uF718'),
  STRING_F22:           describeConst('\uF719'),
  STRING_F23:           describeConst('\uF71A'),
  STRING_F24:           describeConst('\uF71B'),
  STRING_F25:           describeConst('\uF71C'),
  STRING_F26:           describeConst('\uF71D'),
  STRING_F27:           describeConst('\uF71E'),
  STRING_F28:           describeConst('\uF71F'),
  STRING_F29:           describeConst('\uF720'),
  STRING_F3:            describeConst('\uF706'),
  STRING_F30:           describeConst('\uF721'),
  STRING_F31:           describeConst('\uF722'),
  STRING_F32:           describeConst('\uF723'),
  STRING_F33:           describeConst('\uF724'),
  STRING_F34:           describeConst('\uF725'),
  STRING_F35:           describeConst('\uF726'),
  STRING_F4:            describeConst('\uF707'),
  STRING_F5:            describeConst('\uF708'),
  STRING_F6:            describeConst('\uF709'),
  STRING_F7:            describeConst('\uF70A'),
  STRING_F8:            describeConst('\uF70B'),
  STRING_F9:            describeConst('\uF70C'),
  STRING_FIND:          describeConst('\uF745'),
  STRING_HELP:          describeConst('\uF746'),
  STRING_HOME:          describeConst('\uF729'),
  STRING_INSERT:        describeConst('\uF727'),
  STRING_INSERTCHAR:    describeConst('\uF73D'),
  STRING_INSERTLINE:    describeConst('\uF73B'),
  STRING_LEFTARROW:     describeConst('\uF702'),
  STRING_MENU:          describeConst('\uF735'),
  STRING_MODESWITCH:    describeConst('\uF747'),
  STRING_NEXT:          describeConst('\uF740'),
  STRING_PAGEDOWN:      describeConst('\uF72D'),
  STRING_PAGEUP:        describeConst('\uF72C'),
  STRING_PAUSE:         describeConst('\uF730'),
  STRING_PREV:          describeConst('\uF73F'),
  STRING_PRINT:         describeConst('\uF738'),
  STRING_PRINTSCREEN:   describeConst('\uF72E'),
  STRING_REDO:          describeConst('\uF744'),
  STRING_RESET:         describeConst('\uF733'),
  STRING_RIGHTARROW:    describeConst('\uF703'),
  STRING_SCROLLLOCK:    describeConst('\uF72F'),
  STRING_SELECT:        describeConst('\uF741'),
  STRING_STOP:          describeConst('\uF734'),
  STRING_SYSREQ:        describeConst('\uF731'),
  STRING_SYSTEM:        describeConst('\uF737'),
  STRING_UNDO:          describeConst('\uF743'),
  STRING_UPARROW:       describeConst('\uF700'),
  STRING_USER:          describeConst('\uF736'),
  SUBTITLE:             describeConst(0x01000018),
  T:                    describeConst(84),
  TAB:                  describeConst(9),
  U:                    describeConst(85),
  UP:                   describeConst(38),
  V:                    describeConst(86),
  VOD:                  describeConst(0x0100001A),
  W:                    describeConst(87),
  X:                    describeConst(88),
  Y:                    describeConst(89),
  YELLOW:               describeConst(0x01000002),
  Z:                    describeConst(90),
});

Object.defineProperties(Keyboard, {
  CharCodeStrings:      describeConst([
    Keyboard.KEYNAME_BEGIN,
    Keyboard.KEYNAME_BREAK,
    Keyboard.KEYNAME_CLEARDISPLAY,
    Keyboard.KEYNAME_CLEARLINE,
    Keyboard.KEYNAME_DELETE,
    Keyboard.KEYNAME_DELETECHAR,
    Keyboard.KEYNAME_DELETELINE,
    Keyboard.KEYNAME_DOWNARROW,
    Keyboard.KEYNAME_END,
    Keyboard.KEYNAME_EXECUTE,
    Keyboard.KEYNAME_F1,
    Keyboard.KEYNAME_F10,
    Keyboard.KEYNAME_F11,
    Keyboard.KEYNAME_F12,
    Keyboard.KEYNAME_F13,
    Keyboard.KEYNAME_F14,
    Keyboard.KEYNAME_F15,
    Keyboard.KEYNAME_F16,
    Keyboard.KEYNAME_F17,
    Keyboard.KEYNAME_F18,
    Keyboard.KEYNAME_F19,
    Keyboard.KEYNAME_F2,
    Keyboard.KEYNAME_F20,
    Keyboard.KEYNAME_F21,
    Keyboard.KEYNAME_F22,
    Keyboard.KEYNAME_F23,
    Keyboard.KEYNAME_F24,
    Keyboard.KEYNAME_F25,
    Keyboard.KEYNAME_F26,
    Keyboard.KEYNAME_F27,
    Keyboard.KEYNAME_F28,
    Keyboard.KEYNAME_F29,
    Keyboard.KEYNAME_F3,
    Keyboard.KEYNAME_F30,
    Keyboard.KEYNAME_F31,
    Keyboard.KEYNAME_F32,
    Keyboard.KEYNAME_F33,
    Keyboard.KEYNAME_F34,
    Keyboard.KEYNAME_F35,
    Keyboard.KEYNAME_F4,
    Keyboard.KEYNAME_F5,
    Keyboard.KEYNAME_F6,
    Keyboard.KEYNAME_F7,
    Keyboard.KEYNAME_F8,
    Keyboard.KEYNAME_F9,
    Keyboard.KEYNAME_FIND,
    Keyboard.KEYNAME_HELP,
    Keyboard.KEYNAME_HOME,
    Keyboard.KEYNAME_INSERT,
    Keyboard.KEYNAME_INSERTCHAR,
    Keyboard.KEYNAME_INSERTLINE,
    Keyboard.KEYNAME_LEFTARROW,
    Keyboard.KEYNAME_MENU,
    Keyboard.KEYNAME_MODESWITCH,
    Keyboard.KEYNAME_NEXT,
    Keyboard.KEYNAME_PAGEDOWN,
    Keyboard.KEYNAME_PAGEUP,
    Keyboard.KEYNAME_PAUSE,
    Keyboard.KEYNAME_PREV,
    Keyboard.KEYNAME_PRINT,
    Keyboard.KEYNAME_PRINTSCREEN,
    Keyboard.KEYNAME_REDO,
    Keyboard.KEYNAME_RESET,
    Keyboard.KEYNAME_RIGHTARROW,
    Keyboard.KEYNAME_SCROLLLOCK,
    Keyboard.KEYNAME_SELECT,
    Keyboard.KEYNAME_STOP,
    Keyboard.KEYNAME_SYSREQ,
    Keyboard.KEYNAME_SYSTEM,
    Keyboard.KEYNAME_UNDO,
    Keyboard.KEYNAME_UPARROW,
    Keyboard.KEYNAME_USER
  ])
});
