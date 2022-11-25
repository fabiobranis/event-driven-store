import { buildOrGetModels } from 'shared/db/index.js';
import { sendMailMessage } from 'shared/mail/index.js';

const sendMailForUsers = async ({ id, name, price }) => {
  const { models } = buildOrGetModels();
  const { ProductUser } = models;

  const users = await ProductUser.findAll({ where: { ProductId: id } });
  const mailsToSend = users.map((user) => sendMailMessage({
    to: user.email,
    subject: 'Product price lowered',
    text: `Product ${name} now costs ${price}`,
  }));

  await Promise.all(mailsToSend);
};

export { sendMailForUsers };
