"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyAccessToken = void 0;
exports.isEmptyAccessToken = isEmptyAccessToken;
exports.emptyAccessToken = { access_token: "emptyAccessToken", token_type: "", expires_in: 0, refresh_token: "", expires: -1 };
function isEmptyAccessToken(value) {
    return value === exports.emptyAccessToken;
}
//# sourceMappingURL=IAuthStrategy.js.map