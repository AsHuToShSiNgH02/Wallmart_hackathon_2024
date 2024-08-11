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

export const deleteCompetitor = async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await competitorService.deleteCompetitor(id);
        
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Competitor deleted successfully',
                data: {},
                err: {}
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Competitor not found',
                data: {},
                err: {}
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to delete competitor',
            data: {},
            err: error
        });
    }
}