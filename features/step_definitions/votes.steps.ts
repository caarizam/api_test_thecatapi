import {Given, When, Then} from '@cucumber/cucumber';
import DataTable from "@cucumber/cucumber/lib/models/data_table";
import {VotesActions} from "../support/actions/votes.actions";
import {CreateVoteInterface} from "../support/models/votes.model";

let votesActions = new VotesActions();

Given('The vote is created successfully',
    async (table: DataTable) => {

        let data = table.raw();
        let voteValue: number = +data[0][2];
        let payload: CreateVoteInterface = { image_id: data[0][0], sub_id: data[0][1], value:  voteValue};
        await votesActions.requestCreateAVote(payload);

    });

When('The client request for a vote {string}',
    async(imageId: string) => {
        await votesActions.requestForAVote(imageId);
});

Then('The client should seed a valid vote with value {int}',
    async (vote: number) => {
        await votesActions.validateGetVoteResponse(vote);
    });

When('The client should be able to delete the vote',
    async() => {
        await votesActions.requestDeleteAVote();
    });
