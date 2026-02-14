/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to personalize the greeting
 * @returns A greeting message string
 */
export function hello(name?: string): string {
  if (name && typeof name === 'string' && name.trim().length > 0) {
    return `Hello, ${name.trim()}!`;
  }
  return 'Hello, World!';
}

/**
 * Default export for convenience
 */
export default hello;