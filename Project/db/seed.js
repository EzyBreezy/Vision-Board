// const Comment = require("../models/Comment")
// const Goal = require("../models/Goals")

//user = goal
// post = comment

// Goal.find({}).remove(() => {
//     Comment.find({}).remove(() => {
//       let something = Goal.create({
//           title: "First Goal",
//           img: 'https://images.unsplash.com/photo-1535266438678-16e3f1cdc9b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ca3d0e3513193f54c0ad0527ce1358&auto=format&fit=crop&w=634&q=80'
//       }).then(User => {
//         Promise.all([
//           Comment.create({
//             title: "Hello People",
//             img: 'https://secure-akns.subaru.com/content/media/mp_hero_880/2018_Subaru_BRZ.jpg',
//           }).then(User => {
//             Goal.comment.push(Comment)
//           }),
//           comment.create({
//             title: 'The waffle?',
//             img: 'https://images.unsplash.com/photo-1535266438678-16e3f1cdc9b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ca3d0e3513193f54c0ad0527ce1358&auto=format&fit=crop&w=634&q=80'
//           }).then(comment => {
//             User.posts.push(comment)
//           })
//         ]).then(() => {
//           goal.save(err => console.log(err))
//         })
//       })



    // Goal.create({
    //     title: "My first Goal",
    //     img: "https://secure-akns.subaru.com/content/media/mp_hero_880/2018_Subaru_BRZ.jpg"
    // }),
    // Goal.create({
    //     title: "Dream House",
    //     img: "https://www.classicdriver.com/sites/default/files/styles/full_width_slider/public/article_images/matt-fajkus-architecture_09.jpg"
    // 