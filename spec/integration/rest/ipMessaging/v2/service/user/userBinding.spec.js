'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('UserBinding', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'bindings'
          },
          'bindings': [
              {
                  'sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-10-21T11:37:03Z',
                  'date_updated': '2016-10-21T11:37:03Z',
                  'endpoint': 'TestUser-endpoint',
                  'identity': 'TestUser',
                  'user_sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'binding_type': 'gcm',
                  'credential_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_types': [
                      'removed_from_channel',
                      'new_message',
                      'added_to_channel',
                      'invited_to_channel'
                  ],
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings/BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .userBindings.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'bindings'
          },
          'bindings': [
              {
                  'sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-10-21T11:37:03Z',
                  'date_updated': '2016-10-21T11:37:03Z',
                  'endpoint': 'TestUser-endpoint',
                  'identity': 'TestUser',
                  'user_sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'binding_type': 'gcm',
                  'credential_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_types': [
                      'removed_from_channel',
                      'new_message',
                      'added_to_channel',
                      'invited_to_channel'
                  ],
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings/BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .userBindings.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://chat.twilio.com/v2/Services/<%= serviceSid %>/Users/<%= userSid %>/Bindings',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'bindings'
          },
          'bindings': [
              {
                  'sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-10-21T11:37:03Z',
                  'date_updated': '2016-10-21T11:37:03Z',
                  'endpoint': 'TestUser-endpoint',
                  'identity': 'TestUser',
                  'user_sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'binding_type': 'gcm',
                  'credential_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_types': [
                      'removed_from_channel',
                      'new_message',
                      'added_to_channel',
                      'invited_to_channel'
                  ],
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings/BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .userBindings.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .userBindings.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        userSid: 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://chat.twilio.com/v2/Services/<%= serviceSid %>/Users/<%= userSid %>/Bindings')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'bindings'
          },
          'bindings': [
              {
                  'sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-10-21T11:37:03Z',
                  'date_updated': '2016-10-21T11:37:03Z',
                  'endpoint': 'TestUser-endpoint',
                  'identity': 'TestUser',
                  'user_sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'binding_type': 'gcm',
                  'credential_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_types': [
                      'removed_from_channel',
                      'new_message',
                      'added_to_channel',
                      'invited_to_channel'
                  ],
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings/BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .userBindings.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'bindings'
          },
          'bindings': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .userBindings.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .userBindings('BSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        userSid: 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'BSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://chat.twilio.com/v2/Services/<%= serviceSid %>/Users/<%= userSid %>/Bindings/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-10-21T11:37:03Z',
          'date_updated': '2016-10-21T11:37:03Z',
          'endpoint': 'TestUser-endpoint',
          'identity': 'TestUser',
          'user_sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'binding_type': 'gcm',
          'credential_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'message_types': [
              'removed_from_channel',
              'new_message',
              'added_to_channel',
              'invited_to_channel'
          ],
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings/BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .userBindings('BSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .userBindings('BSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        userSid: 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'BSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://chat.twilio.com/v2/Services/<%= serviceSid %>/Users/<%= userSid %>/Bindings/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .userBindings('BSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
