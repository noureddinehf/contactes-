const user=require('../models/contacte')
exports.get= async (req, res) => {
    try {
        const users = await user.find({}).exec();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
exports.post= async (req, res) => {
    const med = {
        name: req.body.name,
        num: req.body.num
    };

    try {
        let up = new user(med)
        let  noth = await up.save();
        res.status(200).json(up);
    } catch (error) {
        res.status(400).json(error);
    }
};
exports.delete=async(req,res)=>{
    try {
        let want=req.params.id
        const del =await user.findByIdAndDelete(want)
        res.status(200).json(del)
        
    } catch (error) {
        return res.status(400).json(error)
        
    }
    }
    exports.put=async(req,res)=>{
        try {
            let ad=req.params.id
            let para=req.body
            let fin= await user.findByIdAndUpdate(ad,para,{new:true})
            res.status(200).json(fin)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    


