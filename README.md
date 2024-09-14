# @talkohavy/table

## 1. Supported Features

1. Row Virtualization
2. Row selection
3. Sticky Headers
4. Click on row
5. Pagination
6. Infinite scroll
7. Load more data when reaching bottom
8. Custom css hooks for styling

## 2. List of known problems

1. **Double-render**. For some reason, row selection has to be a dependency for when calculating _columnDefs_ in order for selected rows which were checked using the checkbox to appear as such in the next render. In the example shown in **@tanstack/table** it seemed like that isn't necessary. Need to check.
