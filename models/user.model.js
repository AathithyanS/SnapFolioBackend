const mongoose = require('mongoose')

module.exports = mongoose.model("Users", {
    about: {
        name: {type: String},
        titleName: {type: String},
        Description: {type: String},
        Profile: {type: String},
        cv: {type: String},
    },
    eduSkills: {
        Education: [
            {
                title: { type: String },
                place: { type: String },
                description: { type: String },
            }
        ],
        Skills: [
            {
                title: { type: String },
                description: { type: String },
            }
        ],
        Projects: [
            {
                title: { type: String },
                description: { type: String },
                projectLink: { type: String },
                
            }
        ]
    },
    experience: [
        {
            title: { type: String },
            year: { type: String },
            description: { type: String },
        }
    ],
    contacts: {
        email: { type: String },
        phone: { type: String },
        socialMedias: [{
            name: { type: String },
            link: { type: String },
        }]
    }
})