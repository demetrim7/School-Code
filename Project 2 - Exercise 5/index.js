const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.unshift("BRUTUS");

console.log(guests); //I can verify that "BRUTUS" is added by logging the console or by calling guest in the terminal. You can check the first element by calling guests[0].

guests.push("AUGUSTUS", "LUCIA");

const indexOfSpartacus = guests.indexOf("SPARTACUS"); //The value of indexOfSpartacus if Spartacus is not invited would be -1.

const indexOfCassius = guests.indexOf("CASSIUS");

guests.splice(indexOfCassius, 1);

const specialFriends = guests.slice(0, 3);

console.log(specialFriends);

const specialGuest = guests.splice(0, 1);
const otherGuests = guests.slice(1);

otherGuests.sort();

const finalList = specialGuest.concat(otherGuests);

console.log(finalList);