export function isAlpha(str: string): boolean {
  const alphaRegex: RegExp = /^[a-zA-Z]+$/;
  return alphaRegex.test(str);
}

export function isAlphaWithSpaces(str: string): boolean {
  const alphaRegex: RegExp = /^[A-Za-z\s]+$/;
  return alphaRegex.test(str);
}

export function isAlphaNum(str: string): boolean {
  const alphaNumRegex: RegExp = /^[a-zA-Z0-9]+$/;
  return alphaNumRegex.test(str);
}

export function isAlphaNumWithSpaces(str: string): boolean {
  const alphaNumRegex: RegExp = /^[a-zA-Z0-9\s]+$/;
  return alphaNumRegex.test(str);
}

export function isLengthBetween(str: string, minLength: number, maxLength: number): boolean {
  // Validate exists
  if (!str) return false;

  // Check lengths
  return !(str.length < minLength || str.length > maxLength);
}