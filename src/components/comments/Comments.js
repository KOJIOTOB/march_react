import {useForm} from "react-hook-form";

import {createComment} from "../../services";

const Comments = () => {

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: '',
                email: '',
                body: ''
            }
        }
    )
const submit = (object) => {
        createComment(object).then(value => console.log(value))
}
    return (
        <div className={'block'}>
            <form className={'forms'} onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="Name" {...register('name', {required: true})}/>
                <input type="text" placeholder="Email" {...register('email')}/>
                <input type="text" placeholder="Body" {...register('body', {required: true})}/>
                {
                    errors.name && <span style={{color:"red", fontWeight: "700", margin: "0 auto"}}>Повторите ввод</span>
                }
                <input className={'btn'} type="submit"/>
            </form>
        </div>
    )
}

export {Comments}