interface Passenger {
    name: string;
    children?: string[];
}

const passengerOne: Passenger = {
    name: 'Jhon'
}

const passengerTwo: Passenger = {
    name: 'Fernando',
    children: ['Natalia', 'Elizabeth']
}

const returnChildren = (passenger: Passenger): number => {

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildren(passengerOne);
returnChildren(passengerTwo);