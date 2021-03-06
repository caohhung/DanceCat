/***** Style Section *****/
require('../../node_modules/bootstrap/dist/js/bootstrap.min');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../css/justified-nav.css');
require('../css/dance-cat.css');
require('../../node_modules/codemirror/lib/codemirror.css');
require('../../node_modules/codemirror/theme/ttcn.css');
require('../../node_modules/codemirror/addon/hint/show-hint.css');
require('../../node_modules/flatpickr/dist/flatpickr.confetti.min.css');

/***** Library Section *****/
var autosize = require('../../node_modules/autosize/dist/autosize.min');
var CodeMirror = require('../../node_modules/codemirror/lib/codemirror');
var Flatpickr = require('../../node_modules/flatpickr/src/flatpickr');
var io = require('../../node_modules/socket.io-client/socket.io');
require('../../node_modules/codemirror/addon/hint/show-hint');
require('../../node_modules/codemirror/addon/hint/sql-hint');
require('../../node_modules/codemirror/mode/sql/sql');

module.exports['$'] = $;
module.exports['jQuery'] = jQuery;
module.exports['AutoSize'] = autosize;
module.exports['CodeMirror'] = CodeMirror;
module.exports['Flatpickr'] = Flatpickr;

module.exports['delete_on_click'] = function delete_on_click(el, delete_url, delete_obj_id) {
  $.post(
    delete_url,
    {
      id: delete_obj_id
    },
    function(ret_data) {
      if (ret_data.deleted) {
        $(el).remove()
      } else {
        alert("Failed to delete!")
      }
    }
  )
};

module.exports['job_trigger_on_click'] = function (trigger_url, job_id) {
  $.post(
    trigger_url,
    {
      id: job_id
    }
  )
};

function led_remove_status(led_el) {
  led_el.removeClass('led-off led-yellow led-blue led-red led-green')
}

module.exports['db_connect_test_on_click'] = function db_connect_test_onclick(test_url, connection, led_el) {
  led_remove_status(led_el);
  led_el.addClass('led-yellow');

  let connection_data = {};

  for (let i = 0; i < connection.length; i++) {
    connection_data[connection[i]['name']] = connection[i]['value']
  }

  $.post(
    test_url,
    connection_data,
    function (ret_data) {
      led_remove_status(led_el);

      if (ret_data.connected) {
        led_el.addClass('led-green');
      } else {
        led_el.addClass('led-red');
      }
    }
  );
};

module.exports['job_run_on_click'] = function (url, job_id) {
  
};

module.exports['ws_connect'] = function (connect_url) {
  return io.connect(connect_url);
};
