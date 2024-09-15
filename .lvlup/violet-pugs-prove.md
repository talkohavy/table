---
"@talkohavy/table": patch
---

Table is now using useColumnResizeHook, but it's still imperfect. Currently there's a workaround of doing "isFullSize ? '100%' : getCenterTotalSize()", but it needs to be better
