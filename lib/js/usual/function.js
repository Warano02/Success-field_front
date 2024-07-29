/**
 * 
 * @param {Array} list 
 * @param {string} searchTerm 
 * @returns boolean
 */
export function find(list, searchTerm) {
  const filteredArr = list.filter((item) => item === searchTerm);
  if (filteredArr.length > 0) {
    return true;
  } else {
    return false;
  }
}
/**
 * 
 * @param {string} num 
 * @returns boolean
 */
export function tel(num) {
    const to = num.split("");
    if (to.length < 9 || (to.length > 9 && to.length < 12) || to.length > 13) {
      return false;
    } else {
      const nbr = to.length;
      switch (nbr) {
        case 9:
          if (to[0] !== "6") {
            return false;
          } else {
            return true;
          }
          break;
        case 12:
          if (to[0] === "0" && to[1] === "0" && to[2] === "0" && to[3] === "6") {
            return true;
          } else {
            return false;
          }
          break;
        case 13:
          if (
            to[0] !== "+" ||
            to[1] !== "2" ||
            to[2] !== "3" ||
            to[3] !== "7" ||
            to[4] !== "6"
          ) {
            return false;
          } else {
            return true;
          }
          break;
        default:
          return false;
          break;
      }
    }
  }




