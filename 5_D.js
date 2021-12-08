// Dependency inversion Principle

class Fetch {
    request() {
        // return fetch(url).then(r => r.json());
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        // return localStorage.getItem('key');
        const dataFromLocalStorage = 'data from local storage';
        return dataFromLocalStorage;
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet() {
        return this.fetch.request();
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet() {
        return this.localStorage.get();
    }
}

class DataBase {
    constructor(client) {
        // this.fetch = new Fetch();
        // this.localStorage = new LocalStorage();
        this.client = client;
    }

    getData(key) {
        // return this.fetch.request('vk.com');
        // return this.localStorage.get('ls key');
        return this.client.clientGet(key);
    }

}

const db = new DataBase(new LocalStorageClient());

console.log(db.getData());
