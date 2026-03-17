let el = document.querySelector("#wordsInput") as HTMLTextAreaElement | null;

if (el === null) {
  console.warn(
    "Words input element (#wordsInput) not found at module load time. " +
      "Will retry on first access."
  );
}

export function getInputElement(): HTMLTextAreaElement {
  if (el === null) {
    el = document.querySelector("#wordsInput") as HTMLTextAreaElement | null;
    if (el === null) {
      console.warn(
        "Words input element (#wordsInput) still not found. " +
          "Some input functionality will be unavailable."
      );
      // Return a dummy textarea so callers don't crash
      el = document.createElement("textarea") as HTMLTextAreaElement;
      el.id = "wordsInput";
      el.style.display = "none";
      document.body.appendChild(el);
    }
  }
  return el;
}

export function setInputElementValue(value: string): void {
  el.value = " " + value;
}

export function appendToInputElementValue(value: string): void {
  el.value += value;
}

export function getInputElementValue(): {
  inputValue: string;
  realInputValue: string;
} {
  return {
    inputValue: el.value.slice(1),
    realInputValue: el.value,
  };
}

export function moveInputElementCaretToTheEnd(): void {
  el.setSelectionRange(el.value.length, el.value.length);
}

export function replaceInputElementLastValueChar(char: string): void {
  const { inputValue } = getInputElementValue();
  setInputElementValue(inputValue.slice(0, -1) + char);
}

export function isInputElementFocused(): boolean {
  return document.activeElement === el;
}

export function focusInputElement(preventScroll = false): void {
  el.focus({
    preventScroll,
  });
}

export function blurInputElement(): void {
  el.blur();
}
