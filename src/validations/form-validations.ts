import {isAlpha} from "../index";

export function isValidPhoneNumber(str: string): boolean {
  // Remove + () - and spaces
  str.replace("\\s+", "");
  str.replace("(", "");
  str.replace(")", "");
  str.replace("+", "");
  str.replace("-", "");

  // Check length. 3 for Area Code, 7 for num
  if (str.length !== 10) return false;

  // Check if valid number
  if (isNaN(parseInt(str))) {
    return false;
  }

  return true;
}

export function isValidEmail(str: string): boolean {
  // Validate exists
  if (!str) return false;

  // Regular expression for validating email format
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(str);
}

export function isValidEmailAndConfirmEmail(email: string, confirmEmail: string) {
  if (email !== confirmEmail) return false;

  if (!isValidEmail(email)) return false;

  return true;
}

export function isValidName(str: string): boolean {
  if (!str) return false;

  if (!isAlpha(str)) return false;

  return true;
}