"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensuredAutenticated = void 0;
function ensuredAutenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = request.headers.authorization;
        if (!token) {
            return response.status(401).send();
        }
        const [, user] = token.split("");
        if (user === "admin") {
            return next();
        }
        return response.status(401).send();
    });
}
exports.ensuredAutenticated = ensuredAutenticated;
