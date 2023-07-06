const user = {
    name: 'Giga',
    age: 19,
    banks: [
        {Company: 'Bank Of Georgia'},
        {country: 'Georgia'},
        {address: {
            region: 'Adjara',
            city: 'Batumi'
        }}
    ]
}

const {banks: { address: {city} = {}}} = user

console.log(user.banks[2].address.city);