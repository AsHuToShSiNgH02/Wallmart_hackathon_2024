import CompetitorService from "../services/competitorService.js";

const competitorService = new CompetitorService();

export const addCompetitor = async (req, res) => {
    try {
        const competitor = await competitorService.addCompetitor(req.body);
        return res.status(201).json({
            success: true,
            message: 'Competitor Succesfully created',
            data: competitor,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: 'Something went wrong in Service',
            data: {},
            err: error
        })
    }
}

export const getCompetitor = async (req, res) => {
    try {
        const competitor = await competitorService.getCompetitors(req.body);
        return res.status(201).json({
            success: true,
            message: 'Competitor Succesfully fetched',
            data: competitor,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: 'Something went wrong in Service',
            data: {},
            err: error
        })
    }
}