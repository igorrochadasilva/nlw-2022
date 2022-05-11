import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

//class responsavel por envio de dados pro prisma feedback
export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create({type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,            
            }
        })
    }   
}