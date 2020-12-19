export function hashCode(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        const character = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
