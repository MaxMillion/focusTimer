/* global describe, it, beforeEach, afterEach, expect, focusTimer */

(function () {
  'use strict';

  describe('window.focusTimer', function () {

    beforeEach(function() {
      //this.sandbox = sinon.sandbox();
      $('#fixtures').append('<div id="view-container"></div>');
    });
    afterEach(function() {
      $('#fixtures').empty();
      //this.sandbox.restore();
    });

    describe('#init', function () {
      it.skip('should construct a new timer view with a new focusTimer model',
        function () {
          // XXX needs sinon; test both failure and success
      });

      it('should append the div#timer-view into #view-container', function () {
        window.focusTimer.init();

        expect($('#view-container > div#timer-view').length).to.equal(1);
      });
    });
  });

  describe('focusTimer.Utils', function() {
    describe('IntervalTime', function() {
      describe('constructor', function () {
        it('should be an instanceof Number', function() {
          var it = new focusTimer.Utils.IntervalTime;

          expect(it).to.be.an.instanceOf(Number);
        });

      });
    });
  });
})();
