// all stop words that should not be used in the index for full text search
const stopWords = [" ", "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"];

/**
 * Removes all duplicate entries from an array
 * @param array The array to remove duplicates from
 * @returns The array without duplicates
 */
const deduplicate = (array: string[]): string[] => {
    return [...new Set(array)];
}

/**
 * Tokenizes a string and removes all stop words
 * @param input The string to tokenize
 * @returns The tokens of the input string
 */
export const tokenize = (input: string): string[] => {
    return deduplicate(input.replace(/[^a-zA-Z0-9 ]/g, ' ').toLowerCase().split(" ").filter(token => !stopWords.includes(token)));
}