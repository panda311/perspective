/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.configureDefaultReporter({
    showColors: true
});

jasmine.execute(['./build/test_node.js']);