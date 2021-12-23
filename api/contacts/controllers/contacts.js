'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async email(ctx) {
        const request = ctx.request.body;
        console.log(request);
        const template = await strapi.query('email-templates').findOne({
          id: request.template
        });
        request.emails.forEach(async (value) => {
            var user = await strapi.query('contacts').findOne({
              email: value
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
        });
        return request;
    }
};
