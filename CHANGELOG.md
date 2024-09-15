# @talkohavy/table

## 0.0.12

### Patch Changes

- Table is now using useColumnResizeHook, but it's still imperfect. Currently there's a workaround of doing "isFullSize ? '100%' : getCenterTotalSize()", but it needs to be better
- added table images to the README.md file, one in light mode & one dark mode

## 0.0.11

### Patch Changes

- fixed white-space nowrap issue.
- fixed support for group headers - now is available !

## 0.0.10

### Patch Changes

- same code - different folder structure

## 0.0.9

### Patch Changes

- TableBody component now only gets getRowModel & onCellClick. Now it is the one which is responsible for calculating the virtual rows.
- encapsulated the reach to bottom mechanism of the table - useReachToBottomMechanism
- encapsulated another Table functionality: useFilterHook

## 0.0.8

### Patch Changes

- Table now supports basic sorting and also multi-sorting

## 0.0.7

### Patch Changes

- better handling the switch between pagination mode and infinite scroll mode
- added a README.md file

## 0.0.6

### Patch Changes

- changed the handling way of the outerRef

## 0.0.5

### Patch Changes

- added white-space nowrap to table headers. because of sticky solution to th, header value cannot wrap

## 0.0.4

### Patch Changes

- supporting row selection now

## 0.0.3

### Patch Changes

- Table supports pagination now
- exposing a new component of TableFooter

## 0.0.2

### Patch Changes

- table css made perfect
- removed unnecessary responsibilities from table

## 0.0.1

### Patch Changes

- first release
