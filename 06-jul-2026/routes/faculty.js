const express = require('express');
const users = require('../faculties.json');
const router = express.Router();
router.get('/faculties', (req, res) => {
    res.json(faculties);

})
// http://localhost:3000/faculty/2
router.get('/faculty/:id', (req, res) => {
    let id = req.params.id;
    let faculty = faculties.find((faculty) => faculty.facultyid == id);
    res.json(faculty);
})
// post http://localhost:3000/add/faculty
router.post('/add/faculty', (req, res) => {
    console.log(req.body);
    faculties.push(req.body);
    fs.writeFile('faculties.json', JSON.stringify(faculties), (err) => {
        if (err) {
            console.log("problem in writting file ");
        } else {
            console.log("file have been written successfully..")

        }
    })
})
// post http://localhost:3000/edit/faculty/2
router.put('/edit/faculty/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    let index = faculties.findIndex((faculty) => faculty.facultyid == id);
    console.log(index);
    faculties[index].salary = "20000";
    fs.writeFile('faculties.json', JSON.stringify(faculties), (err) => {
        if (err) {
            console.log("problem in writting file ");
        } else {
            res.end("file have been written successfully..")
        }
    })
})
module.exports = router