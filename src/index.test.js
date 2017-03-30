import sensitiveWords from '.'

let expected = 'The constant in software is ***';
let originalText = 'The constant in software is change';
test('replaces sensitive words with 3 asterisk', 
    () => (
    expect(sensitiveWords(originalText, ['change'])).toBe(expected)
))
