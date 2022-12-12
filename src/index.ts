// all stop words that should not be used in the index for full text search
const stopWords = [" ", "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with", "you", "us", "we", "i", "am", "any", "our", "so", "also", "thus", "have", "had", "got", "get", "has", "can", "could", "cannot", "would", "he", "his", "she", "her"];

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
    return deduplicate(input.replace(/[^a-zA-Z0-9 ]/g, ' ').toLowerCase().split(" ").filter(token => !stopWords.includes(token) && token.length > 0));
}

const suffixes = ["s", "ing", "ed", "ally", "ously", "es", "ity", "ly", "le", "ion", "ive", "e", "ice", "ar", "us", "ility", "ful", "less"]
const prefixes = ["un", "ir", "in", "im", "pre", "anti", "de", "dis", "em", "non", "pro", "uni"]

/**
 * Stems tokens
 * @param input The tokens to stem 
 * @returns The stemmed tokens
 */
export const stem = (input: string[]): string[] => {
    return deduplicate(input.map(token => {
        for (const ending of suffixes) {
            if (token.endsWith(ending)) {
                return token.substring(0, token.length - ending.length);
            }
        }
        return token;
    }).map(token => {
        for (const prefix of prefixes) {
            if (token.startsWith(prefix)) {
                return token.substring(prefix.length);
            }
        }
        return token;
    }));
}