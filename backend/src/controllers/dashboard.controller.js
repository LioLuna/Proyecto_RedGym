import { getDashboardStats } from "../services/dashboard.service.js";

export const getDashboard = async (req, res) => {

  try {

    const stats = await getDashboardStats();

    res.json(stats);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};