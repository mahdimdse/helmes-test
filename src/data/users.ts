export interface userType {
    id: number;
    userName: string;
    firstName?: string;
    lastName?: string,
    userType?: string;
    repositories?: any,
    organizations?: any,
};
export const users = [
    {
        id: 1,
        userName: 'johndoe',
        firstName: 'John',
        lastName: 'Doe',
        userType: 'Owner',
        repositories: [
            {
                id: 1, 
                name: 'Normal repo name',
                url: 'https://google.com',
            },
            {
                id: 2, 
                name: 'A bit longer repo name',
                url: 'https://google.com',
            },
            {
                id: 3, 
                name: 'Very Long repo name to display',
                url: 'https://google.com',
            },
        ],
        organizations: [
            {
                id: 1, 
                name: 'Google',
                url: 'https://google.com',
            },
            {
                id: 2, 
                name: 'Helmes',
                url: 'https://helmes.com',
            },
            {
                id: 3, 
                name: 'yahoo',
                url: 'https://yahoo.com',
            },
        ],
    },
    {
        id: 2,
        userName: 'joejack',
        firstName: 'Joe',
        lastName: 'Jackson',
        userType: 'Developer',
        repositories: [
            {
                id: 1, 
                name: 'Normal repo name',
                url: 'https://google.com',
            },
            {
                id: 2, 
                name: 'A bit longer repo name',
                url: 'https://google.com',
            },
            {
                id: 3, 
                name: 'Very Long repo name to display',
                url: 'https://google.com',
            },
        ],
    },
    {
        id: 3,
        userName: 'percyben',
        firstName: 'Percy',
        lastName: 'Bennett',
        userType: 'Maintainer',
        repositories: [
            {
                id: 1, 
                name: 'Normal repo name',
                url: 'https://google.com',
            },
            {
                id: 2, 
                name: 'A bit longer repo name',
                url: 'https://google.com',
            },
            {
                id: 3, 
                name: 'Very Long repo name to display',
                url: 'https://google.com',
            },
        ],
    },
    {
        id: 4,
        userName: 'robinhood',
        firstName: 'Robin',
        lastName: 'Hood',
        userType: 'Reporter',
        repositories: [
            {
                id: 1, 
                name: 'Normal repo name',
                url: 'https://google.com',
            },
            {
                id: 2, 
                name: 'A bit longer repo name',
                url: 'https://google.com',
            },
        ],
    },
    {
        id: 5,
        userName: 'joetas',
        firstName: 'Joe',
        lastName: 'Tasker',
        userType: 'Maintainer',
        repositories: [],
    },
    {
        id: 6,
        userName: 'aking',
        firstName: 'Arthur',
        lastName: 'King',
        userType: 'Admin',
    }
];