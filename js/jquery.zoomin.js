(function ( $ ) {

  $.fn.zoomin = function ( options ) {

    // Initialize plugin.

    var settings = $.extend({
      text: 'No text has been set.',
      typeSpeed: 50,
      onComplete: null
    }, options);

    var
      self = this,
      text = settings.text,
      sped  = settings.typeSpeed,
      dlay = 0;

    // Clear container.

    this.html( '' );

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
          dlay += sped;

          // Append the span...
          setTimeout(function () { self.append( newSpan ); }, ( sped * iVal ));

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
