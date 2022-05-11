import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// spies = espiões
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
    
    it('should be able to submit a feedback', async () => {
     
        //testar submitfeedback e ver se não dá erro
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,afaefaef'
        })).resolves.not.toThrow();     
        
        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })
    
    it('should not be able to submit feedback without type', async () => {
     
        //testar submitfeedback e ver se não dá erro
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,afaefaef'
        })).rejects.toThrow();                        
    })
    
    it('should not be able to submit feedback without comment', async () => {
     
        //testar submitfeedback e ver se não dá erro
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,afaefaef'
        })).rejects.toThrow();                        
    })
    
    it('should not be able to submit feedback without screenshot', async () => {
     
        //testar submitfeedback e ver se não dá erro
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'ta tudo bugado',
            screenshot: '123'
        })).rejects.toThrow();                        
    })

})