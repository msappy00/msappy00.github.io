var $board = $('main'),
    $card = $('.card'),
    $itemCount = $('.score span'),
    $wins = $('.wins span'),
    $turns = $('.turns span'),
    $attempts = $('.attempts span'),
    $attemptsOverall = $('.attempts-overall span'),
    $success = $('.success'),
    $successMsg = $('.success-message'),
    $successIcon = $('.success-icon'),
    $btnContinue = $('.btn-continue'),
    $btnSound = $('.btn-sound'),
    selectedClass = 'is-selected',
    visibleClass = 'is-visible',
    playSoundClass = 'is-playing',
    scoreUpdateClass = 'is-updating',
    lastTurnClass = 'last-turn',
    dataMatch = 'data-matched',
    dataType = 'data-type',
    turnsCount = 2,
    winsCount = 0,
    attemptsCount = 0,
    attemptsOverallCount = 0,
    timeoutLength = 600,
    card1, card2, msg;

// Let's make some noise
var assetsUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/',
    sound = [
      'smb3_1-up.mp3',
      'smb3_nspade_match.mp3',
      'smb3_bonus_game_no_match.mp3'
    ],
    $themeSongEl = $('#theme-song')[0];

    soundSuccess = new Audio(assetsUrl + sound[0]);
    soundMatch = new Audio(assetsUrl + sound[1]);
    soundNoMatch = new Audio(assetsUrl + sound[2]);

// Turn on the sound if you want that real deal throwback experience
$btnSound.on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass(playSoundClass);
  if ($(this).hasClass(playSoundClass)) {
    $themeSongEl.play(); 
  } else {
    $themeSongEl.pause();
  }
});

// Shuffle up the deck
shuffleCards();

$card.on('click', function() {
  // Add selected class to a card only if it is not already matched
  if ($(this).attr(dataMatch) == 'false') {
    $(this).addClass(selectedClass);
  }

  var selectedCards = $('.' + selectedClass);

  // Check if cards match
  if (selectedCards.length == 2) {
    card1 = selectedCards.eq(0).attr(dataType);
    card2 = selectedCards.eq(1).attr(dataType);

    if (card1 == card2) {
      if ($btnSound.hasClass(playSoundClass)) {
        soundMatch.play(); 
      }
      selectedCards
        .attr(dataMatch, true)
        .removeClass(selectedClass)

    } else {
      if ($btnSound.hasClass(playSoundClass)) {
        soundNoMatch.play(); 
      }
      setTimeout(function() {
        turnsCount--;
        $turns
          .addClass(scoreUpdateClass)
          .html(turnsCount);
        selectedCards.removeClass(selectedClass);
      }, timeoutLength);

      if(turnsCount === 1) {
        setTimeout(function() {
          $turns.addClass(lastTurnClass);
        }, timeoutLength);
      }

      if(turnsCount <= 0) {
        setTimeout(function() {
          turnsCount = 2;
          $turns
            .removeClass(lastTurnClass)
            .html(turnsCount);
          $card.attr(dataMatch, false);
          attemptsCount += 1;
          $attempts
            .addClass(scoreUpdateClass)
            .html(attemptsCount);
        }, timeoutLength);
      }

    }
  }

  // Winner!
  if ($('[' + dataMatch + '="true"]').length == $card.length) {
    // Show success screen
    $success.addClass(visibleClass);
    setTimeout(function() {
      if ($btnSound.hasClass(playSoundClass)) {
        soundSuccess.play(); 
      }
    }, 600);
    // Update success message based on the amount of attempts
    switch(true) {
      case (attemptsCount === 0):
        msg = "SUPER!!!";
        $successIcon.attr(dataType, "star");
        break;
      case (attemptsCount > 0 && attemptsCount <= 4):
        msg = "Nice Work!";
        $successIcon.attr(dataType, "mushroom");
        break;
      case (attemptsCount > 4 && attemptsCount <= 8):
        msg = "You can do better!";
        $successIcon.attr(dataType, "flower");
        break;
      case (attemptsCount > 8):
        msg = "That took awhile...";
        $successIcon.attr(dataType, "chest");
        break;
    }
    $successMsg.text(msg);

    setTimeout(function() {
      attemptsOverallCount += attemptsCount;
      $attemptsOverall
        .addClass(scoreUpdateClass)
        .html(attemptsOverallCount);
      winsCount += 1;
      $wins
        .addClass(scoreUpdateClass)
        .html(winsCount);
      $card.attr(dataMatch, false);
    }, 1200);
  }

});

// Remove the score update class after the animation completes
$itemCount.on(
  "webkitAnimationEnd oanimationend msAnimationEnd animationend",
  function() {
    $itemCount.removeClass(scoreUpdateClass);
  }
);

// On to the next round!
$btnContinue.on('click', function() {
  $success.removeClass(visibleClass);
  shuffleCards();
  setTimeout(function() {
    turnsCount = 2;
    $turns
      .removeClass(lastTurnClass)
      .html(turnsCount);
    attemptsCount = 0;
    $attempts.html(attemptsCount);
  }, 300);
});

// Card shuffle function
function shuffleCards() {
  var cards = $board.children();
  while (cards.length) {
    $board.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
  }
}