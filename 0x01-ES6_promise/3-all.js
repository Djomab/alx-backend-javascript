/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((resp) => {
    const { body } = resp[0];
    const { firstName } = resp[1];
    const { lastName } = resp[1];
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  })
}
