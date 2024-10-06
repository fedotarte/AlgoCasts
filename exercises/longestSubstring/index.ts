function lengthOfLongestSubstring(s: string): number {
    let max_len = 0, curr = 0;
    const hashMap = new Map<string, number>();
    if(s.length < 2) {
        return s.length;
    }
    s.split("").forEach((char, i)=>{
        if(hashMap.has(char)) {
            curr = Math.min(i - (hashMap.get(char) ?? 0), curr + 1);
        } else {
            curr += 1;
        }
        max_len = Math.max(max_len, curr);
        hashMap.set(char, i);
    })
    return max_len;
}
