import Competitor from "../models/competitor.js";
import CrudRepository from "./crudRepository.js";

class CompetitorRepository extends CrudRepository{
    constructor(){
        super(Competitor);
    }
}

export default CompetitorRepository;