# @talkohavy/table

## 1. Supported Features

1. Row Virtualization
2. Row selection
3. Click on row
4. Pagination
5. Infinite scroll
6. Load more data when reaching bottom
7. Custom css hooks for styling

## 2. List of known problems

1. **The price paid for having sticky headers when scrolling was heavy**:
   - Table doesn't support header groups (it can be done, it just doesn't look right css-wise)
   - scroll up makes the group headers appear behind value headers
   - `white-space` of `th` **has** to be `nowrap`, since breaking to a new line makes some headers higher then other, and styles break.
2. **Double-render**. For some reason, row selection has to be a dependency for when calculating _columnDefs_ in order for selected rows which were checked using the checkbox to appear as such in the next render. In the example shown in **@tanstack/table** it seemed like that isn't necessary. Need to check.
