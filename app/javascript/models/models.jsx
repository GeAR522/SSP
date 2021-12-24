const {
    SpraypaintBase,
    attr,
    belongsTo,
    hasMany
    // etc
} = require("spraypaint/dist/spraypaint")

const ApplicationRecord = SpraypaintBase.extend({
    static: {
        baseUrl: "",
        apiNamespace: "/ssp"
    }
})


export const User = ApplicationRecord.extend({
    static: { jsonapiType: "users"},

    attrs: {
        id: attr(),
        email: attr(),
        encryptedPassword: attr(),
        resetPasswordToken: attr(),
        rememberCreatedAt: attr(),
        createdAt: attr({persist: false}),
        updatedAt: attr({persist: false}),
        prs: attr(),
        totalPoints: attr(),

        forms: hasMany()
    }
})


export const Form = ApplicationRecord.extend ({
    static: { jsonapiType: "forms"},

    attrs: {
        userId: attr(),
        q1Total: attr(),
        q2Total: attr(),
        q3Total: attr(),
        q4Total: attr(),
        q5Total: attr(),
        totalPoints: attr(),
        gitLink: attr(),
        createdAt: attr({persist: false}),
        updatedAt: attr({persist: false}),

        user: belongsTo(),
        // reviewQuestion: hasOne(),
        }
})

export const ReviewQuestion = ApplicationRecord.extend ({
    static: { jsonapiType: "review_questions"},

    attrs: {
      formId: attr(),
      codingForCoverage: attr(),
      punctualProgrammer: attr(),
      slocGold: attr(),
      slocSilver: attr(),
      slocBronze: attr(),
      crikey: attr(),
      lawAbidingCitizen: attr(),
      createdAt: attr({persist: false}),
      updatedAt: attr({persist: false}),

      form: belongsTo(),
    }
})
