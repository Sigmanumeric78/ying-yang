# Canvas Size Limit and Resize Event Fixes

## Issues Fixed

### 1. Canvas Exceeds Max Size Error
**Problem**: Chart.js was creating canvases larger than the browser's maximum limit (~16,384px), causing `DOMException: Canvas exceeds max size` errors.

**Solution**: 
- Added device pixel ratio limiting in `frontend/src/ts/controllers/chart-controller.ts`
- Limited the maximum device pixel ratio to 2 (instead of using the full device pixel ratio which can be 3-4 on high DPI displays)
- Added dynamic canvas size checking to ensure the scaled canvas never exceeds 16,000px
- Added max-width and max-height constraints to chart canvases in CSS

### 2. Multiple Resize Events in Loop
**Problem**: Resize events were being triggered repeatedly, causing infinite loops and performance issues.

**Solution**:
- Added debouncing to the `triggerResize()` function in `frontend/src/ts/utils/misc.ts`
- Resize events are now debounced with a 100ms delay to prevent rapid-fire resize triggers
- This prevents the chart from being resized multiple times in quick succession

### 3. Font Warning
**Problem**: Roboto Mono font had a corrupted glyph causing warnings.

**Solution**:
- Added better font fallbacks in `frontend/src/styles/core.scss`
- Font stack now includes: "Roboto Mono", "JetBrains Mono", "Fira Code", "Vazirmatn", "Courier New", monospace
- This ensures a valid font is always available if Roboto Mono has issues

## Files Modified

1. **frontend/src/ts/controllers/chart-controller.ts**
   - Added canvas size limiting logic
   - Added device pixel ratio limiting to prevent oversized canvases

2. **frontend/src/ts/utils/misc.ts**
   - Added debouncing to `triggerResize()` function

3. **frontend/src/styles/core.scss**
   - Improved font fallback stack

4. **frontend/src/styles/test.scss**
   - Added max-width and max-height constraints to result chart canvas

5. **frontend/src/styles/account.scss**
   - Added max-width and max-height constraints to account chart canvases

6. **frontend/src/styles/popups.scss**
   - Added max-width constraint to mini result chart modal canvas

## Technical Details

### Canvas Size Calculation
The fix works by:
1. Detecting the device pixel ratio
2. Limiting it to a maximum of 2
3. Calculating the resulting canvas size
4. If the size exceeds 16,000px, further reducing the ratio
5. Applying the safe ratio to the canvas

### Resize Debouncing
The debounce mechanism:
1. Clears any pending resize timeout
2. Sets a new timeout for 100ms
3. Only triggers the resize event after the timeout completes
4. Prevents multiple rapid resize calls from stacking up

## Testing
After these fixes, the application should:
- No longer show canvas size errors in the console
- Have smooth chart resizing without infinite loops
- Display fonts correctly without warnings
- Work properly on high DPI displays (4K, Retina, etc.)

