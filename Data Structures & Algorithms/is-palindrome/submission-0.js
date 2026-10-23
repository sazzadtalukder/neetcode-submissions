class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newArr = [];
        for (const c of s) {
            if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) newArr.push(c);
            else if (c >= "A" && c <= "Z") {
                newArr.push(c.toLowerCase());
            }
        }
        let left = 0;
        let right = newArr.length - 1;
        while (left < right) {
            if (newArr[left] != newArr[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
