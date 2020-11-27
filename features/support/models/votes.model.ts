
export class VotesModel {

    votesEndPoint: string;

    constructor() {
        this.votesEndPoint = "/votes";

    }

}

export interface QueryGetVotesInterface {
  sub_id: string;
  limit: string;
  page: string;
};

export interface CreateVoteInterface {
  image_id: string;
  sub_id: string;
  value: number;
};

export interface VoteResponseCreationInterface {
  id: number;
  message: string;
};

export interface CurrentVoteCreatedInterface {
  image_id: string;
  id: number;
};
