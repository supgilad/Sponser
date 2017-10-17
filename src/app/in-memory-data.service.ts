import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
createDb() {
    const discounts = [
    { id: 1, prize: 'new shoes', likesToAchieve: 12, business: 'nike' },
    { id: 2, prize: 'cool shirt', likesToAchieve: 6, business: 'nike' },
    { id: 3, prize: 'free coffe', likesToAchieve: 15, business: 'aroma' },
    { id: 4, prize: 'free ice cream', likesToAchieve: 2, business: 'yona-pool' },
    { id: 5, prize: '50 % discount in the next time', likesToAchieve: 45, business: 'escape room' },
    { id: 6, prize: 'free entarnce', likesToAchieve: 30, business: 'escape room' },
    { id: 7, prize: 'the third person is free', likesToAchieve: 20, business: 'escape room' },
    { id: 8, prize: '2 beers next time', likesToAchieve: 4, business: 'MeOnTheMike' }
    ];

    const login = [
        { id: 1, email: 'yonatan', password: '123' },
        { id: 2, email: 'yuval', password: '4' }
        ];

    const campaigns:any = [];

    return { discounts, campaigns, login};
}
}