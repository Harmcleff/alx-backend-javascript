<<<<<<< HEAD
=======
/* eslint-disable no-console */
>>>>>>> 56911e290a5fabe40caff8d295d67cd17230f973
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

<<<<<<< HEAD
  return Promise.all([photo, user])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstname} ${res[1].lastname}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
=======
  return Promise.all([photo, user]).then((res) => {
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
>>>>>>> 56911e290a5fabe40caff8d295d67cd17230f973
