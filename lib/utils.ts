export const validateString = (value: unknown, minLength: number, maxLengh: number): boolean => {
  if (!value || typeof(value) !== "string" || value.length > maxLengh || value.length < minLength) return false;
  return true;
};