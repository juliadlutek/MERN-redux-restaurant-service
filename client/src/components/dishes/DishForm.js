import {Form, Formik, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
  

const DishSchema = Yup.object().shape({
    name: Yup.string("Name must be a string!")
        .required('Name is required!'),
    description: Yup.string("Description must be a string!")
        .required('Description is required!'),
    image: Yup.string("Image url must be a string!")
        .required('Image is required!'),
    price: Yup.number("Price must be a number!")
        .required('Price is required!')
        .positive("Price can't be negative!"),
    type: Yup.string()
        .required('Type is required!'),
    cuisine: Yup.string()
        .required('Cuisine is required!'),
    vegeterian: Yup.boolean(),
    dairyFree: Yup.boolean(),
    glutenFree: Yup.boolean()
    
})

const DishForm = ({title, onSubmit, initialValues}) => {
    const renderError = (message) => <p className="errorMessage">{message}</p>;
    return (
        <div className='formComponent mainContent'>
            <h3>{title}</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={DishSchema}
                onSubmit={onSubmit}
                enableReinitialize={true}>
                <Form className="form">
                    <p>Name</p>
                    <Field className='field' name="name" placeholder="" />
                    <ErrorMessage name="name" render={renderError} />
                    <p>Description</p>
                    <Field className='field' name="description" placeholder="" />
                    <ErrorMessage name="description" render={renderError} />
                    <p>Image</p>
                    <Field className='field' name="image" placeholder="" />
                    <ErrorMessage name="image" render={renderError} />
                    <p>Price</p>
                    <Field className='field' name="price" placeholder="" />
                    <ErrorMessage name="price" render={renderError} />
                    <p>Type</p>
                    <Field className='field' as="select" name="type">
                        <option value="Starter">Starter</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Beverage">Beverage</option>
                    </Field>
                    <p>Cuisine</p>
                    <Field className='field' as="select" name="cuisine">
                        <option value="American">American</option>
                        <option value="Chinese">Chinese</option>
                        <option value="French">French</option>
                        <option value="Greek">Greek</option>
                        <option value="Indian">Indian</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Polish">Polish</option>
                        <option value="Thai">Thai</option>
                    </Field>
                    <div className="radio">
                        <div role="group">
                            <>Is it vegetarian?</><br></br>
                            <Field type="radio" name="vegetarian" value="true" />
                            Yes
                            <Field type="radio" name="vegetarian" value="false" />
                            No
                        </div>
                        <div role="group">
                            <>Is it dairy free?</><br></br>
                            <Field type="radio" name="dairyFree" value="true" />
                            Yes
                            <Field type="radio" name="dairyFree" value="false" />
                            No
                        </div>
                        <div role="group">
                            <>Is it gluten free?</><br></br>
                            <Field type="radio" name="glutenFree" value="true" />
                            Yes
                            <Field type="radio" name="glutenFree" value="false" />
                            No
                        </div>
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default DishForm