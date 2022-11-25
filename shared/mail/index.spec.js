import { sendMailMessage } from './index.js';

describe('mail package', () => {
  describe('sendMailMessage function', () => {
    describe('with all ok', () => {
      it('should send message', () => {
        expect(sendMailMessage({
          to: 'bar@example.com',
          subject: 'Hello',
          text: 'Hello world!',
        })).resolves.toBeDefined();
      });
    });
  });
});
