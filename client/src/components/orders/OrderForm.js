import {Form, Formik, Field, ErrorMessage} from "formik"
import * as Yup from "yup" 

const OrderSchema = Yup.object().shape({
    table: Yup.number("Table label must be a number!")
        .required('Table label is required!')
        .positive(`Tabel label can't be negative!`),
    customers: Yup.number("Number of customers must be a number!")
    .required('Number of customers is required!')
    .positive(`Number of customers can't be negative!`)
    .max(6, "Maximum at 6 customers can sit at one table"),
    note: Yup.string("Note must be a string!"),
    dishes: Yup.array()
    .min(1, "You have to choose at least one dish!")
})

const OrderForm = ({title, onSubmit, initialValues, dishes}) => {

    const renderError = (message) => <p className="errorMessage">{message}</p>;

    return (
        <div className='formComponent mainContent'>
            <h3>{title}</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={OrderSchema}
                onSubmit={onSubmit}
                enableReinitialize={true}>
                <Form className="form">
                    <p>Table</p>
                    <Field className='field' name="table" placeholder="" />
                    <ErrorMessage name="table" render={renderError} />
                    <p>Number of customers</p>
                    <Field className='field' name="customers" placeholder="" />
                    <ErrorMessage name="customers" render={renderError} />
                    <p>Note</p>
                    <Field className='field' name="note" placeholder="" />
                    <ErrorMessage name="note" render={renderError} />
                    <h3 id="checkbox-group">Dishes in order:</h3>
                    <div className="checkbox" role="group">
                        {dishes.map(dish => (
                            <div key={dish.id} className="checkbox-elem">
                                <div>
                                    <Field type="checkbox" name="dishes" value={dish.id.toString()}/>
                                    {dish.name}
                                </div>
                            <img src={dish.image} alt="" />
                            </div>
                        ))}
                    </div>
                    <ErrorMessage name="dishes" render={renderError} />
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default OrderForm
