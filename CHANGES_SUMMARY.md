# Changes Summary

This document lists all the changes made to the Whitespaces project.

---

## 1. Tooltip Filter for Chart Hover

### Files Modified
- `frontend/src/ts/controllers/chart-controller.ts`

### Changes Made
Added `filter` callbacks to the tooltip configuration to hide specific datasets when hovering over charts:

#### Result Chart (Lines 277-280)
```typescript
filter: function (tooltipItem): boolean {
  // Hide raw (1), errors (2), and burst (3) - only show wpm (0)
  return tooltipItem.datasetIndex === 0;
},
```

#### MiniResult Chart (Lines 1019-1022)
```typescript
filter: function (tooltipItem): boolean {
  // Hide burst (1) and errors (2) - only show wpm (0)
  return tooltipItem.datasetIndex === 0;
},
```

### Effect
- When hovering over the result chart, only WPM data is shown in the tooltip
- Raw WPM, burst speed, and error markers are hidden from tooltips
- Account history chart already had filtering in place for pb and average lines

---

## 2. Removed Chart Legend Buttons

### Files Modified
- `frontend/index.html`
- `frontend/src/html/pages/test-result.html`

### Changes Made
Removed the entire `<div class="chartLegend">` section from both files, which contained 6 buttons:
- **scale** - Toggle graph scale (start at zero)
- **pb** - Show/hide personal best line
- **tag-pb** - Show/hide tag personal best line
- **raw** - Show/hide raw WPM line
- **burst** - Show/hide burst speed line
- **errors** - Show/hide error markers

### Removed HTML
```html
<div class="chartLegend">
  <button class="text active" tabindex="-1" data-id="scale">
    <i class="fas fa-chart-line"></i>
    <div class="text">scale</div>
  </button>
  <button class="text" tabindex="-1" data-id="pbLine">
    <i class="fas fa-crown"></i>
    <div class="text">pb</div>
  </button>
  <button class="text" tabindex="-1" data-id="tagPbLine">
    <i class="fas fa-tag"></i>
    <div class="text">tag pb</div>
  </button>
  <button class="text" tabindex="-1" data-id="raw">
    <div class="line dashed"></div>
    <div class="text">raw</div>
  </button>
  <button class="text" tabindex="-1" data-id="burst">
    <div class="line"></div>
    <div class="text">burst</div>
  </button>
  <button class="text" tabindex="-1" data-id="errors">
    <i class="fas fa-times"></i>
    <div class="text">errors</div>
  </button>
</div>
```

### Effect
- Chart legend buttons no longer appear in the test result section
- Users cannot toggle visibility of these chart elements from the UI

---

## 3. Default Visibility Settings

### Files Modified
- `frontend/src/ts/test/result.ts`

### Changes Made
Updated the `resultChartDataVisibility` fallback values to hide chart datasets by default (Lines 1133-1137):

**Before:**
```typescript
fallback: {
  raw: true,
  burst: true,
  errors: true,
  pbLine: true,
  tagPbLine: true,
},
```

**After:**
```typescript
fallback: {
  raw: false,
  burst: false,
  errors: false,
  pbLine: false,
  tagPbLine: false,
},
```

### Effect
- Raw WPM line is hidden by default
- Burst speed line is hidden by default
- Error markers are hidden by default
- Personal best line is hidden by default
- Tag personal best line is hidden by default
- Only WPM line is visible on the chart by default

---

## Summary of Visible Chart Elements

After all changes, the following elements remain visible:

### On the Chart
- WPM line (main chart data)

### In Tooltip on Hover
- WPM value at hovered point

### Hidden Elements
- Raw WPM line
- Burst speed line
- Error markers
- Personal best line
- Tag personal best line
- All legend/toggle buttons

---

## Notes

- The JavaScript functions that handle chart data visibility toggling (`updateResultChartDataVisibility`) are still present in the codebase but are no longer accessible via UI
- Users with existing localStorage values for `resultChartDataVisibility` will retain their previous visibility settings until they clear their browser data
- The chart canvas and all other result page functionality remain intact