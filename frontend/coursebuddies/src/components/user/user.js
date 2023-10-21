import React from 'react';

class User {
    constructor(name, id, coursesTaking, coursesPlanToTake, clubsJoined) {
        this.name = name;
        this.id = id;
        this.coursesTaking = coursesTaking;
        this.coursesPlanToTake = coursesPlanToTake;
        this.clubsJoined = clubsJoined;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and my ID is ${this.id}.`);
    }
}

const coursesTaking = ['PHYS 50', 'MATH 32', 'EWRT1A'];
const coursesPlanToTake = ['PHYS 1A', 'MATH 1A', 'EWRT 2', 'CIS 22A'];
const clubsJoined = ['Le Danza Engineering Community'];

const user = new User('Elon Musk', 17592502, coursesTaking, coursesPlanToTake, clubsJoined);
user.greet();

const UserComponent = () => {
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>ID: {user.id}</p>
        </div>
    );
};

export default UserComponent;

