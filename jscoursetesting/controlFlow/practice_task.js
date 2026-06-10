let userType = "subscriber";
let userAccess;

switch (userType) {
    case "employee":
        userCategory = "You have Authorized Access to Dietary Services";
        break;
    case "enrolledMember":
        userCategory = "You have Authorized Access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "subscriber":
        userCategory = "You have Partial Access to Dietary Services";
        break;
    default:
        userCategory = "You need to enroll or at least subscribe first to avail this facility.";
}

console.log("User Access: ", userAccess);