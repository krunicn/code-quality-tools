/**
 * strvcom/eslint-config-react-native
 *
 * @author      André Nanninga <andre.nanninga@strv.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

"use strict";

module.exports = {
  extends: ["universe/native"],
  rules: {
    "react-hooks/exhaustive-deps": "error",
  },
};
