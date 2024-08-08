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
  const position = (email) => {
    let position;
    for (let i = 0; i < email.length; i++) {
      const element = email[i];
      if (element === "@") {
        position = i;
      }
    }
    return position;
  };
  const rest = (email) => {
    const actuelle = email.split("");
    const rest = [];
    for (let i = position(actuelle) + 1; i < actuelle.length; i++) {
      rest.push(actuelle[i]);
    }
    let thanks = "";
    rest.forEach((element) => {
      thanks += element;
    });
    return thanks;
  };
  let i = 0;
  let find = false;
  while (i != mailV.length) {
    if (mailV[i] === rest(email)) {
      find = true;
      break;
    }
    i++;
  }
  return find;
}
/**
 * 
 * @param {string} href : it's a link of a page that whe are
 * @returns string : Where the request come from and we need to go after logIn
 */
export  function location(href) {
  let i = href.indexOf("=")+1, mot = ""
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