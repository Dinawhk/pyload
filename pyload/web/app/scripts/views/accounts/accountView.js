define(['jquery', 'underscore', 'backbone', 'app', 'hbs!tpl/accounts/account'],
    function($, _, Backbone, App, template) {
        'use strict';

        return Backbone.Marionette.ItemView.extend({

            tagName: 'tr',
            template: template,

            events: {
                'click .btn-danger': 'deleteAccount'
            },

            deleteAccount: function() {
                this.model.destroy();
            }
        });
    });