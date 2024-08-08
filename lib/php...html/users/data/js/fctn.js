const mailV = ["gmail.com", "yahoo.cm", "yahoo.com"];
/**
 *
 * @param {Int16Array} lv
 * @returns bool
 */

export function verifNiveau(lv) {
  if (lv < 0 || lv > 7) {
    return false;
  } else {
    return true;
  }
}

/**
 *
 * @param {string} ddp
 * @returns bool
 */

export function verif(ddp) {
  return ddp.length > 8;
}

/**
 *
 * @param {string} a
 * @param {string} b
 * @returns bool
 */

export function verifie(a, b) {
  return !(a !== b);
}

/**
 *
 * @param {string} email
 * @returns bool
 */

export function vE(email) {
  const mail = new RegExp(/^\w{3,}\@(gmail|yahoo|outlook).(com|fr|cm)$/)
  return mail.test(email)
}
/**
 * 
 * @param {string} href : it's a link of a page that whe are
 * @returns string : Where the request come from and we need to go after logIn
 */
export function location(href) {
  let i = href.indexOf("=") + 1, mot = ""
  for (; i < href.length; i++) {
    mot += href[i]
  }
  return mot
}
/**
 * 
 * @param {string} num 
 * @returns boolean
 */
export function tel(num) {
  const tel = new RegExp(/(0{1,3}|237|\+237|)6\d{8}$/)
  return tel.test(num)
}
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