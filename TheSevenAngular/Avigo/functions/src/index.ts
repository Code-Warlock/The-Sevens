import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
// on God bro!
export const userCreated = functions.firestore.document('notes/{id}')
.onCreate(event => {
    const data: any = event.data();

    const nid = data.id;


    console.log('Nid: ', nid);

    return admin.firestore().doc(`notes/${nid}`)
        .get()
        .then(snapshot => {
            const info: any = snapshot.data();

            const message = {
                from: 'fzam0r1te@gmail.com',
                to: `gop_ng222@yahoo.com`,
                subject: `${info.first}`,
                html: `<p>iiiii</p>`
            }

            return admin.firestore().collection('mail').add({
                to: message.to,
                message: {
                    subject: `Feedback coming from ${ message.subject } at Avigoltd.com`,
                    html: `<h1>Goodday Sir,</h1> <br><br><br><h3 style="font-weight:350" I am ${info.first},${info.last}<br>I am contacting from Avigoltd.com,<br>To contact me, you can use these ${info.emai},${info.phone}.<br> And I reside in ${info.residence}.<br>I have
                    Interest in ${info.interest}, and these are other things i might like to say: ${info.feedback} </h3> `
                }
            }).then(_ => console.log('Email queued for sending!'));

        })
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
