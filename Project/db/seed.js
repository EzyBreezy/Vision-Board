//const Comment = require("../models/Goals")
const Goal = require("../models/Goals")



Goal.find({}).remove(() => {
    Comment.find({}).remove(() => {
        let ezy = Goal.create({}).then(user => {
            Promise.all([
                Goal.create({
                    content: "Nested Hell",
                    // dont have a got damn author

                }).then(goal => {})
            ])
        })
    })
})
    // Goal.create({
    //     title: "My first Goal",
    //     img: "https://secure-akns.subaru.com/content/media/mp_hero_880/2018_Subaru_BRZ.jpg"
    // }),
    // Goal.create({
    //     title: "Dream House",
    //     img: "https://www.classicdriver.com/sites/default/files/styles/full_width_slider/public/article_images/matt-fajkus-architecture_09.jpg"
    // })
})