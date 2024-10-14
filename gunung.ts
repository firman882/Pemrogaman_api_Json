let mountains = [
    {
        id: 1,
        name: 'Gunung Semeru',
        height: 3676, // in meters
        location: 'Jawa Timur',
        type: 'Stratovolcano',
        activities: ['hiking', 'camping'],
        fauna: ['Javan Hawk Eagle', 'Macaca'],
    },
    {
        id: 2,
        name: 'Gunung Rinjani',
        height: 3726,  // in meters
        location: 'Lombok',
        type: 'Stratovolcano',
        activities: ['trekking', 'camping'],
        fauna: ['Wild Boar', 'Civets'],
    },
    {
        id: 3,
        name: 'Gunung Merapi',
        height: 2910,  // in meters
        location: 'Jawa Tengah',
        type: 'Stratovolcano',
        activities: ['photography', 'volcano watching'],
        fauna: ['Sulawesi Macaque', 'Javanese Eagle'],
    },
    {
        id: 4,
        name: 'Gunung Bromo',
        height: 2392,  // in meters
        location: 'Jawa Timur',
        type: 'Stratovolcano',
        activities: ['sunrise viewing', 'off-road driving'],
        fauna: ['Bromelia', 'Deer'],
    },
];

// 1. Display all data in table format
console.log("Semua data gunung dalam format tabel:");
console.table(mountains);

// 2. Get mountain data by name
const getMountainByName = (name) => mountains.filter(mountain => mountain.name === name);
console.log("Data gunung dengan Nama 'Gunung Semeru':", getMountainByName('Gunung Semeru'));

// 3. Get mountains by location
const getMountainsByLocation = (location) => mountains.filter(mountain => mountain.location === location);
console.log("Data gunung di lokasi 'Jawa Timur':", getMountainsByLocation('Jawa Timur'));

// 4. Get mountains with height >= 3000 meters
const getMountainsByHeight = (height) => mountains.filter(mountain => mountain.height >= height);
console.log("Data gunung dengan tinggi >= 3000 meter:", getMountainsByHeight(3000));

// 5. Get mountains by activity
const getMountainsByActivity = (activity) => mountains.filter(mountain => mountain.activities.includes(activity));
console.log("Data gunung dengan aktivitas 'hiking':", getMountainsByActivity('hiking'));
