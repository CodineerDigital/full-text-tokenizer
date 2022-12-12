// all stop words that should not be used in the index for full text search
const stopWords = [" ", "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"];

export const tokenize = (input: string): string[] => {
    return input.replace(/[^a-zA-Z0-9 ]/g, ' ').toLowerCase().split(" ").filter(token => !stopWords.includes(token));
}