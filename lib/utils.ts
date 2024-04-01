export const validateString = (value: unknown, minLength: number, maxLengh: number): boolean => {
  if (!value || typeof(value) !== "string" || value.length > maxLengh || value.length < minLength) return false;
  return true;
};

export const getErrorMessage = (err: unknown): string => {
  if (err instanceof Error) {
    return err.message;
  }
  if (err && typeof err === "object" && "message" in err) {
    return String(err.message);
  }
  if (typeof err === "string") {
    return err;
  }
  return "Failed to send email. Unknown error.";
};