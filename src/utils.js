go.utils = function() {
  var vumigo = require('vumigo_v02');
  var JsonApi = vumigo.http.api.JsonApi;

  var converse = function(im, SESSION_ID, content) {
      var http = new JsonApi(im, {
        headers: {
          'Authorization': ['Bearer ' + im.config.wit.token],
          'Accept': ['application/vnd.wit.' + im.config.wit.version + "+json"],
          'Content-Type': ['application/json']
        }
      });
      return http.post('https://api.wit.ai/converse?', content === undefined ?
      {
        params: {
          v: im.config.wit.version, // write method that extracts version
          session_id: SESSION_ID
        }
      } :
      {
        params: {
          v: im.config.wit.version, // write method that extracts version
          session_id: SESSION_ID,
          q: content
        }
      }
    );

  };

  return {
    converse: converse
  };
}();