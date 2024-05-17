// focus ,avoid distractions , dream

const ripan = {
    firstName: 'ripan',
    lastName: 'singh',
    age: 2024 - 1995,
    job: 'programmer',
    friend: ['raju', 'gopi', 'rajiv'],
}

const interestedIn = prompt(
    'what you want  to interested to know about ripan , about is work  life  and more'
)

if (ripan[interestedIn]) {
    console.log(`show the outcome ${ripan[interestedIn]}`)
} else {
    console.log(
        'choose from the above  data ,choose the  valid option which are available'
    )
}

ripan.loaction = 'portblair'
ripan.twitter = '@ripan01'
console.log(ripan)
