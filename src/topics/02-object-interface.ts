const skills: string[] = ['Bash', 'Counter', 'Heal'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = 'Gondor';

console.table(strider)

export {}