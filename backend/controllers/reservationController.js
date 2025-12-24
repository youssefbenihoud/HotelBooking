import reservationModel from "../models/reservationModel.js";

const createReservation = async (req, res) => {
    const newReservation = new reservationModel({
        user: req.body.userId,
        ...req.body
    });
    try {
        const reservation = await newReservation.save();
        res.json({success: true, reservation});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

const listReservations = async (req, res) => {
    try {
        const reservations = await reservationModel.find({user: req.body.userId});
        res.json({success: true, data: reservations});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export { createReservation, listReservations };