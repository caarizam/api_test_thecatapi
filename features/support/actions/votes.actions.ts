import {BaseModel, LastResponseInterface} from "../models/base.model";
import {getApiKey, setCurrentVoteCreated, getCurrentVoteCreated, setLastResponse, getLastResponse} from "../common";
import {CreateVoteInterface, VotesModel, CurrentVoteCreatedInterface} from "../models/votes.model";
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

export class VotesActions{

    /**
     * This method allows creating a vote
     * @param payload
     */
    async requestCreateAVote(payload: CreateVoteInterface) {

        let baseModel = new BaseModel();
        let votesModel = new VotesModel();
        let lastResponse: LastResponseInterface;
        let currentVoteCreated: CurrentVoteCreatedInterface;

        await request(baseModel.baseUrl)
            .post(votesModel.votesEndPoint)
            .timeout(60 * 1000)
            .set('Accept', 'application/json')
            .set('x-api-key', getApiKey())
            .send(payload)
            .then(response => {
                lastResponse = {status_code: response.statusCode, body: response.body};
                setLastResponse(lastResponse);
                currentVoteCreated = { image_id: payload.image_id, id: response.body.id };
                console.log("\n********************************************************");
                console.log("ImageId: " + payload.image_id);
                console.log("IdCreated: " + response.body.id);
                console.log(response.body);
                console.log("\n********************************************************");
                setCurrentVoteCreated(currentVoteCreated);
                expect(200).to.be.equal(response.statusCode);
                expect("SUCCESS").to.be.equal(response.body.message);
            });
    }

    /**
     * This method allows searching for a vote given the id from the last response when was created
     * @param imageId
     */
    async requestForAVote(imageId: string){

        let baseModel = new BaseModel();
        let votesModel = new VotesModel();
        let lastResponse: LastResponseInterface;
        let currentVoteCreated: CurrentVoteCreatedInterface = getCurrentVoteCreated();

        expect(imageId).to.be.equal(currentVoteCreated.image_id);

        await request(baseModel.baseUrl)
            .get(votesModel.votesEndPoint + "/" + currentVoteCreated.id)
            .timeout(60 * 1000)
            .set('Accept', 'application/json')
            .set('x-api-key', getApiKey())
            .then(response => {
                console.log("\n********************************************************");
                console.log("Requested: " + currentVoteCreated.id);
                console.log("Got: " + response.body.id);
                console.log(response.body);
                console.log("\n********************************************************");
                lastResponse = {status_code: response.statusCode, body: response.body};
                setLastResponse(lastResponse);
                expect(200).to.be.equal(response.statusCode);
            });

    }

    /**
     * This method allows checking the get request for a vote
     * @param vote
     */
    async validateGetVoteResponse(vote: number){
        let lastResponse: LastResponseInterface = getLastResponse();
        let currentVoteCreated: CurrentVoteCreatedInterface = getCurrentVoteCreated();
        console.log("\n********************************************************");
        console.log("Expected ID: " + currentVoteCreated.id);
        console.log("Expected ImageID: " + currentVoteCreated.image_id);
        console.log("Current ID: " + lastResponse.body.id);
        console.log("Current ImageID: " + lastResponse.body.image_id);
        console.log("\n********************************************************");
        expect(200).to.be.equal(lastResponse.status_code);
        expect(currentVoteCreated.id).to.be.equal(lastResponse.body.id);
        expect(currentVoteCreated.image_id).to.be.equal(lastResponse.body.image_id);
        expect(vote).to.be.equal(lastResponse.body.value);

    }

    /**
     * This method will delete a vote, in this case, last vote requested
     */
    async requestDeleteAVote(){

        let baseModel = new BaseModel();
        let votesModel = new VotesModel();
        let currentVoteCreated: CurrentVoteCreatedInterface = getCurrentVoteCreated();

        await request(baseModel.baseUrl)
            .delete(votesModel.votesEndPoint + "/" + currentVoteCreated.id)
            .timeout(60 * 1000)
            .set('Accept', 'application/json')
            .set('x-api-key', getApiKey())
            .then(response => {
                console.log("\n********************************************************");
                console.log("DELETE: " + response.body.message);
                console.log("\n********************************************************");
                expect(200).to.be.equal(response.statusCode);
                expect("SUCCESS").to.be.equal(response.body.message);
            });

    }

}
