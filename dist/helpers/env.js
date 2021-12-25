"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const envalid_1 = require("envalid");
const process_1 = require("process");
const path_1 = require("path");
dotenv.config({ path: (0, path_1.resolve)((0, process_1.cwd)(), '.env') });
// eslint-disable-next-line node/no-process-env
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    TOKEN: (0, envalid_1.str)(),
    MONGO: (0, envalid_1.str)(),
    PRIVATE_KEY: (0, envalid_1.str)(),
});
//# sourceMappingURL=env.js.map