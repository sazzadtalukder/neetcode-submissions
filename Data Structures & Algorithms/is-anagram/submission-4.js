class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)return false;
        const mapS = new Map();
        for(const char of s){
            if(mapS.has(char)){
                mapS.set(char, mapS.get(char)+1)
            }
            else mapS.set(char, 1)
        }
        const mapT = new Map();
        for(const char of t){
            if(mapT.has(char)){
                mapT.set(char, mapT.get(char)+1)
            }
            else mapT.set(char, 1)
        }
        if(mapS.size !== mapT.size) return false;
        for(const [key,value] of mapS){
            if(!mapT.has(key) || mapT.get(key)!== value) return false
        }
        return true
    }
}
