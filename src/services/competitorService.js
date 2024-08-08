import { CompetitorRepository } from '../repository/index.js';

class CompetitorService {
    constructor() {
        this.competitorRepository = new CompetitorRepository();
    }

    async addCompetitor(data) {
        try {
            const competitor = await this.competitorRepository.create(data);
            return competitor;
        } catch (error) {
            throw error;
        }
    }

    async getCompetitors() {
        try {
            const competitors = await this.competitorRepository.getAll();
            return competitors;
        } catch (error) {
            throw error;
        }
    }
}

export default CompetitorService;