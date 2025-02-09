function isPalindrome(s: string): boolean {
  let left: number = 0;
  let right: number = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(s: string): boolean {
  const charCode: number = s.charCodeAt(0);

  return (
    (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) ||
    (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) ||
    (charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0))
  );
}
