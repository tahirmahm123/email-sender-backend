'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
      // Called after an entry is created
        async afterCreate(user) {
            const template = await strapi.query('email-templates').findOne({
              subject_contains: "Welcome"
            });
            strapi.plugins.email.services.email.sendTemplatedEmail({
              to: user.email
            }, {
              subject: template.subject,
              text: template.text,
              html: template.html
            }, {
              user: {
                name: user.name,
                email: user.email
              },
            });
        },
    },
};
