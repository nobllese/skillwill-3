const user1 = {
    firstName: 'Anano',
    age: 26,
    socialNetwork: {
        facebook: 'emlles0102',
        whatsapp: {
            bussinesAccountNumber: '+995 555-111-222',
            personalAccountNumber: '+995 555-111-223'
        }
    },
    skills : ['JavaScript', 'Python', 'Html', 'Css'],
    currentlyWorking : 'Amazon'
}
const user2 = {
    ...user1,
    socialNetwork: {
        ...user1.socialNetwork,
        whatsapp: {
            ...user1.socialNetwork.whatsapp
        }
    },
    skills: [...user1.skills]
}


console.log(user1);
console.log(user2)
