const Flight = require('../models/flight');

exports.index = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
  } catch (err) {
    res.render('error', { errorMsg: err.message });
  }
};

exports.new = (req, res) => {
  res.render('flights/new');
};

exports.create = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    res.render('flights/new', { errorMsg: err.message });
  }
};

exports.show = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { flight });
  } catch (err) {
    res.render('error', { errorMsg: err.message });
  }
};

exports.edit = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/edit', { flight });
  } catch (err) {
    res.render('error', { errorMsg: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await Flight.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    res.render(`flights/${req.params.id}/edit`, { errorMsg: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Flight.findByIdAndRemove(req.params.id);
    res.redirect('/flights');
  } catch (err) {
    res.render('/flights', { errorMsg: err.message });
  }
};
