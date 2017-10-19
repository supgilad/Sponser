import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
createDb() {
    const discounts = [
    { id: 1, prize: 'new shoes', likesToAchieve: 12, businessID: 1, likesSpent: 0},
    { id: 3, prize: 'free coffe', likesToAchieve: 15,  businessID: 2, likesSpent: 0 },
    { id: 5, prize: '50 % discount in the next time', likesToAchieve: 45,  businessID: 3, likesSpent: 0},
    { id: 6, prize: 'free entarnce', likesToAchieve: 30, businessID: 3, likesSpent: 0 },
    { id: 7, prize: 'the third person is free', likesToAchieve: 20,  businessID: 3, likesSpent: 0},
    { id: 8, prize: '2 beers next time', likesToAchieve: 4, businessID: 4, likesSpent: 0 }
    ];

    const businesses = [
        { id: 1, name: 'nike', likes: 0},        
        { id: 2, name: 'aroma', likes: 0},        
        { id: 3, name: 'escape room', likes: 15},
        { id: 4, name: 'MeOnTheMike', likes: 0}
    ]
    

    const login = [
        { id: 1, email: 'yonatan', password: '123' },
        { id: 2, email: 'yuval', password: '4' }
        ];

    const campaigns:any = [];

    return { discounts, campaigns, login, businesses};
}
}