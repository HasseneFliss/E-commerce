import { hello } from './hello';

describe('hello function', () => {
  it('should return "Hello, World!" when no name is provided', () => {
    expect(hello()).toBe('Hello, World!');
  });

  it('should return personalized greeting when name is provided', () => {
    expect(hello('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string', () => {
    expect(hello('')).toBe('Hello, World!');
  });

  it('should handle whitespace-only string', () => {
    expect(hello('   ')).toBe('Hello, World!');
  });

  it('should trim whitespace from name', () => {
    expect(hello('  Bob  ')).toBe('Hello, Bob!');
  });

  it('should handle non-string input gracefully', () => {
    expect(hello(undefined)).toBe('Hello, World!');
  });
});