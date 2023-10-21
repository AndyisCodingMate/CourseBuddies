import React from 'react';

export const name = 'Elon Musk';
export const id = 17592502;
export const coursesTaking = ['PHYS 50', 'MATH 32', 'EWRT1A'];
export const coursesPlanToTake = ['PHYS 1A', 'MATH 1A', 'EWRT 2', 'CIS 22A'];
export const clubsJoined = ['Le Danza Engineering Community'];
export const email = 'musk@spacex.com';
export const password = 'Dogecoinrules1';

const User = () => {

    return (
        <div>
            Welcome, {name}!
        </div>
    );
};

export default User;
