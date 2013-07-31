
/*
 * GET home page.
 */

var lock = undefined;

var isLocked = function() {
  return lock != undefined;
};

exports.index = function(req, res){
  if(isLocked()) {
    res.send(423, lock);
  } else {
    res.send(200);
  }
};

exports.lock = function(req, res) {
  if(isLocked()) {
    res.send(423, { locked: lock });
  } else {
    lock = req.params.by;
    res.send(200);
  }
};

exports.unlock = function(req, res) {
  lock = undefined;
  res.send(200);
};

