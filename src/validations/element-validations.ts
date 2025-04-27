export function isAtLeastOneInputChecked(elements: HTMLInputElement[]): boolean {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) return true;
  }

  return false;
}