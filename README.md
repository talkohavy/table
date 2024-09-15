# @talkohavy/table

<p align="center">
  <img src="https://i.ibb.co/n3bF7yS/table-light.png" width="800" alt="table light mode" />
</p>

<p align="center">
  <img src="https://i.ibb.co/hXB4MCf/table-light.png" width="800" alt="table dark mode" />
</p>

## 1. Supported Features

1. Row Virtualization
2. Row selection (Multi & Single)
3. Sticky Headers
4. Sorting (including multi-sort)
5. Column Resizing
6. Group Headers
7. Pagination
8. Infinite scroll
9. onRowClick event
10. Load more data when reaching bottom
11. ⭐️**Highly customizable**⭐️ with custom css hooks for personal styling

## 2. List of known problems

1. **Double-render**. For some reason, row selection has to be a dependency for when calculating _columnDefs_ in order for selected rows which were checked using the checkbox to appear as such in the next render. In the example shown in **@tanstack/table** it seemed like that isn't necessary. Need to check.
