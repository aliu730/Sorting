var longestPalindrome = function(s) {
    const dp = new Array(s.length).fill().map(() => new Array(s.length).fill(false));
    let maxLength = '';
    // We want to establish a start to finish for all palindromes in the 1 character case idx 0 - length
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        maxLength = s[i];
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i+1]) dp[i][i+1] = true;
        if (dp[i][i+1] && s.substring(i, i+2).length > maxLength.length) {
            maxLength = s.substring(i, i+2);
        }
    }
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] == s[j];
            if (dp[i+1][j-1] && s[i] == s[j]) {
                if (s.substring(i, j+1).length > maxLength.length) {
                    maxLength = s.substring(i, j+1);
                }
            }
        }
    }
    return maxLength;
};