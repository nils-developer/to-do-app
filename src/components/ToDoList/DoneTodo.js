import { Button } from '../Button/Button';
import { firestore } from '../../firebase/firebase-config';

const doneButton = {
    type: 'submit',
    text: 'Done!'
}

const DoneTodo = ({docId}) => {
    const todoDoneTrue = (e) => {
        e.preventDefault()
        firestore.collection('todos').doc(docId).update({
                done: true
            }
        ).then(() => {
            console.log('Todo updated value done to true!');
        }).catch((error) => {
            console.error('Error updating value done to true!', error)
        })
    }

    return (
        <form className='my-5' onSubmit={todoDoneTrue}>
            <Button type={doneButton.type} text={doneButton.text}></Button>
        </form>
    )
}

export default DoneTodo