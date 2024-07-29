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
