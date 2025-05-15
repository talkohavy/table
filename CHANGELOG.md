# @talkohavy/table

## 1.0.6

### Patch Changes

- Fixed table header disappearing.

## 1.0.5

### Patch Changes

- BUGFIX: must use the updater function and not the value inside of useCOlumnOrder.

## 1.0.4

### Patch Changes

- Added ability to store size of resized columns so that you could potentially persist each column's width upon a page refresh.
- BugFix: Added initial column order validation. If the user fills an initialState of say `['id']`, we fill in the rest of the column ids.
- The onColumnOrderChange, which the user passes, is now injected with the new columnOrder instead of with the updater function.
- The onColumnSizingChange which the user passes now injected with the new columnSizing value instead of with the updater function.

## 1.0.3

### Patch Changes

- Updated the README.md file.

## 1.0.2

### Patch Changes

- Made the column swapping Table-specific.
- Added option allowColumnReorder.
- Added a `shouldAnimate` prop that the user can now control and pass onto the Table.
- Column Reorder feature now comes with animation. Currently, it is always set to "on".
- DefaultFilter styles were converted from tailwind to css modules.

## 1.0.1

### Patch Changes

- ColumnVisibilitySlider - now supports dark mode.
- In TableProps, visibleColumns & onVisibleColumnsChange should have been optional.
- ColumnVisibilitySlider is now fully customizable.

## 1.0.0

### Major Changes

- Major Release!
  Finally we're out with a stable version.
We've added a few more features too. - Supporting column visibility using a slider.
- ellipsised td's are now the default.
- Columns fills the entire table's width.
- Columns can grow larger than the table's width.

## 0.0.23

### Patch Changes

- Added more control over columns widths.

## 0.0.22

### Patch Changes

- Make checkbox of table headers align with table cells.

## 0.0.21

### Patch Changes

- Table now stretches to fill its container's width. It can even grow wider than its container.

## 0.0.20

### Patch Changes

- Dependencies were wrong. Build process was wrong. FIXED!

## 0.0.19

### Patch Changes

- Paths of both index.js & index.d.ts under exports down at the package.json were wrong. FIXED!

## 0.0.18

### Patch Changes

- Bundle the package as js, not just as ts.
- Exporting types now. Also, we're only allowing exports from index.js.

## 0.0.17

### Patch Changes

- protect against page crush when switching from infinite scroll mode to pagination

## 0.0.16

### Patch Changes

- added a description to package.json and to README.md file

## 0.0.15

### Patch Changes

- added more sections to the readme file

## 0.0.14

### Patch Changes

- added a homepage to packacge.json

## 0.0.13

### Patch Changes

- table width issue: added a known problem to list in side of README.md

## 0.0.12

### Patch Changes

- Table is now using useColumnResizeHook, but it's still imperfect. It affected the table's ability to go 100% in width.
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
