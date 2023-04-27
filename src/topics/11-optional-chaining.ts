export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Ivan',
}

const passenger2: Passenger = {
    name: 'Juan',
    children: ['Ana', 'Lucia']
}

const printChildrenNumber = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;

    return howManyChildren;
}

printChildrenNumber(passenger1);