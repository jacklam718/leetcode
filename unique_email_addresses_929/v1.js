/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const uniqueEmails = [];
  for (let email of emails) {
    let [localname, domainname] = email.split('@');
    if (localname.indexOf('+') > -1) {
      localname = localname.substr(0, localname.indexOf('+'));  
    }
    while (localname.includes('.')) {
      localname = localname.replace('.', '');  
    }
    email = `${localname}@${domainname}`;
    if (!uniqueEmails.includes(email)) {
      uniqueEmails.push(email);
    }
  }
  return uniqueEmails.length;
};
