import {useForm} from "react-hook-form";

import {createUser} from "../../services";

const Users = () => {

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: '',
                username: '',
                email: ''
            }
        }
    );

    const submit = (object) => {
        createUser(object).then(value => console.log(value))
    }

    return (
        <div className={'block'}>
            <form  className={'forms'} onSubmit={handleSubmit(submit)}>

              <input type="text" placeholder="Name" {...register('name', {required: true})}/>

                <input type="text" placeholder="User Name" {...register('username')}/>

                <input type="text" placeholder="Email" {...register('email')}/>
                {
                    errors.name && <span style={{color:"red", fontWeight: "700", margin: "0 auto"}}>Повторите ввод</span>
                }
                <button className='btn' type="submit">Отправить</button>
            </form>
        </div>
    )
}

export {Users}