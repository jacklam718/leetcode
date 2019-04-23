/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const uniqueEmails = new Set();
  for (let email of emails) {
    let [localname, domainname] = email.split('@');
    localname = localname.split('+')[0];
    localname = localname.split('.').join('');
    email = `${localname}@${domainname}`;
    uniqueEmails.add(email);
  }
  return uniqueEmails.size;
};
