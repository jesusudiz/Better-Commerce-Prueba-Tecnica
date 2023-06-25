const { Router } = require('express');
const {  getAllCommuneByRegion,getAllRegions} = require("../controllers/region.controller.js")


const router = Router();


router.get('/api/regions', getAllRegions);
router.get('/api/communes/:regionId',getAllCommuneByRegion);



module.exports = router;