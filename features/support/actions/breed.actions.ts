import { BaseModel, LastResponseInterface } from '../models/base.model';
import { getApiKey, setLastResponse, getLastResponse } from '../common/singleton.model';
import {BreedModel} from "../models/breed.model";
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

export class BreedActions {

    /**
     * This method allows searching for a breed cat given the breed
     * @param query
     */
    async requestSearchBreed(query: string) {

        let baseModel = new BaseModel();
        let breedModel = new BreedModel();
        let lastResponse: LastResponseInterface;

        await request(baseModel.baseUrl)
            .get(breedModel.breedSearchEndPoint)
            .timeout(60 * 1000)
            .set('Accept', 'application/json')
            .set('x-api-key', getApiKey())
            .query({'q': query})
            .then(response => {
                lastResponse = {status_code: response.statusCode, body: response.body};
                setLastResponse(lastResponse);
                expect(200).to.be.equal(response.statusCode);
            });
    }

    /**
     * This method allows validating if the searching response is ok or no
     * @param id
     * @param name
     * @param origin
     */
    async isSearchBreedValidResponse(id: string, name: string, origin: string){

        let lastResponse: LastResponseInterface = getLastResponse();

        expect(id).to.be.equal(lastResponse.body[0].id);
        expect(name).to.be.equal(lastResponse.body[0].name);
        expect(origin).to.be.equal(lastResponse.body[0].origin);
    }

}
