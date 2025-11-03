const currentUser = ['user', 'editor', 'manager'];

const featureAccessUser = ['admin', 'manager'];

const canAccess = currentUser.some((role) => featureAccessUser.includes(role));


console.log(canAccess);