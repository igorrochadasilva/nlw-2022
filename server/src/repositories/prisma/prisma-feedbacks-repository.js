"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedbacksRepository = void 0;
const prisma_1 = require("../../prisma");
//class responsavel por envio de dados pro prisma feedback
class PrismaFeedbacksRepository {
    async create({ type, comment, screenshot }) {
        await prisma_1.prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    }
}
exports.PrismaFeedbacksRepository = PrismaFeedbacksRepository;
