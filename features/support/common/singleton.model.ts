import {LastResponseInterface} from "../models/base.model";
import {CurrentVoteCreatedInterface} from "../models/votes.model";

/**
 * The purpose of this class is to provide the data to all the other classes
 */
class Singleton {

    private static instance: Singleton;

    apiKey: string = "3e78708b-147f-4165-9a2b-097167cd5a7f";
    currentBreed: string;
    lastResponse: LastResponseInterface;
    currentVotedCreated: CurrentVoteCreatedInterface;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public getApiKey(){
        return this.apiKey;
    }

    public setCurrentBreed(currentBreed: string){
        this.currentBreed = currentBreed;
    }

    public getCurrentBreed(){
        return this.currentBreed;
    }

    public setLastResponse(lastResponse: LastResponseInterface){
        this.lastResponse = lastResponse;
    }

    public getLastResponse(){
        return this.lastResponse;
    }

    public setCurrentVoteCrated(currentVotedCreated: CurrentVoteCreatedInterface){
        this.currentVotedCreated = currentVotedCreated;
    }

    public getCurrentVoteCrated(){
        return this.currentVotedCreated;
    }
}

export function getApiKey(){
    const singletonModel = Singleton.getInstance();
    return singletonModel.getApiKey();
}

//Current Breed
export function setCurrentBreed(currentBreed: string){
    const singletonModel = Singleton.getInstance();
    singletonModel.setCurrentBreed(currentBreed);
}

export function getCurrentBreed(){
    const singletonModel = Singleton.getInstance();
    return singletonModel.getCurrentBreed();
}

//Last Response
export function setLastResponse(lastResponse: LastResponseInterface){
    const singletonModel = Singleton.getInstance();
    singletonModel.setLastResponse(lastResponse);
}

export function getLastResponse(){
    const singletonModel = Singleton.getInstance();
    return singletonModel.getLastResponse();
}

//Current Vote Created
export function setCurrentVoteCreated(currentVotedCreated: CurrentVoteCreatedInterface){
    const singletonModel = Singleton.getInstance();
    singletonModel.setCurrentVoteCrated(currentVotedCreated);
}

export function getCurrentVoteCreated(){
    const singletonModel = Singleton.getInstance();
    return singletonModel.getCurrentVoteCrated();
}
