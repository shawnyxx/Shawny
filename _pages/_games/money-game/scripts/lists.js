// All the predefined lists can be found here and all the variables associated to the lists length are at the bottom

// Street names
const street_names = [
    "Broadway",
    "Fifth Avenue",
    "Park Avenue",
    "Madison Avenue",
    "Lexington Avenue",
    "Wall Street",
    "Canal Street",
    "Bowery",
    "Houston Street",
    "Bleecker Street",
    "Mulberry Street",
    "Delancey Street",
    "Orchard Street",
    "Allen Street",
    "Eldridge Street",
    "Ludlow Street",
    "Rivington Street",
    "St. Marks Place",
    "Avenue A",
    "Avenue B",
    "Avenue C",
    "Avenue D",
    "1st Avenue",
    "2nd Avenue",
    "3rd Avenue",
    "4th Avenue",
    "5th Avenue",
    "6th Avenue",
    "7th Avenue",
    "8th Avenue",
    "9th Avenue",
    "10th Avenue",
    "11th Avenue",
    "12th Avenue",
    "Central Park West",
    "Columbus Circle",
    "West End Avenue",
    "Riverside Drive",
    "Amsterdam Avenue",
    "Broadway",
    "Ninth Avenue",
    "Tenth Avenue",
    "Eleventh Avenue",
    "Twelfth Avenue",
    "Lenox Avenue",
    "Frederick Douglass Boulevard",
    "Morningside Drive",
    "St. Nicholas Avenue",
    "Edgecombe Avenue",
    "Adam Clayton Powell Jr. Boulevard",
];

// Island locations
const island_locations = [
    "Greece",
    "North Sea",
    "Ireland",
    "United Kingdom",
    "France",
    "Belgium",
    "Netherlands",
    "Denmark",
    "Norway",
    "Sweden",
    "Caribbean",
    "Bahamas",
    "Cuba",
    "Haiti",
    "Dominican Republic",
    "Jamaica",
    "Maldives",
    "Fiji",
    "Hawaii",
    "Seychelles",
    "New Zealand",
    "Iceland",
    "Japan",
    "Philippines",
    "Indonesia",
    "Madagascar",
    "Sri Lanka",
    "Mauritius",
    "Bora Bora",
    "Tahiti",
    "Galápagos Islands",
    "Bali",
    "Sicily",
    "Crete",
    "Cyprus"
];

// Planet names
const planet_locations = [
    "Tatooine",
    "Mars",
    "Pandora",
    "Vulcan",
    "Naboo",
    "Krypton",
    "Gallifrey",
    "Dune",
    "Hoth",
    "Endor",
    "Arrakis",
    "Coruscant",
    "Dagobah",
    "Mustafar",
    "Alderaan",
    "Bespin",
    "Yavin IV",
    "Kashyyyk",
    "Kamino",
    "Geonosis",
    "Lothal",
    "Jedha",
    "Scarif",
    "Crait",
    "Batuu",
    "Exegol",
    "Hoth",
    "Jakku",
    "Malachor",
    "Mortis",
    "Myrkr",
    "Ossus",
    "Ryloth",
    "Sullust",
    "Tython",
    "Umbara",
    "Yavin IV",
    "Zonama Sekot",
    "Titan",
    "Triton",
    "Europa",
    "Ganymede",
    "Io",
    "Callisto",
    "Enceladus",
    "Rhea",
    "Mimas",
    "Tethys",
    "Iapetus",
    "Dione",
    "Eris",
    "Haumea",
    "Makemake",
    "Ceres",
    "Vesta",
    "Charon",
    "Pluto",
    "Titania",
    "Oberon",
    "Ariel",
    "Umbriel",
    "Miranda",
    "Hyperion",
    "Proteus",
    "Nereid",
    "Phobos",
    "Deimos",
    "Styx",
    "Hydra",
    "Nix",
    "Kerberos",
    "Sedna",
    "Quaoar",
    "Orcus",
    "Ixion",
    "Varuna",
    "Salacia",
    "Gonggong",
    "V774104",
    "2002 MS4"
];

const education_levels = [
    {
        "name": "High School",
        "obtained": false,
        "length": 4,
        "salary": 35000,
        "areas_of_study": [
            {
                "name": "General Education",
                "salary": 35000
            }
        ]
    },
    {
        "name": "Community College",
        "obtained": false,
        "length": 2,
        "salary": 40000,
        "areas_of_study": [
            {
                "name": "General Education",
                "salary": 40000
            },
            {
                "name": "Technical Studies",
                "salary": 45000
            },
            {
                "name": "Business",
                "salary": 50000
            },
            {
                "name": "Health Sciences",
                "salary": 55000
            }
        ]
    },
    {
        "name": "Associate's Degree",
        "obtained": false,
        "length": 2,
        "salary": 50000,
        "areas_of_study": [
            {
                "name": "Business",
                "salary": 50000
            },
            {
                "name": "Computer Science",
                "salary": 55000
            },
            {
                "name": "Engineering",
                "salary": 60000
            },
            {
                "name": "Health Sciences",
                "salary": 60000
            }
        ]
    },
    {
        "name": "Bachelor's Degree",
        "obtained": false,
        "length": 4,
        "salary": 60000,
        "areas_of_study": [
            {
                "name": "Arts",
                "salary": 45000
            },
            {
                "name": "Sciences",
                "salary": 60000
            },
            {
                "name": "Business",
                "salary": 70000
            },
            {
                "name": "Engineering",
                "salary": 80000
            },
            {
                "name": "Health Sciences",
                "salary": 75000
            }
        ]
    },
    {
        "name": "Master's Degree",
        "obtained": false,
        "length": 2,
        "salary": 70000,
        "areas_of_study": [
            {
                "name": "Business Administration",
                "salary": 90000
            },
            {
                "name": "Education",
                "salary": 70000
            },
            {
                "name": "Engineering",
                "salary": 85000
            },
            {
                "name": "Computer Science",
                "salary": 95000
            },
            {
                "name": "Health Sciences",
                "salary": 80000
            }
        ]
    },
    {
        "name": "Doctoral Degree",
        "obtained": false,
        "length": 4,
        "salary": 90000,
        "areas_of_study": [
            {
                "name": "Sciences",
                "salary": 95000
            },
            {
                "name": "Engineering",
                "salary": 100000
            },
            {
                "name": "Education",
                "salary": 90000
            },
            {
                "name": "Health Sciences",
                "salary": 105000
            },
            {
                "name": "Humanities",
                "salary": 85000
            }
        ]
    },
    {
        "name": "Postdoctoral",
        "obtained": false,
        "length": 3,
        "salary": 80000,
        "areas_of_study": [
            {
                "name": "Sciences",
                "salary": 85000
            },
            {
                "name": "Engineering",
                "salary": 90000
            },
            {
                "name": "Health Sciences",
                "salary": 95000
            },
            {
                "name": "Humanities",
                "salary": 75000
            },
            {
                "name": "Social Sciences",
                "salary": 80000
            }
        ]
    }
];

// list.lenght variables
const numof_street_names = street_names.length;
const numof_island_locations = island_locations.length;
const numof_planet_locations = planet_locations.length;
const numof_education_levels = education_levels.length;

// Education levels shortcuts
const high_school = education_levels[0];
const community_college = education_levels[1];
const bachelor = education_levels[2];
const master = education_levels[3];
const doctorate = education_levels[4];
const postdoctoral = education_levels[5];
