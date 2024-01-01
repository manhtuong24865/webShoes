const OrderServices = require("../services/OrderServices")
const createOrder = async (req, res) => {
    try {
        const { paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName, address, city, phone } = req.body
        if (!paymentMethod || !itemsPrice || !shippingPrice || !totalPrice || !fullName || !address || !city || !phone) {
            return res.status(422).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await OrderServices.createOrder(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(400).json({
            message: e
        })
    }
}

const getDetailsOrder = async (req, res) => {
    try {
        const userId = req.params.id
        console.log('userId', req.params)
        if (!userId) {
            return res.status(422).json({
                status: 'ERR',
                message: 'The userId is required'
            })
        }

        const response = await OrderServices.getOrderDetails(userId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(400).json({
            message: e
        })
    }
}



module.exports = {
    createOrder,
    getDetailsOrder,
}
