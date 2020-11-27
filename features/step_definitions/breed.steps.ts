import {Given, When, Then} from '@cucumber/cucumber';
import {BreedActions} from '../support/actions/breed.actions';
import {setCurrentBreed, getCurrentBreed} from '../support/common/singleton.model';
import DataTable from "@cucumber/cucumber/lib/models/data_table";

const chai = require('chai');
const expect = chai.expect;

let breedActions = new BreedActions();

Given('A valid breed {string}',
    async (breed: string) => {

        expect(breed.length).to.be.greaterThan(1);
        await setCurrentBreed(breed);

    });

When('The request is performed',
    async () => {

        await breedActions.requestSearchBreed(getCurrentBreed());

    });

Then('The client should seed a valid response with:',
    async (table: DataTable) => {

        let data = table.raw();
        await breedActions.isSearchBreedValidResponse(data[0][0], data[0][1], data[0][2]);

    });
