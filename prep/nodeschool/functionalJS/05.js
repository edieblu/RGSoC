function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(submittedUser =>{
      return goodUsers.some(goodUser => {
        return goodUser.id === submittedUser.id;
      })
    })
  };
}

module.exports = checkUsersValid

