// Problem-5: isBestFriend
/* if 1st friend tells that 2nd friend is his friend and similarly 2nd friend tells that 1st friend is also his friend, then they both are best friends. */

const friend1 = {
    name: 'junaed',
    friend: 'Khandker'
}

const friend2 = {
    name: 'Khandker',
    friend: 'junaed'
}

function isBestFriend(firstFriend, secondFriend) {
    // check if the data type isn't a object 
    if (typeof firstFriend != 'object' || typeof secondFriend != 'object') {
        return 'Please Insert the object';
    }
    // Compare the name and friend properties of the two objects 
    else {
        if (firstFriend.name.toLowerCase() == secondFriend.friend.toLowerCase() && firstFriend.friend.toLowerCase() == secondFriend.name.toLowerCase()) {
            return true;
        }
        return false;
    }
}

let result = isBestFriend(friend1, friend2);
console.log(result);