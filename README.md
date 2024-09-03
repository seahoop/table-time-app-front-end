# TABLE-TIME-APP

### Deployed Front-End:

### Deployed Back-End: https://aqueous-mountain-56414-fa342b1c8a93.herokuapp.com

## Team Members
- Ismael Perez ([LinkedIn](https://www.linkedin.com/in/ismaelperez13/), [GitHub]( https://github.com/iperez08))

- Rodney Amadi ([LinkedIn](https://www.linkedin.com/in/rodney-amadi-38a570316/), [GitHub](https://github.com/Daroo22))

- Eric Du ([LinkedIn](https://www.linkedin.com/in/eric-du-975a32272/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app), [Git-Hub](https://github.com/seahoop))

## Project Description 

The Table-Time-App is a MERN stack application designed to simplify the process of booking a reservation at a resaurant for either just the customer, or with loved ones. A completed version of this app will allow restaurant owners to sign up and post available reservation times and dates on the app, while allowing customers to sign up and book these reservations. With this app, we hope to minimize the process of booking reservations while giving the user the option to favorite a specific restaurant they liked for even easier access.


## WireFrames


## Component Hierachy
![Hierachy-Diagram](./src/assets/ReadMe-Imgs/Screenshot%202024-09-03%20at%2011.57.44 AM.png)



## Customer Schema
``` javascript
const customerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    myReservations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservation"
        }
    ],
    pastReservations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservation"
        }
    ],
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurant"
        }
    ]
})

customerSchema.set('toJSON', { transform: (document, returnedObject) => { delete returnedObject.password } })

const Customer = new model('Customer', customerSchema)

```

## Reservation Schema
```javascript
const reservationSchema = new Schema({
    guests: {
        type: Number,
        required: true,
        min: 1,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
        match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    location: {
        type: String,
        required: true
    }
})

const Reservation = model('Reservation', reservationSchema)

```
## Restaurant Schema

```javascript
const restaurantSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: "Your Restaurant Name"
    },
    about: {
        type: String,
        default: "Tell us about your restaurant."
    },
    address: {
        type: String,
        default: "Restaurant Address goes here."
    },
    image: {
        type: String,
    },
    reservations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reservation'
        }
    ]
})

restaurantSchema.set('toJSON', { transform: (document, returnedObject) => { delete returnedObject.password } })

const Restaurant = model('Restaurant', restaurantSchema)

```

## MVP/PMVP

### MVP

* Customer and Restaurant owner able to sign up and sign in
* App uses password protected authentication using JSON tokens
* When signed in, Customer is able to book reservation, edit reservation, and cancel reservation (full CRUD)
* A page that displays all the restaurants
* Both logged in and not logged in users can see restaurant data
* A search bar that allows both logged in and not logged in users to filter displayed restaurants.

### PMVP
* Implememt a google map system to filter restaurants by location.
* customers to get a reservation receipt

## Project Schedule
 https://docs.google.com/spreadsheets/d/1ofQQJgiJbRuE2ajOwMtsqtmAo47zmwMXUgWTHBFY7nA/edit?gid=355707042#gid=355707042











