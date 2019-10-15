import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TodoService implements InMemoryDbService {

    createDb() {
        let todos = [
            { id: 1, action: "Action 1", place: "home" },
            { id: 2, action: "Action 2", place: "work" },
            { id: 3, action: "Action 3", place: "home" },
            { id: 4, action: "Action 4", place: "work" }
        ];
        return { todos };
    }
}