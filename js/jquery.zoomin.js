(function ( $ ) {

  $.fn.zoomin = function ( options ) {

    // Initialize plugin.

    var settings = $.extend({
      text: 'No text has been set.',
      dur: 50,
      onComplete: null
    }, options);

    var
      self = this,
      text = settings.text,
      dur  = settings.dur,
      dlay = 0;

    // For-each object...

    self.each(function () {

      for ( var i = 0 ; i < text.length ; i++ ) {

        var spn = document.createElement('span'),
            val = text.substr(i, 1);

        spn.className = 'zoom-in';
        spn.innerHTML = ( val === ' ' ? '&nbsp;' : val );

        // BEGIN CLOSED FUNCTION //

        (function ( iVal, newSpan ) {

          // Increment the onComplete delay.
          dlay += dur;

          // Append the span...
          setTimeout(function () { self.append( newSpan ); }, ( dur * iVal ));

        })( i, spn );

        // END CLOSED FUNCTION //

      }

    });

    // Call the onComplete function if passaed.

    if ( typeof settings.onComplete === 'function' )
      setTimeout( function () { settings.onComplete.call( this ); }, dlay );

    // Finished.

    return this;

  };

}( jQuery ));
