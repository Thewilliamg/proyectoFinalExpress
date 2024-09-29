const {workshopModel} = require ('../model/workshopsModel')

exports.getAllWorkshops = async (req, res) =>{
    try {
        const workShop = await workshopModel.find({}, '-_id');
        if (!workShop) {
            return res.status(404).json({ message: 'Taller no encontrado' })
        }
        res.status(200).json(workShop);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el taller', error })
    }
}